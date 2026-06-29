'use client';

import { useState } from 'react';
import { NavbarLayout } from './NavBarStyle';
import Link from 'next/link';
import Image from 'next/image';
import { APP_LOGO } from '../../../public/path/asset-paths';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	const navigationItems = [
		{ label: 'Home', href: '/#0' },
		{ label: 'Services', href: '/#1' },
		{ label: 'FAQ', href: '/faq' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'About Us', href: '/about' },
	];

	return (
		<NavbarLayout $isOpen={isOpen}>
			<div className="nav-logo" onClick={closeMenu}>
				<Link href="/">
					<Image
						alt={process.env.NEXT_PUBLIC_APP_NAME || 'FENERJ Engineering'}
						src={APP_LOGO}
						width={90}
						height={26}
						style={{ objectFit: 'contain', borderRadius: '35px' }}
					/>
				</Link>
			</div>

			<nav className="desktop-menu">
				{navigationItems.map((item) => (
					<a key={item.label} href={item.href} className="nav-link">
						{item.label}
					</a>
				))}
			</nav>

			<button
				className="hamburger-btn"
				onClick={toggleMenu}
				aria-label="Toggle Navigation Menu"
			>
				<span />
				<span />
				<span />
			</button>

			<nav className="mobile-drawer">
				{navigationItems.map((item) => (
					<a
						key={item.label}
						href={item.href}
						className="nav-link"
						onClick={closeMenu}
					>
						{item.label}
					</a>
				))}
			</nav>

			<div className="drawer-backdrop" onClick={closeMenu} />
		</NavbarLayout>
	);
};

export default Navbar;
