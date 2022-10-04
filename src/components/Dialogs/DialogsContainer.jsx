import {addMessage, updateNewMessageTextBody} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const DialogsContainer = withAuthNavigate(connect(mapStateToProps, {updateNewMessageTextBody, addMessage})(Dialogs))

export default DialogsContainer;