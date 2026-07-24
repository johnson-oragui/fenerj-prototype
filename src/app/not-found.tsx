'use client';

import Link from 'next/link';
import styled from 'styled-components';

export default function NotFound() {
	return (
		<NotFoundStyle>
			<div className="content">
				<span className="code">404</span>
				<h1>Page not found</h1>
				<p>
					Sorry, we couldn’t find the page you’re looking for. It might have
					been moved or deleted.
				</p>
				<Link href="/" className="home-btn">
					Back to homepage
				</Link>
			</div>
		</NotFoundStyle>
	);
}

export const NotFoundStyle = styled.main`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px;
	background-color: #0d1117;
	color: #f0f6fc;
	font-family:
		-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
		sans-serif;

	.content {
		max-width: 480px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.code {
		font-size: 5rem;
		font-weight: 800;
		line-height: 1;
		letter-spacing: -0.05em;
		color: #58a6ff;
		margin-bottom: 12px;
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
		margin: 0 0 12px 0;
		color: #ffffff;
	}

	p {
		font-size: 1rem;
		line-height: 1.5;
		color: #8b949e;
		margin: 0 0 32px 0;
	}

	.home-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 24px;
		font-size: 0.95rem;
		font-weight: 600;
		color: #ffffff;
		background-color: #238636;
		border-radius: 6px;
		text-decoration: none;
		transition:
			background-color 0.2s ease,
			transform 0.1s ease;

		&:hover {
			background-color: #2ea043;
		}

		&:active {
			transform: scale(0.98);
		}
	}
`;
