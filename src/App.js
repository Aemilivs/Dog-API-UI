import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { BrowseBreedList } from "./components/endpoints/BrowseBreedList";
import { ByBreed } from "./components/endpoints/ByBreed";
import { BySubBreed } from "./components/endpoints/BySubBreed";
import { ListAllBreeds } from "./components/endpoints/ListAllBreeds";
import { RandomImage } from "./components/endpoints/RandomImage";

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/browse-breed-list' component={BrowseBreedList} />
        <Route path='/by-breed' component={ByBreed} />
        <Route path='/by-sub-breed' component={BySubBreed} />
        <Route path='/list-all-breeds' component={ListAllBreeds} />
        <Route path='/random' component={RandomImage} />
      </Layout>
    );
  }
}
