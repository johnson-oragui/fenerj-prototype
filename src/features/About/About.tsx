import CustomButton from '@/components/CustomButton/CustomButton';
import { AboutLayoutStyle } from './AboutStyle';
import { keyProjects, teamMembers } from './data';
import Image from 'next/image';

export const About = () => {
	return (
		<AboutLayoutStyle>
			<section className="about-hero">
				<div className="container">
					<span className="section-tag">Company Profile</span>
					<h1>FENERJ Engineering Services Ltd</h1>

					<div className="vision-quote">
						<p>
							&quot;To bridge the gap between engineering knowledge, policy, and
							best practices by delivering innovative, sustainable, and
							standards-compliant solutions.&quot;
						</p>
						<cite>Fenerj Corporate Vision</cite>
					</div>
				</div>
			</section>

			<section className="overview-section">
				<div className="container">
					<div className="grid-split">
						<div className="content-pane">
							<span className="section-tag">Corporate Background</span>
							<h2>Bridging Knowledge with Standards Compliance</h2>
							<p>
								FENERJ Engineering Services Ltd provides a comprehensive range
								of technical solutions engineered to bridge the gap between
								abstract technical knowledge and strict, compliant engineering
								execution.
							</p>
							<p>
								Led by fully certified engineers with deep, multi-disciplinary
								fields of operations, we align ourselves with robust
								infrastructure frameworks, regulatory policies, and modern
								project design schemas across Nigeria.
							</p>
						</div>

						<div className="image-placeholder metrics-box">
							<div className="metric-badge">
								<span className="value">2020</span>
								<span className="label">Incorporation Year</span>
							</div>
							<div className="metric-badge">
								<span className="value">26 Aug</span>
								<span className="label">Official Registration Date</span>
							</div>
							<div
								className="canvas-subtext"
								style={{ color: '#475569', fontSize: '0.8rem' }}
							>
								[ Image Asset: Corporate Registration / HQ Facade ]
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="team-section">
				<div className="container">
					<div className="team-header">
						<span className="section-tag">Our Engineers</span>
						<h2>Our Expert Technical Team</h2>
					</div>

					<div className="team-grid">
						{teamMembers.map((member, idx) => (
							<div className="team-card" key={idx}>
								{member?.image ? (
									// <img
									// 	src={member.image}
									// 	alt={`Portrait: ${member.name.split(' ')[1]}`}
									// />
									<Image
										alt={`Portrait: ${member.name.split(' ')[1]}`}
										src={member.image}
										width={350}
										height={400}
									></Image>
								) : (
									<div className="image-placeholder member-avatar-placeholder">
										<span>👤</span>[ Portrait Asset: {member.name.split(' ')[1]}{' '}
										]
									</div>
								)}

								<div className="member-info">
									<h4>{member.name}</h4>
									<p>{member.role}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="portfolio-section">
				<div className="container">
					<div className="portfolio-grid">
						<div>
							<span className="section-tag">Execution Footprint</span>
							<h3>Key Projects & Clients</h3>
							<div className="client-list">
								{keyProjects.map((proj, idx) => (
									<div className="list-item" key={idx}>
										<strong>{proj.client}</strong>
										<span>{proj.scope}</span>
									</div>
								))}
							</div>
						</div>

						<div className="image-placeholder" style={{ minHeight: '380px' }}>
							<span>📊</span>
							<strong>Multi-Sector System Alignments</strong>
							<p
								style={{
									maxWidth: '300px',
									fontSize: '0.8rem',
									color: '#475569',
									marginTop: '0.5rem',
								}}
							>
								[ Technical Blueprint: VSAT Architecture Configurations &
								Government Project SLA Frameworks ]
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="philosophy-section">
				<div className="container">
					<div className="quote-grid">
						<div className="phil-card">
							<p>
								&quot;If you are not part of the solution, you are part of the
								precipitate.&quot;
							</p>
							<cite>— Henry J Tillman</cite>
						</div>
						<div className="phil-card">
							<p>
								&quot;The whole of science is nothing more than a refinement of
								everyday thinking&quot;
							</p>
							<cite>— Albert Einstein</cite>
						</div>
					</div>

					<div className="closing-cta">
						<span className="section-tag">Partner With Us</span>
						<h3>Why Choose FENERJ?</h3>
						<p>
							We provide certified expertise, tailored structural engineering
							layouts, and a proven track record alongside corporate government
							institutions and international multilateral agencies.
						</p>

						<CustomButton>Initiate Project Definition</CustomButton>

						<div className="contact-meta">
							<span>
								📍 Head Office:{' '}
								<strong>
									Plot 142, Ademola Adetokunbo Crescent, OTI Carpet Plaza, Wuse
									II, Abuja.
								</strong>
							</span>
							<span>
								📞 Phone: <strong>+234 8076688233</strong>
							</span>
							<span>
								✉️ Email: <strong>fenerjeng@gmail.com</strong>
							</span>
						</div>
					</div>
				</div>
			</section>
		</AboutLayoutStyle>
	);
};
