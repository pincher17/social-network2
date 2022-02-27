import React from 'react';
import { setAuthThunk } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import Header from './Header';

class HeaderContainer extends React.Component{

  componentDidMount(){
      this.props.setAuthThunk()
  }
 
  render (){
    
      //console.log(this.props.users);
     return (
       <Header {...this.props} />
     )
  }
}

let mapStateToProps = (state) =>{

  return{
      login: state.auth.login,
      id: state.auth.id,
      email: state.auth.email,
      isAuth: state.auth.isAuth,
  }
  
}


export default connect(mapStateToProps,{setAuthThunk})(HeaderContainer);