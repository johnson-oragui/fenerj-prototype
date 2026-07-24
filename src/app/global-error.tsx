'use client';

import { NotFoundStyle } from './not-found';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	console.log(error);
	return (
		<html>
			<body>
				<NotFoundStyle>
					<div className="content">
						<span className="code">500</span>
						<h1>A critical error occurred.</h1>
						<p>
							Sorry, we couldn’t find the page you’re looking for. It might have
							been moved or deleted.
						</p>
						<button onClick={() => reset()} className="home-btn">
							Try again
						</button>
					</div>
				</NotFoundStyle>
			</body>
		</html>
	);
}
