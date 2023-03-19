import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Human Brain ♣ essenmitsosse',
  description:
    'Animated movie giving an idea about how the brain really works.',
  keywords:
    '8bit, animation, brain, human, intelligence, marcus blaettermann, neuron, pixel, student',
}

export default function Page() {
  return (
    <body className="single black portfolio">
      <ul id="navigation" className="black">
        <li className="home">
          <a href="index.html" rel="index">
            Home
          </a>
        </li>
        <li className="articlenavigation">
          <ul>
            <li className="newer">
              <a href="jack-of-all-trades" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Jack of all Trades</span>
              </a>
            </li>
            <li className="older">
              <a href="kino-120a" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">kino.120a</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="intro">
        <p className="logo">
          <a href="index.html" id="essenmitsosse">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        <h1>The Human Brain</h1>
      </div>

      <div className="content white">
        <p>
          <iframe
            width="940"
            height="635"
            src="https://www.youtube.com/embed/ozOJeg8TXWI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
        <div className="fourwide">
          <p>
            Animated movie created during an exchange semester at Staffordshire
            University. The part about how the brain not works is inspired by
            <em>Der Mensch als Industriepalast</em> by
            <a href="http://www.fritz-kahn.com/">Fritz Kahn</a>. Music by
            thefloorisnowlava.
          </p>
          <p>
            The idea was to dispel misunderstandings about how the human brain
            works. It is not meant to actually explain the function of the
            brain, which would be quite difficult, since there are still a lot
            of questions to be answered in this area of science. It is about
            giving an idea, that the brain is not made up of smaller brains, but
            of simple parts, which alone are not that intelligent. The whole is
            greater than the sum of its parts.
          </p>
          <p>
            I am aware of the fact, that not just the human brain works like
            this, but humans were a requirement for this terms project.
          </p>
        </div>
        <hr />
        <div className="sixwide">
          <h3>
            <em>A little bit</em> about me
          </h3>
          <p>
            My name ist Marcus Blättermann. <br />
            I’m majoring in communication design and work as a freelancer for
            illustration, print- & webdesign.
          </p>
        </div>

        <div className="sixwide">
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
