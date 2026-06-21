'use client';

import styled from 'styled-components';

interface StyledButtonProps {
	$variant?: 'primary' | 'outline';
}

export const ButtonStyle = styled.button<StyledButtonProps>`
	background: ${(props) =>
		props.$variant === 'outline' ? 'transparent' : '#0070f3'};
	color: var(--main_white);
	padding: 0.75rem 1.5rem;
	border-radius: 6px;
	border: ${(props) =>
		props.$variant === 'outline' ? '2px solid #334155' : 'none'};
	font-weight: 600;
	cursor: pointer;
	transition: background 0.2s ease;

	&:hover {
		background: ${(props) =>
			props.$variant === 'outline' ? '#1e293b' : '#0051a8'};
		border-color: ${(props) =>
			props.$variant === 'outline' ? '#475569' : 'none'};
	}

	&:disabled {
		background: #cccccc;
		cursor: not-allowed;
	}
`;
