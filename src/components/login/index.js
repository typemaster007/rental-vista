import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons'


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            formErrors: {
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        this.setState({ error: false });

        if ((email != null && password != null)) {
            alert('Logged in successfully.!');
        }
        else {
            alert('Please provide valid credentials.!')
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {

        const { formErrors } = this.state;

        return (
            <div>
                {/* For Website Name */}
                <h1 className="web-title">
                    <span className="font-weight-bold">Login</span>
                </h1>
                <Form className="login-form col-lg-12" onSubmit={this.handleSubmit} noValidate>

                    <div className="card container">
                        <div className="card-body">
                            {/* Actual Login Form strats here*/}
                            <FormGroup>
                                <Label>Email</Label>
                                <Input className={formErrors.email.length > 0 ? "error" : null} noValidate onChange={this.handleChange} required type="email" placeholder="Enter Email" name="email"></Input>
                                {formErrors.email.length > 0 && (
                                    <span className="errorMessage">{formErrors.email}</span>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Label>Password</Label>
                                <Input className={formErrors.password.length > 0 ? "error" : null} noValidate onChange={this.handleChange} required type="password" placeholder="Enter Password" name="password"></Input>
                                {formErrors.password.length > 0 && (
                                    <span className="errorMessage">{formErrors.password}</span>
                                )}
                            </FormGroup>

                            <Button className="btn-lg btn-success btn-block">Login</Button>

                            <div className="text-center pt-3">Or continue with your social account</div>

                            <FacebookLoginButton className="mt-3 mb-3" onClick={() => window.open('https://www.facebook.com/')} />
                            <GoogleLoginButton className="mt-3 mb-3" onClick={() => window.open('https://accounts.google.com/')} />

                        </div>
                    </div>
                </Form>
            </div>

        );
    }
}

export default Login;

