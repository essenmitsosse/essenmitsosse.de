import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sparta! ♣ essenmitsosse',
  description: 'Image of a Spartan who slaughters a Persian warrior.',
  keywords:
    'digital painting, fanart, images, marcus blättermann, painting, photoshop, sparta',
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
              <a href="the-anglerfish" rel="next">
                <span class="arrow">&#9668;</span>
                <span class="title">The Anglerfish</span>
              </a>
            </li>
            <li class="older">
              <a href="blondheadredhead" rel="prev">
                <span class="arrow">&#9658;</span>
                <span class="title">Blondehead &#038; Redhead</span>
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
        <h1>Sparta!</h1>
      </div>

      <div class="content white">
        <div class="fullwidth">
          <img
            src="blog/wp-content/uploads/portfolio/sparta.jpg"
            alt="A Spartan who is going to cut the head of an Persian"
            title="A Spartan killing a Persian with his sword"
            width="940"
            height="507"
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
