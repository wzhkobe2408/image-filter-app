import React from 'react'
import './Slider.css'
import { setFilter } from '../action/index';

const AppSlider = (props) => {
        return (
                <input onChange={event => props.setFilter(event.target.value)} value={props.filter} type="range" min="1" max="100" className="app-slider" id="myRange" />
        )
}

export default AppSlider;