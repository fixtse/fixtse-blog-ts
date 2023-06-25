import NextImage, { ImageProps } from 'next/legacy/image'

const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />

export default Image
