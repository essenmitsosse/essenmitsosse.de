import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jack of all Trades ♣ essenmitsosse',
  description: 'A movie about creativity and getting things done.',
  keywords: '',
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
            <li class="older">
              <a href="the-human-brain" rel="prev">
                <span class="arrow">&#9658;</span>
                <span class="title">The Human Brain</span>
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
        <h1>Jack of all Trades</h1>
      </div>

      <div class="content white">
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
        <div class="sixwide">
          <p>
            With Nele, a fellow student of mine, I did an experiment: We wanted
            to see how creativity works, how you can force yourself to get
            things done, how to make decisions, avoid distraction and boost
            concentration. The initial idea was to make a short documentation
            about what we found out for ourselves. But we decided that we didn’t
            want to sit there and tell people how we think things work. Instead
            we decided to share our insights in form of a small parable. No
            absolute statements. Everybody should decide for themselves, what
            can be drawn from the film.
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
