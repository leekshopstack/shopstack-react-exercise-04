import React, { Component } from 'react';

class Skill extends Component {
    render() {
        const skillOne = this.props.skillOne;
        const skillTwo = this.props.skillTwo;
        const skillThree = this.props.skillThree;
        const skillFour = this.props.skillFour;
        return (
            <div className="skill">
                <h3><span>Kỹ Năng</span></h3>
                <ul>
                    <li>
                        <h4>Skill Label</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{"width":skillOne}}>{skillOne}</div>
                        </div>
                    </li>
                    <li>
                        <h4>Skill Label</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{"width":skillTwo}}>{skillTwo}</div>
                        </div>
                    </li>
                    <li>
                        <h4>Skill Label</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{"width":skillThree}}>{skillThree}</div>
                        </div>
                    </li>
                    <li>
                        <h4>Skill Label</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{"width":skillFour}}>{skillFour}</div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Skill;
