import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../FormFields/InputField";

ChatForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

ChatForm.defaultProps = {};

function ChatForm({ onSubmit }) {
	const schema = yup.object().shape({
		message: yup.string().required("Please enter your message!"),
	});

	const form = useForm({
		mode: "onSubmit",
		defaultValues: { message: "" },
		resolver: yupResolver(schema),
	});


	const handleFormSubmit = (values, e) => {
		if (onSubmit) {
			onSubmit(values);
      form.reset();
      e.target[0].value = ""
    }
	};

	return (
		<form
			noValidate
			autoComplete="off"
			onSubmit={form.handleSubmit(handleFormSubmit)}
		>
			<InputField name="message" label="Enter your message" form={form} />
			<Button type="submit" color="primary" variant="contained">
				Send
			</Button>
		</form>
	);
}

export default ChatForm;
