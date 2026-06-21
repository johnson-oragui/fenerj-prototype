'use client';

import CustomButton from '@/components/CustomButton/CustomButton';
import { HeroLayout } from './HeroStyle';
import { useEffect, useState } from 'react';

export const Hero = () => {
	const rotatingWords = [
		'Alternative Power Engineering',
		'ICT & Network Solutions',
		'Security & Automation Platforms',
		'Bespoke Project Management',
	];

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
		}, 3500);

		return () => clearInterval(interval);
	}, [rotatingWords.length]);
	return (
		<HeroLayout id="0">
			<div className="hero-container">
				<h1 className="hero-title">
					Bridging Knowledge With{' '}
					<span key={index} className="rotating-text">
						{rotatingWords[index]}
					</span>
				</h1>

				<p className="hero-subtitle">
					FENERJ Engineering Services Ltd delivers innovative, sustainable, and
					standards-compliant infrastructure solutions from definition to
					ongoing sustainability.
				</p>

				<div className="hero-button-group">
					<CustomButton>Request a Quote</CustomButton>
					<CustomButton variant="outline">Explore Services</CustomButton>
				</div>
			</div>
		</HeroLayout>
	);
};
