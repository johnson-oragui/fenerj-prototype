'use client';

import { Hero } from './Hero/Hero';
import { ServicesGrid } from './ServicesGrid/ServicesGrid';
import { StrategicSection } from './StrategicSection/StrategicSection';

export default function Landing() {
	return (
		<main>
			<Hero />
			<ServicesGrid />
			<StrategicSection />
		</main>
	);
}
