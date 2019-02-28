import React, { Component } from 'react';

class Hobby extends Component {
    render() {
        const skillOne = this.props.skillOne;
        const skillTwo = this.props.skillTwo;
        const skillThree = this.props.skillThree;
        const skillFour = this.props.skillFour;
        return (
            <div className="hobby">
                <h3><span>Sở Thích</span></h3>
                <ul>
                    <li>Lorem Ipsum is simply dummy text of</li>
                    <li>standard dummy text ever since the 1500s</li>
                    <li>when an unknown printer took a galley </li>
                </ul>
            </div>
        );
    }
}

export default Hobby;
