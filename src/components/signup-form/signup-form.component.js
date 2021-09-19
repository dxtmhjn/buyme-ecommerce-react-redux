import React, { Component } from "react";
import FormInput from './../../components/shared-components/form-components/form-input/form-input.component';
import FormButton from "../shared-components/form-components/form-button/form-button.component";
import { auth, createUserProfileDocument, signupWithEmailAndPassword } from '../../firebase/firebase.utils';

class SignupForm extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('please match the password');
            return;
        }
        try {
            const {user} = await signupWithEmailAndPassword(auth,email, password);
            console.log("new user", user);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error.message);
        }
      
    }

    handleChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group row mt-3">
                    <div className="col-md-12">

                        <FormInput className="form-control" name="displayName" onChange={this.handleChange} value={this.state.displayName} type="text" required="" placeholder="Display name" />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <div className="col-md-12">
                        <FormInput className="form-control" name="email" onChange={this.handleChange} value={this.state.email} type="email" required="" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <FormInput className="form-control" name="password" onChange={this.handleChange} value={this.state.password} type="password" required="" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <FormInput className="form-control" name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} type="password" required="" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="form-group row text-center mt-4">
                    <div className="col-md-12">
                        <FormButton type="submit" className="btn btn-primary btn-block text-uppercase">Sign up</FormButton>
                    </div>
                </div>
            </form>
        );
    }
}

export default SignupForm;