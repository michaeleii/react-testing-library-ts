import "./Header.css";

export default function Header({ title }: { title: string }) {
	return (
		<>
			<h1 title="Header" className="header">
				{title}
			</h1>
		</>
	);
}
