import { ReactNode } from 'react'

import LogoImage from '@/components/ThemedImage'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'

import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import SectionContainer from './SectionContainer'
import ThemeSwitch from './ThemeSwitch'

interface Props {
	children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
	return (
		<SectionContainer>
			<div className="flex h-screen flex-col justify-between">
				<header className="flex items-center justify-between py-10">
					<div>
						<Link href="/" aria-label={siteMetadata.headerTitle}>
							<div className="flex items-center justify-between">
								<div className="mr-3">
									<LogoImage />
								</div>
							</div>
						</Link>
					</div>
					<div className="flex items-center text-base leading-5">
						<div className="hidden sm:block">
							{headerNavLinks.map((link) => (
								<Link
									key={link.title}
									href={link.href}
									className="ml-2 rounded-lg py-1 px-2 text-lg font-semibold text-gray-900 transition duration-500 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
								>
									{link.title}
								</Link>
							))}
						</div>
						<ThemeSwitch />
						<MobileNav />
					</div>
				</header>
				<main className="mb-auto">{children}</main>
				<Footer />
			</div>
		</SectionContainer>
	)
}

export default LayoutWrapper
