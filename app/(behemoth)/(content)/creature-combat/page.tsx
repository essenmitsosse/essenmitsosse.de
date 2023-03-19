import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creature Combat IV ♣ essenmitsosse',
  description: 'Animation movie of a battle between a cat and a mouse.',
  keywords:
    'animation, cat, drawing, funny, marcus blaettermann, mouse, student, susanne wohlfahrt',
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
              <a href="kino-120a" rel="next">
                <span class="arrow">&#9668;</span>
                <span class="title">kino.120a</span>
              </a>
            </li>
            <li class="older">
              <a href="faust" rel="prev">
                <span class="arrow">&#9658;</span>
                <span class="title">Faust</span>
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
        <h1>Creature Combat IV</h1>
      </div>

      <div class="content white">
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
        <div class="fourwide">
          <p>
            Animated movie created in a four day animation workshop with Kathi
            Käppel.
          </p>
          <p>Group work by Susanne Wohlfahrt and Marcus Blättermann.</p>
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
