import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

export const Register = () => {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [addUser, { error, data }] = useMutation(ADD_USER);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		// window.location.href='/showcase'
		console.log(formState);

		try {
			const { data } = await addUser({
				variables: { ...formState },
			});

			Auth.login(data.addUser.token);
			window.location.href = "/showcase";
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main className="flex-row justify-center mb-4">
			<div className="col-12 col-lg-10">
				<div className="card">
					<h4 className="card-header bg-dark text-light p-2">
						Sign Up
					</h4>
					<div className="card-body">
						{data ? (
							<p>
								Success! You may now head{" "}
								<Link to="/showcase">
									back to the homepage.
								</Link>
							</p>
						) : (
							<form onSubmit={handleFormSubmit}>
								<input
									className="form-input"
									placeholder="Your username"
									name="username"
									type="text"
									value={formState.name}
									onChange={handleChange}
								/>
								<input
									className="form-input"
									placeholder="Your email"
									name="email"
									type="email"
									value={formState.email}
									onChange={handleChange}
								/>
								<input
									className="form-input"
									placeholder="******"
									name="password"
									type="password"
									value={formState.password}
									onChange={handleChange}
								/>
								<button
									className="btn btn-block btn-primary"
									style={{ cursor: "pointer" }}
									type="submit"
								>
									Submit
								</button>
							</form>
						)}

						{error && (
							<div className="my-3 p-3 bg-danger text-white">
								{error.message}
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

// import { useState } from 'react';

// export const Register = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const onFormSwitch = (form) => {
//         window.location.href='/login'
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">username</label>
//                 <input value={username} type="text" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="user@email.com" name="email" />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="*********" name="password" />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//             <button onClick={() => onFormSwitch('login')}>Go back to login</button>
//         </>
//     )
// }
