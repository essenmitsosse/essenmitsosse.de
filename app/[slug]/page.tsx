import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import listBlog, { PostBlog } from '@/content/blog'
import listPortfolio, { PostPortfolio } from '@/content/portfolio'

const listPost = [...listBlog, ...listPortfolio]

const getPostViaSlug = (slug: string): PostBlog | PostPortfolio | undefined =>
  listPost.find((post) => post.slug === slug)

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = getPostViaSlug(params.slug)

  if (!post) {
    notFound()
  }

  return post.meta
}

export async function generateStaticParams() {
  return listPost.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPostViaSlug(params.slug)

  if (!post) {
    notFound()
  }

  return <post.Component />
}
