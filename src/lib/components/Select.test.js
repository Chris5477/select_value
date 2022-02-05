import Select from "./Select";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Given a new package npm", () => {
	const array = [
		{ value: "man", text: "Homme" },
		{ value: "woman", text: "Femme" },
	];

	describe("Testin Select component", () => {
		test("Should render component", () => {
			render(
				<Select
					id={"idSelect"}
					textLabel={"Votre sexe :"}
					selectClass={"select-class"}
					handleChange={() => null}
					optionClass={"class-option"}
					arr={array}
				/>
			);
			const textLabel = document.getElementById("idSelect");
			expect(textLabel).toBeInTheDocument();
		});

		test("Should show all options", () => {
			render(
				<Select
					id={"idSelect"}
					textLabel={"Votre sexe :"}
					selectClass={"select-class"}
					handleChange={() => null}
					optionClass={"class-option"}
					arr={array}
				/>
			);
			const firstOption = screen.getAllByText("Homme");
			const secondOption = screen.getAllByText("Femme");

			expect(firstOption).toBeTruthy();
			expect(secondOption).toBeTruthy();
		});

		test("Should call handleChange", () => {
			const mockChange = jest.fn();
			render(
				<Select
					id={"idSelect"}
					textLabel={"Votre sexe :"}
					selectClass={"select-class"}
					handleChange={mockChange}
					optionClass={"class-option"}
					arr={array}
				/>
			);
			const select = document.getElementById("idSelect");
			fireEvent.change(select);
			expect(mockChange.mock.calls.length).toBe(1);
		});
	});
});
