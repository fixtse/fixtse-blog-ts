import { FC } from 'react'

import Image from '@/components/Image'

const PostImage: FC<{ image: string }> = ({ image }) => {
  return (
    <div className="px-4 pt-2 xl:row-span-2">
      <Image
        src={image}
        width={150}
        height={85}
        alt="illustration"
        layout="responsive"
        className="rounded object-cover"
      />
    </div>
  )
}

export default PostImage
