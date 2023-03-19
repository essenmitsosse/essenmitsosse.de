import { Metadata } from 'next'

import imageLinentunic from '../../../../website/blog/wp-content/uploads/portfolio/linentunic.jpg'

export const metadata: Metadata = {
  title: 'Linen Tunic ♣ essenmitsosse',
  description:
    'Image of a man in linen tunic with a sword, who is cursed by a wraith in the snow.',
  keywords: 'digital painting, images, marcus blättermann, painting, photoshop',
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
              <a href="digital-life-drawing" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Digital Life Drawing</span>
              </a>
            </li>
            <li className="older">
              <a href="aztecs" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Aztecs</span>
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
        <h1>Linen Tunic</h1>
      </div>

      <div className="content white">
        <div className="eightwide">
          <img
            src={imageLinentunic.src}
            alt="Man in linen tunic with a sword is cursed by a wraith in the snow"
            title="Linen Tunic"
            width="620"
            height="957"
          />
        </div>
        <div className="fourwide">
          <p>
            Done for the{' '}
            <a href="http://gurneyjourney.blogspot.com/2008/04/art-by-committee-looming-up.html">
              “Art by Committee”
            </a>{' '}
            at Gourney Journey. The author of this blog, James Gourney posts an
            excerpt snipped from an actual science fiction manuscript and you
            have to illustrate it.
          </p>
          <blockquote>
            <p>
              … sandals where they were mired. His sword he kept, although the
              scabbard went the way of the rest of his armor. Left naked excat
              for his linen tunic, he was thankful that it was late June and the
              waters had lost the bit in their chill.
              <br />
              Turning his head, he saw someone was looming up out …
            </p>
          </blockquote>
          <p>
            <cite>
              <a href="http://en.wikipedia.org/wiki/James_Warhola">
                James Warhola
              </a>
            </cite>
          </p>
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
