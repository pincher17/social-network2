import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setProfile, getProfileThunk } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { usersApi } from '../../api/api';

class ProfileContainer extends React.Component{

  componentDidMount(){
      let userId = this.props.match.params.userId
      if(!userId){
        userId = 19860;
      }
      
      this.props.getProfileThunk(userId)
     // debugger;
  }
 
  render (){
    
      //console.log(this.props.users);
     return (
       <Profile {...this.props} profile = {this.props.profile} />
     )
  }
}

let mapStateToProps = (state) =>{

  return{
      profile: state.profilePage.profile,
      id: state.auth.id
  }
  
}

/* let mapDispatchToProps = (dispatch) =>{
  
  return{
      setProfile: (profile) =>{
      dispatch(setProfileActionCreator(profile))
    },
  }
} */


export default connect(mapStateToProps,{setProfile, getProfileThunk})(withRouter(ProfileContainer));