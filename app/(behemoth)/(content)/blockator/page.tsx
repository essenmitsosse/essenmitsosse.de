import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blockator ♣ essenmitsosse',
  description:
    'Blockator is an isometric 3-d Pixelfont, that is generated with Flash.',
  keywords: 'font, marcus blättermann, pixel, student, Typography',
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
              <a href="faust" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Faust</span>
              </a>
            </li>
            <li className="older">
              <a href="essenmitsosse-redesign" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">essenmitsosse Redesign</span>
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
        <h1>Blockator</h1>
      </div>

      <div className="content white">
        <div style={{ marginTop: '-80px' }}>
          <img
            src="portfolioupload/blockator/blockator.gif"
            alt="Blockator is an isometric 3-d Pixelfont, that is generated with Flash."
            width="940"
            height="1495"
          />
        </div>
        <div>
          <object
            width="940"
            height="600"
            data="portfolioupload/blockator/blockatorgenerator.swf"
          >
            <param
              name="movie"
              value="portfolioupload/blockator/blockatorgenerator.swf"
            />
            <param name="allowscriptaccess" value="always" />
            <embed
              src="portfolioupload/blockator/blockatorgenerator.swf"
              type="application/x-shockwave-flash"
              allowscriptaccess="always"
              width="940"
              height="600"
            />
          </object>
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
