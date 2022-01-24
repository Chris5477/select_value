import "./App.css";
import Select from "./lib/components/Select";
function App() {
	const testComponent = [
		{ value: "paris", text: "Paris" },
		{ value: "marseille", text: "Marseille" },
		{ value: "lyon", text: "Lyon" },
	];

	return (
		<div>
			<Select textLabel={"Votre ville :"} arr={testComponent} />
		</div>
	);
}

export default App;
