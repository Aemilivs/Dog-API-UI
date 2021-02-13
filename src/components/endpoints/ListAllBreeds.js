import React, { Component } from 'react';
import axios from 'axios';

export class ListAllBreeds extends Component {
  static displayName = ListAllBreeds.name;

  constructor(props) {
    super(props);
    this.state = { breeds: null };
  }
  
  /**
   * Make a call to the Dog API to fetch the list of dog breeds after a component is mounted.
   */
  async componentDidMount() {
    try {
      let response = await axios.get("https://dog.ceo/api/breeds/list/all");

      if (response.status !== 200)
        return;

      let payload = response.data.message;
        let breeds = Object.keys(payload);
          this.setState( {
            breeds: breeds
          }
        );
    } catch (error) {
      this.setState( {
          isLoading: false,
          isFailed: true,
          errorMessage: "Something went wrong. Please try again."
        }
      );
    }
  }
  
  render() {
    return (
      <div class="endpoint-container">
        <h2>List all breeds</h2>
        <div class="client">
          {this.state.isFailed &&
            <div className="error-message">
                {this.state.errorMessage}
            </div>
          }
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
