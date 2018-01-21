import React, { Component } from 'react'
import './Header.css'

class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-header-item app-header-logo">&#9822;</div>
        <div className="app-header-item">Load</div>
        <div className="app-header-item">Save</div>
        <div className="app-header-item">About</div>
      </div>
    );
  }
}

export default AppHeader;


