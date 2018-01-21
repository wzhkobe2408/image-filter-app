import React, { Component } from 'react'
import AppHeader from './component/Header'
import SideBar from './component/SideBar'
import MainContent from './component/MainContent'
import Modal from './component/Modal'

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppHeader />
        <SideBar />
        <MainContent />
        <Modal />
      </div>
    );
  }
}

export default App;
