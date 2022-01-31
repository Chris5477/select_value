import Select, { handleChange } from "./Select";
import { render, screen, fireEvent } from "@testing-library/react";
describe("Given a new package npm", () => {
	const array = [
		{ value: "man", text: "Homme" },
		{ value: "woman", text: "Femme" },
	];

	describe("When i mount sellect component", () => {
		test("It should not crash at the time of render", () => {
			render(<Select arr={array} />);
		});
	});

	describe("When i click on select or option", () => {
		beforeEach(() => render(<Select arr={array} />));

		test("It should show to user, a list of option", async () => {
			const select = screen.getByTestId("jest");
			fireEvent.click(select);
			expect(screen.getAllByText(array[0].text)).toBeTruthy();
		});
	});
});
