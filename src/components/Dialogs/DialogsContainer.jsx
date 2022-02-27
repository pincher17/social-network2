import React from 'react';
import { connect } from 'react-redux';
import { onMessageChangeActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) =>{
  return{
    dialogsPage: state.dialogsPage
  }
  
}

let mapDispatchToProps = (dispatch) =>{
  return{
    onAddMessage: () =>{
      dispatch(addMessageActionCreator())
    },
    messageChange: (text) =>{
      dispatch(onMessageChangeActionCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;