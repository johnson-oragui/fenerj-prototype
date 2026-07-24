'use client';

import { useEffect } from 'react';
import { NotFoundStyle } from './not-found';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div style={{ textAlign: 'center', padding: '50px' }}>
			<NotFoundStyle>
				<div className="content">
					<span className="code">500</span>
					<h1>Something went wrong!</h1>

					<button
						onClick={
							// try to recover by re-rendering the segment
							() => reset()
						}
						className="home-btn"
					>
						Try again
					</button>
				</div>
			</NotFoundStyle>
		</div>
	);
}
