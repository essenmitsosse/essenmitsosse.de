import { Metadata } from 'next'

import imageBlondhead from '../../../../website/blog/wp-content/uploads/portfolio/blondhead.jpg'
import imageRedhead from '../../../../website/blog/wp-content/uploads/portfolio/redhead.jpg'

export const metadata: Metadata = {
  title: 'Blondehead &#038; Redhead ♣ essenmitsosse',
  description: 'Paintings of a blonde girl and a redhead.',
  keywords:
    'digital painting, images, marcus blättermann, painting, photoshop, portrait',
}

export default function Page() {
  return (
    <body className="single black portfolio">
      <ul id="navigation" className="black">
        <li className="home">
          <a href="/" rel="index">
            Home
          </a>
        </li>
        <li className="articlenavigation">
          <ul>
            <li className="newer">
              <a href="sparta-fanart" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Sparta!</span>
              </a>
            </li>
            <li className="older">
              <a href="older-paintings" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Older Paintings</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="intro">
        <p className="logo">
          <a href="/" id="essenmitsosse" rel="index">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        <h1>Blondehead &#038; Redhead</h1>
      </div>

      <div className="content white">
        <div className="sixwide">
          <img
            src={imageBlondhead.src}
            alt="painting of a blonde girl with patterned clothing"
            title="A blonde girl"
            width="460"
            height="662"
          />
        </div>
        <div className="sixwide">
          <img
            src={imageRedhead.src}
            alt="A redhead nip slip"
            title="A redhead girl"
            width="460"
            height="662"
          />
        </div>
        <hr />
        <div className="sixwide">
          <h3>
            <em>A little bit</em> about me
          </h3>
          <p>
            My name ist Marcus Blättermann. <br />
            I&rsquo;m majoring in communication design and work as a freelancer
            for illustration, print- & webdesign.
          </p>
        </div>

        <div className="sixwide">
          <h3>
            <em>What you should </em>do next
          </h3>
          <p>
            Don&rsquo;t forget to follow me on{' '}
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="/">Portfolio</a>.
          </p>
        </div>
      </div>
    </body>
  )
}
