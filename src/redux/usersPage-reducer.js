import {type} from "@testing-library/user-event/dist/type";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'

let initialState = {
    users: [],
    currentPage: 1,
    totalUserCount: 0,
    pageSize: 5
}

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUserCount: action.totalUserCount
            }
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({
    type: FOLLOW, userId
})

export const unfollowActionCreator = (userId) => ({
    type: UNFOLLOW, userId
})

export const setUsersActionCreator = (users) => ({
    type: SET_USERS, users
})

export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUserCounterActionCreator = (totalUserCount) => ({
    type: SET_TOTAL_USER_COUNT, totalUserCount
})