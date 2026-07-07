'use client';

import styled from 'styled-components';

interface LayoutProps {
	$viewState: 'sidebar' | 'content';
}

export const PrivacyLayout = styled.div<LayoutProps>`
	background-color: #0f172a;
	color: #f8fafc;
	min-height: 100vh;
	padding: 4rem 0;
	max-width: 100%;
	margin-top: 70px;

	.privacy-container {
		max-width: 100%;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	\ .mobile-header-toggle {
		display: none;
		background: #1e293b;
		border: 1px solid #334155;
		padding: 1rem;
		border-radius: 8px;
		margin-bottom: 1.5rem;
		position: sticky;
		top: 10px;
		z-index: 100;

		.toggle-btn {
			background: transparent;
			border: none;
			color: #3b82f6;
			font-weight: 600;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 0.95rem;
			cursor: pointer;
		}

		.mobile-title-banner {
			color: #94a3b8;
			font-weight: 500;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 0.95rem;
		}

		@media (max-width: 768px) {
			display: block;
		}
	}

	/* --- Main Split Grid Wrapper --- */
	.split-grid-wrapper {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 4rem;
		align-items: start;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			gap: 0;
		}
	}

	.toc-sidebar {
		position: sticky;
		top: 2rem;

		@media (max-width: 768px) {
			position: static;
			display: ${(props) =>
				props.$viewState === 'sidebar' ? 'block' : 'none'};
		}

		.sidebar-sticky-node {
			background: #0b1329;
			border: 1px solid #1e293b;
			padding: 2rem 1.5rem;
			border-radius: 12px;
		}

		.sidebar-brand-title {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			margin-bottom: 0.25rem;

			.shield-icon {
				color: #3b82f6;
				width: 1.5rem;
				height: 1.5rem;
			}

			h3 {
				font-size: 1.2rem;
				font-weight: 700;
				color: #f8fafc;
			}
		}

		.last-updated {
			font-size: 0.75rem;
			color: #64748b;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			margin-bottom: 2rem;
		}

		.toc-navigation-links {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.toc-anchor-link {
			background: transparent;
			border: none;
			text-align: left;
			color: #94a3b8;
			font-size: 0.9rem;
			font-weight: 500;
			padding: 0.6rem 0.75rem;
			border-radius: 6px;
			cursor: pointer;
			transition: all 0.2s ease;

			&:hover {
				background: rgba(59, 130, 246, 0.06);
				color: #3b82f6;
				transform: translateX(4px);
			}
		}
	}

	.legal-content-pane {
		@media (max-width: 768px) {
			display: ${(props) =>
				props.$viewState === 'content' ? 'block' : 'none'};
		}

		.content-intro {
			border-bottom: 1px solid #1e293b;
			padding-bottom: 2rem;
			margin-bottom: 2.5rem;

			h1 {
				font-size: 2.5rem;
				font-weight: 800;
				letter-spacing: -0.04em;
				margin-bottom: 0.75rem;
				color: #f8fafc;
			}

			p {
				color: #94a3b8;
				font-size: 1.05rem;
				line-height: 1.6;
			}
		}

		.document-body {
			display: flex;
			flex-direction: column;
			gap: 3rem;
		}

		.document-node-section {
			scroll-margin-top: 2rem;

			h2 {
				font-size: 1.4rem;
				font-weight: 600;
				color: #f8fafc;
				margin-bottom: 1rem;
				letter-spacing: -0.02em;
			}

			p {
				color: #94a3b8;
				font-size: 1rem;
				line-height: 1.75;
			}
		}

		.document-closure-notice {
			margin-top: 5rem;
			border-top: 1px solid #1e293b;
			padding-top: 1.5rem;
			font-size: 0.85rem;
			color: #475569;
		}
	}
`;
