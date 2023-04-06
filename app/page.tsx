import { Metadata } from 'next'

import listBlog from '../content/blog'
import listPortfolio from '../content/portfolio'

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

      <p className="logo">
        <a href="/" title="Homepage" id="essenmitsosse">
          <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
        </a>
      </p>

      <div className="allwrapper">
        <div id="introduction" className="homepresentation">
          <div className="wrapper">
            <h1>About</h1>
            <p>
              My name ist Marcus Blättermann. I&rsquo;m majoring in
              Communication Design at{' '}
              <a href="http://burg-halle.de/">
                Burg Giebichenstein University of Art & Design
              </a>
              . I work as a freelancer for illustration, print- & webdesign.
            </p>
            <p>
              You should follow me on{' '}
              <a href="http://twitter.com/essenmitsosse">Twitter</a>.
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
                  <th>Facebook</th>
                  <td>
                    <a href="http://www.facebook.com/essenmitsosse">
                      /essenmitsosse
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
                    <a href={post.slug}>
                      <span className="date">{post.date}</span>
                      <span
                        dangerouslySetInnerHTML={{ __html: post.htmlTitle }}
                      />
                    </a>
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
                  <a
                    href={post.slug}
                    style={{
                      backgroundImage: `url(${post.preview.src}`,
                    }}
                  >
                    <span>{post.meta.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </body>
  )
}
