import { default as classNames, default as classnames } from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import Date from '@/components/Date'
import Navigation from '@/components/Navigation'

import listBlog from './[slug]/content/listBlog'
import listPortfolio from './[slug]/content/listPortfolio'
import styles from './frontpage.module.scss'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  authors: { name: 'Marcus Blättermann', url: 'https://essenmitsosse.de' },
  description: 'The work and thoughts of an illustrator, print- & webdesigner.',
  icons: 'favicon.png',
  keywords:
    'freelancer, illustrator, designer, design, layout, typography, wacom, photoshop',
  publisher: 'index, follow',
  title: '♣ essenmitsosse',
}

const Page = (): ReactNode => (
  <body>
    <Navigation isHome />

    <div className={styles.allWrapper}>
      <div className={classNames(styles.introduction)}>
        <h1>About</h1>
        <p>
          My name ist Marcus Blättermann. I&rsquo;m majoring in Communication
          Design at{' '}
          <Link href="http://burg-halle.de/">
            Burg Giebichenstein University of Art & Design
          </Link>
          . I work as a freelancer for illustration, print- & webdesign.
        </p>
        <p>
          You should follow me on{' '}
          <Link href="http://twitter.com/essenmitsosse">Twitter</Link>.
        </p>

        <h1>Contact</h1>
        <table>
          <tbody>
            <tr>
              <th>Mail</th>
              <td>
                <a href="mailto:marcus@essenmitsosse.de">
                  marcus@essenmitsosse.de
                </a>
              </td>
            </tr>
            <tr>
              <th>Twitter</th>
              <td>
                <a href="http://twitter.com/essenmitsosse">@essenmitsosse</a>
              </td>
            </tr>
            <tr>
              <th>Youtube</th>
              <td>
                <a href="https://www.youtube-nocookie.com/user/essenmitsosse">
                  /user/essenmitsosse
                </a>
              </td>
            </tr>
            <tr>
              <th>Instagram</th>
              <td>
                <a href="http://instagram.com/essenmitsosse">@essenmitsosse</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classnames(styles.blog, styles.color, 'color')}>
        <h1>Articles</h1>
        <ul className={styles.listBlog}>
          {listBlog.map((post) => (
            <li key={post.slug}>
              <h3>
                <Link href={post.slug}>
                  <Date
                    className={classnames(styles.dateBlog)}
                    date={post.date}
                  />
                  <span dangerouslySetInnerHTML={{ __html: post.htmlTitle }} />
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>

      <div className={classnames(styles.portfolio, styles.black, 'black')}>
        <h1>Portfolio</h1>
        <ul className={styles.listPortfolio}>
          <li className={styles.commentPortfolio}>
            I am sorry that this portfolio is quite out of date. New stuff will
            be coming soon. For now you can find my portfolio on{' '}
            <a
              href="https://www.behance.net/essenmitsosse"
              style={{ borderBottom: 'none', display: 'inline' }}
            >
              Behance
            </a>
            .
          </li>
          {listPortfolio.map((post) => (
            <li key={post.slug}>
              <Link href={post.slug}>
                <span className={styles.portfolioLinkText}>
                  {post.meta.title}
                </span>
                <div className={styles.imageWrapper}>
                  <Image alt="" fill placeholder="blur" src={post.preview} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </body>
)

export default Page
