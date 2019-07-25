import React, { Component } from 'react'
import ImageConstruction from './../img/preparing.png' // relative path to image 

export default class Construction extends Component {
    render() {
        return (
            <div className="container">
                <div className="construction-wrapper">
                    <img src={ImageConstruction} alt={"image construction"} />
                    <div>
                        <h2>Easy! We still working it...</h2>
                        <p>No worries. Try again later, we're building big things.</p>
                    </div>
                </div>
            </div>
        )
    }
}
