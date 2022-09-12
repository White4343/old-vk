let ADD_POST = 'ADD-POST';
let UPDATE_POST_BODY_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likes: 15},
        {id: 2, message: 'Why nobody loves me?', likes: 30}
    ],
    newPostText: ''
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
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_BODY_TEXT,
        newText: text
    }
}