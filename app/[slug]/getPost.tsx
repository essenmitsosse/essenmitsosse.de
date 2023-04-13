import listBlog, { PostBlog } from './content/blog'
import listPortfolio, { PostPortfolio } from './content/portfolio'

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
        postPrev: index < listPost.length ? listPost[index + 1] : undefined,
        postNext: index > 0 ? listPost[index - 1] : undefined,
      }
}
export const getPostAndPrevAndNextViaSlug = (
  slug: string
):
  | {
      post?: PostBlog
      postPrev?: PostBlog
      postNext?: PostBlog
      listPostCategory: ReadonlyArray<PostBlog>
      isBlog: true
    }
  | {
      post?: PostPortfolio
      postPrev?: PostPortfolio
      postNext?: PostPortfolio
      listPostCategory: ReadonlyArray<PostPortfolio>
      isBlog: false
    } => {
  const indexBlog = listBlog.findIndex((post) => post.slug === slug)

  return indexBlog !== -1
    ? {
        ...getPostAndPrevAndNext(listBlog, indexBlog),
        listPostCategory: listBlog,
        isBlog: true,
      }
    : {
        ...getPostAndPrevAndNext(
          listPortfolio,
          listPortfolio.findIndex((post) => post.slug === slug)
        ),
        listPostCategory: listPortfolio,
        isBlog: false,
      }
}

const getGetPostWithScore =
  <T extends PostBlog | PostPortfolio>(post: T) =>
  (
    postCurrent: T
  ): {
    post: T
    score: number
  } => ({
    post: postCurrent,
    score: postCurrent.meta.keywords.filter((keyword) =>
      post.meta.keywords.includes(keyword)
    ).length,
  })

export const getListRelatedPosts = <T extends PostBlog | PostPortfolio>(
  post: T,
  list: ReadonlyArray<T>
): ReadonlyArray<T> =>
  list
    .filter((postCurrent) => postCurrent.slug !== post.slug)
    .map(getGetPostWithScore(post))
    .filter((postMeta) => postMeta.score > 0)
    .sort((postMetaA, postMetaB) => postMetaB.score - postMetaA.score)
    .slice(0, 4)
    .map((postMeta) => postMeta.post)
