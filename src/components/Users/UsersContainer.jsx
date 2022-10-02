import React from "react";
import {connect} from "react-redux";
import {
    follow, toggleIsFetching,
    setCurrentPage, setTotalUserCounter,
    setUsers, unfollow, toggleFollowingProgress
} from "../../redux/usersPage-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {followAPI, userAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCounter(data.totalCount)
        })
    }

    onPageChange = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        userAPI.getUsers(currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    unfollowUser = (id) => {
        this.props.toggleFollowingProgress(true, id)
        followAPI.unfollow(id).then(data => {
            if (data.resultCode == 0) {
                this.props.unfollow(id)
            }
            this.props.toggleFollowingProgress(false, id)
        })
    }

    followUser = (id) => {
        this.props.toggleFollowingProgress(true, id)
        followAPI.follow(id).then(data => {
            if (data.resultCode == 0) {
                this.props.follow(id)
            }
            this.props.toggleFollowingProgress(false, id)
        })
    }

    render = () => {
        return <>
            {
                this.props.isFetching ? <Preloader/> :
                    <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                           users={this.props.users} unfollowUser={this.unfollowUser}
                           followUser={this.followUser} onPageChange={this.onPageChange}
                           currentPage={this.props.currentPage}
                           toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCounter,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer)