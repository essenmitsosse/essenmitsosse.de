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
            <li className="older">
              <a href="the-human-brain" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">The Human Brain</span>
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
        <h1>Jack of all Trades</h1>
      </div>

      <div className="content white">
        <p>
          <iframe
            width="940"
            height="450"
            src="https://www.youtube.com/embed/2QWPz5oKcuI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
        <div className="sixwide">
          <p>
            With Nele, a fellow student of mine, I did an experiment: We wanted
            to see how creativity works, how you can force yourself to get
            things done, how to make decisions, avoid distraction and boost
            concentration. The initial idea was to make a short documentation
            about what we found out for ourselves. But we decided that we
            didn&rsquo;t want to sit there and tell people how we think things
            work. Instead we decided to share our insights in form of a small
            parable. No absolute statements. Everybody should decide for
            themselves, what can be drawn from the film.
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
