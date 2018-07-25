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

		createNodeField({ node, name: 'slug', value: slug });
	}
};
