import React, { Component } from 'react';
import axios from 'axios';

export class ListAllBreeds extends Component {
  static displayName = ListAllBreeds.name;

  constructor(props) {
    super(props);
    this.state = { breeds: null };
  }
  
  async componentDidMount() {
    try {
      let response = await axios.get("https://dog.ceo/api/breeds/list/all");

    if (response.status !== 200)
      return;

    let payload = response.data.message;
    let breeds = Object.keys(payload);
    this.setState({
        breeds: breeds
      }
    );
    } catch (error) {
      
    }
  }
  
  render() {
    return (
      <div class="endpoint-container">
        <h2>List all breeds</h2>
        <div class="client">
          {this.state.breeds !== null &&
            <div class="response-container">
              {this.state.breeds?.map((it, index) => <div key={index}>{it}</div>)}
            </div>
          }
        </div>
      </div>
    );
  }
}
