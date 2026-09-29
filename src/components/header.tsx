export default function Header() {
	return (
		<header className="site-header">
			<a className="site-header__logo" href="/">
				Weboldalam
			</a>

			<nav aria-label="Fő navigáció">
				<ul className="site-header__nav">
					<li>
						<a href="#fooldal">Főoldal</a>
					</li>
					<li>
						<a href="#rolunk">Rólunk</a>
					</li>
					<li>
						<a href="#kapcsolat">Kapcsolat</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}