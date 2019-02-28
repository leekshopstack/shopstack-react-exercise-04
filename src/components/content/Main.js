import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';
import Hobby from './Hobby';
import './Main.css';

class Main extends Component {
  render() {
    return (
        <div className="cv-content">
            <div class="content-top">
                <div className="container">
                    <div className="education-wrap col">
                        <Education />
                    </div>
                    <div className="experience-wrap col">
                        <Experience />
                    </div>
                </div>
            </div>
            <div class="content-bottom">
                <div className="container">
                    <div className="skill-wrap col">
                        <Skill skillOne={'70%'} skillTwo={'80%'} skillThree={'90%'} skillFour={'60%'} />
                    </div>
                    <div className="hobby-wrap col">
                        <Hobby />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Main;
