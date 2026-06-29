'use client';

import { JSX } from 'react';
import { ServicesLayout } from './ServicesGridStyle';
import {
	LuGlobe,
	LuPhoneCall,
	LuRadio,
	LuShieldAlert,
	LuSunDim,
	LuFileSpreadsheet,
	LuZap,
	LuConstruction,
	LuHardHat,
} from 'react-icons/lu';

export interface IServiceItem {
	icon: JSX.Element;
	title: string;
	desc: string;
}

export const ServicesGrid = () => {
	const services: IServiceItem[] = [
		{
			icon: <LuGlobe />,
			title: 'ICT & Network Solutions',
			desc: 'LAN/WAN design, wireless/wired routing installations, VPN services, and edge router optimization. Proven track record deploying complex infrastructures for FCTA WMAN and the Nigeria Stock Exchange.',
		},
		{
			icon: <LuPhoneCall />,
			title: 'Open-Source Telephony',
			desc: 'Engineering high-availability IP phone systems configured for scale. Deployed institutional communications infrastructure across major government buildings including the National Assembly Complex and FIRS Training School.',
		},
		{
			icon: <LuRadio />,
			title: 'VSAT & RF Management',
			desc: 'Expert satellite links from 1.2m up to 2.4m antennas alongside core Hub hardware orchestration for Shiron, Hughes, iDirect, and Linkstar. Complete RF licensed/unlicensed band optimization.',
		},
		{
			icon: <LuZap />,
			title: 'Electrical Engineering & Distribution',
			desc: 'Design and deployment of low, medium, and high-voltage power distribution networks, industrial earthing, lightning protection architectures, and integrated MEP (Mechanical, Electrical, Plumbing) services for commercial complexes.',
		},
		{
			icon: <LuSunDim />,
			title: 'Energy & Infrastructure',
			desc: 'Bespoke alternative power procurement and clean engineering setups utilizing high-efficiency solar energy arrays, heavy duty inverters, and long-lifecycle deep-cycle battery banks.',
		},
		{
			icon: <LuConstruction />,
			title: 'Building Construction & Structures',
			desc: 'Turnkey structural construction encompassing residential, commercial, and institutional complexes. Delivering robust structural design calculations, high-grade concrete pouring matrices, and complete interior fit-outs under rigorous safety protocols.',
		},
		{
			icon: <LuHardHat />,
			title: 'Civil & Road Construction',
			desc: 'Heavy civil engineering works including flexible asphalt and rigid concrete road pavements, standard concrete drainage networks, earthworks, and structural retaining walls constructed to survive peak seasonal tropical runoff.',
		},
		{
			icon: <LuShieldAlert />,
			title: 'Security & Automation',
			desc: 'Integrated security mapping via high-definition CCTV arrays, responsive biometrics, and deterministic network firewall engineering alongside deep enterprise Electronic Document Management Systems (EDMS).',
		},
		{
			icon: <LuFileSpreadsheet />,
			title: 'Project Management & SLA',
			desc: 'End-to-end framework planning, structured requests-for-proposal (RFP), rigorous third-party vendor assessments, operational hazard risk mapping, and sustainable Service Level Agreements (SLA).',
		},
	];

	return (
		<ServicesLayout id="1">
			<div className="services-container">
				<header className="services-header">
					<span className="services-tag">Services Blueprint</span>
					<h2 className="services-title">
						Engineered Solutions & Technical Competence
					</h2>
				</header>

				<div className="services-grid">
					{services.map((svc, i) => (
						<div className="service-card" key={i}>
							<div className="card-icon">{svc.icon}</div>
							<h3 className="card-title">{svc.title}</h3>
							<p className="card-description">{svc.desc}</p>
						</div>
					))}
				</div>
			</div>
		</ServicesLayout>
	);
};
