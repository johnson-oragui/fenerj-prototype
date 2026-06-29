'use client';

import { Hero } from './Hero/Hero';
import { LandingFAQ } from './LandingFAQ/LandingFAQ';
import { LandingPageStyle } from './LandingStyle';
import { ServicesGrid } from './ServicesGrid/ServicesGrid';
import { StrategicSection } from './StrategicSection/StrategicSection';
// import Testimonials from './Testimonials/Testimonials';

export default function Landing() {
	return (
		<LandingPageStyle>
			<Hero />
			<ServicesGrid />
			<StrategicSection />
			{/* <Testimonials /> */}
			<LandingFAQ />
		</LandingPageStyle>
	);
}
