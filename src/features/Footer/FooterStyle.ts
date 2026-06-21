'use client';

import styled from 'styled-components';

export const FooterLayoutStyle = styled.footer`
	background-color: #0b1329;
	border-top: 1px solid #1e293b;
	padding: 5rem 0 2.5rem 0;
	color: #94a3b8;

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.footer-top {
		display: grid;
		grid-template-columns: 2fr repeat(3, 1fr);
		gap: 4rem;
		margin-bottom: 4rem;

		@media (max-width: 968px) {
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
		}

		@media (max-width: 480px) {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	.brand-column {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;

		.footer-logo {
			display: inline-block;
			transition: opacity 0.2s ease;

			&:hover {
				opacity: 0.85;
			}
		}

		.brand-desc {
			font-size: 0.95rem;
			line-height: 1.6;
			max-width: 340px;
		}
	}

	.link-column {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;

		h4 {
			color: #f8fafc;
			font-size: 1rem;
			font-weight: 600;
			letter-spacing: 0.05em;
			margin-bottom: 0.5rem;
			text-transform: uppercase;
		}

		.footer-link {
			color: #94a3b8;
			text-decoration: none;
			font-size: 0.9rem;
			transition:
				color 0.25s ease,
				transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
			display: inline-block;
			align-self: flex-start;

			&:hover {
				color: #3b82f6;
				transform: translateX(4px);
			}
		}

		.hq-address {
			font-style: normal;
			font-size: 0.9rem;
			line-height: 1.6;
			color: #94a3b8;
		}
	}

	.social-group {
		display: flex;
		gap: 0.85rem;
		margin-top: 0.5rem;

		.social-icon {
			width: 38px;
			height: 38px;
			border-radius: 8px;
			background: #1e293b;
			border: 1px solid #334155;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #94a3b8;
			transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

			svg {
				width: 1.15rem;
				height: 1.15rem;
				transition: transform 0.3s ease;
			}

			&:hover {
				background: #3b82f6;
				color: #f8fafc;
				border-color: #3b82f6;
				transform: translateY(-3px);
				box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);

				svg {
					transform: scale(1.05);
				}
			}
		}
	}

	.footer-bottom {
		border-top: 1px solid #1e293b;
		padding-top: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.875rem;
		color: #64748b;

		@media (max-width: 640px) {
			flex-direction: column;
			gap: 1.25rem;
			text-align: center;
		}

		.legal-links {
			display: flex;
			gap: 2rem;

			.footer-link {
				color: #64748b;
				text-decoration: none;
				transition: color 0.2s ease;

				&:hover {
					color: #94a3b8;
				}
			}
		}
	}
`;
