import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faust ♣ essenmitsosse',
  description: 'Announcement for my new comic Faust.',
  keywords: 'comic, graphic design, marcus blaettermann, student',
}

export default function Page() {
  return (
    <body className="single black portfolio">
      <ul id="navigation" className="black">
        <li className="home">
          <a href="index.html" rel="index">
            Home
          </a>
        </li>
        <li className="articlenavigation">
          <ul>
            <li className="newer">
              <a href="creature-combat" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">Creature Combat IV</span>
              </a>
            </li>
            <li className="older">
              <a href="blockator" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Blockator</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="intro">
        <p className="logo">
          <a href="index.html" id="essenmitsosse">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        <h1>Faust</h1>
      </div>

      <div className="content white">
        <div className="eightwide">
          <img
            src="blog/wp-content/uploads/faust/cover.png"
            alt="cover of my comic Faust"
            title="Faust"
            width="620"
            height="919"
          />
        </div>
        <div className="fourwide">
          <p>
            My new comic project will premiere at the
            <a href="http://www.comic-salon.de/">Comic Salon Erlangen</a>, at
            the booth of my university
            <a href="http://www.comic-salon.de/index.asp?FsID=50&amp;PPID=4&amp;EventID=217&amp;spr=1">
              Burg Giebichenstein (JF7)
            </a>
            .
          </p>
          <p>More infos soon …</p>
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
            also check out my <a href="index.html">Portfolio</a>.
          </p>
        </div>
      </div>
    </body>
  )
}
