'use client';

import { useState } from 'react';
import { LuUserCheck, LuArrowLeft } from 'react-icons/lu';
import { PrivacyLayout } from './PrivacyStyle';

export const PrivacyPolicy = () => {
	const currentYear = new Date().getFullYear();
	const [mobileView, setMobileView] = useState<'sidebar' | 'content'>(
		'sidebar',
	);

	const privacySections = [
		{
			id: '1-collection',
			title: '1. Information We Collect',
			content:
				'We collect relevant organizational data required to formulate structural requests-for-proposal (RFPs), site engineering assessments, and secure project design specifications. This includes your institution name, designated structural contact details, email telemetry channels, and localized physical site deployment specifications for energy or network infrastructure planning.',
		},
		{
			id: '2-utilization',
			title: '2. How We Use Data',
			content:
				'All collected operational metadata is used solely to configure tailored engineering layouts, monitor active network bandwidth metrics, provision remote firewall updates, and maintain strict adherence to our active client Service Level Agreements (SLAs).',
		},
		{
			id: '3-protection',
			title: '3. Infrastructure Security',
			content:
				'FENERJ utilizes advanced encryption standards, secure physical facility backups, and robust multi-layered firewalls to protect infrastructure configurations and internal organizational logs. Your system layouts are protected with strict access control matrix frameworks to ensure zero unauthorized exposure.',
		},
		{
			id: '4-sharing',
			title: '4. Third-Party Disclosures',
			content:
				'We do not sell, trade, or lease client network profiles or corporate data. In subcontracting arrangements—such as our international diplomatic framework deployments—data is restricted solely to the specific parameters mandated by security verification parameters and authorized routing partners.',
		},
		{
			id: '5-retention',
			title: '5. Data Retention Limits',
			content:
				'Project blueprints, administrative communications, and system performance history profiles are retained for the duration of active contract cycles or operational SLA maintenance windows to facilitate secure ongoing infrastructure monitoring.',
		},
	];

	const handleMobileNav = (sectionId: string) => {
		setMobileView('content');
		setTimeout(() => {
			const target = document.getElementById(sectionId);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, 100);
	};

	return (
		<PrivacyLayout $viewState={mobileView}>
			<div className="privacy-container">
				<div className="mobile-header-toggle">
					{mobileView === 'content' ? (
						<button
							className="toggle-btn"
							onClick={() => setMobileView('sidebar')}
						>
							<LuArrowLeft /> Back to Sections
						</button>
					) : (
						<div className="mobile-title-banner">
							<LuUserCheck /> FENERJ Privacy Overview
						</div>
					)}
				</div>

				<div className="split-grid-wrapper">
					<aside className="toc-sidebar">
						<div className="sidebar-sticky-node">
							<div className="sidebar-brand-title">
								<LuUserCheck className="shield-icon" />
								<h3>Privacy Core</h3>
							</div>
							<p className="last-updated">Last updated: June 2026</p>

							<nav className="toc-navigation-links">
								{privacySections.map((sec) => (
									<button
										key={sec.id}
										className="toc-anchor-link"
										onClick={() => handleMobileNav(sec.id)}
									>
										{sec.title}
									</button>
								))}
							</nav>
						</div>
					</aside>

					<main className="legal-content-pane">
						<header className="content-intro">
							<h1>Privacy Policy</h1>
							<p>
								This charter defines how FENERJ treats corporate data assets and
								operational site logs collected during infrastructure
								configurations.
							</p>
						</header>

						<div className="document-body">
							{privacySections.map((sec) => (
								<section
									id={sec.id}
									key={sec.id}
									className="document-node-section"
								>
									<h2>{sec.title}</h2>
									<p>{sec.content}</p>
								</section>
							))}
						</div>

						<footer className="document-closure-notice">
							<p>
								&copy; {currentYear} FENERJ Engineering Services Ltd. Plot 142,
								Ademola Adetokunbo Crescent, OTI Carpet Plaza, Wuse II, Abuja.
							</p>
						</footer>
					</main>
				</div>
			</div>
		</PrivacyLayout>
	);
};
