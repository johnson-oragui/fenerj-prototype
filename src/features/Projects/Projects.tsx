"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJECTS } from "./data";
import { ProjectsStyle } from "./ProjectStyle";

export default function Projects() {
	const [activeTab, setActiveTab] = useState<string>(PROJECTS[0].id);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const currentProject =
		PROJECTS.find((p) => p.id === activeTab) || PROJECTS[0];

	return (
		<ProjectsStyle>
			<div className="portfolio_header">
				<p className="portfolio_subtitle">Engineering Excellence</p>
				<h2 className="portfolio_title">Featured Portfolio Projects</h2>
				<p className="portfolio_description">
					Explore our multidisciplinary engineering solutions ranging from
					high-rise structures to mega infrastructure and sustainable energy
					grids.
				</p>
			</div>

			<div className="tabs_container">
				{PROJECTS.map((project) => (
					<button
						key={project.id}
						className={`tab_button ${activeTab === project.id ? "active" : ""}`}
						onClick={() => setActiveTab(project.id)}
					>
						{project.tabLabel}
					</button>
				))}
			</div>

			<div
				className="content_container"
				key={currentProject.id}
			>
				<div className="project_header_card">
					<div className="project_meta">
						<span className="category_badge">{currentProject.category}</span>
						<div className="meta_details">
							<span>
								<strong>Location:</strong> {currentProject.location}
							</span>
							<span>
								<strong>Year:</strong> {currentProject.year}
							</span>
							<span>
								<strong>Client:</strong> {currentProject.client}
							</span>
						</div>
					</div>
					<h3 className="project_title">{currentProject.title}</h3>
					<p className="project_text">{currentProject.description}</p>

					<div className="stats_grid">
						{currentProject.stats.map((stat, idx) => (
							<div
								className="stat_card"
								key={idx}
							>
								<div className="stat_value">{stat.value}</div>
								<div className="stat_label">{stat.label}</div>
							</div>
						))}
					</div>
				</div>

				<div className="media_section">
					<h4 className="section_heading">
						Project Gallery{" "}
						<span>({currentProject.media.images.length} Photos)</span>
					</h4>
					<div className="image_grid">
						{currentProject.media.images.map((imgUrl, index) => (
							<div
								className="image_card"
								key={index}
								onClick={() => setSelectedImage(imgUrl)}
							>
								<Image
									src={imgUrl}
									alt={`${currentProject.title} detail ${index + 1}`}
									loading="lazy"
									width={500}
									height={500}
								/>
								<div className="image_overlay">
									<span>Click to view full size</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="media_section">
					<h4 className="section_heading">
						Video Demonstrations & Flythroughs{" "}
						<span>({currentProject.media.videos.length} Videos)</span>
					</h4>
					<div className="video_grid">
						{currentProject.media.videos.map((vid, index) => (
							<div
								className="video_card"
								key={index}
							>
								<video
									className="video_player"
									controls
									preload="metadata"
									poster={vid.poster}
								>
									<source
										src={vid.url}
										type="video/mp4"
									/>
									Your browser does not support the video tag.
								</video>
								<div className="video_title">{vid.title}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{selectedImage && (
				<div
					className="modal_overlay"
					onClick={() => setSelectedImage(null)}
				>
					<div
						className="modal_content"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="close_button"
							onClick={() => setSelectedImage(null)}
						>
							&times;
						</button>
						<Image
							className="modal_image"
							src={selectedImage}
							alt="Expanded preview"
							width={500}
							height={500}
						/>
					</div>
				</div>
			)}
		</ProjectsStyle>
	);
}
