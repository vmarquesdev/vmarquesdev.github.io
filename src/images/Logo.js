import React from 'react';
/* eslint-disable */
const Logo = (props) => {
	const { className } = props;

	return(
		<svg className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 80 80">
			<path id="background" fill="currentColor" d="M24.08,0H80v57.6c-0.779,5.881-3.25,11.69-7.811,15.61C67.68,77.2,61.77,79.22,55.891,80H0 V22.44c0.66-4.72,2.25-9.41,5.35-13.1C9.89,3.7,17.07,0.92,24.08,0z"></path>
			<g>
				<path fill="#FFFFFF" d="M121.31,134.86q-3-10.65-4.17-14.31a5,5,0,0,0-4.84-3.9l-0.16-.31,0.55-4.37L120,112q3.2,0,6.44-.23l4.17-.31,0.16,0.39-0.7,4.45A9.71,9.71,0,0,0,127,117a1.47,1.47,0,0,0-.7,1.4q0,1.33,2.07,9.59t2.85,11.23H132q3.82-10.53,5.38-15.17a27.66,27.66,0,0,0,1.56-5.73,1.31,1.31,0,0,0-.55-1.25,4.53,4.53,0,0,0-2-.31h-2.18l-0.31-.55,0.55-4.21L143,112,150,112l-0.62,4.68a4.12,4.12,0,0,0-2.5,1.05,11.56,11.56,0,0,0-1.79,3.55L135.31,148l-10,1.17Q124.31,145.5,121.31,134.86Z" transform="translate(-90 -90)" />
			</g>
		</svg>
	);
};

export default Logo;
