import { Metadata } from 'next'

import redesignWebsite from '../../../website/blog/wp-content/uploads/essenmitsosse/website.png'

export const metadata: Metadata = {
  title: 'essenmitsosse Redesign ♣ essenmitsosse',
  description: 'Redesign of the homepage of Marcus Blättermann.',
  keywords: 'essenmitsosse, marcus blättermann, Webdesign, website',
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
              <a href="blockator" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Blockator</span>
              </a>
            </li>
            <li className="older">
              <a href="portrait-class" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Portrait Class</span>
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
        <h1>essenmitsosse Redesign</h1>
      </div>

      <div className="content white">
        <div>
          <img src={redesignWebsite.src} width="940" height="391" />
        </div>
        <p>
          After several redesign attempts over the last few years I finally
          ended up with something I&rsquo;m happy with. I fought a long time
          with myself to find something that&rsquo;s neither boring to look at
          nor overpowering the content. In the end I came up with a strong color
          scheme, that catches the attention of the viewer and than steps back
          when the content starts. Also note how the design can adjust to
          different screen sizes, while the content itself has a fixed width.
        </p>
        <p>
          If you want to see the new design in all its glory, just surf around
          this website.
        </p>
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
