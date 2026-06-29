'use client';

import { useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';
import { TestimonialStyle } from './TestimonialsStyle';
import { LuQuote } from 'react-icons/lu';

export interface ITestimonial {
	quote: string;
	author: string;
	role: string;
	institution: string;
}

const Testimonials = () => {
	const testimonials: ITestimonial[] = [
		{
			quote:
				"FENERJ's delivery on our metropolitan routing layout completely modernized our internal data pipelines. Their strict adherence to deterministic network metrics kept our framework perfectly stable throughout the infrastructure swap.",
			author: 'Engr. T. Balogun',
			role: 'Infrastructure Lead',
			institution: 'FCTA WMAN Deployment',
		},
		{
			quote:
				"The civil construction team engineered our commercial complex's drainage and rigid concrete pavements to absolute perfection. Even during peak seasonal tropical runoffs, the structural layout handles flow flawlessly.",
			author: 'Arc. Chidiebere Okafor',
			role: 'Principal Partner',
			institution: 'Aviation Heights Complex',
		},
		{
			quote:
				'Deploying high-availability open-source telephony across our campus required precise engineering execution. FENERJ orchestrated the PBX clusters smoothly, maintaining clean operational tracks with zero downtime.',
			author: 'Director of Communications',
			role: 'IT Directorate',
			institution: 'National Assembly Complex Frame',
		},
		{
			quote:
				'Our alternative energy grid architecture setup was handled with immense technical competence. The hybrid solar array configurations completely mitigated our daily operational power dependency paths.',
			author: 'Alhaji M. Dangote',
			role: 'Operations Director',
			institution: 'Logistics Hub West',
		},
	];

	const extendedTestimonials = [
		...testimonials,
		...testimonials,
		...testimonials,
	];

	const trackRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		const track = trackRef.current;
		if (!track || isDragging || isPaused) return;

		let animationFrameId: number;

		const autoScroll = () => {
			if (!track) return;
			track.scrollLeft += 0.8;

			const maxScroll = track.scrollWidth / 3;
			if (track.scrollLeft >= maxScroll * 2) {
				track.scrollLeft -= maxScroll;
			}
			animationFrameId = requestAnimationFrame(autoScroll);
		};

		animationFrameId = requestAnimationFrame(autoScroll);
		return () => cancelAnimationFrame(animationFrameId);
	}, [isDragging, isPaused]);

	useEffect(() => {
		const track = trackRef.current;
		if (track) {
			track.scrollLeft = track.scrollWidth / 3;
		}
	}, []);

	const startDrag = (clientX: number) => {
		const track = trackRef.current;
		if (!track) return;
		setIsDragging(true);
		setStartX(clientX - track.offsetLeft);
		setScrollLeft(track.scrollLeft);
	};

	const moveDrag = (clientX: number) => {
		if (!isDragging) return;
		const track = trackRef.current;
		if (!track) return;
		const x = clientX - track.offsetLeft;
		const walk = (x - startX) * 1.5;
		track.scrollLeft = scrollLeft - walk;
	};

	const endDrag = () => {
		setIsDragging(false);
		const track = trackRef.current;
		if (!track) return;

		const maxScroll = track.scrollWidth / 3;
		if (track.scrollLeft >= maxScroll * 2) track.scrollLeft -= maxScroll;
		if (track.scrollLeft <= 0) track.scrollLeft += maxScroll;
	};

	return (
		<TestimonialStyle>
			<div className="section-container">
				<header className="testimonial-header">
					<span className="section-tag">Validation Matrix</span>
					<h2>Field-Tested Engineering Evaluations</h2>
				</header>

				<div
					ref={trackRef}
					className={`slider-viewport-track ${isDragging ? 'grabbing' : ''}`}
					onMouseDown={(e: MouseEvent) => startDrag(e.clientX)}
					onMouseMove={(e: MouseEvent) => moveDrag(e.clientX)}
					onMouseUp={endDrag}
					onMouseLeave={endDrag}
					onTouchStart={(e: TouchEvent) => startDrag(e.touches[0].clientX)}
					onTouchMove={(e: TouchEvent) => moveDrag(e.touches[0].clientX)}
					onTouchEnd={endDrag}
					onMouseEnter={() => setIsPaused(true)}
					// onMouseLeave={() => {
					// 	setIsPaused(false);
					// 	endDrag();
					// }}
				>
					<div className="cards-flex-row">
						{extendedTestimonials.map((t, idx) => (
							<div key={idx} className="testimonial-card">
								<div className="card-top">
									<LuQuote className="quote-vector" />
								</div>
								<p className="quote-text">&quot;{t.quote}&quot;</p>
								<div className="author-metadata-block">
									<h4 className="author-name">{t.author}</h4>
									<p className="author-role">
										{t.role} &bull;{' '}
										<span className="inst">{t.institution}</span>
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</TestimonialStyle>
	);
};

export default Testimonials;
