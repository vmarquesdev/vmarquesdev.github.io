import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

import RightArrow from '../images/icons/RightArrow';

const Index = () => (
  <div className="container flex flex-hor-center">
		<Helmet
			title="VMarquesdev.github.io"
			meta={[
				{ name: 'description', content: 'My name is Victor I am Full Stack Developer and I work with digital product development from tip to tip.' },
			]}
		/>
		<div className="hero">
			<span className="hero__label">Hi, my name is</span>
			<h1 className="hero__title">Victor Marques</h1>
			<p className="hero__bio">I am Full Stack Developer and I work with digital product development from tip to tip.</p>
			<Link to="/projects/" className="hero__link">See some projects <RightArrow /></Link>
		</div>
	</div>
)

export default Index
