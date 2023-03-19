import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blondehead &#038; Redhead ♣ essenmitsosse',
  description: 'Paintings of a blonde girl and a redhead.',
  keywords:
    'digital painting, images, marcus blättermann, painting, photoshop, portrait',
}

export default function Page() {
  return (
    <body class="single black portfolio">
      <ul id="navigation" class="black">
        <li class="home">
          <a href="index.html" rel="index">
            Home
          </a>
        </li>
        <li class="articlenavigation">
          <ul>
            <li class="newer">
              <a href="sparta-fanart" rel="next">
                <span class="arrow">&#9668;</span>
                <span class="title">Sparta!</span>
              </a>
            </li>
            <li class="older">
              <a href="older-paintings" rel="prev">
                <span class="arrow">&#9658;</span>
                <span class="title">Older Paintings</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="intro" style="background-image: url()">
        <p class="logo">
          <a href="index.html" id="essenmitsosse">
            <span class="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        <h1>Blondehead &#038; Redhead</h1>
      </div>

      <div class="content white">
        <div class="sixwide">
          <img
            src="blog/wp-content/uploads/portfolio/blondhead.jpg"
            alt="painting of a blonde girl with patterned clothing"
            title="A blonde girl"
            width="460"
            height="662"
          />
        </div>
        <div class="sixwide">
          <img
            src="blog/wp-content/uploads/portfolio/redhead.jpg"
            alt="A redhead nip slip"
            title="A redhead girl"
            width="460"
            height="662"
          />
        </div>
        <hr />
        <div class="sixwide">
          <h3>
            <em>A little bit</em> about me
          </h3>
          <p>
            My name ist Marcus Blättermann. <br />
            I’m majoring in communication design and work as a freelancer for
            illustration, print- & webdesign.
          </p>
        </div>

        <div class="sixwide">
          <h3>
            <em>What you should </em>do next
          </h3>
          <p>
            Don’t forget to follow me on
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="index.html">Portfolio</a>.
          </p>
        </div>
      </div>
    </body>
  )
}
