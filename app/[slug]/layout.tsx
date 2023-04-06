import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import listBlog, { PostBlog } from '@/content/blog'
import listPortfolio, { PostPortfolio } from '@/content/portfolio'

const listPost = [...listBlog, ...listPortfolio]

const getPostViaSlug = (slug: string): PostBlog | PostPortfolio | undefined =>
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

const getPostAndPrevAndNextViaSlug = (
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
  const { post, postPrev, postNext, isBlog } = getPostAndPrevAndNextViaSlug(
    params.slug
  )

  if (!post) {
    notFound()
  }

  return (
    <body
      className={`single ${
        'htmlTitle' in post ? 'article' : 'black portfolio'
      }`}
    >
      <ul id="navigation" className="black">
        <li className="home">
          <a href="/" rel="index">
            Home
          </a>
        </li>
        <li className="articlenavigation">
          <ul>
            {postPrev && (
              <a href={postPrev.slug} rel="prev">
                <li className="newer">
                  <span className="arrow">&#9668;</span>{' '}
                  <span className="title">{postPrev.meta.title}</span>
                </li>
              </a>
            )}

            {postNext && (
              <a href={postNext.slug} rel="next">
                <li className="older">
                  <span className="arrow">&#9658;</span>{' '}
                  <span className="title">{postNext.meta.title}</span>
                </li>
              </a>
            )}
          </ul>
        </li>
      </ul>

      <div
        className={`intro ${isBlog ? 'color' : undefined}`}
        style={{
          backgroundImage: isBlog ? `url(${post.imageHeader.src})` : undefined,
        }}
      >
        <p className="logo">
          <a href="/" id="essenmitsosse">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        {isBlog ? (
          <h1 dangerouslySetInnerHTML={{ __html: post.htmlTitle }} />
        ) : (
          <h1>{post.meta.title}</h1>
        )}
      </div>

      <div className="content white">
        <div className="date">
          <p>{post.date}</p>
        </div>
        {<post.Component />}
        <hr />
        <div className="fourwide">
          <h3>
            <em>A little bit</em> about me
          </h3>
          <p>
            My name ist Marcus Blättermann. <br />
            I’m majoring in communication design and work as a freelancer for
            illustration, print- & webdesign. If you like my work you can{' '}
            <script type="text/javascript">mail2();</script>
            <noscript>hire me. marcus -at- essenmitsosse -dot- de</noscript>.
          </p>
        </div>

        <div className="fourwide">
          <h3>
            <em>What you should </em>do next
          </h3>
          <p>
            Don’t forget to subscribe to my{' '}
            <a href="http://feeds.feedburner.com/essenmitsosse" rel="alternate">
              RSS-Feed
            </a>{' '}
            and follow me on{' '}
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="http://essenmitsosse.de">Portfolio</a>.
          </p>
        </div>

        <div className="fourwide">
          <h3>
            <em>If you didn&#8217;t like this one</em>You will hate these
          </h3>
        </div>
      </div>
    </body>
  )
}
