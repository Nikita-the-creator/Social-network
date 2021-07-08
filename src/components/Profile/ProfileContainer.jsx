import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    savePhoto, saveProfile,
    updateStatusThunkCreator
} from "../Redux/profile-reducer";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = this.props.authorizedUserId;
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatusThunkCreator}
                         savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}
                />
            </div>)
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        authMe: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getProfileThunkCreator,
        getStatusThunkCreator,updateStatusThunkCreator, savePhoto,saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)