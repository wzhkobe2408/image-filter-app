import React, { Component } from 'react'
import AppSlider from './Slider'
import './SideBar.css'
import { bindActionCreators } from 'redux'
import { setFilter } from '../action'
import { connect } from 'react-redux'

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                ['Brightness/Contrast','Hue/Saturation','Curves','Denoise','Unsharp Mask'],
                ['Zoom Blur','Triangle Blur','Tilt Shift','Lens Blur',],
                ['Swirl','Bulge/Pinch','Perspective'],
                ['Ink','Edge Work','Hexagonal Pixelate','Dot Screen','Color']
            ],
            activeItem: ''
        }
    }

    handleClick(index, event) {
        let searchName = event.target.textContent;
        if (this.state.activeItem === searchName) {
            this.setState({
                activeItem:''
            })
        } else {
            this.setState({
                activeItem:searchName
            })
        }
    }

    justifyParams() {
        console.log('Test to see the redux: ', this.props);
        this.props.setFilter(24);
    }
    
    render() {
        return (
            <div className="app-sidebar">
                <ul className="app-sidebar-wrapper">
                    <li onClick={this.justifyParams.bind(this)} className="app-sidebar-item">Adjust</li>
                    <ul className="app-sidebar-subitem">
                        {this.state.data[0].map((item, index) => 
                            <div key={index}>
                                <li className={this.state.activeItem === item? 'secondClassItem nestItem' : 'secondClassItem'} onClick={this.handleClick.bind(this, 0)}>{item}</li>
                                {this.state.activeItem === item? 
                                <div className='nestItem detail-info'>
                                    <AppSlider filter={this.props.filter} setFilter={this.props.setFilter} />
                                    <button>Accept</button>
                                    <a href="/">Reset</a>
                                </div>
                                 : <div></div>}
                            </div>
                        )}
                    </ul>
                    <li className="app-sidebar-item">Blur</li>
                    <ul className="app-sidebar-subitem">
                        {this.state.data[1].map((item, index) => 
                        <div key={index}>
                            <li className={this.state.activeItem === item? 'secondClassItem nestItem' : 'secondClassItem'} onClick={this.handleClick.bind(this, 1)} key={index}>{item}</li>
                            {this.state.activeItem === item? 
                            <div className='nestItem detail-info'>
                                <AppSlider filter={this.props.filter} setFilter={this.props.setFilter} />
                                <button>Accept</button>
                                <a href="/">Reset</a>
                            </div>
                             : <div></div>}
                        </div>
                        )}
                    </ul>
                    <li className="app-sidebar-item">Warp</li>
                    <ul className="app-sidebar-subitem">
                        {this.state.data[2].map((item, index) => 
                        <div key={index}>
                            <li className={this.state.activeItem === item? 'secondClassItem nestItem' : 'secondClassItem'} onClick={this.handleClick.bind(this, 2)}  key={index}>{item}</li>
                            {this.state.activeItem === item? 
                            <div className='nestItem detail-info'>
                                <AppSlider filter={this.props.filter} setFilter={this.props.setFilter} />
                                <button>Accept</button>
                                <a href="/">Reset</a>
                            </div>
                             : <div></div>}
                        </div>
                        )}
                    </ul>
                    <li className="app-sidebar-item">Fun</li>
                    <ul className="app-sidebar-subitem">
                        {this.state.data[3].map((item, index) => 
                        <div key={index}>
                            <li className={this.state.activeItem === item? 'secondClassItem nestItem' : 'secondClassItem'} onClick={this.handleClick.bind(this, 3)} key={index}>{item}</li>
                            {this.state.activeItem === item? 
                            <div className='nestItem detail-info'>
                                <AppSlider filter={this.props.filter} setFilter={this.props.setFilter} />
                                <button>Accept</button>
                                <a href="/">Reset</a>
                            </div>
                             : <div></div>}
                        </div>
                        )}
                    </ul>
                    <li className="app-sidebar-item">Redux: {this.props.filter}</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setFilter: setFilter
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);