import React from 'react';
import { render } from "@testing-library/react";
import { App } from "../../App";






// Component Rendering Tests
describe("App component", () => {
	test("renders without crashing", () => {
		render(<App />);
	});
});










