import React from "react";
import {connect} from "react-redux";
import {getUsers, unfollowUser, followUser} from "../../redux/usersPage-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    unfollowUser = (id) => {
        this.props.unfollowUser(id)
    }

    followUser = (id) => {
        this.props.followUser(id)
    }

    render = () => {
        return <>
            {
                this.props.isFetching ? <Preloader/> :
                    <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                           users={this.props.users} unfollowUser={this.unfollowUser}
                           followUser={this.followUser} onPageChange={this.onPageChange}
                           currentPage={this.props.currentPage}
                           followingInProgress={this.props.followingInProgress}
                    />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, unfollowUser, followUser})
)(UsersContainer)