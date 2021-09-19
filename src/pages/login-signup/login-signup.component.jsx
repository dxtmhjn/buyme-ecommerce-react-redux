import React from 'react';
import './login-signup.styles.scss';
import LoginForm from '../../components/login-form/login-form.component';
import SignupForm from '../../components/signup-form/signup-form.component';

const LoginSignupPage = () => (
    <div className="login-signup-page">
        <div className="row">
            <div className="col-6 login-box">
                <h3>Already have an account</h3>
              <LoginForm/>
            </div>
            <div className="col-6">
                <h3>Register here</h3>
           <SignupForm/>
            </div>
        </div>
    </div>
)

export default LoginSignupPage;