import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aztecs ♣ essenmitsosse',
  description:
    'An image showing an Aztec warrior killing a Spanish Conquiztador',
  keywords:
    'actecs, digital painting, images, marcus blättermann, painting, photoshop',
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
              <a href="linen-tunic" rel="next">
                <span class="arrow">&#9668;</span>
                <span class="title">Linen Tunic</span>
              </a>
            </li>
            <li class="older">
              <a href="the-anglerfish" rel="prev">
                <span class="arrow">&#9658;</span>
                <span class="title">The Anglerfish</span>
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
        <h1>Aztecs</h1>
      </div>

      <div class="content white">
        <div class="fullwidth">
          <img
            src="blog/wp-content/uploads/portfolio/aztecs.jpg"
            alt="An Actecs slaughtering a Spanish Conquistador"
            title="An Actecs slaughtering a Spanish Conquiztador"
            width="780"
            height="351"
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
