let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_MESSAGE_BODY_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'},
        {id: 5, name: 'User5'}
    ],
    messages: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'Hi'},
    ],
    newMessageText: ''
}

export const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 3,
                    message: state.newMessageText
                }],
                newMessageText: ''
            }
        case UPDATE_MESSAGE_BODY_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const addMessage = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextBody = (text) => {
    return {
        type: UPDATE_MESSAGE_BODY_TEXT,
        newText: text
    }
}