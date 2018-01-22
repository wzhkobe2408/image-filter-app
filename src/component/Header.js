import React, { Component } from 'react'
import './Header.css'

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  saveFile() {
    console.log(this.refs);
    this.refs.fileInput.click();
  }

  render() {
    return (
      <div className="app-header">
        <div onClick={this.props.showMainContent} className="app-header-item app-header-logo">&#9822;</div>
        <div onClick={this.props.toggleModalShow} className="app-header-item">Load</div>
        <div onClick={this.saveFile.bind(this)} className="app-header-item">
          Save
          <input ref="fileInput" type="file" style={{ display:'none' }} />
        </div>
        <div onClick={this.props.hideMainContent} className="app-header-item">About</div>
      </div>
    );
  }
}

export default AppHeader;


