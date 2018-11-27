import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.buildProjectLinks = this.buildProjectLinks.bind(this);
	}

	buildProjectLinks() {
		const links = [];

		let projects = get(this, 'props.data.allMarkdownRemark.edges');

		projects = projects.sort((a, b) => (
			(a.node.frontmatter.path < b.node.frontmatter.path) ? -1 : 1
		));

		projects.forEach((project) => {
			if (project.node.path !== '/404/') {
				let stacks = [];

				project.node.frontmatter.stacks.split(',').forEach((stack) => {
					let stackName = stack.replace(' ', '');
					let stackClass = "stack-icon stack-icon--" + stackName.toLowerCase();

					stacks.push(
						<div className="stack__item">
							<span className={stackClass}></span>
							<span>{stackName}</span>
						</div>
					)
				})

				links.push(
					<article className="feed__item" key={project.node.frontmatter.path}>
						<a className="feed__link" href={project.node.frontmatter.url} target="_blank">
							<h4 className="feed__title">
								{project.node.frontmatter.title}
							</h4>
						</a>

						<div className="page__content" dangerouslySetInnerHTML={{ __html: project.node.html }} />

						<div>
							<h3>Stacks:</h3>
							<div className="stacks">{stacks}</div>
						</div>
					</article>,
				);
			}
		});

		return links;
	}

	render() {
		return (
			<div className="container">
				<Helmet
					title="Projects | VMarquesdev.github.io"
					meta={[
						{ name: 'description', content: 'Get to know the latest projects.' },
					]}
				/>
				<header className="page__header">
					<h1 className="page__title">Projects</h1>
				</header>

				<div className="feed container--narrow">
					{this.buildProjectLinks()}
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
					html
					frontmatter {
						path
						title
						url
						stacks
					}
				}
			}
		}
	}
`
