import {configureStore} from '@reduxjs/toolkit'
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {navbarReducer} from "./navbar-reducer";
import {usersPageReducer} from "./usersPage-reducer";
import {authReducer} from "./auth-reducer";

let store = configureStore({
    reducer: {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        navbar: navbarReducer,
        usersPage: usersPageReducer,
        auth: authReducer
    }
})

export default store;