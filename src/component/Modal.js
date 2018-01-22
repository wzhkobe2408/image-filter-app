import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (this.props.modalShow) {
            return (
                <div className="app-modal-container">
                    <div className="app-modal">
                        <div className="app-modal-header">
                            <span className="app-modal-title">This is the modal heading</span>
                            <span onClick={this.props.toggleModalShow} className="app-modal-control">&#10761;</span>
                        </div>
                        <div className="app-modal-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut praesentium architecto consectetur cum harum, unde placeat ipsa ea ullam laborum cumque iste voluptas. Consequatur dolore enim ipsum minima fuga?</p>
                            <div className="button-group">
                                <button onClick={this.props.toggleModalShow} className="btn btn-default">Cancel</button>
                                <button className="btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                    <div onClick={this.props.toggleModalShow} className="app-modal-bg"></div>
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Modal;