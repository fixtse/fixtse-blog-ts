import NextImage from 'next/image'
import { useTheme } from 'next-themes'

function ThemedImage() {
	const { resolvedTheme } = useTheme()
	let src

	switch (resolvedTheme) {
		case 'light':
			src = '/static/images/logo-light.png'
			break
		case 'dark':
			src = '/static/images/logo-dark.png'
			break
		default:
			src = '/static/images/logo-dark.png'
			break
	}

	return (
		<NextImage
			src={src}
			width={230}
			height={92}
			alt="FixtSE Logo"
			className="rounded-lg object-scale-down transition duration-500"
		/>
	)
}

export default ThemedImage
