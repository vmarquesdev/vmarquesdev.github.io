module.exports = {
  pathPrefix: '/vmarquesdev.github.io',
  siteMetadata: {
    title: 'VMarques.github.io',
    author: 'Victor Hugo Marques',
    description: 'Full-Stack Developer',
    siteUrl: 'https://vmarques.github.io'
  },
  plugins: [
    {
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: 'gatsby-remark-responsive-iframe',
						options: {
							wrapperStyle: 'margin-bottom: 1.0725rem',
						},
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
				],
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
    {
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: '',
			},
		},
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
}
