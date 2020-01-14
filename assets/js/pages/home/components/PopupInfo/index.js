import React, {Component} from "react";
import Form from "../../../components/form/index"
import TextField from "../../../components/form/text_field"
import TextArea from "../../../components/form/text_area"
import Title from "../../../components/form/title";
import Checkbox from "../../../components/form/checkbox";
import PopupButton from "../../../components/form/popup_button";
import { Formik } from "formik";

// class MiniFormik extends React.Component{
//     state = {}
//     render() {
//         return this.props.children({...this.state})
//     }
// }

class PopupInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "General info",
            nicknameValue: "",
            emailValue: "",
            linkValue: "",
            textareaValue: "",
            isChecked: false,
            lettersLeft: "500"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }

    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
        console.log(this.state[name])
    }

    handleTextareaChange(event) {
        event.persist()
        const maxLetters = 500;
        this.setState(state => ({
            textareaValue: event.target.value,
            lettersLeft: maxLetters - event.target.value.length
        }));
    }


    render() {
        const { classes } = this.props;
        return (

                    <Form>
                        <Title text={this.state.title}/>
                        <TextField placeholder={'Enter your nickname'} label={"Nickname"} value={this.state.nicknameValue} name="nicknameValue" onChange={this.handleInputChange}/>
                        <TextField placeholder={'Enter your e-mail'} label={"E-mail"} value={this.state.emailValue} name="emailValue" onChange={this.handleInputChange}/>
                        <TextField placeholder={'Facebook or Instagram only'} label={"Link (optional)"} value={this.state.linkValue} name="linkValue" onChange={this.handleInputChange}/>
                        <TextArea onChange={this.handleTextareaChange}
                                  placeholder={'Tell us how you are going to change the World'}
                                  label={"Message (optional)"}
                                  value={this.state.textareaValue}
                                  helperText={this.state.lettersLeft}
                        />
                        <Checkbox helperText={'I agree with Terms & Conditions'}/>
                        <PopupButton text={"Proceed $1"} onClick={this.onClick}/>
                    </Form>
            //     )}
            // </MiniFormik>
        )
    }
}

export default PopupInfo







/*
    class PopupInfo extends Component {
    render() {
        return (
            <div className="container-popup-info">
                <div className="popup-info">
                    <h3 className="popup-user-info">General info</h3>
                    <button type="button" className="popup-close-btn"></button>
                    <form className="popup-info-form">
                        <input className="popup-info-name" type="text" name="user-name" placeholder="Enter your nickname" />
                        <span className="info-name-header">Nickname</span>
                        <input className="popup-info-mail" type="text" name="user-e-mail" placeholder="Enter your e-mail" />
                        <span className="info-mail-header">E-mail</span>
                        <input className="popup-info-link" type="text" name="user-link" placeholder="Facebook or Instagram only" />
                        <span className="info-link-header">Link (optional)</span>
                        <textarea className="popup-info-msg" name="user-message" placeholder="Tell us how you are going to change the World"/>
                        <span className="info-msg-header">Message (optional)</span>
                        <input className="popup-info-checkbox" type="checkbox" name="checkbox" id="popup-checkbox"/>
                        <span className="info-msg-maxsymbols">500</span>
                        <span className="popup-info-checkbox-text">I agree with Terms & Conditions</span>
                        <button className="popup-info-btn" type="button">Proceed 1 $</button>
                    </form>
                </div>
            </div>
        )
    }
*/
