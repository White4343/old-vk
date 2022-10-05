import {addMessage, updateNewMessageTextBody} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

export default compose(
    connect(mapStateToProps, {updateNewMessageTextBody, addMessage}),
    withAuthNavigate
)(Dialogs);