import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="bg-zinc-800 text-green-400 px-6 py-4 shadow-md">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold">
					<Link to="/" className="hover:text-white transition">
						Domen Koder
					</Link>
				</div>

				<div className="space-x-6">
					<Link to="/portfolio" className="hover:text-white transition">
						Portfolio
					</Link>

					<Link to="/skills" className="hover:text-white transition">
						Skills
					</Link>

					<Link to="/about" className="hover:text-white transition">
						About me
					</Link>
				</div>
			</div>
		</nav>
	);
}
