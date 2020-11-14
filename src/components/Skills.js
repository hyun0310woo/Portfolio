import React from 'react'
import "../App.css"
import Button from "./Button"
import "./Skills.css"

function Skills() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>asdasd</h1>
            <p>asdasdasd</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn-outline"
                buttonSize="btn--large">
                    Get started
                </Button>
                <Button className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large">
                    WATCH TRALILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default Skills
