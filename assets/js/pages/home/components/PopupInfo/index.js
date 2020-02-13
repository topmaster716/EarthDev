import React, {useState} from "react";
import Form from "../../../../components/form/index";
import TextField from "../../../../components/form/text_field";
import TextArea from "../../../../components/form/text_area";
import Title from "../../../../components/form/title";
import CheckboxForm from "../../../../components/form/checkbox";
import PopupButton from "../../../../components/form/popup_button";

function PopupInfo(props) {
    
        // this.state = {
        //     
        //     nicknameValue: "",
        //     emailValue: "",
        //     linkValue: "",
        //     textareaValue: "",
        //     isChecked: false,
        //     lettersLeft: "500"
        // };
    const { onClick, closePopup } = props;    

    const [nicknameValue, setNicknameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [linkValue, setLinkValue] = useState("")
    const [textareaValue, setTextareaValue] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [lettersLeft, setLettersLeft] = useState(500)
    const [nicknameError, setNicknameError] = useState(false)  


    // function setNickname(e){
    //     const nicknameRegexp = /^[\w]{,10}$/;
    //     setNicknameValue(e.target.value)
    //     if(!nicknameRegexp.test(e.target.value)) {
    //         setNicknameError(true)
    //     } else {
    //         setNicknameError(false)
    //     }
    // }

    function validateInputs() {
        const emailRegexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const linkRegexp = /^[\d \s]{20}$/;
        const nicknameRegexp = /^[\w]{0,10}$/;
        console.log(nicknameRegexp.test(nicknameValue))
        console.log(nicknameValue)

        if (!nicknameRegexp.test(nicknameValue)){
            setNicknameError(true)
        } else {
            setNicknameError(false)
        }
    }


    function handleTextareaChange(e) {
        // event.persist();
        const maxLetters = 500;
        setTextareaValue(e.target.value);
        setLettersLeft(maxLetters - event.target.value.length)
        if (e.target.value.length > 500) {
            e.target.value = e.target.value.slice(0, 500)
            setTextareaValue(e.target.value);
            setLettersLeft(maxLetters - event.target.value.length)
        }
    }

    return (
        <Form>
            <Title text="General Info" closePopup={closePopup} />
            <TextField
                placeholder="Enter your nickname"
                label="Nickname"
                value={nicknameValue}
                name="nicknameValue"
                onChange={e => {setNicknameValue(e.target.value)}}
                helperText="Please enter a valid nickname."
                error={nicknameError}
            />
            <TextField
                placeholder="Enter your e-mail"
                label={"E-mail"}
                value={emailValue}
                name="emailValue"
                onChange={e => {setEmailValue(e.target.value)}}
                helperText="Please enter a valid email."
                error={true}
            />
            <TextField
                placeholder="Facebook or Instagram only"
                label="Link (optional)"
                value={linkValue}
                name="linkValue"
                onChange={e => {setLinkValue(e.target.value)}}
                helperText="Please enter a valid link."
                error={false}
            />
            <TextArea
                onChange={e=> {handleTextareaChange(e)}}
                placeholder="Tell us how you are going to change the World"
                label="Message (optional)"
                value={textareaValue}
                helperText={lettersLeft}
            />
            <CheckboxForm label={"I agree with Terms & Conditions"} />
            <PopupButton text={"Proceed $1"} onClick={validateInputs} />
        </Form>
    );
}

export default PopupInfo;
