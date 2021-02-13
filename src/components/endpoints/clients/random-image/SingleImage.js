import React, { Component } from 'react';
import axios from 'axios';

export class SingleImage extends Component {
    static displayName = SingleImage.name;

    constructor(props) {
        super(props);
        this.state = { 
            image: null,
            isLoading: false,
            isFailed: false,
            host: "https://dog.ceo/api"
        };
      }
      
    async componentDidMount() {
        try {
            if(this.state.isLoading)
                return;

            this.setState( { 
                    isLoading: true,
                    isFailed: false 
                }
            );

            let url = `${this.state.host}/breeds/image/random`;
            let response = await axios.get(url);
            this.setState({ isLoading: false });
            
            if (response.status !== 200)
              return;
        
            let payload = response.data.message;
            this.setState({ image: payload });
        } catch (error) {
            this.setState({
                    isLoading: false,
                    isFailed: true
                }
            );
        }
    }
    
    render() {
        return (
            <div class="endpoint-container">
                <h2>Fetch a single random image</h2>
                <div class="client">
                    {this.state.isFailed &&
                        <span>Failed!</span>
                    }
                    {this.state.image !== null &&
                        <div class="response-container">
                            <img src={this.state.image} alt="A dog" />
                        </div>
                    }
                </div>
            </div>
        );
    }
}