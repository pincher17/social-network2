import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
  state = {
    editMode: false,
    status: 'Hello'
  }

  activateEditMode = () => {
       
    this.setState({
      editMode: true
    })
  }

  deActivateEditMode = () =>{
    this.setState({
      editMode: false
    })
  }

  render(){
    return (
      
        <div>
          {this.state.editMode
          ?<input onBlur={this.deActivateEditMode} autoFocus={true} type="text" value={this.state.status} />
          :<div onClick={this.activateEditMode}>{this.state.status}</div>
          }
        </div>
    )
  }
}

export default ProfileStatus;