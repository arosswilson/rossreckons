import React, { Component } from 'react'
import './Post.css'

class Post extends Component {
  constructor() {
    super();
    this.loadPosts = this.loadPosts.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.state = {
      post: {},
    };
  }

  loadPosts() {
    fetch(`/api/posts/${this.props.match.params.number}`, {
      method: "GET",
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
    .then(response =>
      this.checkStatus(response)
    )
    .then(response =>
      this.parseJSON(response)
    )
    .then(data => {
      this.setState({
        post: data,
      })
    });
  }

  componentWillMount() {
    this.loadPosts();
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }

  parseJSON(response) {
    return response.json();
  }

  render() {
    return(
      <div className="post">
        <h2>{this.state.post.name}</h2>
        <h4>{this.state.post.publish_date}</h4>
        <p>{this.state.post.body}</p>
      </div>
    )
  }
}

export default Post
