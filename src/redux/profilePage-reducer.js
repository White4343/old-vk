let ADD_POST = 'ADD-POST';
let UPDATE_POST_BODY_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likes: 15},
        {id: 2, message: 'Why nobody loves me?', likes: 30}
    ],
    newPostText: '',
    profile: null
}

export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 3,
                    message: state.newPostText,
                    likes: 0
                }],
            }
        case UPDATE_POST_BODY_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextBody = (text) => {
    return {
        type: UPDATE_POST_BODY_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return{
        type: SET_USER_PROFILE,
        profile
    }
}