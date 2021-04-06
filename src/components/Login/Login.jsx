import React from 'react';
import { Form, Field } from 'react-final-form';

const LoginForm = (props) => {
	return (
		<Form
			initialValues={{
				form: Login,
			}}
		>
			{() => (
				<form onSubmit={props.handleSubmit}>
					<div>
						<Field placeholder={"Login"} name={"login"} component={"input"} />
					</div>
					<div>
						<Field placeholder={"Password"} name={"password"} component={"input"} />
					</div>
					<div>
						<Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember me
					</div>
					<div>
						<button>Login</button>
					</div>
				</form>
			)}
		</Form>
	)
}

const Login = (props) => {
	return <div>
		<h1>Login</h1>
		{/* <LoginForm /> */}
	</div>
}

export default Login;