'use client';

import { Footer } from '../Footer/Footer';
import ParentHeroSection from './HeroCarousel/HeroCarousel';
import { LandingFAQ } from './LandingFAQ/LandingFAQ';
import { LandingPageStyle } from './LandingStyle';
import PortfolioSection from './PortfolioSection/PortfolioSection';
import { ServicesGrid } from './ServicesGrid/ServicesGrid';
import { StrategicSection } from './StrategicSection/StrategicSection';

export default function Landing() {
	return (
		<LandingPageStyle>
			<ParentHeroSection />
			<ServicesGrid />
			<PortfolioSection />
			<StrategicSection />
			{/* <Testimonials /> */}
			<LandingFAQ />
			<Footer />
		</LandingPageStyle>
	);
}
