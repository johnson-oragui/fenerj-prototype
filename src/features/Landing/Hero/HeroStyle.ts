'use client';

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const subtleGlow = keyframes`
  0%, 100% {
    background-position: 0% 30%;
  }
  50% {
    background-position: 50% 40%;
  }
`;

// Pure CSS text-reveal sequence
const textReveal = keyframes`
  0% {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(10px);
  }
  15%, 85% {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(-10px);
  }
`;

export const HeroLayout = styled.section`
	position: relative;
	min-height: 100vh;
	background-color: #0b1329;
	display: flex;
	align-items: center;
	overflow: hidden;

	background: radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 70%);
	background-size: 150% 150%;
	animation: ${subtleGlow} 12s ease infinite;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url('https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR8X7I4sUPdx5I09F6tI5rslLEU8kcHgZ2WboTpnIXV8oyy2oYmRB0UtC64WauNh_AKsE3MZVUM8Qfp4eY');
		background-size: cover;
		background-position: center;
		opacity: 0.15;
		z-index: 1;
		pointer-events: none;
	}

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(11, 19, 41, 0.4) 0%,
			#0f172a 100%
		);
		z-index: 2;
		pointer-events: none;
	}

	.hero-container {
		position: relative;
		z-index: 10;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-title {
		font-size: 3.5rem;
		font-weight: 800;
		line-height: 1.2;
		letter-spacing: -0.05em;
		max-width: 800px;
		margin-bottom: 1.5rem;
		opacity: 0;
		animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: 0.1s;

		span {
			color: #3b82f6;
		}

		.rotating-text {
			color: #3b82f6;
			display: inline-block;
			white-space: nowrap;
			animation: ${textReveal} 3.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
			will-change: transform, opacity, filter;
		}

		@media (max-width: 768px) {
			font-size: 2.5rem;

			.rotating-text {
				display: block;
				white-space: normal;
			}
		}
	}

	.hero-subtitle {
		font-size: 1.25rem;
		color: #94a3b8;
		max-width: 600px;
		margin-bottom: 2.5rem;
		line-height: 1.6;
		opacity: 0;
		animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: 0.3s;
	}

	.hero-button-group {
		display: flex;
		gap: 1rem;
		justify-content: center;
		opacity: 0;
		animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: 0.5s;

		@media (max-width: 480px) {
			flex-direction: column;
			width: 100%;
			max-width: 300px;

			button {
				width: 100%;
			}
		}
	}
`;
