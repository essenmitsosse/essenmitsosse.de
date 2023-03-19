import { Metadata } from 'next'

import imageDragonavenue from '../../../../website/blog/wp-content/uploads/portfolio/dragonavenue.jpg'
import imageSaltlake from '../../../../website/blog/wp-content/uploads/portfolio/saltlake.jpg'
import imageGondel from '../../../../website/blog/wp-content/uploads/portfolio/gondel.jpg'
import imageBaldface from '../../../../website/blog/wp-content/uploads/portfolio/baldface.jpg'
import imageAirface from '../../../../website/blog/wp-content/uploads/portfolio/airface.jpg'
import imageTurtleline from '../../../../website/blog/wp-content/uploads/portfolio/turtleline.jpg'
import imageTurtle from '../../../../website/blog/wp-content/uploads/portfolio/turtle.jpg'

export const metadata: Metadata = {
  title: 'Older Paintings ♣ essenmitsosse',
  description: 'Some older paintings by Marcus Blättermann.',
  keywords:
    'digital painting, Dinosaur, Dragon, Gondola, images, Jungle, marcus blättermann, painting, photoshop, portrait, Turtle',
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
              <a href="blondheadredhead" rel="next">
                <span className="arrow">&#9668;</span>
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
        <h1>Older Paintings</h1>
      </div>

      <div className="content white">
        <div className="eightwide">
          <h3>Dragon Avenue</h3>
          <p>
            <img
              src={imageDragonavenue.src}
              alt="Tiger-Dragon wrecking havoc in the streets because somebody has stolen his egg"
              title="Dragon Avenue"
              width="620"
              height="463"
              className="marginbottom"
            />
          </p>
          <h3>Salt Lake</h3>
          <p>
            <img
              src={imageSaltlake.src}
              alt="Tyrannosaurus hunts his prey on a salt lake"
              title="Salt Lake"
              width="620"
              height="429"
              className="marginbottom"
            />
          </p>
          <h3>Gondola</h3>
          <p>
            <img
              src={imageGondel.src}
              alt="sceleton in a gondola floating through colorful clouds"
              title="Gondola"
              width="620"
              height="351"
              className="marginbottom"
            />
          </p>
        </div>
        <div className="fourwide">
          <h3>Baldface</h3>
          <p>
            <img
              src={imageBaldface.src}
              alt="A bald strange looking man"
              title="Baldface"
              width="300"
              height="300"
              className="marginbottom"
            />
          </p>
          <h3>Airface</h3>
          <p>
            <img
              src={imageAirface.src}
              alt="A guy with a red nose floating through the air"
              title="Airface"
              width="300"
              height="300"
              className="marginbottom"
            />
          </p>
          <h3>Turtle</h3>
          <div>
            <img
              src={imageTurtleline.src}
              alt="A linedrawing of a turtle"
              title="Turtle"
              width="300"
              height="196"
              className="marginbottom"
            />
            <img
              src={imageTurtle.src}
              alt="Colored version of the turtle"
              title="Turtle"
              width="300"
              height="196"
              className="marginbottom"
            />
          </div>
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
