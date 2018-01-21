import React, { Component } from 'react'
import './SideBar.css'

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adjustControl: false,
            blurControl: false,
            wrapControl: false,
            funControl: false,
        }
    }
    render() {
        return (
            <div className="app-sidebar">
                <ul className="app-sidebar-wrapper">
                    <li className="app-sidebar-item">Adjust</li>
                    <li className="app-sidebar-item">Blur</li>
                    <li className="app-sidebar-item">Warp</li>
                    <li className="app-sidebar-item">Fun</li>
                </ul>
            </div>
        );
    }
}

export default SideBar;