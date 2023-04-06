import imageBowser from '../../../website/blog/wp-content/uploads/bowser/bowser.jpg'

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
              <a href="sonic-the-real-hedgehog" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Sonic The Real Hedgehog</span>
              </a>
            </li>
            <li className="older">
              <a href="digital-life-drawing" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Digital Life Drawing</span>
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
        <h1>Realistically Painted Bowser</h1>
      </div>

      <div className="content white">
        <div>
          <img
            src={imageBowser.src}
            alt="Realistically Painted Bowser"
            title="Realistically Painted Bowser"
            width="940"
            height="627"
          />
        </div>
        <div className="sixwide">
          <p>
            Some weeks ago Pixeloo did his great untoonings of{' '}
            <a href="http://pixeloo.blogspot.com/2008/03/super-real-mario-world.html">
              Mario
            </a>{' '}
            and{' '}
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
