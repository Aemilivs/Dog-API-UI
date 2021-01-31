import React, { Component } from 'react';
import { Route } from 'react-router';
import { ByBreedParameters } from "./parameters/ByBreedParameters"
import { Default } from './clients/by-breed/Default';
import { ListImages } from "./clients/by-breed/ListImages"
import { SingleImage } from "./clients/by-breed/SingleImage"
import { MultipleImages } from "./clients/by-breed/MultipleImages"

export class ByBreed extends Component {
  static displayName = ByBreed.name;

  render() {
    return (
      <ByBreedParameters>
        <Route exact path='/by-breed/' component={Default} />
        <Route path='/by-breed/list' component={ListImages} />
        <Route path='/by-breed/image' component={SingleImage} />
        <Route path='/by-breed/images' component={MultipleImages} />
      </ByBreedParameters>
    );
  }
}
