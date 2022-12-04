import Link from 'next/link'

import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
  num: number
}

const hasValue = (text: string, num: number) => {
  if (num > 0) {
    return text.split(' ').join('-') + ` (${num})`
  } else {
    return text.split(' ').join('-')
  }
}

const Tag = ({ text, num }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <div className="pt-3">
        <div className="group relative">
          <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-primary-600 opacity-25 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200"></div>
          <a className="relative mr-3 flex rounded-lg bg-primary-200 py-2 px-2 text-sm font-semibold uppercase leading-none text-primary-900 dark:bg-primary-600 dark:text-primary-100">
            {hasValue(text, num)}
          </a>
        </div>
      </div>
    </Link>
  )
}

export default Tag
