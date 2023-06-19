import { FC } from 'react'

const YouTube: FC<{ id: string }> = ({ id }) => {
	if (id === undefined || id == '') {
		return <div></div>
	} else {
		return (
			<div className="flex items-center justify-center py-5 ">
				<div className="group relative">
					<div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-primary-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
					<iframe
						className="relative aspect-video w-full rounded-lg"
						width="100%"
						height="450"
						src={'https://www.youtube.com/embed/' + id}
						title="YouTube video player"
						frameBorder="0"
						allow="acelerometer; autoplay; clipboards-write; encryped-media; gyroscope; picture-in-picture"
					></iframe>
				</div>
			</div>
		)
	}
}

export default YouTube
