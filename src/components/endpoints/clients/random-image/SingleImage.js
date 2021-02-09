import React, { Component } from 'react';
import axios from 'axios';

export class SingleImage extends Component {
    static displayName = SingleImage.name;

    constructor(props) {
        super(props);
        this.state = { 
            image: null,
            isLoading: false,
            url: "https://dog.ceo/api/breeds/image/random"
        };
      }

    render() {
        return (
            <div class="endpoint-container">
                <h2>Fetch a single random image</h2>
                <p>This endpoint is located at <a href={this.state.url}>{this.state.url}</a></p>
                <div class="client">
                    <button onClick={this.onClick}>Fetch random image</button>
                    {this.state.image !== null &&
                        <div class="response-container">
                            <img src={this.state.image} alt="A dog" />
                        </div>
                    }
                </div>
            </div>
        );
    }

    onClick = async () => {
        if(this.state.isLoading)
            return;
        
        this.state.isLoading = true;
        let response = await axios.get(this.state.url);
        this.state.isLoading = false;
        
        if (response.status !== 200)
          return;
    
        let payload = response.data.message;

        this.setState({
            image: payload
        }
        );
      };
}
