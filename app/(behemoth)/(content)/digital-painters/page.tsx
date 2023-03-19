import { Metadata } from 'next'
import headerDigitalPainter from '../../../../website/blog/wp-content/uploads/digitalpainters/digitalpainter-header.png'

export const metadata: Metadata = {
  title: '35 Digital Painters you shouldn’t miss ♣ essenmitsosse',
  description:
    'A compilation of artists how paint with their computer. From illustrators to concept-artists.',
  keywords:
    'artist, collection, community, craig mullins, digital painting, gfxartist, link, list, Portfolio, websites',
}

export default function Page() {
  return (
    <body className="single article">
      <ul id="navigation" className="black">
        <li className="home">
          <a href="/" rel="index">
            Home
          </a>
        </li>
        <li className="articlenavigation">
          <ul>
            <li className="newer">
              <a href="the-designs-of-star-wars" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">
                  The Designs Of Star Wars{' '}
                  <em>10 reasons why they are awesome</em>
                </span>
              </a>
            </li>
            <li className="older">
              <a href="photoshop-brush-engine" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">
                  <em>An Introduction to the</em> Photoshop Brush Engine
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div
        className="intro color"
        style={{ backgroundImage: `url(${headerDigitalPainter.src})` }}
      >
        <p className="logo">
          <a href="/" id="essenmitsosse" rel="index">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        <h1>
          35 Digital Painters <em>you shouldn’t miss</em>
        </h1>
      </div>

      <div className="content white">
        <div className="date">
          <p>2008-05-15</p>
        </div>
        <p>
          Maybe you already noticed it: I&#8217;m not the only one who paints
          digitally. There are many other digital artists around. Digital
          Artists who really paint with their computer. Most of them work as
          Illustrators or Concept Artist. Here are 35 Websites that will show
          you whats possible with a graphics tablet.
        </p>
        <div className="fourwide many">
          <p>
            <a href="http://www.sonsofthestorm.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/sonsofthestorm.jpg"
                title="sonsofthestorm"
                width="300"
                height="250"
              />
              Sons of the Storm
            </a>
          </p>
          <p>
            The Website of Samwise Dider, Chris Metzen and other Artists who are
            working for Blizzard.
          </p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.sparth.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/sparth.jpg"
                title="sparth"
                width="300"
                height="250"
              />
              Nicolas “Sparth” Bouvier
            </a>
          </p>
          <p>Concept Designer born in France, living in Texas.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.jasonchanart.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/jasonchan.jpg"
                title="jasonchan"
                width="300"
                height="250"
              />
              Jason Chan
            </a>
          </p>
          <p>American Concept Artist and Illustrator.</p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.supalette.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/xiaoyechen.jpg"
                title="xiaoyechen"
                width="300"
                height="250"
              />
              Xiaoye Chen
            </a>
          </p>
          <p>Digital Concept Artist and Illustrator.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.nivbed.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/nivbed.jpg"
                title="nivbed"
                width="300"
                height="250"
              />
              Justin “Nivbed” Cherry
            </a>
          </p>
          <p>Digital Painter</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.ryanchurch.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/ryanchurch.jpg"
                title="ryanchurch"
                width="300"
                height="250"
              />
              Ryan Church
            </a>
          </p>
          <p>
            Digital Concept Artist, Painter and Illustrator who has worked for
            many movies like Star Wars and War of the Worlds.
          </p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://sixmorevodka.blogspot.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/markodjurdjevic.jpg"
                title="markodjurdjevic"
                width="300"
                height="250"
              />
              Marko Djurdjevic
            </a>
          </p>
          <p>German Illustrator currently working for Marvel.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.barontieri.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/barontieri.jpg"
                title="barontieri"
                width="300"
                height="250"
              />
              Thierry “BARoNTiERi” Doizon
            </a>
          </p>
          <p>
            Concept Artist currently working for Eidos in Montreal for Deus Ex
            III.
          </p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.draude.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/alexanderdraude.jpg"
                title="alexanderdraude"
                width="300"
                height="250"
              />
              Alexander Draude
            </a>
          </p>
          <p>German Student and Illustrator.</p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.dusso.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/dusso.jpg"
                title="dusso"
                width="300"
                height="250"
              />
              Yanick “Dusso” Dusseault
            </a>
          </p>
          <p>Digital Matte Painter and Illustrator.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.dominiceise.de/">
              <img
                src="blog/wp-content/uploads/digitalpainters/dominiceise.jpg"
                title="dominiceise"
                width="300"
                height="250"
              />
              Dominic Eise
            </a>
          </p>
          <p>German Student and Illustrator.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.jonfoster.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/jonfoster.jpg"
                title="jonfoster"
                width="300"
                height="250"
              />
              Jon Foster
            </a>
          </p>
          <p>Classic Illustrator who works mainly digital.</p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.hpx1.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/hpx1.jpg"
                title="hpx1"
                width="300"
                height="250"
              />
              Philippe “HPX-1” Guyenne
            </a>
          </p>
          <p>French Concept Designer</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.ghull.com/news/news_main.php">
              <img
                src="blog/wp-content/uploads/digitalpainters/georgehull.jpg"
                title="georgehull"
                width="300"
                height="250"
              />
              George Hull
            </a>
          </p>
          <p>
            A Concept Artist and Illustrator who has worked for Matrix and other
            Movies.
          </p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.iamfrancis.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/francishsu.jpg"
                title="francishsu"
                width="300"
                height="250"
              />
              Francis Hsu
            </a>
          </p>
          <p>
            A native-born Taiwanese Concept Artist living in the United States.
          </p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.itchstudios.com/psg/">
              <img
                src="blog/wp-content/uploads/digitalpainters/prometheus.jpg"
                title="prometheus"
                width="300"
                height="250"
              />
              Niklas “Prometheus” Jansson
            </a>
          </p>
          <p>
            Digital Painter from Sweden with a unique style, who is really into
            videogame fanart.
          </p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.androidjones.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/android.jpg"
                title="android"
                width="300"
                height="250"
              />
              Andrew “Android” Jones
            </a>
          </p>
          <p>American Digital Concept Artist.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://artpad.org/">
              <img
                src="blog/wp-content/uploads/digitalpainters/artpad.jpg"
                title="artpad"
                width="300"
                height="250"
              />
              Jaime “Artpad” Jones
            </a>
          </p>
          <p>American Digital Painter.</p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.ikplay.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/iankim.jpg"
                title="iankim"
                width="300"
                height="250"
              />
              Ian Kam
            </a>
          </p>
          <p>American Digital Illustrator with a vintage style.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.nic-klein.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/nickklein.jpg"
                title="nickklein"
                width="300"
                height="250"
              />
              Nic Klein
            </a>
          </p>
          <p>German Illustrator working among other things for Marvel.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.vancekovacs.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/vancekovacs.jpg"
                title="vancekovacs"
                width="300"
                height="250"
              />
              Vance Kovacs
            </a>
          </p>
          <p>Digital Painter.</p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.vyle-art.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/vyle.jpg"
                title="vyle"
                width="300"
                height="250"
              />
              David “Vyle” Levy
            </a>
          </p>
          <p>Concept Artist.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.digitaldecoy.de/">
              <img
                src="blog/wp-content/uploads/digitalpainters/danielieske.jpg"
                title="danielieske"
                width="300"
                height="250"
              />
              Daniel “digitaldecoy” Lieske
            </a>
          </p>
          <p>German Digital Illustrator and Concept Artist.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.mercilessdesign.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/mercilessdesign.jpg"
                title="mercilessdesign"
                width="300"
                height="250"
              />
              Izzy “Cannibal Candy” Medrano
            </a>
          </p>
          <p>Digital Concept Artist and Illustrator.</p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.goodbrush.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/craigmullins.jpg"
                title="craigmullins"
                width="300"
                height="250"
              />
              Craig “Goodbrush” Mullins
            </a>
          </p>
          <p>
            The godfather of digital painting. You really shouldn&#8217;t miss
            this one.
          </p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.anry.ru/">
              <img
                src="blog/wp-content/uploads/digitalpainters/anry.jpg"
                title="anry"
                width="300"
                height="250"
              />
              Anry Nemo
            </a>
          </p>
          <p>Russian Digital Illustrator.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.drawthrough.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/scottrobertson.jpg"
                title="scottrobertson"
                width="300"
                height="250"
              />
              Scott Robertson
            </a>
          </p>
          <p>American Concept Artist and Digital Painter.</p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.dandossantos.com/home.html">
              <img
                src="blog/wp-content/uploads/digitalpainters/dandossantos.jpg"
                title="dandossantos"
                width="300"
                height="250"
              />
              Dan Dos Santos
            </a>
          </p>
          <p>
            An American Illustrator, who does a lot of work for Games, Trading
            Cards and Books.
          </p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.mattiassnygg.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/mon.jpg"
                title="mon"
                width="300"
                height="250"
              />
              Mattias “mon” Snygg
            </a>
          </p>
          <p>Swedish Concept Artist who is currently working for Starbreeze.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.androidblues.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/stevenstahlberg.jpg"
                title="stevenstahlberg"
                width="300"
                height="250"
              />
              Steven Stahlberg
            </a>
          </p>
          <p>
            Most of his work is rendered in 3d. But there are also some digital
            paintings, which than look like they where rendered in 3d.
          </p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.aaronstgoddard.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/aronstgoddard.jpg"
                title="aronstgoddard"
                width="300"
                height="250"
              />
              Aaron St. Goddard
            </a>
          </p>
          <p>Digital Concept Artist and Designer.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.redbeardead.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/sub.jpg"
                title="sub"
                width="300"
                height="250"
              />
              Alex “Redbeardead” Stodolnik
            </a>
          </p>
          <p>American Digital Illustrator and Painter.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.justinsweet.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/justinsweet.jpg"
                title="justinsweet"
                width="300"
                height="250"
              />
              Justin Sweet
            </a>
          </p>
          <p>Digital Illustrator and Painter.</p>
        </div>
        <hr />
        <div className="fourwide many">
          <p>
            <a href="http://www.torstenwolber.de/">
              <img
                src="blog/wp-content/uploads/digitalpainters/torstenwolber.jpg"
                title="torstenwolber"
                width="300"
                height="250"
              />
              Torsten Wolber
            </a>
          </p>
          <p>
            A German Illustrator who can paint with the computer like with
            Acrylics.
          </p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.fengzhudesign.com/">
              <img
                src="blog/wp-content/uploads/digitalpainters/fengzhu.jpg"
                title="fengzhu"
                width="300"
                height="250"
              />
              Feng Zhu
            </a>
          </p>
          <p>
            An American Concept Designer who has worked who has worked for
            Disney, ILM and other famous clients.
          </p>
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
            Don’t forget to follow me on{' '}
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="/">Portfolio</a>.
          </p>
        </div>
      </div>
    </body>
  )
}
