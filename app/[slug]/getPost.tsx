import listBlog from './content/blog'
import listPortfolio from './content/portfolio'

import type { PostBlog } from './content/blog'
import type { PostPortfolio } from './content/portfolio'

export const listPost = [...listBlog, ...listPortfolio]

export const getPostViaSlug = (
  slug: string,
): PostBlog | PostPortfolio | undefined =>
  listPost.find((post) => post.slug === slug)

const getPostAndPrevAndNext = <T extends PostBlog | PostPortfolio>(
  listPost: ReadonlyArray<T>,
  index: number,
): {
  readonly post?: T
  readonly postPrev?: T
  readonly postNext?: T
} =>
  index === -1
    ? {}
    : {
        post: listPost[index],
        postNext: index > 0 ? listPost[index - 1] : undefined,
        postPrev: index < listPost.length ? listPost[index + 1] : undefined,
      }

export const getPostAndPrevAndNextViaSlug = (
  slug: string,
):
  | {
      readonly post?: PostBlog
      readonly postPrev?: PostBlog
      readonly postNext?: PostBlog
      readonly listPostCategory: ReadonlyArray<PostBlog>
      readonly isBlog: true
    }
  | {
      readonly post?: PostPortfolio
      readonly postPrev?: PostPortfolio
      readonly postNext?: PostPortfolio
      readonly listPostCategory: ReadonlyArray<PostPortfolio>
      readonly isBlog: false
    } => {
  const indexBlog = listBlog.findIndex((post) => post.slug === slug)

  return indexBlog !== -1
    ? {
        ...getPostAndPrevAndNext(listBlog, indexBlog),
        isBlog: true,
        listPostCategory: listBlog,
      }
    : {
        ...getPostAndPrevAndNext(
          listPortfolio,
          listPortfolio.findIndex((post) => post.slug === slug),
        ),
        isBlog: false,
        listPostCategory: listPortfolio,
      }
}

const getGetPostWithScore =
  <T extends PostBlog | PostPortfolio>(post: T) =>
  (
    postCurrent: T,
  ): {
    readonly post: T
    readonly score: number
  } => ({
    post: postCurrent,
    score: postCurrent.meta.keywords.filter((keyword) =>
      post.meta.keywords.includes(keyword),
    ).length,
  })

export const getListRelatedPosts = <T extends PostBlog | PostPortfolio>(
  post: T,
  list: ReadonlyArray<T>,
): ReadonlyArray<T> =>
  list
    .filter((postCurrent) => postCurrent.slug !== post.slug)
    .map(getGetPostWithScore(post))
    .filter((postMeta) => postMeta.score > 0)
    .sort((postMetaA, postMetaB) => postMetaB.score - postMetaA.score)
    .slice(0, 4)
    .map((postMeta) => postMeta.post)
