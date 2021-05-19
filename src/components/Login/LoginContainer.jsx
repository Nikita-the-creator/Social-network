import React from 'react'
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { authMeThunkCreator, } from "../Redux/auth-reducer";
import { Redirect } from "react-router-dom";

class LoginContainer extends React.Component {

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return (
            <div>
                <h1>Login</h1>
                <LoginForm authMeThunkCreator={this.props.authMeThunkCreator}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { authMeThunkCreator })(LoginContainer);