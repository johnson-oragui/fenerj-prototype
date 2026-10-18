"use client";

import { styled } from "styled-components";

export const ProjectsStyle = styled.section`
	background-color: #0a1128;
	color: #ffffff;
	min-height: 100vh;
	max-width: 1280px;
	margin: 0 auto;
	padding: 4rem 1.5rem;
	font-family:
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		"Segoe UI",
		Roboto,
		sans-serif;

	@media (max-width: 768px) {
		padding: 2.5rem 1rem;
	}

	.portfolio_header {
		text-align: center;
		max-width: 720px;
		margin: 0 auto 3rem auto;
	}

	.portfolio_subtitle {
		color: #38bdf8;
		font-weight: 700;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
	}

	.portfolio_title {
		font-size: 2.5rem;
		font-weight: 800;
		color: #ffffff;
		letter-spacing: -0.025em;
		margin-bottom: 1rem;

		@media (max-width: 768px) {
			font-size: 1.875rem;
		}
	}

	.portfolio_description {
		font-size: 1.125rem;
		color: #94a3b8;
		line-height: 1.6;

		@media (max-width: 768px) {
			font-size: 1rem;
		}
	}

	.tabs_container {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		border-bottom: 2px solid #1e293b;
		padding-bottom: 0.75rem;
		margin-bottom: 2.5rem;
		overflow-x: auto;
		white-space: nowrap;

		&::-webkit-scrollbar {
			height: 4px;
		}
		&::-webkit-scrollbar-thumb {
			background: #334155;
			border-radius: 4px;
		}

		@media (max-width: 640px) {
			justify-content: flex-start;
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
	}

	.tab_button {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		font-weight: 600;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 0.25s ease-in-out;
		background-color: transparent;
		color: #94a3b8;

		&:hover {
			color: #ffffff;
			background-color: #1e293b;
		}

		&.active {
			background-color: #38bdf8;
			color: #0a1128;
			font-weight: 700;
			box-shadow: 0 4px 12px rgba(56, 189, 248, 0.25);
		}

		@media (max-width: 640px) {
			padding: 0.6rem 1rem;
			font-size: 0.875rem;
		}
	}

	.content_container {
		animation: fadeIn 0.4s ease-in-out;

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(10px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	}

	.project_header_card {
		background: #111c38;
		border: 1px solid #1e293b;
		border-radius: 1rem;
		padding: 2rem;
		margin-bottom: 2.5rem;

		@media (max-width: 768px) {
			padding: 1.25rem;
		}
	}

	.project_meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1.25rem;
	}

	.category_badge {
		background-color: #1e3a8a;
		color: #93c5fd;
		font-size: 0.8125rem;
		font-weight: 700;
		padding: 0.35rem 0.85rem;
		border-radius: 9999px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.meta_details {
		display: flex;
		gap: 1.5rem;
		font-size: 0.875rem;
		color: #94a3b8;
		flex-wrap: wrap;

		strong {
			color: #ffffff;
		}
	}

	.project_title {
		font-size: 1.875rem;
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 0.75rem;

		@media (max-width: 768px) {
			font-size: 1.5rem;
		}
	}

	.project_text {
		font-size: 1.05rem;
		color: #cbd5e1;
		line-height: 1.65;
		margin-bottom: 1.75rem;
	}

	.stats_grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
		border-top: 1px solid #1e293b;
		padding-top: 1.5rem;
	}

	.stat_card {
		background: #0a1128;
		padding: 1rem;
		border-radius: 0.625rem;
		border: 1px solid #1e293b;
	}

	.stat_value {
		font-size: 1.35rem;
		font-weight: 800;
		color: #38bdf8;
	}

	.stat_label {
		font-size: 0.8125rem;
		color: #94a3b8;
		font-weight: 500;
		margin-top: 0.25rem;
	}

	.media_section {
		margin-bottom: 3rem;
	}

	.section_heading {
		font-size: 1.25rem;
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 1.25rem;

		span {
			font-weight: 400;
			color: #94a3b8;
			font-size: 1rem;
		}
	}

	.image_grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.25rem;
	}

	.image_card {
		position: relative;
		border-radius: 0.75rem;
		overflow: hidden;
		height: 240px;
		cursor: pointer;
		background-color: #111c38;
		border: 1px solid #1e293b;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.4s ease;
		}

		&:hover {
			img {
				transform: scale(1.05);
			}
			.image_overlay {
				opacity: 1;
			}
		}
	}

	.image_overlay {
		position: absolute;
		inset: 0;
		background: rgba(10, 17, 40, 0.75);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
		color: #ffffff;
		font-weight: 600;
		font-size: 0.875rem;
	}

	.video_grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		gap: 1.5rem;
	}

	.video_card {
		background: #111c38;
		border-radius: 0.75rem;
		overflow: hidden;
		border: 1px solid #1e293b;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
	}

	.video_player {
		width: 100%;
		aspect-ratio: 16 / 9;
		display: block;
		background: #000;
	}

	.video_title {
		padding: 0.85rem 1rem;
		color: #ffffff;
		font-size: 0.9375rem;
		font-weight: 600;
		background: #19264a;
	}

	.modal_overlay {
		position: fixed;
		inset: 0;
		background: rgba(5, 8, 20, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 1rem;
	}

	.modal_content {
		position: relative;
		max-width: 1000px;
		width: 100%;
		max-height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal_image {
		max-width: 100%;
		max-height: 85vh;
		object-fit: contain;
		border-radius: 0.5rem;
		width: 700px;
		height: 800px;
	}

	.close_button {
		position: absolute;
		top: -2.5rem;
		right: 0;
		background: transparent;
		border: none;
		color: #ffffff;
		font-size: 2rem;
		cursor: pointer;
		line-height: 1;

		&:hover {
			color: #38bdf8;
		}
	}
`;
