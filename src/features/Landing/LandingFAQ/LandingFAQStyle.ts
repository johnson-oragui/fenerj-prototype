'use client';

import styled from 'styled-components';

export const LandingFAQStyle = styled.section`
	background-color: #0f172a;
	padding: 7rem 1rem;
	border-top: 1px solid #1e293b;
	color: #f8fafc;
	max-width: 100%;

	.landing-faq-container {
		max-width: 100%;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: grid;
		grid-template-columns: 4fr 7fr;
		gap: 5rem;
		align-items: start;

		@media (max-width: 968px) {
			grid-template-columns: 1fr;
			gap: 3.5rem;
		}
	}

	.faq-side-meta {
		position: sticky;
		top: 6rem;

		@media (max-width: 968px) {
			position: relative;
			top: 0;
		}

		.context-tag {
			color: #3b82f6;
			font-size: 0.8rem;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			display: inline-block;
			margin-bottom: 0.75rem;
		}

		h2 {
			font-size: 2.5rem;
			font-weight: 800;
			letter-spacing: -0.03em;
			line-height: 1.2;
			margin-bottom: 1.25rem;
			color: #f8fafc;

			@media (max-width: 640px) {
				font-size: 2rem;
			}
		}

		p {
			color: #94a3b8;
			font-size: 1.05rem;
			line-height: 1.6;
			margin-bottom: 2.5rem;
		}

		.cta-helper-text {
			border-top: 1px solid #1e293b;
			padding-top: 1.5rem;
			display: flex;
			flex-direction: column;
			gap: 0.35rem;

			span {
				font-size: 0.85rem;
				color: #64748b;
			}

			a {
				color: #3b82f6;
				font-weight: 600;
				text-decoration: none;
				font-size: 0.95rem;
				display: inline-flex;
				align-items: center;

				&:hover {
					color: #2563eb;
					text-decoration: underline;
				}
			}
		}
	}
	.faq-accordion-stack {
		display: flex;
		flex-direction: column;
	}

	.accordion-row {
		border-bottom: 1px solid #1e293b;
		transition: all 0.25s ease;

		&:first-child {
			border-top: 1px solid #1e293b;
		}

		&.row-active {
			border-bottom-color: rgba(59, 130, 246, 0.4);

			.state-icon-badge {
				background: #3b82f6;
				color: #f8fafc;
				border-color: #3b82f6;
				transform: rotate(180deg);
			}

			.accordion-body-viewport {
				grid-template-rows: 1fr;
			}
		}
	}

	.accordion-trigger-btn {
		width: 100%;
		background: transparent;
		border: none;
		padding: 1.75rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		cursor: pointer;
		text-align: left;

		.question-text {
			font-size: 1.15rem;
			font-weight: 600;
			color: #f8fafc;
			line-height: 1.4;
			transition: color 0.2s ease;

			@media (max-width: 640px) {
				font-size: 1.05rem;
			}
		}

		&:hover .question-text {
			color: #3b82f6;
		}

		.state-icon-badge {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			border: 1px solid #334155;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #94a3b8;
			flex-shrink: 0;
			transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

			svg {
				width: 0.95rem;
				height: 0.95rem;
			}
		}
	}

	.accordion-body-viewport {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.25s cubic-bezier(0.16, 1, 0.3, 1);

		.body-inner-content {
			overflow: hidden;
		}

		p {
			padding: 0 0 1.75rem 0;
			color: #94a3b8;
			font-size: 0.975rem;
			line-height: 1.65;
			max-width: 640px;
		}
	}
`;
