import { Metadata } from 'next'
import { ComponentType } from 'react'

export type Post = {
  slug: string

  /**
   * The component must be dynamically imported with an explicit path. This
   * can't be generated dynamically from {@link Post.slug}
   *
   * See: https://nextjs.org/docs/advanced-features/dynamic-import#example
   */
  Component: ComponentType
  meta: Metadata
}
