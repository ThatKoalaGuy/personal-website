import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import About from './pages/About';

function App() {
	return (
		<div className="bg-zinc-800 flex flex-col min-h-screen text-green-400 font-heading">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
