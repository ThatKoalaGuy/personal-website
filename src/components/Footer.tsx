export default function Footer() {
	return (
		<footer className="text-white text-center p-6 space-y-4">
			<div className="flex justify-center space-x-6">
				<a href="mailto:domen.koder@gmail.com" aria-label="Email">
					<img
						src="/icons/email.png"
						alt="Email icon"
						className="w-12 h-12 hover:opacity-75"
					/>
				</a>
				<a
					href="https://github.com/thatkoalaguy"
					target="_blank"
					aria-label="GitHub"
				>
					<img
						src="/icons/github.png"
						alt="GitHub icon"
						className="w-12 h-12 hover:opacity-75"
					/>
				</a>
			</div>

			<p className="text-sm text-zinc-400">
				Made with ❤️ in sLOVEnia. &copy; 2025, Domen Koder.
			</p>
		</footer>
	);
}
