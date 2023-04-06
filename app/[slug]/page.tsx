import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import listBlog from '@/content/blog'
import listPortfolio from '@/content/portfolio'

const listPost = [...listBlog, ...listPortfolio]

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = listPost.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return post.meta
}

export async function generateStaticParams() {
  return listPost.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const index = listPost.findIndex((post) => post.slug === params.slug)

  if (index === -1) {
    notFound()
  }

  const post = listPost[index]
  const postPrev = index > 0 ? listPost[index - 1] : undefined
  const postNext = index < listPost.length ? listPost[index + 1] : undefined

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
        className={`intro ${'htmlTitle' in post ? 'color' : undefined}`}
        style={{
          backgroundImage:
            'imageHeader' in post ? `url(${post.imageHeader.src})` : undefined,
        }}
      >
        <p className="logo">
          <a href="/" id="essenmitsosse">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        {'htmlTitle' in post ? (
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
