import React from 'react';
import { render } from "@testing-library/react";
import Showcase from "../pages/Showcase";
import Admin from "../pages/Admin";

describe("Showcase component", () => {
	test("renders without crashing", () => {
		render(<Showcase />);
	});
});

describe("Admin component", () => {
	test("renders without crashing", () => {
		render(<Admin />);
	});
});