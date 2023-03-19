import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonic The Real Hedgehog ♣ essenmitsosse',
  description: 'How would Sonic look like if he would exist in reality?',
  keywords:
    'brush, digital painting, fanart, images, marcus blättermann, painting, photoshop, pixel, realistic, redesign, sonic, untoon',
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
              <a href="portrait-class" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Portrait Class</span>
              </a>
            </li>
            <li className="older">
              <a href="realistically-painted-bowser" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Realistically Painted Bowser</span>
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
        <h1>Sonic The Real Hedgehog</h1>
      </div>

      <div className="content white">
        <div>
          <img
            src="blog/wp-content/uploads/sonic/sonic.jpg"
            alt="Sonic the real Hedgehog with massive thighs"
            title="Sonic The Real Hedgehog"
            width="940"
            height="570"
          />
        </div>
        <div className="sixwide">
          <p className="firstline">
            After the great success of my
            <a href="realistically-painted-bowser">
              Realistically Painted Bowser
            </a>
            I decided to do another realistic version of a famous videogame
            character.
          </p>
          <p>
            This time I tried to imagine how Sonic would look like if he would
            be a real hedgehog.
          </p>
          <p>
            The biggest challenge about this one was, that the original Sonic
            looks everything but realistic. He is so stylized, that it&#8217;s
            hard to tell if he is a hedgehog at all. This made it hard to find a
            middle course between the initial design and the look of a real
            hedgehog.
          </p>
          <p>
            If I would stick to much to the original it wouldn&#8217;t look
            pretty realistic, but if I would get to close to the actual animal
            one wouldn&#8217;t be able to identify him as Sonic.
          </p>
          <p>
            This was challenging, but also the most interesting part about doing
            this picture. Until the final design Sonic went thru several
            revisions.
          </p>
          <p>
            In the end I decided to give him a color-pattern that resembles a
            West European Hedgehog but facial proportions that stick to Sonic
            himself. His white gloves and the red shoes he kept as another link
            to the original, but the shoes underwent a little redesign. In
            addition his body looks like that of a runner, making it more
            believable that he can run at such high speeds.
          </p>
          <p>
            Finally I did a little old-school pixel-graphic of how a realistic
            Sonic would look like in one of the old games.
          </p>
          <p>
            Again the whole picture was painted using
            <a href="http://www.amazon.com/gp/product/B000NDIBYG?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000NDIBYG">
              Adobe Photoshop CS3
            </a>
            and my
            <a href="http://www.amazon.com/gp/product/B00030097G?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00030097G">
              Wacom Intuos3 Pen Tablet
            </a>
            . No filters or any other stuff like that, just a round brush
            (mostly pressure-sensitive) and a little bit of the smudge tool. I
            also tried to keep the numbers of layers as low as possible and
            reduced them to the background-layer, if I could.
          </p>
          <p>
            Keeping my means simple and do everything manual gives me more
            control over what I do and the image gets a more picturesque look
            instead of the typical Photoshop look.
          </p>
        </div>
        <div className="sixwide center">
          <img
            src="blog/wp-content/uploads/sonic/sonicpixel.png"
            alt="How a realistically sonic would look like in pixel"
            title="Sonic The Real Hedgehog Pixel"
            width="460"
            height="460"
          />
        </div>
        <hr />
        <div className="sixwide">
          <h3>
            <em>A little bit</em> about me
          </h3>
          <p>
            My name ist Marcus Blättermann. <br />
            I’m majoring in communication design and work as a freelancer for
            illustration, print- & webdesign.
          </p>
        </div>

        <div className="sixwide">
          <h3>
            <em>What you should </em>do next
          </h3>
          <p>
            Don’t forget to follow me on
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="/">Portfolio</a>.
          </p>
        </div>
      </div>
    </body>
  )
}
