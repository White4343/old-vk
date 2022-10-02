const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_IF_FETCHING = 'SET_IF_FETCHING'
const SET_IF_FOLLOWING_IN_PROGRESS = 'SET_IF_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    currentPage: 1,
    totalUserCount: 0,
    pageSize: 5,
    isFetching: false,
    followingInProgress: []
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
        case SET_IF_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_IF_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId) => ({
    type: FOLLOW, userId
})
export const unfollow = (userId) => ({
    type: UNFOLLOW, userId
})
export const setUsers = (users) => ({
    type: SET_USERS, users
})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCounter = (totalUserCount) => ({
    type: SET_TOTAL_USER_COUNT, totalUserCount
})
export const toggleIsFetching = (isFetching) => ({
    type: SET_IF_FETCHING, isFetching
})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: SET_IF_FOLLOWING_IN_PROGRESS, isFetching, userId
})