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
            breedIsValid: true,
            host: "https://dog.ceo/api"
        };
      }

    render() {
        return (
            <div class="endpoint-container">
                <h2>Fetch a single random image of a dog of a certain breed</h2>
                <div class="client">
                    <form class="client-form" onSubmit={this.onSubmit}>
                        <label for="breed">Dog Breed</label>
                        <input 
                                name="breed" 
                                type="text" 
                                minLength="2" 
                                maxLength="100" 
                                title="Breed of dog." 
                                defaultValue="hound" 
                                onInput={this.validateBreed}
                            />
                        <button disabled={this.state.isLoading}>Fetch</button>
                    </form>
                    {this.state.isFailed &&
                        <div className="error-message">
                            {this.state.errorMessage}
                        </div>
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

            this.setState( { 
                    isLoading: true,
                    isFailed: false 
                }
            );

            let url = `${this.state.host}/breed/${breed}/images/random`;
            let response = await axios.get(url);
            this.setState({ isLoading: false });
            
            if (response.status !== 200)
              return;
        
            let payload = response.data.message;
            this.setState({ image: payload });
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
