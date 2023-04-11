import { Metadata } from 'next'

import listBlog from './[slug]/content/blog'
import listPortfolio from './[slug]/content/portfolio'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/logo'

export const metadata: Metadata = {
  title: '♣ essenmitsosse',
  description: 'The work and thoughts of an illustrator, print- & webdesigner.',
  publisher: 'index, follow',
  keywords:
    'freelancer, illustrator, designer, design, layout, typography, wacom, photoshop',
  authors: { name: 'Marcus Blättermann', url: 'https://essenmitsosse.de' },
  icons: 'favicon.png',
}

export default function Home() {
  return (
    <body className="homepage">
      <ul id="navigation" className="black"></ul>

      <Logo />

      <div className="allwrapper">
        <div id="introduction" className="homepresentation">
          <div className="wrapper">
            <h1>About</h1>
            <p>
              My name ist Marcus Blättermann. I&rsquo;m majoring in
              Communication Design at{' '}
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
                    <a href="http://twitter.com/essenmitsosse">
                      @essenmitsosse
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Youtube</th>
                  <td>
                    <a href="https://www.youtube.com/user/essenmitsosse">
                      /user/essenmitsosse
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Instagram</th>
                  <td>
                    <a href="http://instagram.com/essenmitsosse">
                      @essenmitsosse
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="articles" className="homepresentation">
          <div className="wrapper color">
            <h1>Articles</h1>
            <ul>
              {listBlog.map((post) => (
                <li key={post.slug}>
                  <h3>
                    <Link href={post.slug}>
                      <span className="date">{post.date}</span>
                      <span
                        dangerouslySetInnerHTML={{ __html: post.htmlTitle }}
                      />
                    </Link>
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="portfolio" className="homepresentation black">
          <div className="wrapper">
            <h1>Portfolio</h1>
            <ul>
              <li className="commentPortfolio">
                I am sorry that this portfolio is quite out of date. New stuff
                will be coming soon. For now you can find my portfolio on{' '}
                <a
                  href="https://www.behance.net/essenmitsosse"
                  style={{ display: 'inline', borderBottom: 'none' }}
                >
                  Behance
                </a>
                .
              </li>
              {listPortfolio.map((post) => (
                <li key={post.slug}>
                  <Link href={post.slug}>
                    <span>{post.meta.title}</span>
                    <div className="image-wrapper">
                      <Image
                        src={post.preview}
                        alt=""
                        fill
                        placeholder="blur"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </body>
  )
}
