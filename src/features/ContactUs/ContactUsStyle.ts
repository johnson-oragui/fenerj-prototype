'use client';

import styled from 'styled-components';

export const ContactLayout = styled.div`
	background-color: #0f172a;
	color: #f8fafc;
	min-height: 100vh;
	padding: 6rem 0;
	max-width: 100%;
	margin-top: 70px;

	.contact-container {
		max-width: 100%;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.contact-header {
		max-width: 700px;
		margin-bottom: 4.5rem;

		h1 {
			font-size: 3rem;
			font-weight: 800;
			letter-spacing: -0.04em;
			margin-bottom: 1rem;
			color: #f8fafc;
			line-height: 1.15;

			@media (max-width: 640px) {
				font-size: 2.25rem;
			}
		}

		p {
			color: #94a3b8;
			font-size: 1.15rem;
			line-height: 1.6;
		}
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 7fr 4fr;
		gap: 4rem;
		align-items: start;

		@media (max-width: 968px) {
			grid-template-columns: 1fr;
			gap: 3.5rem;
		}
	}

	.form-card-panel {
		background: #0b1329;
		border: 1px solid #1e293b;
		border-radius: 16px;
		padding: 3rem;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

		@media (max-width: 640px) {
			padding: 1.75rem;
		}

		.intake-form {
			display: flex;
			flex-direction: column;
			gap: 1.75rem;
		}

		.form-group-row {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1.5rem;

			@media (max-width: 640px) {
				grid-template-columns: 1fr;
				gap: 1.75rem;
			}
		}

		.form-field {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			label {
				font-size: 0.85rem;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.05em;
				color: #94a3b8;
			}

			input,
			select,
			textarea {
				background: #1e293b;
				border: 1px solid #334155;
				border-radius: 8px;
				padding: 0.85rem 1rem;
				color: #f8fafc;
				font-size: 0.95rem;
				transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
				width: 100%;

				&::placeholder {
					color: #475569;
				}

				&:focus {
					outline: none;
					border-color: #3b82f6;
					background: #1e293b;
					box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
				}
			}

			select {
				appearance: none;
				background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
				background-repeat: no-repeat;
				background-position: right 1rem center;
				background-size: 1rem;
				padding-right: 2.5rem;
			}

			textarea {
				resize: vertical;
				font-family: inherit;
			}
		}

		.submit-action-btn {
			background: #3b82f6;
			color: #f8fafc;
			border: none;
			border-radius: 8px;
			padding: 1rem 2rem;
			font-size: 1rem;
			font-weight: 600;
			cursor: pointer;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			gap: 0.75rem;
			transition: all 0.25s ease;
			margin-top: 0.5rem;
			align-self: flex-start;

			@media (max-width: 640px) {
				width: 100%;
			}

			&:hover {
				background: #2563eb;
				transform: translateY(-1px);
				box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
			}

			.btn-icon {
				width: 1.1rem;
				height: 1.1rem;
			}
		}

		.submission-success-state {
			text-align: center;
			padding: 3rem 1rem;
			display: flex;
			flex-direction: column;
			align-items: center;

			.success-icon {
				color: #10b981;
				width: 4rem;
				height: 4rem;
				margin-bottom: 1.5rem;
			}

			h2 {
				font-size: 1.75rem;
				font-weight: 700;
				margin-bottom: 0.75rem;
				color: #f8fafc;
			}

			p {
				color: #94a3b8;
				line-height: 1.6;
				max-width: 480px;
				margin-bottom: 2rem;
				font-size: 1rem;
			}

			.reset-btn {
				background: #1e293b;
				color: #f8fafc;
				border: 1px solid #334155;
				padding: 0.75rem 1.5rem;
				border-radius: 6px;
				cursor: pointer;
				font-weight: 500;
				transition: background 0.2s ease;

				&:hover {
					background: #334155;
				}
			}
		}
	}

	.info-directory-panel {
		.directory-sticky-wrapper {
			position: sticky;
			top: 3rem;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		.info-node {
			display: flex;
			gap: 1.25rem;
			align-items: flex-start;

			.icon-badge {
				width: 46px;
				height: 46px;
				border-radius: 10px;
				background: rgba(59, 130, 246, 0.08);
				border: 1px solid rgba(59, 130, 246, 0.2);
				display: flex;
				align-items: center;
				justify-content: center;
				color: #3b82f6;
				flex-shrink: 0;

				svg {
					width: 1.35rem;
					height: 1.35rem;
				}
			}

			.node-details {
				h3 {
					font-size: 1.05rem;
					font-weight: 600;
					color: #f8fafc;
					margin-bottom: 0.4rem;
					letter-spacing: -0.01em;
				}

				address {
					font-style: normal;
					color: #94a3b8;
					font-size: 0.95rem;
					line-height: 1.6;
				}

				.contact-link-text {
					font-size: 1.15rem;
					font-weight: 700;
					color: #f8fafc;
					display: block;
					margin-bottom: 0.15rem;
					text-decoration: none;
				}

				.mail-anchor {
					color: #3b82f6;
					font-weight: 600;
					transition: color 0.2s ease;

					&:hover {
						color: #2563eb;
						text-decoration: underline;
					}
				}

				.timing-text {
					font-size: 0.95rem;
					color: #e2e8f0;
					font-weight: 500;
					margin-bottom: 0.15rem;
				}

				.sub-label {
					font-size: 0.8rem;
					color: #64748b;
					text-transform: uppercase;
					letter-spacing: 0.05em;
					font-weight: 500;
				}
			}
		}
	}
`;
