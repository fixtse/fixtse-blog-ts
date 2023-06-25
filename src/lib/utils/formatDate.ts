import { siteMetadata } from '@/config/siteMetadata'

const formatDate = (date: string) => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	const now = new Date(date).toLocaleDateString(siteMetadata.locale, options)

	return now
}

export default formatDate
