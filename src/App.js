import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ByBreed } from "./components/endpoints/ByBreed";
import { BySubBreed } from "./components/endpoints/BySubBreed";
import { ListAllBreeds } from "./components/endpoints/ListAllBreeds";
import { RandomImage } from "./components/endpoints/RandomImage";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/by-breed' component={ByBreed} />
        <Route path='/by-sub-breed' component={BySubBreed} />
        <Route path='/list-all-breeds' component={ListAllBreeds} />
        <Route path='/random' component={RandomImage} />
      </Layout>
    );
  }
}
