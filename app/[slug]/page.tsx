import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPostViaSlug, listPost } from './getPost'

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
