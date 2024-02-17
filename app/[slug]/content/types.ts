import type { PostBlog } from './listBlog'
import type { PostPortfolio } from './listPortfolio'
import type { FormatDate } from '@/components/Date'
import type { Metadata } from 'next'
import type { ComponentType } from 'react'

export type MetaPost = Omit<Metadata, 'keywords' | 'title'> & {
  readonly title: string
  readonly keywords: ReadonlyArray<string>
}

export type Post = {
  readonly slug: string

  /**
   * The component must be dynamically imported with an explicit path. This
   * can't be generated dynamically from {@link Post.slug}
   *
   * See: https://nextjs.org/docs/advanced-features/dynamic-import#example
   */
  readonly Component: ComponentType
  readonly date: FormatDate
  readonly meta: MetaPost
}

export type PostSome = PostBlog | PostPortfolio
