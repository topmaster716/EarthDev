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
    const [lettersLeft, setLettersLeft] = useState(500)
    const [nicknameError, setNicknameError] = useState(false)  
    const [emailError, setEmailError] = useState(false)  
    const [linkError, setLinkError] = useState(false) 
    const [checked, setChecked] = useState(true);


    function validateAll() {
        validateNickname()
        validateEmail()
        validateLink()
        if (!nicknameError && !emailError && !linkError && checked){
            console.log('NextStep')
        }
    }

    function validateNickname() {
        const nicknameRegexp = /^[\w]{1,20}$/;
        if (!nicknameRegexp.test(nicknameValue)){
            setNicknameError(true)
        } else {
            setNicknameError(false)
        }
    }

    function validateEmail() {
        const emailRegexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegexp.test(emailValue)){
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }

    function validateLink() {
        const linkRegexp = /^[\w]{1,20}$/;
        if (linkValue.length > 0 && !linkRegexp.test(linkValue)){
            setLinkError(true)
        } else {
            setLinkError(false)
        }
    }

    function handleTextareaChange(e) {
        const maxLetters = 500;
        setTextareaValue(e.target.value);
        setLettersLeft(maxLetters - event.target.value.length)
        if (e.target.value.length > 500) {
            e.target.value = e.target.value.slice(0, 500)
            setTextareaValue(e.target.value);
            setLettersLeft(maxLetters - event.target.value.length)
        }
    }

    function handleChange(e) {
        setChecked(e.target.checked);
    };

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
                label="E-mail"
                value={emailValue}
                name="emailValue"
                onChange={e => {setEmailValue(e.target.value)}}
                helperText="Please enter a valid email."
                error={emailError}
            />
            <TextField
                placeholder="Facebook or Instagram only"
                label="Link (optional)"
                value={linkValue}
                name="linkValue"
                onChange={e => {setLinkValue(e.target.value)}}
                helperText="Please enter Facebook or Instagram link"
                error={linkError}
            />
            <TextArea
                onChange={e=> {handleTextareaChange(e)}}
                placeholder="Tell us how you are going to change the World"
                label="Message (optional)"
                value={textareaValue}
                helperText={lettersLeft}
            />
            <CheckboxForm label="I agree with Terms & Conditions" error_text="Please accept Terms & Conditions" checked={checked} onChange={handleChange} />
            <PopupButton text="Proceed $1" onClick={validateAll} />
        </Form>
    );
}

export default PopupInfo;
