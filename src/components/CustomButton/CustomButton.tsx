'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { ButtonStyle } from './ButtonStyle';

export interface ICustomButton extends ComponentPropsWithoutRef<'button'> {
	loading?: boolean;
	variant?: 'primary' | 'outline';
}
const CustomButton = ({
	children,
	variant = 'primary',
	...props
}: ICustomButton) => {
	return (
		<ButtonStyle $variant={variant} {...props}>
			{children}
		</ButtonStyle>
	);
};

export default CustomButton;
