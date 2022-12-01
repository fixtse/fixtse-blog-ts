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
      width={250}
      height={100}
      alt="FixtSE Logo"
      className="object-cover object-center md:h-36 lg:h-48"
    />
  )
}

export default ThemedImage
