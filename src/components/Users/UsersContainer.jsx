import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setPage, followingProgress, getUsersThunk, followThunk, unfollowThunk } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import { usersApi } from '../../api/api';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component{

  componentDidMount(){
    this.props.getUsersThunk(this.props.page)
  }

  pageChange = (pageNumber) =>{
    //this.props.setPage(pageNumber);
    //this.props.getUsersThunk(pageNumber)
  }
  render (){
  
      //console.log(this.props.users);
     return (
       <Users {...this.props} pageChange = {this.pageChange} />
     )
  }
      

}

let mapStateToProps = (state) =>{

  return{
      users: state.usersPage.users,
      page: state.usersPage.page,
      toggleFollowingProgress: state.usersPage.toggleFollowingProgress
  }
  
}

/* let mapDispatchToProps = (dispatch) =>{
  
  return{
    follow: (userId) =>{
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) =>{
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) =>{
      dispatch(setUsersActionCreator(users))
    },
    setPage: (page) =>{
      dispatch(setPageActionCreator(page))
    },
    followingProgress: (isFetching, userId) =>{
      dispatch(followingProgressActionCreator(isFetching, userId))
    },
    getUsers: getUsersThunk
  }
} */


/* export default connect(mapStateToProps,{
  follow,
  unfollow,
  setUsers,
  setPage,
  followingProgress,
  getUsersThunk,
  followThunk,
  unfollowThunk,
})(UsersContainer); */

export default compose(
  connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setPage,
    followingProgress,
    getUsersThunk,
    followThunk,
    unfollowThunk}),
  //withAuthRedirect
)(UsersContainer)