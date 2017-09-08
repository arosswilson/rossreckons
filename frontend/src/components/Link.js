import React, {Component} from 'react';
import "./Link.css";

class Link extends Component {
  render() {
    return (
      <a className="navlink" href={this.props.destination}>{this.props.label}</a>
    )
  }
}

export default Link