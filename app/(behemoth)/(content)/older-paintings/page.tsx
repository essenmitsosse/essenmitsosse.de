import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Older Paintings ♣ essenmitsosse',
  description: 'Some older paintings by Marcus Blättermann.',
  keywords:
    'digital painting, Dinosaur, Dragon, Gondola, images, Jungle, marcus blättermann, painting, photoshop, portrait, Turtle',
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
              <a href="blondheadredhead" rel="next">
                <span class="arrow">&#9668;</span>
                <span class="title">Blondehead &#038; Redhead</span>
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
        <h1>Older Paintings</h1>
      </div>

      <div class="content white">
        <div class="eightwide">
          <h3>Dragon Avenue</h3>
          <p>
            <img
              src="blog/wp-content/uploads/portfolio/dragonavenue.jpg"
              alt="Tiger-Dragon wrecking havoc in the streets because somebody has stolen his egg"
              title="Dragon Avenue"
              width="620"
              height="463"
              class="marginbottom"
            />
          </p>
          <h3>Salt Lake</h3>
          <p>
            <img
              src="blog/wp-content/uploads/portfolio/saltlake.jpg"
              alt="Tyrannosaurus hunts his prey on a salt lake"
              title="Salt Lake"
              width="620"
              height="429"
              class="marginbottom"
            />
          </p>
          <h3>Gondola</h3>
          <p>
            <img
              src="blog/wp-content/uploads/portfolio/gondel.jpg"
              alt="sceleton in a gondola floating through colorful clouds"
              title="Gondola"
              width="620"
              height="351"
              class="marginbottom"
            />
          </p>
        </div>
        <div class="fourwide">
          <h3>Baldface</h3>
          <p>
            <img
              src="blog/wp-content/uploads/portfolio/baldface.jpg"
              alt="A bald strange looking man"
              title="Baldface"
              width="300"
              height="300"
              class="marginbottom"
            />
          </p>
          <h3>Airface</h3>
          <p>
            <img
              src="blog/wp-content/uploads/portfolio/airface.jpg"
              alt="A guy with a red nose floating through the air"
              title="Airface"
              width="300"
              height="300"
              class="marginbottom"
            />
          </p>
          <h3>Turtle</h3>
          <div>
            <img
              src="blog/wp-content/uploads/portfolio/turtleline.jpg"
              alt="A linedrawing of a turtle"
              title="Turtle"
              width="300"
              height="196"
              class="marginbottom"
            />
            <img
              src="blog/wp-content/uploads/portfolio/turtle.jpg"
              alt="Colored version of the turtle"
              title="Turtle"
              width="300"
              height="196"
              class="marginbottom"
            />
          </div>
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
