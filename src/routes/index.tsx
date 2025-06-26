import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-2">
			<h1 className="text-center text-4xl font-extrabold text-gray-900">
				Trivia
			</h1>
		</div>
	);
}
