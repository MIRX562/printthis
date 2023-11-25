import React from 'react';

export default function Button({
	primary,
	secondary,
	onClick,
	disabled,
	children,
}) {
	const commonStyles = 'py-2 px-4 rounded focus:outline-none';

	let buttonStyles = 'border ';
	if (primary) {
		buttonStyles += 'bg-blue-500 text-white hover:bg-blue-700';
	} else if (secondary) {
		buttonStyles += 'bg-gray-300 text-gray-800 hover:bg-gray-400';
	} else {
		buttonStyles += 'bg-gray-500 text-white cursor-not-allowed';
	}

	return (
		<button
			className={`${commonStyles} ${buttonStyles}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
}
