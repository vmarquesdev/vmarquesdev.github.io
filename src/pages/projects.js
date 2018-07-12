import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.buildPostLinks = this.buildPostLinks.bind(this);
	}

	buildPostLinks() {
		const postLinks = [];

		let posts = get(this, 'props.data.allMarkdownRemark.edges');

		posts = posts.sort((a, b) => (
			(a.node.frontmatter.path < b.node.frontmatter.path) ? -1 : 1
		));

		posts.forEach((post) => {
			if (post.node.path !== '/404/') {
				postLinks.push(
					<article className="feed__item" key={post.node.frontmatter.path}>
						<Link className="feed__link" to={post.node.frontmatter.path}>
							<h4 className="feed__title">
								{post.node.frontmatter.title}
							</h4>
							<time className="feed__time">
								10 December 2017
							</time>
						</Link>
					</article>,
				);
			}
		});

		return postLinks;
	}

	render() {
		return (
			<div className="container">
				<Helmet
					title="Projetos | VMarquesdev.com.br"
					meta={[
						{ name: 'description', content: 'Conheça meus últimos projetos.' },
					]}
				/>
				<header className="page__header">
					<h1 className="page__title">Projetos</h1>
				</header>

				<div className="feed container--narrow">
					{this.buildPostLinks()}
				</div>
			</div>
		);
	}
}

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						path
						title
					}
				}
			}
		}
	}
`
