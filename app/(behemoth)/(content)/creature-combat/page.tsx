import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creature Combat IV ♣ essenmitsosse',
  description: 'Animation movie of a battle between a cat and a mouse.',
  keywords:
    'animation, cat, drawing, funny, marcus blaettermann, mouse, student, susanne wohlfahrt',
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
              <a href="kino-120a" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">kino.120a</span>
              </a>
            </li>
            <li className="older">
              <a href="faust" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Faust</span>
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
        <h1>Creature Combat IV</h1>
      </div>

      <div className="content white">
        <p>
          <iframe
            width="940"
            height="547"
            src="https://www.youtube.com/embed/9eF5c__8DFA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
        <div className="fourwide">
          <p>
            Animated movie created in a four day animation workshop with Kathi
            Käppel.
          </p>
          <p>Group work by Susanne Wohlfahrt and Marcus Blättermann.</p>
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
