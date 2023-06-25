// eslint-disable-next-line hexagonal-architecture/enforce
export const siteMetadata = {
	title: 'FixtSE',
	author: 'Fixt',
	headerTitle: 'FixtSE',
	description: 'A blog about smart home technology and DYI projects.',
	language: 'en-US',
	theme: 'dark', // system, dark or light
	siteUrl: 'https://fixtse.com',
	siteRepo: 'https://github.com/fixtse/fixtse-blog-ts',
	siteLogo: '/static/images/logo.png',
	image: '/static/images/avatar.png',
	socialBanner: '/static/images/twitter-card.png',
	email: 'fixtse@gmail.com',
	github: 'https://github.com/fixtse',
	twitter: 'https://twitter.com/fixtse',
	facebook: 'https://facebook.com',
	youtube: 'https://www.youtube.com/@fixtse240',
	linkedin: 'https://www.linkedin.com',
	instagram: 'https://instagram.com/fixtse',
	rss: '/feed.xml',
	locale: 'en-US',
	newsletter: {
		// supports mailchimp, buttondown, convertkit, klaviyo
		// Please add your .env file and modify it according to your selection
		provider: 'buttondown',
	},
	comment: {
		// If you want to use a commenting system other than giscus you have to add it to the
		// content security policy in the `next.config.js` file.
		// Select a provider and use the environment variables associated to it
		// https://vercel.com/docs/environment-variables
		provider: 'giscus', // supported providers: giscus, utterances, disqus
		giscusConfig: {
			// Visit the link below, and follow the steps in the 'configuration' section
			// https://giscus.app/
			repo: process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`,
			repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
			category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
			categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
			mapping: 'pathname', // supported options: pathname, url, title
			reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
			// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
			metadata: '0',
			// theme example: light, dark, dark_dimmed, dark_high_contrast
			// transparent_dark, preferred_color_scheme, custom
			theme: 'dark_dimmed',
			// theme when dark mode
			darkTheme: 'dark_dimmed',
			// If the theme option above is set to 'custom`
			// please provide a link below to your custom theme css file.
			// example: https://giscus.app/themes/custom_example.css
			themeURL: '',
		},
	},
}
