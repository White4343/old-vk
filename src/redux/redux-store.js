import {configureStore} from '@reduxjs/toolkit'
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {navbarReducer} from "./navbar-reducer";
import {usersPageReducer} from "./usersPage-reducer";

let store = configureStore({
    reducer: {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        navbar: navbarReducer,
        usersPage: usersPageReducer
    }
})

export default store;