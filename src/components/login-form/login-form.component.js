import React, { Component } from "react";
import FormInput from "../shared-components/form-components/form-input/form-input.component";
import FormButton from "../shared-components/form-components/form-button/form-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name}= event.target;
        this.setState({ [name] : value})
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group row mt-3">
                    <div className="col-md-12">
                        <FormInput className="form-control" name="email" value={this.state.email} type="text" onChange={this.handleChange} required placeholder="Username" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <FormInput className="form-control" name="password" value={this.state.password} type="password" onChange={this.handleChange} required placeholder="Password" />
                    </div>
                </div>
                <div className="form-group row text-center mt-4">
                    <div className="col-md-12">
                        <FormButton type="submit" className="btn btn-primary btn-block text-uppercase">Log In</FormButton>
                        <button type="button" className="btn btn-success btn-block text-uppercase" onClick={signInWithGoogle}> Login with Google</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginForm;