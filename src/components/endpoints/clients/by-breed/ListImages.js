import React, { Component } from 'react';
import axios from 'axios';

export class ListImages extends Component {
    static displayName = ListImages.name;

    constructor(props) {
        super(props);
        this.state = { 
            images: null,
            isLoading: false,
            isFailed: false,
            breedIsValid: true,
            currentClass: "endpoint-container",
            errorMessage: "",
            host: "https://dog.ceo/api"
        };
    }
    
    render() {
        return (
            <div class="endpoint-container">
                <h2>Fetch a list of images of dogs of a certain breed</h2>
                <div class="client">
                    <form class="client-form" onSubmit={this.onSubmit}>
                        <label for="breed">Dog Breed</label>
                        <input 
                                className={!this.state.breedIsValid && "invalid-input"}
                                name="breed" 
                                type="text" 
                                minLength="1" 
                                maxLength="100" 
                                title="Breed of dog." 
                                defaultValue="hound"
                                onInput={this.validateBreed}
                            />
                        <button disabled={this.state.isLoading}>Fetch</button>
                    </form>
                    {this.state.isFailed &&
                        <div class="error-message">
                            {this.state.errorMessage}
                        </div>
                    }
                    {this.state.images !== null &&
                        <div class="response-container">
                            <ul>
                                {this.state.images.map((it, index) => <li key={index}>{it}</li>)}
                            </ul>
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
                    isFailed: false,
                    images: null
                }
            );

            let url = `${this.state.host}/breed/${breed}/images`;
            let response = await axios.get(url);
            this.setState({ isLoading: false });
            
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
