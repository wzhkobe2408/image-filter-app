import React, { Component } from 'react'
import Image from './Image'
import './MainContent.css'

class MainContent extends Component {
    render() {
        return (
            <div className="app-maincontent">
                <Image />
            </div>
        );
    }
}

export default MainContent;