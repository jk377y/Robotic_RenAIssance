import { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
    <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} type="text" id="name" placeholder="Full name"/>
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
            <button onClick={() => props.onFormSwitch('login')}>login here!</button>
            </>
    )
}