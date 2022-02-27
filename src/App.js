import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

  return (
    
    <div className='app_wrapper'>
      <HeaderContainer />
      <div className='content_wrapper'>
      <Navbar />
      <div className='app_content_wrapper'>
        <Route path='/dialogs' render={() => (<DialogsContainer />)}/>
        <Route path='/profile/:userId?' render={() => (<ProfileContainer />)}/>
        <Route path='/users' render={() => (<UsersContainer />)}/>
      </div>
      </div>
    </div>
   
  );
}

export default App;
