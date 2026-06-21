import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '../../lib/registry';
import Navbar from '@/features/NavBar/NavBar';
import { Footer } from '@/features/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Fenerj App',
	description: 'A Tech Company.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<Navbar />
					<div style={{ paddingTop: '70px' }}>{children}</div>
					<Footer />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
