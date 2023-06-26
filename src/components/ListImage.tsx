import { FC } from 'react'

import Link from '@/components/Link'

import Image from './Image'

const PostImage: FC<{ image: string; slug: string }> = ({ image, slug }) => {
	return (
		<div className="px-4 pt-2">
			<Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
				<Image
					src={image}
					width={0}
					height={0}
					sizes="100vw"
					alt="illustration"
					className="rounded-lg"
					style={{ width: '100%', height: '100%' }}
				/>
			</Link>
		</div>
	)
}

export default PostImage
