import React from 'react'
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { authMeThunkCreator, getCaptchaUrl, } from "../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from './LoginContainer.module.css'

class LoginContainer extends React.Component {

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return (
            <div className={s.loginContainer}>
                <h1>Login</h1>
                <LoginForm captchaUrl={this.props.captchaUrl}
                           authMeThunkCreator={this.props.authMeThunkCreator}
                           getCaptchaUrl={this.props.getCaptchaUrl}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captcha
    }
}

export default connect(mapStateToProps, { authMeThunkCreator , getCaptchaUrl })(LoginContainer);