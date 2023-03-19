import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Anglerfish ♣ essenmitsosse',
  description: '',
  keywords:
    'anglerfish, cg-challenge, contest, digital painting, images, marcus blättermann, painting, photoshop',
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
              <a href="aztecs" rel="next">
                <span class="arrow">&#9668;</span>
                <span class="title">Aztecs</span>
              </a>
            </li>
            <li class="older">
              <a href="sparta-fanart" rel="prev">
                <span class="arrow">&#9658;</span>
                <span class="title">Sparta!</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="intro">
        <p class="logo">
          <a href="index.html" id="essenmitsosse">
            <span class="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        <h1>The Anglerfish</h1>
      </div>

      <div class="content white">
        <div class="eightwide">
          <img
            src="blog/wp-content/uploads/portfolio/anglerfish.jpg"
            alt="old man in boat trys to safe a drowning person which turns out to be an anglerfish"
            title="The Anglerfish"
            width="620"
            height="1640"
          />
        </div>
        <div class="fourwide">
          This one was done for the
          <a href="http://features.cgsociety.org/challenge/strange_behavior/">
            cg-Challenge “Strange Behaviour”
          </a>
          .
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
