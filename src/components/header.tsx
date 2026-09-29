interface FejlecProps {
	cim: string;
	alcim: string;
}

export function Fejlec(props: FejlecProps) {
	return (
		<header>
			<h1>{props.cim}</h1>
			<h2>{props.alcim}</h2>
		</header>
	);
}