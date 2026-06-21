'use client';

import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1.5rem;
`;

export const Section = styled.section`
	padding: 5rem 0;
`;

export const SectionHeader = styled.div`
	text-align: center;
	margin-bottom: 4rem;
`;

export const Tag = styled.span`
	background: #1e3a8a;
	color: #60a5fa;
	font-size: 0.875rem;
	font-weight: 600;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
	font-size: 2.25rem;
	font-weight: 700;
	margin-top: 1rem;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
`;

export const Card = styled.div`
	background: #1e293b;
	border: 1px solid #334155;
	padding: 2rem;
	border-radius: 12px;
	transition:
		transform 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		transform: translateY(-4px);
		border-color: #3b82f6;
	}
`;

export const CardIcon = styled.div`
	font-size: 2rem;
	margin-bottom: 1rem;
	color: #3b82f6;
`;

export const CardTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.75rem;
`;

export const CardDescription = styled.p`
	color: #94a3b8;
	font-size: 0.95rem;
	line-height: 1.6;
`;

export const SplitSection = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem;
	align-items: center;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
`;

export const ContentBlock = styled.div`
	h3 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}
	p {
		color: #94a3b8;
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}
`;
