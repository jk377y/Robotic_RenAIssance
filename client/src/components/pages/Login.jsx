import { useState } from 'react';

export const Login = (props) => {

    // First we import `useState` with React so that we can take advantage of the hook
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(email);
        }

        return (
            <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onchange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="user@email.com" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input value={password} onchange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="*********" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Register here!</button>
            </>
        );
    };

    export default Login;

