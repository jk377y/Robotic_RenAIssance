import { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const onFormSwitch = (form) => {
        window.location.href='/login'
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} type="text" id="name" placeholder="Full name" onChange={(e) => setName(e.target.value)} />
                <div>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="user@email.com" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="*********" name="password" />
                </div>
                <button type="submit">Register</button>
            </form>
            <button onClick={() => onFormSwitch('login')}>Go back to login</button>
        </>
    )
}
