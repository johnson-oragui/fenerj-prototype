'use client';

import CustomButton from '@/components/CustomButton/CustomButton';
import { StrategyLayoutStyle } from './StrategicSectionStyle';
import {
	LuRadio,
	LuCloudLightning,
	LuServer,
	LuShieldCheck,
} from 'react-icons/lu';

export const StrategicSection = () => {
	const clientLogos = [
		{ name: 'National Assembly Complex', type: 'Gov' },
		{ name: 'FCTA WMAN', type: 'Gov' },
		{ name: 'Nigeria Stock Exchange', type: 'Enterprise' },
		{ name: 'Embassies of Turkey & India', type: 'Diplomatic' },
	];

	return (
		<StrategyLayoutStyle id="2">
			<div className="strategy-container">
				<div className="split-section">
					<div className="content-block">
						<span className="strategy-tag">Our Strategic Approach</span>
						<h3>Tailored project architectures without bloated appendages.</h3>
						<p>
							Our structural framework targets bespoke technical alignment. From
							multi-node VSAT array platforms (1.2m to 2.4m Hub antennas) to
							robust corporate solar engineering backups, every component is
							scaled exactly to match what your operational environment calls
							for.
						</p>
						<p>
							Backed by certified technical experts across ICT routing layout
							paths and deep electrical automation ecosystems, we balance
							hands-on field deployments with strict, standards-compliant
							execution.
						</p>

						<div className="partner-roll">
							<h4>Trusted Framework Deployments:</h4>
							<div className="partner-grid">
								{clientLogos.map((client, index) => (
									<div key={index} className="partner-pill">
										<span className="dot" />
										<span className="name">{client.name}</span>
									</div>
								))}
							</div>
						</div>

						<CustomButton>Talk to an Expert</CustomButton>
					</div>

					<div className="infra-map-canvas">
						<div className="node node-vsat">
							<LuRadio />
						</div>
						<div className="node node-power">
							<LuCloudLightning />
						</div>
						<div className="node node-server">
							<LuServer />
						</div>
						<div className="node node-security">
							<LuShieldCheck />
						</div>

						<div className="canvas-label">FENERJ ARCHITECTURE MAP</div>
					</div>
				</div>
			</div>
		</StrategyLayoutStyle>
	);
};
