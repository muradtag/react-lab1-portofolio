import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portofolio from "./Components/Portofolio/Portofolio";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Hero />
			<About />
			<Skills />
			<Portofolio />
			<Footer />
		</div>
	);
}

export default App;
