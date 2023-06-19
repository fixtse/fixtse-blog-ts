import { FC } from 'react'

import Image from '@/components/Image'
import Link from '@/components/Link'

const PostImage: FC<{ image: string; slug: string }> = ({ image, slug }) => {
	return (
		<div className="px-4 pt-2 xl:row-span-2">
			<Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
				<Image
					src={image}
					width={150}
					height={85}
					alt="illustration"
					layout="responsive"
					className="rounded-lg object-fill"
				/>
			</Link>
		</div>
	)
}

export default PostImage
