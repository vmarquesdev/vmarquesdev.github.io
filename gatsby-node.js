const Shell = require('child_process');
const path = require('path');

exports.onCreateNode = function ({ node, boundActionCreators, getNode }) {
	const { createNodeField } = boundActionCreators;

	let slug;

	if (node.internal.type === 'MarkdownRemark') {
		const fileNode = getNode(node.parent);
		const parsedFilePath = path.parse(fileNode.relativePath);

		if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
			slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
		} else if (parsedFilePath.dir === '') {
			slug = `/${parsedFilePath.name}/`;
		} else {
			slug = `/${parsedFilePath.dir}/`;
		}

		// Add slug as a field on the node.
		createNodeField({ node, name: 'slug', value: slug });
	}
};

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve('src/templates/blog-post.js');

		resolve(
			graphql(`
				{
					allMarkdownRemark(limit: 1000) {
						edges {
							node {
								frontmatter {
									path
								}
							}
						}
					}
				}
			`).then((result) => {
				if (result.errors) reject(result.erros);

				result.data.allMarkdownRemark.edges.forEach(({ node }) => {
					const path = node.frontmatter.path;

					createPages({
						path,
						context: { path },
						component: blogPostTemplate,
					})
				})
			})
		)
	});
};

// exports.onPostBuild = function () {
// 	Shell.execSync('cp src/_redirects public');
// 	Shell.execSync('cp src/_headers public');
// 	Shell.execSync('cp src/manifest.json public');
//   Shell.execSync('cp -R src/images/icons public/icons');
//   Shell.execSync('cp src/images/favicon.ico public');
// };
