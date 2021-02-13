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
            breedIsValid: true,
            amountIsValid: true,
            host: "https://dog.ceo/api"
        };
    }

    render() {
        return (
            <div className="endpoint-container">
                <h2>Fetch multiple random images of dogs of a certain breed</h2>
                <div className="client">
                    <form className="client-form" onSubmit={this.onSubmit}>
                        <div>
                            <label for="breed">Dog Breed</label>
                            <input
                                className={!this.state.breedIsValid && "invalid-input"}
                                name="breed"
                                type="text"
                                minLength="1"
                                maxLength="100"
                                title="Breed of dog."
                                defaultValue="hound"
                                onChange={this.validateBreed}
                            />
                        </div>
                        <div>
                            <label for="amount">Amount of random pictures</label>
                            <input
                                className={!this.state.amountIsValid && "invalid-input"}
                                name="amount"
                                type="number"
                                min="1"
                                max="10"
                                title="Amount of pictures."
                                defaultValue="2"
                                onInput={this.validateAmount}
                            />
                        </div>
                        <button disabled={this.state.isLoading}>Fetch</button>
                    </form>
                    {this.state.isFailed &&
                        <div className="error-message">
                            {this.state.errorMessage}
                        </div>
                    }
                    {this.state.images !== null &&
                        <div className="response-container">
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

    validateBreed = async it => {
        this.setState( {
                breedIsValid: true,
                errorMessage: "",
                isFailed: false
            }
        );

        let field = it.target;
        field.setCustomValidity("");
        
        let value = field.value;
        if(value.length < 1) {
            await this.setState( { 
                    breedIsValid: false,
                    errorMessage: "The name of the breed cannot be empty. Please enter a valid breed name.",
                    isFailed: true 
                }
            );
            field.setCustomValidity("The name is too short.");
        }
        
        if(!this.state.breedIsValid)
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

            let breed = inputs[0].value.toLowerCase();

            if(
                    breed === undefined || 
                    breed === null || 
                    breed === ""
                )
                return;

            let amount = inputs[1].value;
            
            if(isNaN(amount))
                amount = 1;

            await this.setState( { 
                    isLoading: true,
                    isFailed: false,
                    images: null
                }
            );

            let url = `${this.state.host}/breed/${breed}/images/random/${amount}`;
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
