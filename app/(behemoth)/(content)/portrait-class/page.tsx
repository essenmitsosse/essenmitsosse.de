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
              <a href="essenmitsosse-redesign" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">essenmitsosse Redesign</span>
              </a>
            </li>
            <li className="older">
              <a href="sonic-the-real-hedgehog" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Sonic The Real Hedgehog</span>
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
        <h1>Portrait Class</h1>
      </div>

      <div className="content white">
        <div className="sixwide">
          <img
            src="blog/wp-content/uploads/portraitclass/portrait12.jpg"
            alt="Caricature of a guy in a chair"
            title="Photoshop painting from portrait class – male caricature"
            width="460"
            height="575"
            className="marginbottom"
          />
          <img
            src="blog/wp-content/uploads/portraitclass/portrait8.jpg"
            alt="sausage-like girl with a crown caricature"
            title="Photoshop painting from portrait class – female caricature"
            width="460"
            height="588"
            className="marginbottom"
          />
          <img
            src="blog/wp-content/uploads/portraitclass/portrait9.jpg"
            alt="square girl caricature"
            title="Photoshop painting from portrait class – female caricature"
            width="460"
            height="460"
            className="marginbottom"
          />
        </div>
        <div className="sixwide">
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
              className="marginbottom"
            />
            <img
              src="blog/wp-content/uploads/portraitclass/portrait3.jpg"
              alt="painting of a girl"
              title="Photoshop painting from portrait class – female"
              width="460"
              height="497"
              className="marginbottom"
            />
            <img
              src="blog/wp-content/uploads/portraitclass/portrait13.jpg"
              alt="two abstract cartoon square girls"
              title="Photoshop painting from portrait class – female caricature"
              width="460"
              height="271"
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
