import { useState } from 'react';

export const Login = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onFormSwitch = (form) => {
        window.location.href='/register'
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    };

    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <form onSubmit={handleSubmit} className="form-container">
                <h2>Login</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" id="username" placeholder="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="*********" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={() => onFormSwitch('register')}>Don't have an account? Register here!</button>
        </>
    );
};

export default Login;
