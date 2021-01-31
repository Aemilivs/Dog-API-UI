import React, { Component } from 'react';
import { Route } from 'react-router';
import { RandomImageParameters } from "./parameters/RandomImageParameters"
import { Default } from "./clients/random-image/Default"
import { SingleImage } from "./clients/random-image/SingleImage"
import { MultipleImages } from "./clients/random-image/MultipleImages"

export class RandomImage extends Component {
  static displayName = RandomImage.name;

  render() {
    return (
      <RandomImageParameters>
        <Route exact path='/random/' component={Default} />
        <Route path='/random/image' component={SingleImage} />
        <Route path='/random/images' component={MultipleImages} />
      </RandomImageParameters>
    );
  }
}
