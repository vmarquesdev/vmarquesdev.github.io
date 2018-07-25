import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

import RightArrow from '../images/icons/RightArrow';

const Index = () => (
  <div className="container flex flex-hor-center">
		<Helmet
			title="VMarquesdev.github.io"
			meta={[
				{ name: 'description', content: 'Meu nome é Victor sou Full Stack Developer e trabalho com desenvolvimento de produtos digitas de ponta a ponta.' },
			]}
		/>
		<div className="hero">
			<span className="hero__label">Olá, meu nome é</span>
			<h1 className="hero__title">Victor Marques</h1>
			<p className="hero__bio">Sou Full Stack Developer e trabalho com desenvolvimento de produtos digitas de ponta a ponta.</p>
			<Link to="/projects/" className="hero__link">Conheça meus projetos <RightArrow /></Link>
		</div>
	</div>
)

export default Index
