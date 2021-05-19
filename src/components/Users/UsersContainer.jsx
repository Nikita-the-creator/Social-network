import React from 'react'
import Users from "./Users";
import { connect } from "react-redux";
import {
    setCurrentPage, toggleFollowingInProcess, getUsersThunkCreator, followSuccess,
    unfollowSuccess, follow, unfollow
} from "../Redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import style from './users.module.css'
import {
    getCurrentPage,
    getFollowingInProcess,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../Redux/users-selector";

class UsersContainer extends React.Component {

    componentDidMount() {
        let { currentPage, pageSize } = this.props
        this.props.getUsersThunkCreator(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        let { pageSize } = this.props
        this.props.getUsersThunkCreator(pageNumber, pageSize)
        this.props.setCurrentPage(pageNumber);
    }


    render() {
        return <>
            <div className={style.preloader}>{this.props.isFetching ? <Preloader/> : null}</div>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   toggleFollowingInProcess={this.props.toggleFollowingInProcess}
                   followingInProcess={this.props.followingInProcess}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        followSuccess, unfollowSuccess, setCurrentPage,
        toggleFollowingInProcess, getUsersThunkCreator, follow, unfollow
    })
)(UsersContainer)