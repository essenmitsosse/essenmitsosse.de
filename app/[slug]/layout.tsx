import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { getListRelatedPosts, getPostAndPrevAndNextViaSlug } from './getPost'

export default function Layout(props: {
  children: ReactNode
  params: { slug: string }
}) {
  const { post, listPost, postPrev, postNext, isBlog } =
    getPostAndPrevAndNextViaSlug(props.params.slug)

  if (!post) {
    notFound()
  }

  const listPostRelated = getListRelatedPosts(post, listPost)

  return (
    <body
      className={`single ${
        'htmlTitle' in post ? 'article' : 'black portfolio'
      }`}
    >
      <ul id="navigation" className="black">
        <li className="home">
          <Link href="/" rel="index">
            Home
          </Link>
        </li>
        <li className="articlenavigation">
          <ul>
            {postPrev && (
              <li className="newer">
                <Link href={postPrev.slug} rel="prev">
                  <span className="arrow">&#9668;</span>{' '}
                  <span
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html:
                        'htmlTitle' in postPrev
                          ? postPrev.htmlTitle
                          : postPrev.meta.title,
                    }}
                  />
                </Link>
              </li>
            )}

            {postNext && (
              <li className="older">
                <Link href={postNext.slug} rel="next">
                  <span className="arrow">&#9658;</span>{' '}
                  <span
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html:
                        'htmlTitle' in postNext
                          ? postNext.htmlTitle
                          : postNext.meta.title,
                    }}
                  />
                </Link>
              </li>
            )}
          </ul>
        </li>
      </ul>

      <div className={`intro ${isBlog ? 'color' : undefined}`}>
        <p className="logo">
          <Link href="/" id="essenmitsosse">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </Link>
        </p>
        {isBlog ? (
          <h1 dangerouslySetInnerHTML={{ __html: post.htmlTitle }} />
        ) : (
          <h1>{post.meta.title}</h1>
        )}
        {isBlog && (
          <Image
            src={post.imageHeader}
            alt=""
            className="header-image"
            unoptimized
          />
        )}
      </div>

      <div className="content white">
        <div className="date">
          <p>{post.date}</p>
        </div>
        {props.children}
        <hr />
        <div className="fourwide">
          <h3>
            <em>A little bit</em> about me
          </h3>
          <p>
            My name ist Marcus Blättermann. <br />
            I’m majoring in communication design and work as a freelancer for
            illustration, print- & webdesign.
          </p>
        </div>

        <div className="fourwide">
          <h3>
            <em>What you should </em>do next
          </h3>
          <p>
            Don’t forget to follow me on{' '}
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="http://essenmitsosse.de">Portfolio</a>.
          </p>
        </div>

        {listPostRelated.length > 0 && (
          <div className="fourwide">
            <h3>
              <em>If you didn&#8217;t like this one</em>You will hate these
            </h3>
            <ul>
              {listPostRelated.map((postRelated) => (
                <li key={`${postRelated.slug}-related`}>
                  <Link href={postRelated.slug}>{postRelated.meta.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </body>
  )
}
