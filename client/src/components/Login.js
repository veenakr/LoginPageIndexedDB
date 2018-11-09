import React from 'react';
import { connect } from 'react-redux';
import {  userActions } from '../actions/_actions';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.props.dispatch(userActions.logout());

        this.state = {
            email: "",
            password: "",
            submitted: false,
            err: ""
        }

        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    };



    handleSubmit (e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;

        if(email === "" && password === ""){
            this.setState(() => ({
                err: "Please enter email / password"
            }));
        }
        else if( email === ""){
            this.setState(() => ({
                err: "Please enter email"
            }));
        } 
        else if( password === ""){
            this.setState(() => ({
                err: "Please enter password"
            }));
        } else {
            if( email && password ) {
                dispatch(userActions.login(email, password))
                
            }
            
        }

    }

    handleCancel (e) {
        this.setState(() => ({
            email: "",
            password: ""
        }));
        let form = document.getElementById("login-page");
        form.reset();
    }

    onEmailChange (e) {
        const email = e.target.value;
        this.setState(() => ({
            email
        }));
    }

    onPasswordChange (e) {
        const password = e.target.value;
        this.setState(() => ({
            password
        }));
    }

    onSignUp() {
        this.props.history.push('/signup');
    }

    render() {
        const { email, password , err} = this.state;
        return (
            <div className="main">
                <form id="login-page" name="form" action="action_page.php" onSubmit={this.handleSubmit}>
                    <label><b>Email Id</b></label>
                    <br />
                    <input type="text" placeholder="Enter email" name="uname" value={email} onChange={this.onEmailChange}/>

                    <br />
                    <label><b>Password</b></label>
                    <br />
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={this.onPasswordChange}/>

                    <br />
                    {err && <p className="error">{err}</p>}
                    <button className="loginButton" type="submit">Login</button>

                </form>
                <button className="cancelbtn" onClick={this.handleCancel}>clear</button>
                <button className="loginButton" type="submit" onClick={this.onSignUp}>SignUp</button>
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    }
}
 
 export default connect(mapStateToProps)(Login);
