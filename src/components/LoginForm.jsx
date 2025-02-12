import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginform.css"; 

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "4481") {
            navigate("/dashboard"); 
        } else {
            setError("Invalid credentials. Try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Sign In</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="submit-button">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
