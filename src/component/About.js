import React from 'react'
import './About.css'

const About = () => (
    <div className="app-about">
        <h3>This is the about content:</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus debitis assumenda illum consectetur, sequi, qui saepe dolores unde, harum nam maiores dolor labore. Modi hic rerum ut molestias? Dolor!</p>
        <hr />
        <h3>This is our team:</h3>
        <div className="img-gallery">
            <div className="img-container"><img src="https://www.w3schools.com/howto/img_avatar.png" alt="img1"/></div>
            <div className="img-container"><img src="https://www.w3schools.com/howto/img_avatar2.png" alt="img2"/></div>
            <div className="img-container"><img src="https://www.w3schools.com/howto/img_avatar.png" alt="img3"/></div>
            <div className="img-container"><img src="https://www.w3schools.com/howto/img_avatar2.png" alt="img4"/></div>
        </div>
    </div>
)

export default About;