import { GetStaticProps, InferGetStaticPropsType } from 'next'

import Link from '@/components/Link'
import Image from '@/components/ListImage'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { siteMetadata } from '@/config/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { PostFrontMatter } from '@/types/PostFrontMatter'
//import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
	const posts = await getAllFilesFrontMatter('blog')

	return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<PageSEO title={siteMetadata.title} description={siteMetadata.description} />
			<div className="mx-auto max-w-6xl divide-y  divide-gray-200 dark:divide-gray-700">
				<div className="space-y-2 pt-6 pb-8 md:space-y-5">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						Latest
					</h1>
					<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
						{siteMetadata.description}
					</p>
				</div>
				<ul className="divide-y divide-gray-200 rounded-lg dark:divide-gray-700">
					{!posts.length && 'No posts found.'}
					{posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
						const { slug, date, title, summary, tags, images } = frontMatter
						return (
							<li
								key={slug}
								className="rounded-lg py-8 px-4 transition duration-300 hover:rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800"
							>
								<article>
									<div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 ">
										<dl>
											<dt className="sr-only">Published on</dt>
											<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
												<time dateTime={date}>{formatDate(date)}</time>
												<Image image={images[0]} slug={slug} />
											</dd>
										</dl>
										<div className="space-y-5 xl:col-span-3">
											<div className="space-y-3">
												<div>
													<h2 className="text-2xl font-bold leading-8 tracking-tight">
														<Link
															href={`/blog/${slug}`}
															className="text-gray-900 dark:text-gray-100"
														>
															{title}
														</Link>
													</h2>
													<div className="flex flex-wrap">
														{tags.map((tag) => (
															<Tag key={tag} text={tag} num={0} />
														))}
													</div>
												</div>
												<div className="prose max-w-none text-gray-500 dark:text-gray-400">
													{summary}
												</div>
											</div>
											<div className="text-base font-medium leading-6">
												<Link
													href={`/blog/${slug}`}
													className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
													aria-label={`Read "${title}"`}
												>
													Read more &rarr;
												</Link>
											</div>
										</div>
									</div>
								</article>
							</li>
						)
					})}
				</ul>
			</div>
			{posts.length > MAX_DISPLAY && (
				<div className="flex justify-end text-base font-medium leading-6">
					<Link
						href="/blog"
						className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
						aria-label="all posts"
					>
						All Posts &rarr;
					</Link>
				</div>
			)}
			{/*siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )*/}
		</>
	)
}
