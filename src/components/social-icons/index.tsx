import Facebook from './facebook.svg'
import Github from './github.svg'
import Instagram from './instagram.svg'
import Linkedin from './linkedin.svg'
import Mail from './mail.svg'
import RSS from './rss.svg'
import Twitter from './twitter.svg'
import Youtube from './youtube.svg'

// Icons taken from: https://simpleicons.org/

const components = {
	mail: Mail,
	github: Github,
	facebook: Facebook,
	youtube: Youtube,
	linkedin: Linkedin,
	twitter: Twitter,
	instagram: Instagram,
	rss: RSS,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
	if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
		return null

	const SocialSvg = components[kind]

	return (
		<a
			className="text-sm text-gray-500 transition hover:text-gray-600"
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			<span className="sr-only">{kind}</span>
			<SocialSvg
				className={`fill-current text-gray-700 transition duration-500 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
			/>
		</a>
	)
}

export default SocialIcon
