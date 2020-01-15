import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Icon from "../../../../components/form/icon_close";
import Form from "../../../../components/form/index";
import TextField from "../../../../components/form/text_field";
import Title from "../../../../components/form/title";
import Checkbox from "../../../../components/form/checkbox";
import PopupButton from "../../../../components/form/popup_button";

const styles = theme => ({
    container: {
        position: "absolute",
        top: "0",
        right: "10%"
    }
});

class PopupPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Payment info",
            nameValue: "",
            surname: "",
            isChecked: false
        };
    }

    onChange(e) {
        console.log(e);
        this.setState({ textareaValue: e.target.value });
    }

    render() {
        const { onClick, closePopup } = this.props;
        return (
            <Form>
                <Title text={this.state.title} closePopup={closePopup} />
                {/*<Icon/>*/}
                <TextField
                    placeholder={"Enter your name"}
                    helperText={"Please enter a valid name."}
                    label={"Name"}
                    value={this.state.nameValue}
                    onChange={this.onChange.bind(this)}
                />
                <TextField
                    placeholder={"Enter your surname"}
                    helperText={"Please enter a valid surname."}
                    label={"Surname"}
                />
                <TextField
                    placeholder={"0000 0000 0000 0000"}
                    helperText={"Please enter a valid card number."}
                    label={"Payment card number"}
                />
                <TextField
                    placeholder={"00/00"}
                    helperText={"Expiry date is  invalid."}
                    label={"Expiry date"}
                />
                <TextField
                    placeholder={"Enter CVV"}
                    helperText={"CVV is invalid."}
                    label={"CVV"}
                />
                <PopupButton text={"Donate $1"} onClick={onClick} />
            </Form>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PopupPayment);
