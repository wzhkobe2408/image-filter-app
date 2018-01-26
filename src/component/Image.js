import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Image.css'

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // addEffects(e) {
    //     console.log(e.target);
    //     console.log()
    //     let value = this.props.filter/100;
    //     e.target.style.filter = `brightness(${value})`;
    // }
    
    render() {
        let value = this.props.filter/100;
        console.log('this is the redux value', value);
        return (
            <div className="app-image-container">
                <div style={{filter:`brightness(${value})`}} className="app-image"></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps, null)(Image);