import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'secondary' | 'accent';
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', variant = 'primary', disabled = false }) => {
	const baseClasses = 'px-6 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
	let variantClasses = '';

	switch (variant) {
		case 'primary':
			variantClasses = 'bg-primary hover:bg-green-700 focus:ring-primary';
			break;
		case 'secondary':
			variantClasses = 'bg-secondary hover:bg-orange-700 focus:ring-secondary';
			break;
		case 'accent':
			variantClasses = 'bg-accent-red hover:bg-red-700 focus:ring-accent-red';
			break;
		default:
			variantClasses = 'bg-primary hover:bg-green-700 focus:ring-primary';
	}

	return (
		<button type={type} onClick={onClick} disabled={disabled} className={`${baseClasses} ${variantClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
			{children}
		</button>
	);
};

export default Button;
