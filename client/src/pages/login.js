import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
        <div className="container my-1" id="login-container">
        
          <image>
              <div id="login-drink"></div>
          </image>
          <form onSubmit={handleFormSubmit}>
              <div class="input-icons">
              <div id="login-form">
                  <div className="flex-row space-between my-2" id="email-input">
                  <label htmlFor="email"></label>

                  <i class="fa fa-envelope icon"></i>
                  <input

                      placeholder="Email"
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleChange}
                  />
                  </div>
                  <div className="flex-row space-between my-2" id="password-input">
                  <label htmlFor="pwd"></label>
                  <i class="fa fa-key icon">
                  </i>
                  <input
                      placeholder="Password"
                      name="password"
                      type="password"
                      id="pwd"
                      onChange={handleChange}
                  />
                  </div>
              </div>
          </div>
              {error ? (
              <div>
                  <p className="error-text">The provided credentials are incorrect</p>
              </div>
        ) : (null)}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;