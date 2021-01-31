import React, { Component } from 'react';
import { Route } from 'react-router';
import { BySubBreedParameters } from "./parameters/BySubBreedParameters"
import { Default } from "./clients/bu-sub-breed/Default"
import { ListImages } from "./clients/bu-sub-breed/ListImages"
import { ListSubBreeds } from "./clients/bu-sub-breed/ListSubBreeds"
import { SingleImage } from "./clients/bu-sub-breed/SingleImage"
import { MultipleImages } from "./clients/bu-sub-breed/MultipleImages"

export class BySubBreed extends Component {
  static displayName = BySubBreed.name;

  render() {
    return (
      <BySubBreedParameters>
        <Route exact path='/by-sub-breed/' component={Default} />
        <Route path='/by-sub-breed/listSubBreeds' component={ListSubBreeds} />
        <Route path='/by-sub-breed/listImages' component={ListImages} />
        <Route path='/by-sub-breed/image' component={SingleImage} />
        <Route path='/by-sub-breed/images' component={MultipleImages} />
      </BySubBreedParameters>
    );
  }
}
