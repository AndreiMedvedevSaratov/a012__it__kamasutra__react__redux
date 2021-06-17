import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, createField } from '../Common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router';
import style from './../Common/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField("Email", "email", [required], Input)}
			{createField("Password", "password", [required], Input, {type: "password"})}
			{createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

			{error && <div className={style.formSummaryError}>
				{error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form >
	)
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Redirect to={"/login"} /> //Здесь исправил на логин, был profile - после 80го урока
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login);