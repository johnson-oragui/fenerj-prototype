'use client';

import styled from 'styled-components';

export const PortfolioSectionStyle = styled.section<{
	theme: { featuredHeight: string };
}>`
	background-color: #0b1329;
	color: #fafafa;
	padding: 6rem 1.5rem;
	border-bottom: 1px solid #27272a;
	border-top: 1px solid #27272a;
	font-family:
		system-ui,
		-apple-system,
		sans-serif;
	width: 100%;

	@media (min-width: 1024px) {
		padding: 8rem 6rem;
	}

	.portfolio-meta {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 4rem;
		border-bottom: 1px solid #18181b;
		padding-bottom: 3rem;
		width: 100%;

		@media (min-width: 1024px) {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-end;
		}
	}

	.portfolio-tag {
		font-size: 0.75rem;
		font-weight: 600;
		color: #34d399;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: 0.75rem;
		display: block;
	}

	.portfolio-title {
		font-size: 2.25rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.1;
		max-width: 36rem;
		color: #ffffff;

		@media (min-width: 768px) {
			font-size: 3rem;
		}
	}

	.portfolio-subtitle {
		font-size: 1rem;
		color: #a1a1aa;
		max-width: 26rem;
		line-height: 1.6;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
		width: 100%;

		@media (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 1280px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 768px) {
		.project-card:nth-child(4n - 1) {
			grid-column: 1 / -1;
			display: flex;
			flex-direction: row;
			align-items: stretch;

			.image-container {
				width: 45%;
				height: auto;
				min-height: 360px;
			}

			.project-details-pane {
				width: 55%;
			}
		}
	}
	@media (min-width: 768px) {
		.project-card:last-child {
			grid-column: 1 / -1;
			display: flex;
			flex-direction: row;
			align-items: stretch;

			.image-container {
				width: 45%;
				height: auto;
				min-height: 360px;
			}

			.project-details-pane {
				width: 55%;
			}
		}
	}

	@media (max-width: 767px) {
		.project-card:last-child {
			flex-direction: column;

			.image-container {
				width: 100%;
				height: 320px;
			}
		}
	}

	@media (min-width: 1280px) {
		.project-card:nth-child(4n + 1) {
			grid-column: span 2;
		}
	}

	.project-card {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		background-color: #121214;
		border: 1px solid #18181b;
		position: relative;
		transition: border-color 0.3s ease;

		&:hover {
			border-color: #3f3f46;
		}
	}

	.image-container {
		position: relative;
		width: 100%;
		height: 320px;
		overflow: hidden;
		background-color: #18181b;

		@media (min-width: 1280px) {
			/* Dynamic height adaptation for wide featured blocks */
			height: ${(props) => props.theme.featuredHeight || '360px'};
		}
	}

	.image-container {
		position: relative;
		width: 100%;
		inset: 0;
		opacity: 0.7;
	}

	.project-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(15%) contrast(105%);
		transition:
			transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
			filter 0.4s ease;
	}

	.project-card:hover .project-image {
		transform: scale(1.04);
		filter: grayscale(0%) contrast(100%);
	}

	.project-category-badge {
		position: absolute;
		top: 1rem;
		left: 1rem;
		background-color: rgba(9, 9, 11, 0.85);
		backdrop-filter: blur(4px);
		border: 1px solid #27272a;
		padding: 0.35rem 0.75rem;
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #e4e4e7;
	}

	.project-details-pane {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-grow: 1;
	}

	.project-header-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}

	.project-name {
		font-size: 1.35rem;
		font-weight: 700;
		color: #ffffff;
		transition: color 0.2s ease;
	}

	.project-card:hover .project-name {
		color: #34d399;
	}

	.action-arrow-icon {
		color: #52525b;
		transform: translate(-2px, 2px);
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		flex-shrink: 0;
	}

	.project-card:hover .action-arrow-icon {
		color: #34d399;
		transform: translate(0, 0);
	}

	.project-desc-excerpt {
		font-size: 0.9rem;
		line-height: 1.5;
		color: #a1a1aa;
		margin-bottom: 2rem;
	}

	.project-footer-specs {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		border-top: 1px dashed #27272a;
		padding-top: 1.25rem;
	}

	.spec-item {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.75rem;
		color: #71717a;

		svg {
			color: #34d399;
		}
	}

	.spec-highlight {
		color: #e4e4e7;
		font-weight: 500;
	}
`;
