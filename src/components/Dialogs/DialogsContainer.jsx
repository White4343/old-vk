import React from "react";
import {addMessage, updateNewMessageTextBody} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessageTextBody, addMessage})(Dialogs)

export default DialogsContainer;