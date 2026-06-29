'use client';

import styled, { keyframes } from 'styled-components';

const ambientGlow = keyframes`
  0%, 100% {
    border-color: #1e293b;
    box-shadow: 0 4px 30px rgba(15, 23, 42, 0.1);
  }
  50% {
    border-color: rgba(59, 130, 246, 0.25);
    box-shadow: 0 4px 30px rgba(59, 130, 246, 0.04);
  }
`;

const softFloat = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const ServicesLayout = styled.section`
	background-color: #0b1329;
	padding: 7rem 1rem;
	max-width: 100%;

	.services-container {
		max-width: 100%;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.services-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.services-tag {
		background: #1e3a8a;
		color: #60a5fa;
		font-size: 0.875rem;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		text-transform: uppercase;
		display: inline-block;
	}

	.services-title {
		font-size: 2.25rem;
		font-weight: 700;
		margin-top: 1rem;
		color: #f8fafc;
		letter-spacing: -0.03em;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.service-card {
		background: #1e293b;
		border: 1px solid #1e293b;
		padding: 2.5rem 2rem;
		border-radius: 12px;
		display: flex;
		flex-direction: column;

		animation: ${ambientGlow} 6s ease-in-out infinite;
		will-change: transform, border-color, box-shadow;
		transition:
			transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
			border-color 0.3s ease,
			box-shadow 0.3s ease;

		&:nth-child(even) {
			animation-delay: 1.5s;
		}
		&:nth-child(3n) {
			animation-delay: 3s;
		}

		&:hover {
			transform: translateY(-6px);
			border-color: #3b82f6;
			box-shadow: 0 12px 40px rgba(59, 130, 246, 0.12);
			animation-play-state: paused;

			.card-icon svg {
				animation: ${softFloat} 1.8s ease-in-out infinite;
				color: #60a5fa;
			}
		}
	}

	.card-icon {
		margin-bottom: 1.25rem;
		display: inline-flex;
		align-self: flex-start;

		svg {
			width: 2.25rem;
			height: 2.25rem;
			color: #3b82f6;
			transition: color 0.3s ease;
			will-change: transform;
		}
	}

	.card-title {
		font-size: 1.35rem;
		font-weight: 600;
		margin-bottom: 0.85rem;
		color: #f8fafc;
		letter-spacing: -0.01em;
	}

	.card-description {
		color: #94a3b8;
		font-size: 0.95rem;
		line-height: 1.65;
	}
`;
