import React, {Component} from 'react';
import './BannerSection.css';

class BannerSection extends Component {

  render() {
    return (
      <div className="jumbo">
        <img src={this.props.img} alt="blah"/>
      </div>
    )
  }
}

export default BannerSection