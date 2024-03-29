import { ReactNode } from 'react'

import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'
import { AuthorFrontMatter } from '@/types/AuthorFrontMatter'

interface Props {
	children: ReactNode
	frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
	const { name, avatar, occupation, company, email, twitter, instagram, github } = frontMatter

	return (
		<>
			<PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
			<div className="divide-y">
				<div className="space-y-2 pt-6 pb-8 md:space-y-5">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						About
					</h1>
				</div>
				<div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
					<div className="flex flex-col items-center space-x-2 pt-8">
						<div className="group relative">
							<div className="animate-tilt absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-600 to-primary-600 opacity-100 blur"></div>
							<Image
								src={avatar}
								alt="avatar"
								width="192"
								height="192"
								className="relative  flex h-48 w-48 rounded-full"
							/>
						</div>
						<h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
						<div className="text-gray-500 dark:text-gray-400">{occupation}</div>
						<div className="text-gray-500 dark:text-gray-400">{company}</div>
						<div className="flex space-x-3 pt-6">
							<SocialIcon kind="mail" href={`mailto:${email}`} />
							<SocialIcon kind="instagram" href={instagram} />
							<SocialIcon kind="github" href={github} />
							<SocialIcon kind="twitter" href={twitter} />
						</div>
					</div>
					<div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
				</div>
			</div>
		</>
	)
}
