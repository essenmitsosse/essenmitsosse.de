import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Realistically Painted Bowser ♣ essenmitsosse',
  description:
    'How would Bowser from “Super Mario” look like, if he would be a real animal?',
  keywords:
    'bowser, brush, coloration, digital painting, fanart, images, marcus blättermann, painting, photoshop, realistic, redesign, untoon',
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
              <a href="sonic-the-real-hedgehog" rel="next">
                <span class="arrow">&#9668;</span>
                <span class="title">Sonic The Real Hedgehog</span>
              </a>
            </li>
            <li class="older">
              <a href="digital-life-drawing" rel="prev">
                <span class="arrow">&#9658;</span>
                <span class="title">Digital Life Drawing</span>
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
        <h1>Realistically Painted Bowser</h1>
      </div>

      <div class="content white">
        <div>
          <img
            src="blog/wp-content/uploads/bowser/bowser.jpg"
            alt="Realistically Painted Bowser"
            title="Realistically Painted Bowser"
            width="940"
            height="627"
          />
        </div>
        <div class="sixwide">
          <p>
            Some weeks ago Pixeloo did his great untoonings of
            <a href="http://pixeloo.blogspot.com/2008/03/super-real-mario-world.html">
              Mario
            </a>
            and
            <a href="http://pixeloo.blogspot.com/2008/03/homer-simpson-untooned.html">
              Homer
            </a>
            . This inspired me to try something similar.
          </p>
          <p>
            Like Pixeloo I also wanted to use Photoshop. But I didn&#8217;t
            wanted to use any Photos. I just wanted to paint the whole thing.
          </p>
          <p>
            In Addition I not just wanted to lay a realistic texture over the
            original figure, but to rework the forms and proportions as well, to
            get the whole creature a more realistic look. This isn&#8217;t a
            untooning of bowser, it&#8217;s a redesign. How would he look like
            if he would be a real animal.
          </p>
          <p>
            While I changed some of his proportions here and there I still
            wanted to keep his overall character. My redesign is a bowser who is
            a bit more slender with a narrower mouth that resembles a dinosaur.
            All this to give him a more realistic, faster and threatening look.
            I also took the original color scheme of Bowser and tried to convert
            it into some kind of realistic animal coloration.
          </p>
          <p>
            For this picture I only used the Photoshop Brushtool (99% a simple
            round brush) and sometimes the smudge tool. I never used more than
            two layers at once, trying to work much like painting as possible.
          </p>
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
