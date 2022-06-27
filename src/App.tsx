import "./App.scss";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
	console.log(process.env);
	return (
		<>
			<div className="App container">
				<Navbar />
			</div>
		</>
	);
};
