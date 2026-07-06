'use client';

import styled from 'styled-components';

export const SubHeroSlideStyle = styled.div<{ $isActive: boolean }>`
	position: absolute;
	inset: 0;
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	height: 100%;
	opacity: ${(props) => (props.$isActive ? 1 : 0)};
	visibility: ${(props) => (props.$isActive ? 'visible' : 'hidden')};
	z-index: ${(props) => (props.$isActive ? 20 : 10)};
	transition:
		opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1),
		visibility 0.8s ease;

	@media (min-width: 1024px) {
		grid-template-columns: 1.2fr 1fr;
	}

	@media only screen and (max-width: 400px) {
		width: 100%;
	}

	.hero-content-side {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 4rem 1.5rem;
		background-color: #0b1329;

		@media (min-width: 1024px) {
			padding: 0 4rem 0 6rem;
		}
	}

	.hero-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #34d399;
		margin-bottom: 2rem;

		.dot {
			color: #34d399;
		}
	}

	.hero-title {
		font-size: 2.25rem;
		font-weight: 800;
		line-height: 1.15;
		letter-spacing: -0.03em;
		color: #ffffff;
		margin-bottom: 1.5rem;

		@media (min-width: 768px) {
			font-size: 3.25rem;
		}
		@media (min-width: 1280px) {
			font-size: 4rem;
		}
	}

	.hero-title span {
		color: #a1a1aa;
	}

	.hero-description {
		font-size: 1rem;
		line-height: 1.6;
		color: #a1a1aa;
		max-width: 34rem;
		margin-bottom: 3rem;
	}

	.hero-cta-group {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		background-color: #ffffff;
		color: #09090b;
		font-weight: 600;
		font-size: 0.9rem;
		padding: 1rem 2rem;
		transition: all 0.2s ease;
		text-decoration: none;

		&:hover {
			background-color: #34d399;
		}
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		color: #ffffff;
		font-weight: 600;
		font-size: 0.9rem;
		padding: 1rem 2rem;
		border: 1px solid #3f3f46;
		transition: all 0.2s ease;
		text-decoration: none;

		&:hover {
			border-color: #ffffff;
			background-color: rgba(255, 255, 255, 0.05);
		}
	}

	.hero-visual-side {
		position: relative;
		background-color: #18181b;
		min-height: 35vh;

		@media (min-width: 1024px) {
			min-height: 100%;
		}
	}

	.hero-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.55;
		filter: grayscale(20%) contrast(105%);
	}

	.hero-overlay-card {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to top, #09090b 85%, transparent);
		padding: 2rem 1.5rem;

		@media (min-width: 1024px) {
			padding: 4rem;
		}
	}

	.hero-stat-label {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #71717a;
		margin-bottom: 0.25rem;
	}

	.hero-stat-value {
		font-size: 1.25rem;
		font-weight: 700;
		color: #ffffff;
		letter-spacing: -0.01em;
	}
`;
