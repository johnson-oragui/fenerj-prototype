import Image from 'next/image';
import { ISubHeroSlideProps } from './interface';
import { SubHeroSlideStyle } from './SubHeroSlideStyle';

export const SubHeroSlide = ({ slide, isActive }: ISubHeroSlideProps) => {
	return (
		<SubHeroSlideStyle $isActive={isActive}>
			<div className="hero-content-side">
				<div className="hero-tag">
					<span className="dot">●</span> {slide.tag}
				</div>
				<h1 className="hero-title">
					{slide.titlePrefix}
					<span>{slide.titleSpan}</span>
				</h1>
				<p className="hero-description">{slide.desc}</p>
				<div className="hero-cta-group">
					<a href="#services" className="btn-primary">
						Explore Capabilities
					</a>
					<a href="/contact" className="btn-secondary">
						Request Consultation
					</a>
				</div>
			</div>

			<div className="hero-visual-side">
				<div className="image-wrapper">
					<Image
						src={slide.imageSrc}
						alt={slide.tag}
						className="hero-image"
						fill
					/>
				</div>

				<div className="hero-overlay-card">
					<p className="hero-stat-label">{slide.statLabel}</p>
					<p className="hero-stat-value">{slide.statValue}</p>
				</div>
			</div>
		</SubHeroSlideStyle>
	);
};
