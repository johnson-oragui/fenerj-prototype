'use client';

import { useState } from 'react';
import { FAQClientStyle } from './FAQClientStyle';
import { LuChevronDown, LuCircleHelp } from 'react-icons/lu';

interface IFAQItem {
	question: string;
	answer: string;
	category: 'Civil & Construction' | 'Power & Energy' | 'ICT & Networks';
}

const FAQClient = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [activeCategory, setActiveCategory] = useState<string>('All');

	const faqData: IFAQItem[] = [
		{
			category: 'Civil & Construction',
			question:
				'What standards govern your road and building construction projects?',
			answer:
				'All FENERJ civil and structural works strictly comply with the Nigerian Society of Engineers (NSE) guidelines, COREN regulatory baselines, and Eurocode/British Standards (BS) for rigid and flexible pavements. Our asphalt configurations and drainage systems are custom-engineered to withstand intense tropical flood and drainage runoffs.',
		},
		{
			category: 'ICT & Networks',
			question:
				'Can your team manage large-scale metropolitan network deployments?',
			answer:
				'Yes. FENERJ has a rich legacy of complex infrastructure execution, including deployments for the FCTA Wireless Metropolitan Area Network (WMAN) and the Nigeria Stock Exchange. We handle everything from edge routing configurations and WAN links to core fiber arrays.',
		},
		{
			category: 'Power & Energy',
			question:
				'How do you determine the scale needed for alternative solar energy arrays?',
			answer:
				'We perform an extensive on-site load assessment profile using advanced telemetry tools. This allows us to map peak demand curves and engineer a bespoke hybrid solution featuring high-efficiency solar panels, pure sine-wave inverters, and industrial deep-cycle battery banks tailored to your exact energy footprint.',
		},
		{
			category: 'Civil & Construction',
			question:
				'Do you provide integrated MEP services alongside structural builds?',
			answer:
				'Absolutely. Our structural building team works in direct synergy with our electrical engineering leads. We provide complete, integrated Mechanical, Electrical, and Plumbing (MEP) layouts—including high-voltage distribution paths, industrial earthing, and lightning protective meshes.',
		},
		{
			category: 'ICT & Networks',
			question:
				'What satellite communication bands do your VSAT specialists optimize?',
			answer:
				'Our RF engineering team provides complete optimization across both licensed and unlicensed spectrum blocks. We build and configure satellite links ranging from 1.2m to 2.4m tracking antennas using elite Hub hardware orchestration arrays like iDirect, Hughes, Shiron, and Linkstar.',
		},
		{
			category: 'ICT & Networks',
			question:
				'What kind of telephony environments do you deploy for state infrastructures?',
			answer:
				'We design high-availability, open-source IP telephony and PBX clusters built to support massive concurrent internal call traffic. This is the exact robust communications architecture we have deployed across major high-profile footprints, including the National Assembly Complex and the FIRS Training School.',
		},
	];

	const categories = [
		'All',
		'Civil & Construction',
		'Power & Energy',
		'ICT & Networks',
	];

	const filteredFaqs =
		activeCategory === 'All'
			? faqData
			: faqData.filter((item) => item.category === activeCategory);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<FAQClientStyle>
			<div className="faq-container">
				<header className="faq-header">
					<div className="badge-wrapper">
						<LuCircleHelp className="badge-icon" />
						<span>Support Core</span>
					</div>
					<h1>Frequently Answered Parameters</h1>
					<p>
						Get immediate, transparent documentation on FENERJ’s civil
						engineering standards, power grid procurement, and corporate ICT
						network methodologies.
					</p>
				</header>

				<nav className="filter-tabs-wrapper">
					{categories.map((cat) => (
						<button
							key={cat}
							className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
							onClick={() => {
								setActiveCategory(cat);
								setOpenIndex(null);
							}}
						>
							{cat}
						</button>
					))}
				</nav>

				<div className="accordion-list">
					{filteredFaqs.map((faq, idx) => {
						const isOpen = openIndex === idx;
						return (
							<div
								key={idx}
								className={`accordion-node-item ${isOpen ? 'expanded' : ''}`}
							>
								<button
									className="accordion-trigger-header"
									onClick={() => toggleAccordion(idx)}
									aria-expanded={isOpen}
								>
									<span className="question-text">
										<span className="category-tag">{faq.category}</span>
										{faq.question}
									</span>
									<LuChevronDown className="chevron-icon" />
								</button>

								<div className="accordion-content-panel">
									<div className="content-inner-text">
										<p>{faq.answer}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</FAQClientStyle>
	);
};

export default FAQClient;
