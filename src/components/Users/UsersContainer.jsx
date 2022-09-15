import React from "react";
import {connect} from "react-redux";
import UsersAPI from "./UsersAPI";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUserCounterActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/usersPage-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsers: (totalUserCount) => {
            dispatch(setTotalUserCounterActionCreator(totalUserCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPI)

export default UsersContainer;