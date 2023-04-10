import { useState } from 'react';

export const Login = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onFormSwitch = (form) => {
        window.location.href='/register'
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <form onSubmit={handleSubmit} className="form-container">
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="user@email.com" name="email" />
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
