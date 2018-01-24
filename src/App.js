import React, { Component } from 'react'


// Component
import AppHeader from './component/Header'
import SideBar from './component/SideBar'
import MainContent from './component/MainContent'
import Modal from './component/Modal'
import About from './component/About'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      mainContent: true
    }
  }

  toggleModalShow() {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }

  hideMainContent() {
    this.setState({
      mainContent:false
    })
  }

  showMainContent() {
    this.setState({
      mainContent:true
    })
  }

  render() {
    return (
      <div className="container">
        <AppHeader 
          hideMainContent = {() => this.hideMainContent()}
          showMainContent = {() => this.showMainContent()} 
          toggleModalShow = {() => this.toggleModalShow()} />
        <SideBar />
        {this.state.mainContent? <MainContent /> : <About />}
        <Modal toggleModalShow = {() => this.toggleModalShow()} modalShow = {this.state.modalShow} />
      </div>
    );
  }
}

export default App;
