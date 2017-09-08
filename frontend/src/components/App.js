import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.loadPosts = this.loadPosts.bind(this);
    this.checkStatus = this.checkStatus.bind(this);

    this.state = {
      posts: {},
      postCount: 0,
    };
  }

  loadPosts() {
    fetch('/api/posts', {
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
        posts: data.posts,
        postCount: data.count
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
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
