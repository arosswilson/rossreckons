import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Blog from './Blog'
import Post from './Post'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/blog/' component={ Blog } />
      <Route exact path='/blog/:number' component={ Post } />
    </Switch>
  </main>
)

export default Main