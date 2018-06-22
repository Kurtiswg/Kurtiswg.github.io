import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard';
import ContactCard from './ContactCard';
import ResumeCard from './ResumeCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Built with React</h1>
        </header>
        <ProfileCard />
        <ContactCard />
        <ResumeCard />
      </div>
    );
  }
}

export default App;
