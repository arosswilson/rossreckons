import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  render(){
    return(
      <div className="about-me">
        <h2>about me</h2>
        <div className="mememe">
          <p>Hey, I'm Ross Wilson, a full stack web developer living in The Big Apple🍎. I currently work for a healthcare tech start-up called <a href="https://www.forcetherapeutics.com/">Force Therapeutics</a>, where we try to guide patients through their hip/knee replacement recovery. Before that I worked at <a href="https://www.epic.com">Epic</a> as a project manager. That said, I've made this site to:
          </p>
          <ul>
            <li>talk tech</li>
            <li>talk healthcare</li>
            <li>tinker 🔧</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutMe