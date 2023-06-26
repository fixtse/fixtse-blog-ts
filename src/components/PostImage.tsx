import Image, { ImageProps } from 'next/image'

type Props = ImageProps & { base64?: string }

export default function CustomImage({ src, height, width, base64, alt, ...otherProps }: Props) {
	if (!src) return null
	if (typeof src === 'string' && (!height || !width)) {
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img src={src} height={height} width={width} alt={alt} {...otherProps} />
		)
	}
	if (width && width > '50' && height && height == width) {
		return (
			<>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Image
						src={src}
						alt={alt}
						width={width}
						height={0}
						style={{ width: '50%', height: '50%' }}
						sizes="100vw"
						className="rounded-lg"
						placeholder={base64 ? 'blur' : 'empty'}
						blurDataURL={base64}
						{...otherProps}
					/>
				</div>
			</>
		)
	}
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={0}
					style={{ width: 'auto', height: 'auto' }}
					sizes="100vw"
					className="rounded-lg"
					placeholder={base64 ? 'blur' : 'empty'}
					blurDataURL={base64}
					{...otherProps}
				/>
			</div>
		</>
	)
}
