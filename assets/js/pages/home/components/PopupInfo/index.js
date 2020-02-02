import React, { Component } from "react";
import Form from "../../../../components/form/index";
import TextField from "../../../../components/form/text_field";
import TextArea from "../../../../components/form/text_area";
import Title from "../../../../components/form/title";
import CheckboxForm from "../../../../components/form/checkbox";
import PopupButton from "../../../../components/form/popup_button";
import { Formik } from "formik";

class PopupInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "General info",
            nicknameValue: "",
            emailValue: "",
            linkValue: "",
            textareaValue: "",
            isChecked: false,
            lettersLeft: "500"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state[name]);
    }

    handleTextareaChange(event) {
        event.persist();
        const maxLetters = 500;
        this.setState(state => ({
            textareaValue: event.target.value,
            lettersLeft: maxLetters - event.target.value.length
        }));
    }

    render() {
        const { classes, onClick, closePopup } = this.props;
        return (
            <Form>
                <Title text={this.state.title} closePopup={closePopup} />
                <TextField
                    placeholder={"Enter your nickname"}
                    label={"Nickname"}
                    value={this.state.nicknameValue}
                    name="nicknameValue"
                    onChange={this.handleInputChange}
                    helperText="Please enter a valid nickname."
                />
                <TextField
                    placeholder={"Enter your e-mail"}
                    label={"E-mail"}
                    value={this.state.emailValue}
                    name="emailValue"
                    onChange={this.handleInputChange}
                />
                <TextField
                    placeholder={"Facebook or Instagram only"}
                    label={"Link (optional)"}
                    value={this.state.linkValue}
                    name="linkValue"
                    onChange={this.handleInputChange}
                />
                <TextArea
                    onChange={this.handleTextareaChange}
                    placeholder={
                        "Tell us how you are going to change the World"
                    }
                    label={"Message (optional)"}
                    value={this.state.textareaValue}
                    helperText={this.state.lettersLeft}
                />
                <CheckboxForm label={"I agree with Terms & Conditions"} />
                <PopupButton text={"Proceed $1"} onClick={onClick} />
            </Form>
        );
    }
}

export default PopupInfo;
