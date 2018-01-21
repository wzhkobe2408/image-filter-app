import React, { Component } from 'react'
import './Image.css'

class Image extends Component {
    render() {
        return (
            <div className="app-image-container">
                <div className="app-image"></div>
                <div className="control-icon left-control">&#8249;</div>
                <div className="control-icon right-control">&#8250;</div>
            </div>
        );
    }
}

export default Image;