import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let newMessageText = state.newMessageText

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = state.messages.map(m => <MessageItem message={m.message} id={m.id} key={m.id}/>)

    let newMessageElement = React.createRef()

    let onSendMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageTextBody(text)
    }

    if(!props.isAuth)
        return <Navigate to='../login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesItem}>
                    {messagesElements}
                </div>
                <div className={s.newMessage}>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement} placeholder="Enter your message"
                                  value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;