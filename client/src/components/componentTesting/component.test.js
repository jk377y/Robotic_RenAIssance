import React from 'react';
import { render } from "@testing-library/react";
// import { App } from "../../App";
// import { Homepage } from "../pages/Homepage";
import Showcase from "../pages/Showcase";
import { Login } from "../pages/Login";



// Component Rendering Tests
// describe("App component", () => {
// 	test("renders without crashing", () => {
// 		render(<App />);
// 	});
// });

// describe("Homepage component", () => {
// 	test("renders without crashing", () => {
// 		render(<Homepage />);
// 	});
// });

describe("Showcase component", () => {
	test("renders without crashing", () => {
		render(<Showcase />);
	});
});

describe("Login component", () => {
	test("renders without crashing", () => {
		render(<Login />);
	});
});




