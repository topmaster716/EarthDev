import React, { useState } from "react";
import Icon from "../../../../components/form/icon_close";
import Form from "../../../../components/form/index";
import TextField from "../../../../components/form/text_field";
import Title from "../../../../components/form/title";
import Checkbox from "../../../../components/form/checkbox";
import PopupButton from "../../../../components/form/popup_button";

import { ContainerInput } from "./styles"

function PopupPayment(props) {

    const { onClick, closePopup } = props;    

    const [nameValue, setNameValue] = useState("")
    const [surnameValue, setSurnameValue] = useState("")
    const [cardValue, setCardValue] = useState("")
    const [dateValue, setDateValue] = useState("")
    const [cvvValue, setCvvValue] = useState("")
    const [nameError, setNameError] = useState(false)  
    const [surnameError, setSurnameError] = useState(false)  
    const [cardError, setCardError] = useState(false) 
    const [dateError, setDateError] = useState(false)  
    const [cvvError, setCvvError] = useState(false) 

    return (
        <Form>
            <Title text="Payment Info" closePopup={closePopup} />
            <TextField
                placeholder="Enter your name"
                helperText="Please enter a valid name."
                label="Name"
                value={nameValue}
                error={nameError}
                onChange={e => {setNameValue(e.target.value)}}
            />
            <TextField
                placeholder="Enter your surname"
                helperText="Please enter a valid surname."
                label="Surname"
                value={surnameValue}
                error={surnameError}
                onChange={e => {setSurnameValue(e.target.value)}}
            />
            <TextField
                placeholder="0000 0000 0000 0000"
                helperText="Please enter a valid card number."
                label="Payment card number"
                value={cardValue}
                error={cardError}
                onChange={e => {setCardValue(e.target.value)}}
            />
            <ContainerInput>
                <TextField
                    placeholder="00/00"
                    helperText="Expiry date is invalid."
                    label="Expiry date"
                    value={dateValue}
                    error={dateError}
                    onChange={e => {setDateValue(e.target.value)}}
                />
            </ContainerInput>
            <ContainerInput>    
                <TextField
                    placeholder="Enter CVV"
                    helperText="CVV is invalid."
                    label="CVV"
                    value={cvvValue}
                    error={cvvError}
                    onChange={e => {setCvvValue(e.target.value)}}
                />
            </ContainerInput>    
            <PopupButton text="Donate $1" onClick={onClick} />
        </Form>
    );
}

export default PopupPayment;
