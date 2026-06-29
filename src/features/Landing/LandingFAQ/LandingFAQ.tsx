'use client';

import { useState } from 'react';
import { LuPlus, LuMinus } from 'react-icons/lu';
import { LandingFAQStyle } from './LandingFAQStyle';

export interface IFAQNode {
	q: string;
	a: string;
}

export const LandingFAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const landingFAQs: IFAQNode[] = [
		{
			q: 'What distinct sectors does FENERJ operate across?',
			a: 'We operate at the intersection of heavy physical infrastructure and enterprise digital systems. Our capabilities span Civil & Road Construction, Building Structural Design, Electrical Engineering/MEP layouts, alternative Solar Grid Procurement, and high-availability ICT/Telephony Networks.',
		},
		{
			q: 'Does your engineering team hold proper local regulatory licensing?',
			a: 'Absolutely. All civil, electrical, and structural frameworks executed by FENERJ are designed, certified, and stamped in strict alignment with COREN (Council for the Regulation of Engineering in Nigeria) baselines and Nigerian Society of Engineers (NSE) structural specifications.',
		},
		{
			q: 'What scale of institutional ICT network structures have you deployed?',
			a: 'Our core engineers have a proven track record delivering complex infrastructure systems across major high-profile footprints, including the FCTA Wireless Metropolitan Area Network (WMAN), the Nigeria Stock Exchange, and high-capacity PBX telephony clusters for the National Assembly Complex.',
		},
		{
			q: 'How are your road and building builds optimized for the local environment?',
			a: 'We engineer rigid concrete and flexible asphalt road pavements with custom concrete drainage networks specifically mapped to survive peak seasonal tropical rainfall runoff, mitigating structural erosion or prematurely washed-out tracks.',
		},
		{
			q: 'How can we request a formal site appraisal or tender presentation?',
			a: 'You can transmit your procurement criteria or structural briefs directly through our portal, or drop an email to Fenerjeng@gmail.com. Our infrastructure project managers review submissions and route a response back within 24 operational hours.',
		},
	];

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<LandingFAQStyle>
			<div className="landing-faq-container">
				<div className="faq-side-meta">
					<span className="context-tag">F.A.Q. Matrix</span>
					<h2>Critical Parameters Answered</h2>
					<p>
						Quick technical context on how FENERJ executes hybrid structural
						builds, clean energy grids, and enterprise network protocols for
						private and public institutional clients.
					</p>
					<div className="cta-helper-text">
						<span>Have a specific technical RFP?</span>
						<a href="#contact">Initiate Project Intake</a>
					</div>
				</div>

				<div className="faq-accordion-stack">
					{landingFAQs.map((faq, index) => {
						const isOpen = activeIndex === index;
						return (
							<div
								key={index}
								className={`accordion-row ${isOpen ? 'row-active' : ''}`}
							>
								<button
									className="accordion-trigger-btn"
									onClick={() => toggleAccordion(index)}
									aria-expanded={isOpen}
								>
									<span className="question-text">{faq.q}</span>
									<div className="state-icon-badge">
										{isOpen ? <LuMinus /> : <LuPlus />}
									</div>
								</button>

								<div className="accordion-body-viewport">
									<div className="body-inner-content">
										<p>{faq.a}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</LandingFAQStyle>
	);
};
