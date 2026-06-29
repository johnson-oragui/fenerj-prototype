'use client';

import styled from 'styled-components';
export const AboutLayoutStyle = styled.main`
	background-color: #0f172a;
	color: #f8fafc;
	max-width: 100%;
	padding-bottom: 5rem;

	.container {
		max-width: 100%;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.section-tag {
		background: #1e3a8a;
		color: #60a5fa;
		font-size: 0.875rem;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		text-transform: uppercase;
		display: inline-block;
		margin-bottom: 1rem;
	}

	.image-placeholder {
		background: linear-gradient(135deg, #1e293b 0%, #0b1329 100%);
		border: 1px dashed #334155;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #64748b;
		font-size: 0.875rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		padding: 2rem;
		text-align: center;

		span {
			font-size: 2rem;
			margin-bottom: 0.5rem;
		}
	}

	.about-hero {
		padding: 6rem 0 4rem 0;
		background: radial-gradient(circle at 50% 100%, #1e293b 0%, #0f172a 70%);
		text-align: center;

		h1 {
			font-size: 3rem;
			font-weight: 800;
			letter-spacing: -0.04em;
			margin-bottom: 1.5rem;
			color: #f8fafc;
		}

		.vision-quote {
			max-width: 800px;
			margin: 2rem auto 0 auto;
			border-left: 4px solid #3b82f6;
			background: rgba(30, 41, 59, 0.5);
			padding: 1.5rem 2rem;
			border-radius: 0 12px 12px 0;
			text-align: left;

			p {
				font-size: 1.25rem;
				font-style: italic;
				line-height: 1.6;
				color: #e2e8f0;
				font-weight: 500;
			}

			cite {
				display: block;
				margin-top: 0.75rem;
				font-size: 0.875rem;
				color: #3b82f6;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.1em;
				font-style: normal;
			}
		}
	}

	.overview-section {
		padding: 4rem 0;

		.grid-split {
			display: grid;
			grid-template-columns: 1.2fr 1fr;
			gap: 4rem;
			align-items: center;

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
				gap: 2.5rem;
			}
		}

		.content-pane {
			h2 {
				font-size: 2.25rem;
				font-weight: 700;
				margin-bottom: 1.5rem;
				color: #f8fafc;
			}
			p {
				color: #94a3b8;
				line-height: 1.7;
				margin-bottom: 1.25rem;
				font-size: 1.05rem;
			}
		}

		.metrics-box {
			height: 320px;
			border: 1px solid #1e293b;
			position: relative;
			justify-content: space-evenly;

			.metric-badge {
				background: #0f172a;
				border: 1px solid #334155;
				border-radius: 8px;
				padding: 1rem 2rem;
				text-align: center;

				.value {
					font-size: 1.75rem;
					font-weight: 800;
					color: #3b82f6;
					display: block;
				}
				.label {
					font-size: 0.875rem;
					color: #94a3b8;
					margin-top: 0.25rem;
				}
			}
		}
	}

	.team-section {
		padding: 5rem 0;
		background-color: #0b1329;

		.team-header {
			text-align: center;
			margin-bottom: 4rem;
			h2 {
				font-size: 2.25rem;
				font-weight: 700;
			}
		}

		.team-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
			gap: 2rem;
		}

		.team-card {
			background: #1e293b;
			border: 1px solid #334155;
			border-radius: 12px;
			overflow: hidden;
			transition:
				transform 0.2s ease,
				border-color 0.2s ease;

			&:hover {
				transform: translateY(-4px);
				border-color: #3b82f6;
			}

			.member-avatar-placeholder {
				height: 220px;
				border-radius: 0;
				border: none;
				border-bottom: 1px solid #334155;
			}

			.member-info {
				padding: 1.5rem;

				h4 {
					font-size: 1.15rem;
					font-weight: 600;
					color: #f8fafc;
					margin-bottom: 0.25rem;
				}
				p {
					color: #3b82f6;
					font-size: 0.875rem;
					font-weight: 500;
				}
			}
		}
	}

	.portfolio-section {
		padding: 5rem 0;

		.portfolio-grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 4rem;

			@media (max-width: 968px) {
				grid-template-columns: 1fr;
				gap: 3rem;
			}
		}

		h3 {
			font-size: 1.75rem;
			font-weight: 700;
			margin-bottom: 1.5rem;
			color: #f8fafc;
		}

		.client-list,
		.milestone-list {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.list-item {
			background: #1e293b;
			border-left: 3px solid #3b82f6;
			padding: 1.25rem;
			border-radius: 0 8px 8px 0;

			strong {
				color: #f8fafc;
				display: block;
				font-size: 1.05rem;
				margin-bottom: 0.25rem;
			}
			span {
				color: #94a3b8;
				font-size: 0.9rem;
			}
		}
	}

	.philosophy-section {
		padding: 5rem 0;
		background: linear-gradient(180deg, #0b1329 0%, #0f172a 100%);

		.quote-grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2.5rem;
			margin-bottom: 4rem;

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
			}
		}

		.phil-card {
			background: #1e293b;
			border: 1px dashed #334155;
			padding: 2rem;
			border-radius: 12px;

			p {
				font-style: italic;
				color: #e2e8f0;
				font-size: 1.1rem;
				line-height: 1.6;
				margin-bottom: 1rem;
			}
			cite {
				color: #60a5fa;
				font-weight: 600;
				font-style: normal;
				font-size: 0.9rem;
			}
		}

		.closing-cta {
			border: 1px solid #1e293b;
			border-radius: 16px;
			padding: 3rem;
			text-align: center;
			background: radial-gradient(circle at 50% 50%, #1e293b 0%, #0b1329 100%);

			h3 {
				font-size: 2rem;
				margin-bottom: 1rem;
			}
			p {
				color: #94a3b8;
				max-width: 600px;
				margin: 0 auto 2rem auto;
			}

			.contact-meta {
				display: flex;
				justify-content: center;
				gap: 2.5rem;
				margin-top: 2rem;
				flex-wrap: wrap;
				font-size: 0.9rem;
				color: #94a3b8;

				span strong {
					color: #f8fafc;
				}
			}
		}
	}
`;
