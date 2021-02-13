import React, { Component } from 'react';
import axios from 'axios';

export class MultipleImages extends Component {
    static displayName = MultipleImages.name;

    constructor(props) {
        super(props);
        this.state = { 
            images: null,
            amount: NaN,
            isLoading: false,
            isFailed: false,
            amountIsValid: true,
            host: "https://dog.ceo/api"
        };
      }

    render() {
        return (
            <div class="endpoint-container">
                <h2>Fetch multiple random images</h2>
                <div class="client">
                    <form class="client-form" onSubmit={this.onSubmit}>
                        <label for="amount">Amount of random pictures</label>
                        <input 
                                name="amount" 
                                type="number" 
                                min="1" 
                                max="10" 
                                title="Amount of pictures."
                                defaultValue="1" 
                                onInput={this.validateAmount}
                            />
                        <button disabled={this.state.isLoading}>Fetch</button>
                    </form>
                    {this.state.isFailed &&
                        <div className="error-message">
                            {this.state.errorMessage}
                        </div>
                    }
                    {this.state.images !== null &&
                        <div class="response-container">
                            {this.state.images.map((it, index) => <img key={index} src={it} alt="A dog" />)}
                        </div>
                    }
                </div>
            </div>
        );
    }

    validateAmount = async it => {
        this.setState( {
                amountIsValid: true,
                errorMessage: "",
                isFailed: false
            }
        );
      
        let field = it.target;
        field.setCustomValidity("");
        
        let value = field.value;

        if(isNaN(value) || value < 1) {
            await this.setState( { 
                    amountIsValid: false,
                    errorMessage: "The amount must be a positive number. Please enter a valid amount of dog pictures.",
                    isFailed: true 
                }
            );
            field.setCustomValidity("The amount is too low.");
        }

        if(value > 10) {
            await this.setState( { 
                    amountIsValid: false,
                    errorMessage: "The amount must be 10 or lower. Please enter a valid amount of dog pictures.",
                    isFailed: true 
                }
            );
            field.setCustomValidity("The amount is too high.");
        }
        
        if(!this.state.amountIsValid)
            return;
            
        field.setCustomValidity("");
        this.setState( { 
                breedIsValid: true,
                isFailed: false
            }
        );
    };

    onSubmit = async it => {
        it.preventDefault();
        try {
            if(this.state.isLoading)
                return;
            
            let inputs = it.target;

            let amount = inputs[0].value;
            
            if(isNaN(amount))
                amount = 1;

            this.setState( { 
                    isLoading: true,
                    isFailed: false 
                }
            );

            let url = `${this.state.host}/breeds/image/random/${amount}`;
            let response = await axios.get(url);
            this.setState({ isLoading: false });
            
            if (response.status !== 200)
              return;
        
            let payload = response.data.message;
            this.setState({ images: payload });
        } catch (error) {
            this.setState({
                    isLoading: false,
                    isFailed: true,
                    errorMessage: "Something went wrong. Please try again."
                }
            );
        }
    };
}