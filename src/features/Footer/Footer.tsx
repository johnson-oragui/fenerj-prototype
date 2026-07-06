'use client';

import Image from 'next/image';
import Link from 'next/link';
import { APP_LOGO } from '../../../public/path/asset-paths';
import { FooterLayoutStyle } from './FooterStyle';
import { LuTwitter, LuFacebook } from 'react-icons/lu';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterLayoutStyle>
			<div className="footer-container">
				<div className="footer-top">
					<div className="brand-column">
						<Link href="/#0" className="footer-logo">
							<Image
								alt={process.env.NEXT_PUBLIC_APP_NAME || 'FENERJ Engineering'}
								src={APP_LOGO}
								width={120}
								height={40}
								style={{ objectFit: 'contain' }}
							/>
						</Link>
						<p className="brand-desc">
							To bridge the gap between engineering knowledge, policy, and best
							practices by delivering sustainable, standards-compliant
							structural and ICT solutions.
						</p>

						<div className="social-group">
							{/* <a
								href="https://linkedin.com/fenerj-engineering"
								target="_blank"
								rel="noopener noreferrer"
								className="social-icon"
								aria-label="LinkedIn"
							>
								<LuLinkedin />
							</a> */}
							<a
								href="https://x.com/fenerj-engineering"
								target="_blank"
								rel="noopener noreferrer"
								className="social-icon"
								aria-label="X (Twitter)"
							>
								<LuTwitter />
							</a>
							<a
								href="https://www.facebook.com/share/1Z9cifmdyc/"
								target="_blank"
								rel="noopener noreferrer"
								className="social-icon"
								aria-label="FaceBook"
							>
								<LuFacebook />
							</a>
						</div>
					</div>

					<div className="link-column">
						<h4>Company</h4>
						<Link href="/about" className="footer-link">
							About Us
						</Link>
						<Link href="/#1" className="footer-link">
							Our Blueprint
						</Link>
						<Link href="/contact" className="footer-link">
							Contact
						</Link>
					</div>

					<div className="link-column">
						<h4>Resources</h4>
						<Link href="/faq" className="footer-link">
							Knowledge FAQ
						</Link>
						{/* <Link href="/guides" className="footer-link">
							Network Guide
						</Link> */}
						<a href="mailto:fenerjeng@gmail.com" className="footer-link">
							Direct Support
						</a>
					</div>

					<div className="link-column">
						<h4>Headquarters</h4>
						<address className="hq-address">
							Plot 142, Ademola Adetokunbo Crescent,
							<br />
							OTI Carpet Plaza, Wuse II,
							<br />
							Abuja, Nigeria
						</address>
					</div>
				</div>

				<div className="footer-bottom">
					<small>
						&copy; {currentYear} Fenerj Engineering Services Ltd. All rights
						reserved.
					</small>

					<div className="legal-links">
						<Link href="/privacy" className="footer-link">
							Privacy Policy
						</Link>
						<Link href="/terms" className="footer-link">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</FooterLayoutStyle>
	);
};
