import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Life Drawing ♣ essenmitsosse',
  description:
    'I went to a life drawing class, equipped with a graphics tablet and Photoshop.',
  keywords:
    'colors, digital painting, drawing, figure drawing, images, life drawing, marcus blättermann, nude, painting, study',
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
              <a href="realistically-painted-bowser" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Realistically Painted Bowser</span>
              </a>
            </li>
            <li className="older">
              <a href="linen-tunic" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Linen Tunic</span>
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
        <h1>Digital Life Drawing</h1>
      </div>

      <div className="content white">
        <div className="sixwide">
          <p>
            The last times I went to the nude figure drawing class I took my
            Laptop with me to try doing it digitally.
          </p>
          <p>
            This was the first time I was drawing digitally from life at all. At
            first it was hard to handle the colors in the short time frame,
            because the models at our figure drawing class pose only for about
            10 &#8211; 15 minutes.
          </p>
          <p>
            While working analog this is no trouble because typically you just
            use one or two colors if you are working in colors at all. But
            working digital there seems no reason why you shouldn&#8217;t use
            all colors and go photo-realistic.
          </p>
          <p>
            So I realized after some pictures, that I would have to slow down
            and drop the colors for the moment and concentrate on getting the
            values right.
          </p>
          <p>
            After some warm-up I went back to the colors to give them a new try.
            It is difficult at first but after some time I was just stunned by
            the possibilities. As hard as it is, as much it can teach you.
          </p>
          <p>
            Digital life drawing is killing two birds with one stone. It is a
            great training for your digital painting skills because you are
            pushed to try new techniques to achieves your goals (getting a
            realistic look in a short amount of time) and it is also a great way
            to study colors.
          </p>
          <p>
            I couldn&#8217;t come up with an other medium that allows you so
            easily (after some practicing) to study the full range of color
            without any handicaps from the medium itself in such a fast way.
          </p>
        </div>
        <div className="sixwide">
          <img
            src="blog/wp-content/uploads/figuredrawing/akt12.jpg"
            alt="nude guy from the back"
            title="digital nude male figure drawing"
            width="460"
            height="395"
          />
        </div>
        <hr />
        <div className="sixwide many">
          <img
            src="blog/wp-content/uploads/figuredrawing/akt10.jpg"
            alt="nacked boy squat"
            title="nude boy figure drawing sitting"
            width="460"
            height="576"
            className="marginbottom"
          />
          <img
            src="blog/wp-content/uploads/figuredrawing/akt2.jpg"
            alt="nude girl standing with crossed arms"
            title="nude female figure drawing standing"
            width="460"
            height="552"
            className="marginbottom"
          />
          <img
            src="blog/wp-content/uploads/figuredrawing/akt4.jpg"
            alt="black&#038;white head of a nude girl"
            title="nude girl figure drawing head black&#038;white"
            width="460"
            height="357"
            className="marginbottom"
          />
        </div>
        <div className="sixwide many">
          <img
            src="blog/wp-content/uploads/figuredrawing/akt11.jpg"
            alt="nude boy sitting"
            title="nude boy figure drawing sitting"
            width="460"
            height="576"
            className="marginbottom"
          />
          <img
            src="blog/wp-content/uploads/figuredrawing/akt13.jpg"
            alt="nude old woman holding a ball"
            title="old nude woman figure drawing torso"
            width="460"
            height="460"
            className="marginbottom"
          />
          <img
            src="blog/wp-content/uploads/figuredrawing/akt14.jpg"
            alt="detail of arm of nude old woman"
            title="old nude woman figure drawing closeup"
            width="460"
            height="460"
            className="marginbottom"
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
