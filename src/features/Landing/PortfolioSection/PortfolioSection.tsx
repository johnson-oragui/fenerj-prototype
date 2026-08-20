'use client';

import { HiArrowRight, HiMap, HiOutlineFolderAdd } from 'react-icons/hi';
import { PortfolioSectionStyle } from './PortfolioSectionStyle';
import { engineeringProjects } from './data';
import Image from 'next/image';

export default function PortfolioSection() {
	return (
		<PortfolioSectionStyle id="portfolio">
			<div className="portfolio-meta">
				<div>
					<span className="portfolio-tag">Project Archives</span>
					<h2 className="portfolio-title">
						Case studies in structural precision and operational capability.
					</h2>
				</div>
				<div>
					<p className="portfolio-subtitle">
						Explore our deep ledger of public utilities, industrial networks,
						and heavy-civil infrastructures across Nigeria.
					</p>
				</div>
			</div>

			<div className="projects-grid">
				{engineeringProjects.map((project) => (
					<a
						key={project.id}
						href={`/projects/${project.id}`}
						className="project-card"
					>
						<div className="image-container">
							<div className="image-wrapper">
								<Image
									src={project.imageUrl}
									alt={project.title}
									className="project-image"
									fill
								/>
							</div>

							<span className="project-category-badge">{project.category}</span>
						</div>

						<div className="project-details-pane">
							<div>
								<div className="project-header-row">
									<h3 className="project-name">{project.title}</h3>
									<HiArrowRight className="action-arrow-icon" size={20} />
								</div>
								<p className="project-desc-excerpt">{project.excerpt}</p>
							</div>

							<div className="project-footer-specs">
								<div className="spec-item">
									<HiMap size={13} />
									<span>
										Location:{' '}
										<span className="spec-highlight">{project.location}</span>
									</span>
								</div>
								<div className="spec-item">
									<HiOutlineFolderAdd size={13} />
									<span>
										Scope:{' '}
										<span className="spec-highlight">{project.scope}</span>
									</span>
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</PortfolioSectionStyle>
	);
}
