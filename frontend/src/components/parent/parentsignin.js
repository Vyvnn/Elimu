import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "./context"
const ParentSignin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [authenticated, setAuthenticated] = useState(localStorage.getItem('authenticated') || false);
    const [error, setError] = useState(null);

    const users = [{ name: 'Jane', password: 'testpassword' }];
    const account = users.find((user) => user.name === formData.name);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        // Perform client-side validation
        if (!formData.name || !formData.email || !formData.password) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await fetch('/api/parent/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    "parentName": formData.get("parentName"),
                    "password": formData.get("password")
                }
            });

            if (response.ok) {
                setAuthenticated(true);
                localStorage.setItem('authenticated', true);
                navigate('/parentmainpage');
            } else {
                const data = await response.json();
                setError(data.message || 'Error occurred during registration');
            }
        } catch (error) {
            setError('Failed to connect to the server. Please try again later.');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div id="welcomeS">
                    <p>Welcome to</p>
                    <h3>Elimu</h3>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Parent's Name:</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control border border-dark rounded"
                                placeholder="Enter username"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="text"
                                name="email"
                                className="form-control border border-dark rounded"
                                placeholder="Enter email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input
                                type="password"
                                name="password"
                                className="form-control border border-dark rounded"
                                placeholder="Password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary">
                                Sign in
                            </button>
                        </div>
                    </form>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <p>
                        <Link to="/parent/parentRegister">If not registered, please Signup</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ParentSignin;
