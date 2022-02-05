import Select from "./Select";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Given a new package npm", () => {
	const array = [
		{ value: "man", text: "Homme" },
		{ value: "woman", text: "Femme" },
	];

	describe("Testin Select component", () => {
		beforeEach(() =>
			render(<Select id={"idSelect"} textLabel={"Votre sexe :"} selectClass={"select-class"} optionClass={"class-option"} arr={array} />)
		);

		test("Should render component", () => {
			const textLabel = document.getElementById("idSelect");
			expect(textLabel).toBeInTheDocument();
		});

		test("Should show all options", () => {
			const firstOption = screen.getAllByText("Homme");
			const secondOption = screen.getAllByText("Femme");

			expect(firstOption).toBeTruthy();
			expect(secondOption).toBeTruthy();
		});

		test("Should change value of select", () => {
			const select = document.getElementById("idSelect");
			expect(select.value).toBe("man");
			fireEvent.change(select, { target: { value: "woman" } });
			expect(select.value).toBe("woman");
		});
	});
});
