import Giscus from '@giscus/react'
//import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

import { siteMetadata } from '@/config/siteMetadata'

const Comment = () => {
	const { theme } = useTheme()
	//const { locale } = useRouter()

	return (
		<div id="comment" className="mx-auto max-w-prose py-6">
			<Giscus
				repo={siteMetadata.comment.giscusConfig.repo}
				repoId={siteMetadata.comment.giscusConfig.repositoryId as string}
				category={siteMetadata.comment.giscusConfig.category}
				categoryId={siteMetadata.comment.giscusConfig.categoryId}
				mapping="pathname"
				reactionsEnabled="1"
				emitMetadata="0"
				inputPosition="top"
				theme={theme === 'dark' ? 'transparent_dark' : 'light'}
				//lang={locale}
				loading="lazy"
			/>
		</div>
	)
}

export default Comment
