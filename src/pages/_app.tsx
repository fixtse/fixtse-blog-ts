import '@/styles/nprogress-custom.css'
import '@/styles/prism.css'
import '@/styles/tailwind.css'
import '@fontsource/ubuntu'
import 'katex/dist/katex.css'

import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import NProgress from 'nprogress'
import { useEffect } from 'react'

import { ClientReload } from '@/components/ClientReload'
import LayoutWrapper from '@/components/LayoutWrapper'
import { siteMetadata } from '@/config/siteMetadata'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET
NProgress.configure({ showSpinner: false })

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		router.events.on('routeChangeStart', () => NProgress.start())
		router.events.on('routeChangeComplete', () => NProgress.done())
		router.events.on('routeChangeError', () => NProgress.done())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
			<Head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Head>
			{isDevelopment && isSocket && <ClientReload />}
			<LayoutWrapper>
				<Component {...pageProps} />
				<Analytics />
			</LayoutWrapper>
		</ThemeProvider>
	)
}
