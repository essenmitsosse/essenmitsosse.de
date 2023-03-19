import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portrait Class ♣ essenmitsosse',
  description:
    'Paintings from a portrait class, made with Photoshop and a graphics tablet.',
  keywords:
    'colors, digital painting, images, life drawing, marcus blättermann, painting, portrait, student, study',
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
              <a href="essenmitsosse-redesign" rel="next">
                <span class="arrow">&#9668;</span>
                <span class="title">essenmitsosse Redesign</span>
              </a>
            </li>
            <li class="older">
              <a href="sonic-the-real-hedgehog" rel="prev">
                <span class="arrow">&#9658;</span>
                <span class="title">Sonic The Real Hedgehog</span>
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
        <h1>Portrait Class</h1>
      </div>

      <div class="content white">
        <div class="sixwide">
          <img
            src="blog/wp-content/uploads/portraitclass/portrait12.jpg"
            alt="Caricature of a guy in a chair"
            title="Photoshop painting from portrait class – male caricature"
            width="460"
            height="575"
            class="marginbottom"
          />
          <img
            src="blog/wp-content/uploads/portraitclass/portrait8.jpg"
            alt="sausage-like girl with a crown caricature"
            title="Photoshop painting from portrait class – female caricature"
            width="460"
            height="588"
            class="marginbottom"
          />
          <img
            src="blog/wp-content/uploads/portraitclass/portrait9.jpg"
            alt="square girl caricature"
            title="Photoshop painting from portrait class – female caricature"
            width="460"
            height="460"
            class="marginbottom"
          />
        </div>
        <div class="sixwide">
          <p>
            These paintings where done during the portrait class in my
            scholastics. They are all live drawings, no photo references. And
            they are all done completely in Photoshop. After doing some standard
            realistic portraits, I tried to stylize the head more, by giving
            them simple geometrical shapes which creates the look of a
            caricature.
          </p>
          <div>
            <img
              src="blog/wp-content/uploads/portraitclass/portrait11.jpg"
              alt="caricature of a fat man reading a book"
              title="Photoshop painting from portrait class – male caricature"
              width="460"
              height="575"
              class="marginbottom"
            />
            <img
              src="blog/wp-content/uploads/portraitclass/portrait3.jpg"
              alt="painting of a girl"
              title="Photoshop painting from portrait class – female"
              width="460"
              height="497"
              class="marginbottom"
            />
            <img
              src="blog/wp-content/uploads/portraitclass/portrait13.jpg"
              alt="two abstract cartoon square girls"
              title="Photoshop painting from portrait class – female caricature"
              width="460"
              height="271"
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
