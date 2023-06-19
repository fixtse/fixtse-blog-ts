import { FC } from 'react'

const YouTube: FC<{ id: string }> = ({ id }) => {
	if (id === undefined || id == '') {
		return <div></div>
	} else {
		return (
			<div className="relative items-center justify-center py-5 ">
				<div className="group relative">
					<div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-primary-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
					<iframe
						className="w-full relative aspect-video  rounded-lg border-0"
						src={'https://www.youtube.com/embed/' + id}
						title="YouTube video player"
						allow="acelerometer; autoplay; clipboards-write; encryped-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		)
	}
}

export default YouTube
