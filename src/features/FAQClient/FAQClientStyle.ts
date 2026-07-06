'use client';

import styled from 'styled-components';

export const FAQClientStyle = styled.div`
	background-color: #0f172a;
	color: #f8fafc;
	min-height: 100vh;
	padding: 6rem 0;
	margin-top: 70px;

	.faq-container {
		max-width: 820px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.faq-header {
		text-align: center;
		margin-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		.badge-wrapper {
			display: inline-flex;
			align-items: center;
			gap: 0.5rem;
			background: rgba(59, 130, 246, 0.08);
			border: 1px solid rgba(59, 130, 246, 0.2);
			padding: 0.4rem 0.85rem;
			border-radius: 9999px;
			color: #3b82f6;
			font-size: 0.8rem;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			margin-bottom: 1.25rem;

			.badge-icon {
				width: 1rem;
				height: 1rem;
			}
		}

		h1 {
			font-size: 2.75rem;
			font-weight: 800;
			letter-spacing: -0.04em;
			color: #f8fafc;
			margin-bottom: 1rem;
			line-height: 1.15;

			@media (max-width: 640px) {
				font-size: 2.1rem;
			}
		}

		p {
			color: #94a3b8;
			font-size: 1.1rem;
			line-height: 1.6;
			max-width: 680px;
		}
	}

	.filter-tabs-wrapper {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
		border-bottom: 1px solid #1e293b;
		padding-bottom: 1.5rem;

		.filter-tab-btn {
			background: #1e293b;
			border: 1px solid #334155;
			color: #94a3b8;
			padding: 0.55rem 1.15rem;
			border-radius: 6px;
			font-size: 0.9rem;
			font-weight: 500;
			cursor: pointer;
			transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

			&:hover {
				background: #334155;
				color: #f8fafc;
			}

			&.active {
				background: #3b82f6;
				border-color: #3b82f6;
				color: #f8fafc;
				box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
			}
		}
	}

	.accordion-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.accordion-node-item {
		background: #0b1329;
		border: 1px solid #1e293b;
		border-radius: 12px;
		overflow: hidden;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;

		&:hover {
			border-color: #334155;
		}

		&.expanded {
			border-color: #3b82f6;
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

			.chevron-icon {
				transform: rotate(180deg);
				color: #3b82f6;
			}

			.accordion-content-panel {
				grid-template-rows: 1fr;
			}
		}
	}

	.accordion-trigger-header {
		width: 100%;
		background: transparent;
		border: none;
		padding: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		cursor: pointer;
		text-align: left;

		.question-text {
			font-size: 1.1rem;
			font-weight: 600;
			color: #f8fafc;
			line-height: 1.4;
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
			align-items: flex-start;
		}

		.category-tag {
			font-size: 0.7rem;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			color: #64748b;
		}

		.chevron-icon {
			width: 1.25rem;
			height: 1.25rem;
			color: #475569;
			flex-shrink: 0;
			transition:
				transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
				color 0.2s;
		}
	}

	.accordion-content-panel {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.25s cubic-bezier(0.16, 1, 0.3, 1);

		.content-inner-text {
			overflow: hidden;
		}

		p {
			padding: 0 1.5rem 1.75rem 1.5rem;
			color: #94a3b8;
			font-size: 0.95rem;
			line-height: 1.65;
		}
	}
`;
