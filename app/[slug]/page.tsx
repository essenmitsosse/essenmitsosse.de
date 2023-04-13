import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import classnames from 'classnames'

import {
  getListRelatedPosts,
  getPostAndPrevAndNextViaSlug,
  getPostViaSlug,
  listPost,
} from './getPost'
import Navigation from '@/components/navigation'
import Date from '@/components/date'
import styles from './page.module.scss'
import { MetaPost } from './content/types'

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): MetaPost {
  const post = getPostViaSlug(params.slug)

  if (!post) {
    notFound()
  }

  return post.meta
}

export async function generateStaticParams() {
  return listPost.map((post) => ({ slug: post.slug }))
}

export default function Layout(props: {
  children: ReactNode
  params: { slug: string }
}) {
  const { post, listPostCategory, postPrev, postNext, isBlog } =
    getPostAndPrevAndNextViaSlug(props.params.slug)

  if (!post) {
    notFound()
  }

  const listPostRelated = getListRelatedPosts(post, listPostCategory)

  return (
    <body>
      <Navigation postPrev={postPrev} postNext={postNext} />

      <div
        className={classnames({
          [styles.article]: isBlog,
          black: !isBlog,
          [styles.portfolio]: !isBlog,
        })}
      >
        <div className={classnames(styles.intro, { color: isBlog })}>
          {isBlog ? (
            <h1 dangerouslySetInnerHTML={{ __html: post.htmlTitle }} />
          ) : (
            <h1>{post.meta.title}</h1>
          )}
          {isBlog && (
            <Image
              src={post.imageHeader}
              alt=""
              className={styles.headerImage}
              unoptimized
            />
          )}
        </div>

        <div className={styles.content}>
          <Date date={post.date} />
          <post.Component />
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
              also check out my <Link href="/">Portfolio</Link>.
            </p>
          </div>

          {listPostRelated.length > 0 && (
            <div className="fourwide">
              <h3>
                <em>If you didn&#8217;t like this one</em>You will hate these
              </h3>
              <ul className={styles.relatedPosts}>
                {listPostRelated.map((postRelated) => (
                  <li key={`${postRelated.slug}-related`}>
                    <Link href={postRelated.slug}>
                      {postRelated.meta.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </body>
  )
}
