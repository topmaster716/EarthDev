import styled from "styled-components";
import MaterialTextField from "@material-ui/core/TextField";
import MaterialCheckbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MaterialButton from "@material-ui/core/Button";

export const FormTextField = styled(MaterialTextField)`
	margin-top: 8px;
	margin-bottom: 8px;

	label {
		color: #17233e;
		background: #ffffff;
		padding-right: 6px;
	}

	label {
		&.Mui-focused {
			color: #4c91fa;
		}
	}

	.MuiOutlinedInput-root {
		&.Mui-focused fieldset {
			border-color: #4c91fa;
			border-width: 1px;
		}
	}

	.MuiFormHelperText-contained {
		margin: 8px 0px 0;
	}

	.MuiOutlinedInput-input {
		padding: 12px 14px;
	}
`;

export const StyledTextArea = styled(MaterialTextField)`
	margin-top: 8px;
	margin-bottom: 8px;

	label {
		color: #17233e;
		background: #ffffff;
		padding-right: 6px;
	}

	label {
		&.Mui-focused {
			color: #4c91fa;
		}
	}

	.MuiOutlinedInput-root {
		&.Mui-focused fieldset {
			border-color: #4c91fa;
			border-width: 1px;
		}
	}

	.MuiOutlinedInput-multiline {
		height: 126px;
		padding: 12px 14px;
	}

	.MuiFormHelperText-contained {
		position: absolute;
		right: 8px;
		bottom: 8px;
		font-weight: bold;
		font-size: 12px;
		line-height: 20px;
		color: #4c91fa;
	}

	.MuiOutlinedInput-multiline {
		padding: 12px 14px;
	}
`;

export const CheckboxContainer = styled(FormControl)``;

export const CheckboxText = styled(FormControlLabel)`
	.MuiTypography-body1 {
		font-size: 12px;
		color: #494949;
		opacity: 1;
	}

	.Mui-checked {
		color: #4c91fa;
	}
`;

export const ErrorText = styled(FormHelperText)`
	margin: 0;
	font-size: 12px;
	letter-spacing: 0.2px;
	color: #e22721;
`;

export const Button = styled(MaterialButton)`
	margin-top: 20px;
	color: #ffffff;
	text-transform: capitalize;
	margin: 20px auto 0;
	width: 198px;
	height: 40px;
	background: #4c91fa;
	border-radius: 4px;
	font-weight: bold;
	font-size: 18px;
	display: flex;
	align-items: center;
	text-align: center;

	&:hover {
		background: #3d79d3;
	}
`;
