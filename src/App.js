import React, { lazy,Suspense } from "react";
import './App.css';
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initializeApp } from "./components/Redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import { compose } from "redux";

const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='main'>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Suspense fallback={<div>...loading</div>}>
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>
                        </Suspense>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/friends' component={Friends}/>
                        <Route path='/login'
                               render={() => <LoginContainer/>}/>

                    </div>
                </div>
            </div>

        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, { initializeApp }))(App);
