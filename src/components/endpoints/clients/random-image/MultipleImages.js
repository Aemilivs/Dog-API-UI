import React, { Component } from 'react';
import axios from 'axios';
import { isNumericLiteral } from 'typescript';

export class MultipleImages extends Component {
    static displayName = MultipleImages.name;

    constructor(props) {
        super(props);
        this.state = { 
            images: null,
            amount: NaN,
            isLoading: false,
            url: "https://dog.ceo/api/breeds/image/random"
        };
      }

    render() {
        return (
            <div class="endpoint-container">
                <h2>Fetch multiple random images</h2>
                <p>This endpoint is located at <a href={this.state.url + '/3'}>{this.state.url}/$imagesAmount</a></p>
                <div class="client">
                    <form onSubmit={this.onSubmit}>
                        <label for="amount">Amount of random pictures</label>
                        <input name="amount" type="number" onInput={this.onInput}/>
                        <button>Fetch random images</button>
                    </form>
                    {this.state.images !== null &&
                        <div class="response-container">
                            {this.state.images.map((it, index) => <img key={index} src={it} alt="A dog" />)}
                        </div>
                    }
                </div>
            </div>
        );
    }

    onInput = it => {
        let value = it.target.value;
        
        if(isNaN(value))
            return;

        if(value < 0 || value > 10)
            return;

        this.setState({ amount: value });
    }

    onSubmit = async it => {
        it.preventDefault();
        let amount = this.state.amount;
        let response = await axios.get(`${this.state.url}\\${amount}`);
        
        if (response.status !== 200)
          return;
    
        let payload = response.data.message;
        this.setState({
            images: payload
        }
        );
      };
}
