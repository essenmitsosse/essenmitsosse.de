import listBlog, { PostBlog } from '@/content/blog'
import listPortfolio, { PostPortfolio } from '@/content/portfolio'

export const listPost = [...listBlog, ...listPortfolio]

export const getPostViaSlug = (
  slug: string
): PostBlog | PostPortfolio | undefined =>
  listPost.find((post) => post.slug === slug)

const getPostAndPrevAndNext = <T extends PostBlog | PostPortfolio>(
  listPost: ReadonlyArray<T>,
  index: number
): {
  post?: T
  postPrev?: T
  postNext?: T
} => {
  return index === -1
    ? {}
    : {
        post: listPost[index],
        postPrev: index > 0 ? listPost[index - 1] : undefined,
        postNext: index < listPost.length ? listPost[index + 1] : undefined,
      }
}
export const getPostAndPrevAndNextViaSlug = (
  slug: string
):
  | { post?: PostBlog; postPrev?: PostBlog; postNext?: PostBlog; isBlog: true }
  | {
      post?: PostPortfolio
      postPrev?: PostPortfolio
      postNext?: PostPortfolio
      isBlog: false
    } => {
  const indexBlog = listBlog.findIndex((post) => post.slug === slug)

  return indexBlog !== -1
    ? { ...getPostAndPrevAndNext(listBlog, indexBlog), isBlog: true }
    : {
        ...getPostAndPrevAndNext(
          listPortfolio,
          listPortfolio.findIndex((post) => post.slug === slug)
        ),
        isBlog: false,
      }
}
