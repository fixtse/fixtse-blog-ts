import { FC } from 'react'

const YouTube: FC<{ id: string }> = ({ id }) => {
  return (
    <div className="py-1   px-3">
      <iframe
        width="100%"
        height="100%"
        src={'https://www.youtube.com/embed/' + id}
        title="YouTube video player"
        frameBorder="0"
        allow="acelerometer; autoplay; clipboards-write; encryped-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  )
}

export default YouTube
