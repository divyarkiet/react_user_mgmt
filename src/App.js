import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfileContainer from './components/userProfileContainer';

class App extends Component {
  constructor(){
    super();
    this.title = 'User Management System';
  }
  render() {
    const user = {fname: 'Divya', lname: 'Rajput'};
    function displayName(element){
      if(element){
        return <span>Welcome {element.fname+ ' ' +element.lname}</span>;
      }else{
        return <span>Welcome Guest</span>;
      }      
    }
    return (
      <div className="App">
        
        <header className="App-header">
          <div className="left-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{this.title}</h1>
          </div>
          <div className="right-header">{displayName(user)}</div>
        </header>

        <section className="app-section">
          <UserProfileContainer />                          
        </section>

        <footer></footer>
        
      </div>
    );
  }
}

export default App;
