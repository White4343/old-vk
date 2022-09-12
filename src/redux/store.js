import {profilePageReducer} from "./profilePage-reducer";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {navbarReducer} from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you?', likes: 15},
                {id: 2, message: 'Why nobody loves me?', likes: 30}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'},
                {id: 4, name: 'User4'},
                {id: 5, name: 'User5'}
            ],
            messages: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'Vitayu'},
            ],
            newMessageText: ''
        },
        navbar: {
            navbarFriends: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        store._state.profilePage = profilePageReducer(action, store._state.profilePage)
        store._state.dialogsPage = dialogsPageReducer(action, store._state.dialogsPage)
        store._state.navbar = navbarReducer(action, store._state.navbar)
        this._callSubscriber()
    },
}

export default store;