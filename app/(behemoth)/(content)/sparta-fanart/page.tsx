import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sparta! ♣ essenmitsosse',
  description: 'Image of a Spartan who slaughters a Persian warrior.',
  keywords:
    'digital painting, fanart, images, marcus blättermann, painting, photoshop, sparta',
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
              <a href="the-anglerfish" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">The Anglerfish</span>
              </a>
            </li>
            <li className="older">
              <a href="blondheadredhead" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Blondehead &#038; Redhead</span>
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
        <h1>Sparta!</h1>
      </div>

      <div className="content white">
        <div className="fullwidth">
          <img
            src="blog/wp-content/uploads/portfolio/sparta.jpg"
            alt="A Spartan who is going to cut the head of an Persian"
            title="A Spartan killing a Persian with his sword"
            width="940"
            height="507"
          />
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
            Don’t forget to follow me on{' '}
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="/">Portfolio</a>.
          </p>
        </div>
      </div>
    </body>
  )
}
