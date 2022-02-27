import React from 'react';
import DialogItem from './DialogItem';
import s from './Dialogs.module.css';
import Message from './Message';


const Dialogs = (props) =>{
 
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

  let newMessageElement = React.createRef();

  let addMessage = () =>{
    props.onAddMessage()
    //props.dispatch(addMessageActionCreator())
  }
  let onMessageChange = () =>{
    let text = newMessageElement.current.value;
    props.messageChange(text)
    //props.dispatch(onMessageChangeActionCreator(text))
  }

    return (
    <div className = {s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
        <div>
        <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
        <div>
        <button onClick={addMessage}>Send message</button>
        </div>
      </div>
      </div>

    </div>
    )
}

export default Dialogs;