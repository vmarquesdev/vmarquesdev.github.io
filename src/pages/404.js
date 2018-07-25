import React from 'react';
import Link from 'gatsby-link';

const NotFound = () => (
	<div className="container">
		<header className="page__header">
			<h1 className="page__title">Not Found</h1>
		</header>

		<div className="page__content page__content--notfound container--narrow">
			<p>Desculpe, está página que você está procurando não existe. Tente dar uma olhada na página de <Link to="/projects/">projetos</Link>.</p>
		</div>
	</div>
);

export default NotFound;
