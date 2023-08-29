import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main>
        <div className="container my-1">
            <container id="signup-container">
                <form onSubmit={handleFormSubmit} id="signup-form">
                    <div class="input-icons-signup">
                        
                            <div className="flex-row space-between my-2">
                                <label htmlFor="firstName"></label>
                                <i class="fa fa-user icon">
                                </i>
                                <input
                                placeholder="First Name"
                                name="firstName"
                                type="firstName"
                                id="firstName"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="flex-row space-between my-2">
                                <label htmlFor="lastName"></label>
                                <i class="fa fa-user icon">
                                </i>
                                <input
                                placeholder="Last Name"
                                name="lastName"
                                type="lastName"
                                id="lastName"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="flex-row space-between my-2">
                                <label htmlFor="email"></label>
                                <i class="fa fa-envelope icon">
                                </i>
                                <input
                                placeholder="Email"
                                name="email"
                                type="email"
                                id="email"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="flex-row space-between my-2">
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
                            <div className="flex-row flex-end" id="sgnup-btn">
                                <button type="submit" class="signupbtn">Sign Up</button>
                            </div>
                        
                    </div>
                </form>
                <image>
                    <div id="signup-drink"></div>
                </image>
            </container>
        </div>  
    </main>
  );
}

export default Signup;