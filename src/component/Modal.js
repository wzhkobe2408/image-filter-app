import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
        }
    }

    handelClick() {
        this.setState({
            isShow:false
        })
    }

    render() {
        if (this.state.isShow) {
            return (
                <div className="app-modal-container">
                    <div className="app-modal">
                        <div className="app-modal-header">
                            <span className="app-modal-title">This is the modal heading</span>
                            <span onClick={this.handelClick.bind(this)} className="app-modal-control">&#10761;</span>
                        </div>
                        <div className="app-modal-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut praesentium architecto consectetur cum harum, unde placeat ipsa ea ullam laborum cumque iste voluptas. Consequatur dolore enim ipsum minima fuga?</p>
                            <div className="button-group">
                                <button onClick={this.handelClick.bind(this)} className="btn btn-default">Cancel</button>
                                <button className="btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                    <div onClick={this.handelClick.bind(this)} className="app-modal-bg"></div>
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