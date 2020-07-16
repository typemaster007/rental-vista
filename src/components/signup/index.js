import React from 'react';
import Popup from "reactjs-popup";
import "./index.css";
import axios from 'axios'
// import registerInstance from '../../utilities/api.js'

function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  return null;
}

class SignupPopup extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        open: true,
        name: '', nameValid: false,
        // username: '', usernameValid: false,
        email: '', emailValid: false,
        password: '', passwordValid: false,
        passwordConfirm: '', passwordConfirmValid: false,
        formValid: false,
        errorMsg: {}
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.props.history.push("/");
      }
    }

    openModal() {
      this.setState({ open: true });
      this.props.handleSignUpClick(true);
    }
    closeModal() {
      this.setState({ open: false });
      this.props.handleSignUpClick(false);
    }

    submitHandler = () => {
      // axios.get('http://localhost:8080/', {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     'Access-Control-Request-Method': 'GET'
      //   }
      // })
      // .then(response => {
      //   console.log()
      //   alert(response.data)
      // })
      // .catch( error => {
      //   console.log(error)
      // })

      axios.post('http://localhost:8080/users/signup', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Request-Method': 'POST'
        },
        data: {
          name: this.state.name,
          email: this.state.email,
          password : this.state.password,
          contact: ''
        }
      })
      .then(response => {
        console.log()
        alert(response.data)
      })
      .catch( error => {
        console.log(error)
      })
    }

    validateForm = () => {
      const {nameValid, usernameValid, emailValid, passwordValid, passwordConfirmValid} = this.state;
      this.setState({
        formValid: nameValid  && emailValid && passwordValid && passwordConfirmValid
        // formValid: nameValid && usernameValid && emailValid && passwordValid && passwordConfirmValid
      })
    }

    updateName = (name) => {
      this.setState({name}, this.validateName)
    }

    validateName = () => {
      const {name} = this.state;
      let nameValid = true;
      let errorMsg = {...this.state.errorMsg}
  
      if (name.length === 0) {
        nameValid = false;
        errorMsg.name = 'Name cannot be left blank'
      }
  
      this.setState({nameValid, errorMsg}, this.validateForm)
    }

    // updateUsername = (username) => {
    //   this.setState({username}, this.validateUsername)
    // }

    // validateUsername = () => {
    //   const {username} = this.state;
    //   let usernameValid = true;
    //   let errorMsg = {...this.state.errorMsg}
  
    //   if (username.length < 3) {
    //     usernameValid = false;
    //     errorMsg.username = 'Must be at least 3 characters long'
    //   }
  
    //   this.setState({usernameValid, errorMsg}, this.validateForm)
    // }

    updateEmail = (email) => {
      this.setState({email}, this.validateEmail)
    }
  
    validateEmail = () => {
      const {email} = this.state;
      let emailValid = true;
      let errorMsg = {...this.state.errorMsg}
  
      // checks for format _@_._
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        emailValid = false;
        errorMsg.email = 'Email format should be example@domain.com'
      }
  
      this.setState({emailValid, errorMsg}, this.validateForm)
    }

    updatePassword = (password) => {
      this.setState({password}, this.validatePassword);
    }
  
    validatePassword = () => {
      const {password} = this.state;
      let passwordValid = true;
      let errorMsg = {...this.state.errorMsg}
  
      if (password.length < 6) {
        passwordValid = false;
        errorMsg.password = 'Password must be at least 6 characters long';
      } else if (!/\d/.test(password)){
        passwordValid = false;
        errorMsg.password = 'Password must contain a digit';
      } else if (!/[!@#$%^&*]/.test(password)){
        passwordValid = false;
        errorMsg.password = 'Password must contain special character: !@#$%^&*';
      }
  
      this.setState({passwordValid, errorMsg}, this.validateForm);
    }

    updatePasswordConfirm = (passwordConfirm) => {
      this.setState({passwordConfirm}, this.validatePasswordConfirm)
    }
  
    validatePasswordConfirm = () => {
      const {passwordConfirm, password} = this.state;
      let passwordConfirmValid = true;
      let errorMsg = {...this.state.errorMsg}
  
      if (password !== passwordConfirm) {
        passwordConfirmValid = false;
        errorMsg.passwordConfirm = 'Passwords do not match'
      }
  
      this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
    }

    checkIfFormValid = ()=>{
        if (!this.state.formValid) {
            return (
                <h6 className="error-msg">Please fill all fields to continue</h6>
            );
        } else {
            return;
        }
      }  
  
    render() {
      return (
        <div>
          <Popup className="popup"
            closeOnDocumentClick
            open={this.state.open}
            onClose={this.closeModal}
          >
              <a className="close" onClick={this.closeModal}>
                &times;
              </a>
              <div className="container popup-container">
                <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-signin flex-row mt-5 mb-5">
                    <div className="card-body">
                        <h2 className="text-center font-weight-bold">Register</h2>
                        {/* <form className="form-signin" noValidate> */}
                        <div>
                        <div className="form-label-group">
                            <input type="text" id="name" className="form-control" placeholder="Full Name" 
                            value={this.state.name} onFocus={(e) => this.updateName(e.target.value)} onChange={(e) => this.updateName(e.target.value)} required autoFocus/>
                            <label htmlFor="name">Full Name</label>
                            < ValidationMessage valid={this.state.nameValid} message={this.state.errorMsg.name} />
                        </div>
                        {/* <div className="form-label-group">
                            <input type="text" id="userName" className="form-control" placeholder="Username" 
                            value={this.state.username} onFocus={(e) => this.updateUsername(e.target.value)} onChange={(e) => this.updateUsername(e.target.value)} required autoFocus/>
                            <label for="userName">Username</label>
                            < ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} />
                        </div> */}

                        <div className="form-label-group">
                            <input type="email" id="SignupEmail" className="form-control" placeholder="Email address" value={this.state.email} 
                            onFocus={(e) => this.updateEmail(e.target.value)} onChange={(e) => this.updateEmail(e.target.value)} required/>
                            <label htmlFor="SignupEmail">Email address</label>
                            < ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="password" className="form-control" placeholder="Password" value={this.state.password} 
                            onFocus={(e) => this.updatePassword(e.target.value)} onChange={(e) => this.updatePassword(e.target.value)} required/>
                            <label htmlFor="password">Password</label>
                            < ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
                        </div>
                        
                        <div className="form-label-group">
                            <input type="password" id="password-confirmation" className="form-control" placeholder="Password" value={this.state.passwordConfirm} 
                            onFocus={(e) => this.updatePasswordConfirm(e.target.value)} onChange={(e) => this.updatePasswordConfirm(e.target.value)} required/>
                            <label htmlFor="password-confirmation">Confirm password</label>
                            <ValidationMessage valid={this.state.passwordConfirmValid} message={this.state.errorMsg.passwordConfirm} />
                        </div>

                        <button className="btn btn-primary btn-block text-uppercase" style={{backgroundColor:"#1d8ba6"}} disabled={!this.state.formValid} onClick={this.submitHandler}>Register</button>
                        <a className="d-block text-center mt-2 small" href="/login">Sign In</a>
                        <hr className="my-4"/>
                        </div>
                        {/* </form> */}
                        <div className="mt-2 text-center">
                            {  
                                this.checkIfFormValid()
                            }
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
          </Popup>
        </div>
      );
    }
}

export default SignupPopup;