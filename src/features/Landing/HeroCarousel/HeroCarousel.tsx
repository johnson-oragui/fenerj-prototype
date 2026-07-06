'use client';

import { useState, useEffect } from 'react';
import { heroServiceSlides } from './data';
import { SubHeroSlide } from './SubHeroSlide/SubHeroSlide';
import { HeroCarouselStyles } from './HeroCarouselStyle';

export default function HeroCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const SLIDE_DURATION = 6000;

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex + 1) % heroServiceSlides.length,
			);
		}, SLIDE_DURATION);

		return () => clearInterval(timer);
	}, []);

	return (
		<HeroCarouselStyles id="0">
			<div className="slider-container">
				{heroServiceSlides.map((slide, index) => (
					<SubHeroSlide
						key={index}
						slide={slide}
						isActive={index === currentIndex}
					/>
				))}
			</div>

			<div className="slider-nav-bar">
				{heroServiceSlides.map((slide, index) => {
					const isActive = index === currentIndex;
					const isCompleted = index < currentIndex;

					return (
						<button
							key={index}
							className="nav-tab"
							onClick={() => setCurrentIndex(index)}
							aria-label={`Go to slide ${index + 1}`}
						>
							<div className="tab-track">
								<div
									className={`tab-progress ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
									style={{
										animationDuration: isActive ? `${SLIDE_DURATION}ms` : '0ms',
									}}
								/>
							</div>
							<span className={`tab-name ${isActive ? 'active' : ''}`}>
								{slide.tag.split(' & ')[0]}
							</span>
						</button>
					);
				})}
			</div>
		</HeroCarouselStyles>
	);
}
