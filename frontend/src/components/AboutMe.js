import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  render(){
    return(
      <div className="about-me">
        <div className="mememe">
          <p>Hey, I'm Ross Wilson, a web developer living in The Big Apple. I currently work for a healthcare tech start-up called <a href="https://www.forcetherapeutics.com/">Force Therapeutics</a>, where we try to guide patients through their hip/knee replacement recovery. Before that I worked at <a href="https://www.epic.com">Epic</a> as a project manager. I plan to use this medium to talk tech, talk healthcare, and generally tinker.
          </p>
        </div>
      </div>
    )
  }
}

export default AboutMe