'use client';

import styled from 'styled-components';

export const NavbarLayout = styled.header<{ $isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	background-color: #0f172a;
	border-bottom: 1px solid #1e293b;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	z-index: 200;

	.nav-logo {
		font-size: 1.5rem;
		font-weight: 800;
		color: #3b82f6;
		cursor: pointer;
	}

	.desktop-menu {
		display: flex;
		gap: 2rem;

		@media (max-width: 768px) {
			display: none;
		}
	}

	.nav-link {
		color: #94a3b8;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;

		&:hover {
			color: #f8fafc;
		}
	}

	.hamburger-btn {
		display: none;
		flex-direction: column;
		justify-content: space-around;
		width: 2rem;
		height: 2rem;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 110;

		@media (max-width: 768px) {
			display: flex;
		}

		span {
			width: 2rem;
			height: 0.25rem;
			background: #f8fafc;
			border-radius: 10px;
			transition: all 0.3s linear;
			position: relative;
			transform-origin: 1px;

			&:nth-child(1) {
				transform: ${({ $isOpen }) =>
					$isOpen ? 'rotate(45deg)' : 'rotate(0)'};
			}

			&:nth-child(2) {
				opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
				transform: ${({ $isOpen }) =>
					$isOpen ? 'translateX(20px)' : 'translateX(0)'};
			}

			&:nth-child(3) {
				transform: ${({ $isOpen }) =>
					$isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
			}
		}
	}

	.mobile-drawer {
		display: none;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			background: #0b1329;
			height: 100vh;
			width: 300px;
			text-align: left;
			padding: 2rem;
			position: fixed;
			top: 0;
			right: 0;
			transition: transform 0.3s ease-in-out;
			transform: ${({ $isOpen }) =>
				$isOpen ? 'translateX(0)' : 'translateX(100%)'};
			box-shadow: -10px 0px 30px rgba(0, 0, 0, 0.5);
			z-index: 105;
		}

		.nav-link {
			font-size: 1.5rem;
			padding: 1.5rem 0;
			font-weight: 600;
		}
	}

	.drawer-backdrop {
		display: none;

		@media (max-width: 768px) {
			display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background: rgba(0, 0, 0, 0.5);
			backdrop-filter: blur(4px);
			z-index: 101;
		}
	}
`;
