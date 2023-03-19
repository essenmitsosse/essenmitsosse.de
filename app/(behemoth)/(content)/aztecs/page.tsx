import { Metadata } from 'next'

import imageAztecs from '../../../../website/blog/wp-content/uploads/portfolio/aztecs.jpg'

export const metadata: Metadata = {
  title: 'Aztecs ♣ essenmitsosse',
  description:
    'An image showing an Aztec warrior killing a Spanish Conquiztador',
  keywords:
    'actecs, digital painting, images, marcus blättermann, painting, photoshop',
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
              <a href="linen-tunic" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Linen Tunic</span>
              </a>
            </li>
            <li className="older">
              <a href="the-anglerfish" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">The Anglerfish</span>
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
        <h1>Aztecs</h1>
      </div>

      <div className="content white">
        <div className="fullwidth">
          <img
            src={imageAztecs.src}
            alt="An Actecs slaughtering a Spanish Conquistador"
            title="An Actecs slaughtering a Spanish Conquiztador"
            width="780"
            height="351"
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
