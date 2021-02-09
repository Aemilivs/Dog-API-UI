import React, { Component } from 'react';
import axios from 'axios';

export class ListAllBreeds extends Component {
  static displayName = ListAllBreeds.name;

  constructor(props) {
    super(props);
    this.state = { breeds: null };
  }

  render() {
    return (
      <div class="endpoint-container">
        <h2>List all breeds</h2>
        <p>This endpoint is located at <a href="https://dog.ceo/api/breeds/list/all">https://dog.ceo/api/breeds/list/all</a></p>
        <div class="client">
          <button onClick={this.onClick}>Retrieve list of breeds</button>
          {this.state.breeds !== null &&
            <div class="response-container">
              {this.state.breeds?.map((it, index) => <div key={index}>{it}</div>)}
            </div>
          }
        </div>
      </div>
    );
  }

  onClick = async () => {
    let response = await axios.get("https://dog.ceo/api/breeds/list/all");

    if (response.status !== 200)
      return;

    let payload = response.data.message;
    let breeds = Object.keys(payload);
    this.setState({
      breeds: breeds
    }
    );
  };
}
