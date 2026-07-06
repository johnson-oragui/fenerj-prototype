'use client';

import styled from 'styled-components';

export const HeroCarouselStyles = styled.section`
	position: relative;
	background-color: #0b1329;
	min-height: 95vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-bottom: 1px solid #27272a;
	overflow: hidden;
	@media only screen and (max-width: 400px) {
		width: 100%;
	}

	.slider-container {
		position: relative;
		flex-grow: 1;
		width: 100%;
	}

	.slider-nav-bar {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		padding: 2rem 1.5rem;
		background-color: #09090b;
		border-top: 1px solid #18181b;
		z-index: 30;

		@media (min-width: 768px) {
			grid-template-columns: repeat(9, 1fr);
			padding: 2rem 6rem;
		}
	}

	.nav-tab {
		background: none;
		border: none;
		text-align: left;
		padding: 0;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;

		&:hover .tab-name {
			color: #ffffff;
		}
	}

	.tab-track {
		width: 100%;
		height: 2px;
		background-color: #27272a;
		position: relative;
		overflow: hidden;
	}

	.tab-progress {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background-color: #34d399;
		width: 0%;
		transition: width 0.1s linear;

		&.active {
			width: 100%;
			transition: width 6s linear; /* Matches interval loop length */
		}

		&.completed {
			width: 100%;
			transition: none;
		}
	}

	.tab-name {
		font-size: 0.65rem;
		font-weight: 700;
		color: #52525b;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: color 0.2s ease;

		&.active {
			color: #34d399;
		}
	}
`;
