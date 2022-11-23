import { FC } from 'react'

const YouTube: FC<{ id: string }> = ({ id }) => {
  return (
    <div className="flex items-center justify-center py-5">
      <iframe
        width="100%"
        height="450"
        src={'https://www.youtube.com/embed/' + id}
        title="YouTube video player"
        frameBorder="0"
        allow="acelerometer; autoplay; clipboards-write; encryped-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  )
}

export default YouTube
