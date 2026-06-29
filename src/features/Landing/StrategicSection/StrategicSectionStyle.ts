'use client';

import styled, { keyframes } from 'styled-components';

const gridPulse = keyframes`
  0%, 100% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.55;
  }
`;

const floatNode1 = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-5px, -10px); }
`;

const floatNode2 = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(8px, -6px); }
`;

const floatNode3 = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-6px, 8px); }
`;

export const StrategyLayoutStyle = styled.section`
	padding: 7rem 1rem;
	background-color: #0f172a;
	max-width: 100%;

	.strategy-container {
		max-width: 100%;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.split-section {
		display: grid;
		grid-template-columns: 1.12fr 1fr;
		gap: 5rem;
		align-items: center;

		@media (max-width: 968px) {
			grid-template-columns: 1fr;
			gap: 4rem;
		}
	}

	.content-block {
		.strategy-tag {
			background: #1e3a8a;
			color: #60a5fa;
			font-size: 0.875rem;
			font-weight: 600;
			padding: 0.25rem 0.75rem;
			border-radius: 9999px;
			text-transform: uppercase;
			display: inline-block;
		}

		h3 {
			font-size: 2.25rem;
			font-weight: 800;
			margin-top: 1rem;
			margin-bottom: 1.25rem;
			color: #f8fafc;
			line-height: 1.25;
			letter-spacing: -0.03em;
		}

		p {
			color: #94a3b8;
			line-height: 1.7;
			margin-bottom: 1.5rem;
			font-size: 1rem;
		}

		/* Partner Roll Layout */
		.partner-roll {
			margin-bottom: 2.5rem;
			border-top: 1px solid #1e293b;
			padding-top: 1.5rem;

			h4 {
				font-size: 0.85rem;
				text-transform: uppercase;
				letter-spacing: 0.05em;
				color: #64748b;
				margin-bottom: 1rem;
				font-weight: 600;
			}

			.partner-grid {
				display: flex;
				flex-wrap: wrap;
				gap: 0.75rem;
			}

			.partner-pill {
				background: #1e293b;
				border: 1px solid #334155;
				padding: 0.4rem 0.85rem;
				border-radius: 6px;
				display: inline-flex;
				align-items: center;
				gap: 0.5rem;
				transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

				.dot {
					width: 6px;
					height: 6px;
					border-radius: 50%;
					background: #475569;
					transition: background 0.25s ease;
				}

				.name {
					font-size: 0.85rem;
					color: #94a3b8;
					font-weight: 500;
					transition: color 0.25s ease;
				}

				&:hover {
					border-color: #3b82f6;
					background: rgba(59, 130, 246, 0.04);
					transform: translateY(-2px);

					.dot {
						background: #3b82f6;
					}
					.name {
						color: #f8fafc;
					}
				}
			}
		}
	}

	.infra-map-canvas {
		position: relative;
		background: linear-gradient(135deg, #1e293b 0%, #0b1329 100%);
		border: 1px solid #334155;
		border-radius: 12px;
		height: 380px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		will-change: transform;
		box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.3);

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background-image:
				linear-gradient(
					to right,
					rgba(59, 130, 246, 0.08) 1px,
					transparent 1px
				),
				linear-gradient(
					to bottom,
					rgba(59, 130, 246, 0.08) 1px,
					transparent 1px
				);
			background-size: 28px 28px;
			animation: ${gridPulse} 5s ease-in-out infinite;
		}

		&::after {
			content: '';
			position: absolute;
			width: 200px;
			height: 200px;
			background: #3b82f6;
			border-radius: 50%;
			filter: blur(90px);
			opacity: 0.12;
			pointer-events: none;
		}

		.canvas-label {
			color: #3b82f6;
			font-weight: 700;
			letter-spacing: 0.15em;
			font-size: 0.8rem;
			z-index: 5;
			border: 1px solid rgba(59, 130, 246, 0.3);
			padding: 0.75rem 1.5rem;
			border-radius: 6px;
			background: rgba(11, 19, 41, 0.75);
			backdrop-filter: blur(6px);
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		}

		.node {
			position: absolute;
			width: 44px;
			height: 44px;
			border-radius: 50%;
			background: #1e293b;
			border: 1px solid #334155;
			color: #60a5fa;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.25rem;
			z-index: 2;
			transition: all 0.3s ease;

			&:hover {
				border-color: #3b82f6;
				color: #f8fafc;
				background: #3b82f6;
				box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
			}
		}

		.node-vsat {
			top: 15%;
			left: 20%;
			animation: ${floatNode1} 6s ease-in-out infinite;
		}

		.node-power {
			top: 22%;
			right: 22%;
			animation: ${floatNode2} 7s ease-in-out infinite 0.5s;
		}

		.node-server {
			bottom: 20%;
			left: 25%;
			animation: ${floatNode3} 6.5s ease-in-out infinite 1s;
		}

		.node-security {
			bottom: 15%;
			right: 18%;
			animation: ${floatNode1} 8s ease-in-out infinite 1.5s;
		}
	}
`;
