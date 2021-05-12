import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router';
import style from './../Common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					placeholder={"E-mail"}
					validate={[required]}
					name={"email"}
					component={Input} />
			</div>
			<div>
				<Field
					placeholder={"Password"}
					validate={[required]}
					name={"password"}
					type={"password"}
					component={Input} />
			</div>
			<div>
				<Field type={"checkbox"} name={"rememberMe"} component={Input} /> Remember me
			</div>
			{props.error && <div className={style.formSummaryError}>
				{props.error}
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