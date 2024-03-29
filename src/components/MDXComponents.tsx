/* eslint-disable react/display-name */
import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
import React, { useMemo } from 'react'

import CustomLink from './Link'
import { BlogNewsletterForm } from './NewsletterForm'
import Image from './PostImage'
import Pre from './Pre'
import TOCInline from './TOCInline'
import YouTube from './Youtube'

const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
	const Layout = require(`../layouts/${layout}`).default
	return <Layout {...rest} />
}

export const MDXComponents: ComponentMap = {
	Image,
	//@ts-ignore
	TOCInline,
	a: CustomLink,
	pre: Pre,
	wrapper: Wrapper,
	//@ts-ignore
	BlogNewsletterForm,
	YouTube,
}

interface Props {
	layout: string
	mdxSource: string
	[key: string]: unknown
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
	const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

	return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
