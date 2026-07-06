'use client';

import { useState, SubmitEvent } from 'react';
import {
	LuMail,
	LuPhone,
	LuMapPin,
	LuClock,
	LuSend,
	LuCircleCheck,
} from 'react-icons/lu';
import { ContactLayout } from './ContactUsStyle';

export const ContactUs = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		organization: '',
		serviceType: 'structural',
		message: '',
	});

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		console.log('FENERJ Form Payload:', formData);
		setFormSubmitted(true);
	};

	return (
		<ContactLayout>
			<div className="contact-container">
				<header className="contact-header">
					<h1>Let&apos;s Construct Something Sustainable</h1>
					<p>
						Connect with our expert engineering design and ICT infrastructure
						procurement specialists in Abuja.
					</p>
				</header>

				<div className="contact-grid">
					<div className="form-card-panel">
						{formSubmitted ? (
							<div className="submission-success-state">
								<LuCircleCheck className="success-icon" />
								<h2>Transmission Success</h2>
								<p>
									Your technical inquiry file has been routed to our project
									managers. A certified technical engineer will follow up within
									24 operational hours.
								</p>
								<button
									className="reset-btn"
									onClick={() => setFormSubmitted(false)}
								>
									Submit Another Inquiry
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="intake-form">
								<div className="form-group-row">
									<div className="form-field">
										<label htmlFor="name">Full Name</label>
										<input
											type="text"
											id="name"
											required
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											placeholder="e.g., Arc. Chidi Okafor"
										/>
									</div>
									<div className="form-field">
										<label htmlFor="email">Corporate Email</label>
										<input
											type="email"
											id="email"
											required
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											placeholder="name@organization.ng"
										/>
									</div>
								</div>

								<div className="form-group-row">
									<div className="form-field">
										<label htmlFor="organization">
											Organization / Institution
										</label>
										<input
											type="text"
											id="organization"
											value={formData.organization}
											onChange={(e) =>
												setFormData({
													...formData,
													organization: e.target.value,
												})
											}
											placeholder="Company or Government Ministry"
										/>
									</div>
									<div className="form-field">
										<label htmlFor="serviceType">Core Scope of Interest</label>
										<select
											id="serviceType"
											value={formData.serviceType}
											onChange={(e) =>
												setFormData({
													...formData,
													serviceType: e.target.value,
												})
											}
										>
											<option value="structural">
												Structural Engineering Blueprint
											</option>
											<option value="ict-network">
												ICT &amp; VSAT Network Architecture
											</option>
											<option value="solar-power">
												Alternative Hybrid Solar Arrays
											</option>
											<option value="edms">
												Electronic Document Management (EDMS)
											</option>
										</select>
									</div>
								</div>

								<div className="form-field full-width">
									<label htmlFor="message">
										Project Parameters / Detailed Scope
									</label>
									<textarea
										id="message"
										rows={6}
										required
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										placeholder="Describe your site constraints, project scope timeline, or technical requirements..."
									/>
								</div>

								<button type="submit" className="submit-action-btn">
									<span>Transmit Inquiry File</span>
									<LuSend className="btn-icon" />
								</button>
							</form>
						)}
					</div>

					<div className="info-directory-panel">
						<div className="directory-sticky-wrapper">
							<div className="info-node">
								<div className="icon-badge">
									<LuMapPin />
								</div>
								<div className="node-details">
									<h3>Headquarters Location</h3>
									<address>
										Plot 142, Ademola Adetokunbo Crescent,
										<br />
										OTI Carpet Plaza, Wuse II,
										<br />
										Abuja, Nigeria
									</address>
								</div>
							</div>

							<div className="info-node">
								<div className="icon-badge">
									<LuPhone />
								</div>
								<div className="node-details">
									<h3>Direct Liaison Office</h3>
									<p className="contact-link-text">+234 (0) 807 668 8233</p>
									<p className="sub-label">Project Desk Intake</p>
								</div>
							</div>

							<div className="info-node">
								<div className="icon-badge">
									<LuMail />
								</div>
								<div className="node-details">
									<h3>Digital Routing Desk</h3>
									<a
										href="mailto:fenerjeng@gmail.com"
										className="contact-link-text mail-anchor"
									>
										Fenerjeng@gmail.com
									</a>
									<p className="sub-label">RFPs &amp; General Procurement</p>
								</div>
							</div>

							<div className="info-node">
								<div className="icon-badge">
									<LuClock />
								</div>
								<div className="node-details">
									<h3>Operational Windows</h3>
									<p className="timing-text">
										Monday – Friday: 08:00 – 17:00 WAT
									</p>
									<p className="sub-label">
										Closed weekends and public holidays
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ContactLayout>
	);
};
