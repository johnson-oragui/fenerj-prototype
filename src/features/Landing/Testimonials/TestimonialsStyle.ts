'use client';

import styled from 'styled-components';

export const TestimonialStyle = styled.section`
	background-color: #0b1329;
	padding: 7rem 1rem;
	overflow: hidden;

	.section-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.testimonial-header {
		text-align: center;
		margin-bottom: 4rem;

		.section-tag {
			background: #1e3a8a;
			color: #60a5fa;
			font-size: 0.875rem;
			font-weight: 600;
			padding: 0.25rem 0.75rem;
			border-radius: 9999px;
			text-transform: uppercase;
			display: inline-block;
		}

		h2 {
			font-size: 2.25rem;
			font-weight: 800;
			margin-top: 1rem;
			color: #f8fafc;
			letter-spacing: -0.03em;
		}
	}

	.slider-viewport-track {
		cursor: grab;
		user-select: none;
		overflow-x: hidden;
		white-space: nowrap;
		padding: 2rem 0;
		will-change: scroll-left;

		&.grabbing {
			cursor: grabbing;

			.testimonial-card {
				transform: scale(0.98);
				border-color: rgba(59, 130, 246, 0.2);
			}
		}
	}

	.cards-flex-row {
		display: inline-flex;
		gap: 2rem;
	}

	.testimonial-card {
		background: #0f172a;
		border: 1px solid #1e293b;
		padding: 2.5rem;
		border-radius: 14px;
		width: 420px;
		white-space: normal;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;
		pointer-events: none;

		transition:
			transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
			border-color 0.3s ease;

		@media (max-width: 480px) {
			width: 300px;
			padding: 1.75rem;
		}

		.card-top {
			.quote-vector {
				color: #3b82f6;
				width: 2rem;
				height: 2rem;
				opacity: 0.8;
			}
		}

		.quote-text {
			color: #94a3b8;
			font-size: 0.95rem;
			line-height: 1.65;
			font-style: italic;
		}

		.author-metadata-block {
			border-top: 1px solid #1e293b;
			padding-top: 1.25rem;

			.author-name {
				color: #f8fafc;
				font-size: 1.05rem;
				font-weight: 600;
				margin-bottom: 0.25rem;
			}

			.author-role {
				color: #64748b;
				font-size: 0.825rem;
				font-weight: 500;

				.inst {
					color: #3b82f6;
				}
			}
		}
	}
`;
