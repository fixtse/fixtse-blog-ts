import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={8} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={8} />
          <SocialIcon kind="github" href={siteMetadata.github} size={8} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={8} />
          <SocialIcon kind="rss" href={siteMetadata.rss} size={8} />
        </div>

        <div className="group relative mb-3 mt-1">
          <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-primary-600 opacity-50 blur transition duration-500"></div>
          <div className="relative  flex space-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
            <div>{siteMetadata.author}</div>
            <div>{' • '}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
