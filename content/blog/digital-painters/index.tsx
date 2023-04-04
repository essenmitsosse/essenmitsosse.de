import headerDigitalPainter from '../../../website/blog/wp-content/uploads/digitalpainters/digitalpainter-header.png'

import previewSonsofthestorm from '../../../website/blog/wp-content/uploads/digitalpainters/sonsofthestorm.jpg'
import previewSparth from '../../../website/blog/wp-content/uploads/digitalpainters/sparth.jpg'
import previewJasonchan from '../../../website/blog/wp-content/uploads/digitalpainters/jasonchan.jpg'
import previewXiaoyechen from '../../../website/blog/wp-content/uploads/digitalpainters/xiaoyechen.jpg'
import previewNivbed from '../../../website/blog/wp-content/uploads/digitalpainters/nivbed.jpg'
import previewRyanchurch from '../../../website/blog/wp-content/uploads/digitalpainters/ryanchurch.jpg'
import previewMarkodjurdjevic from '../../../website/blog/wp-content/uploads/digitalpainters/markodjurdjevic.jpg'
import previewBarontieri from '../../../website/blog/wp-content/uploads/digitalpainters/barontieri.jpg'
import previewAlexanderdraude from '../../../website/blog/wp-content/uploads/digitalpainters/alexanderdraude.jpg'
import previewDusso from '../../../website/blog/wp-content/uploads/digitalpainters/dusso.jpg'
import previewDominiceise from '../../../website/blog/wp-content/uploads/digitalpainters/dominiceise.jpg'
import previewJonfoster from '../../../website/blog/wp-content/uploads/digitalpainters/jonfoster.jpg'
import previewHpx1 from '../../../website/blog/wp-content/uploads/digitalpainters/hpx1.jpg'
import previewGeorgehull from '../../../website/blog/wp-content/uploads/digitalpainters/georgehull.jpg'
import previewFrancishsu from '../../../website/blog/wp-content/uploads/digitalpainters/francishsu.jpg'
import previewPrometheus from '../../../website/blog/wp-content/uploads/digitalpainters/prometheus.jpg'
import previewAndroid from '../../../website/blog/wp-content/uploads/digitalpainters/android.jpg'
import previewArtpad from '../../../website/blog/wp-content/uploads/digitalpainters/artpad.jpg'
import previewIankim from '../../../website/blog/wp-content/uploads/digitalpainters/iankim.jpg'
import previewNickklein from '../../../website/blog/wp-content/uploads/digitalpainters/nickklein.jpg'
import previewVancekovacs from '../../../website/blog/wp-content/uploads/digitalpainters/vancekovacs.jpg'
import previewVyle from '../../../website/blog/wp-content/uploads/digitalpainters/vyle.jpg'
import previewDanielieske from '../../../website/blog/wp-content/uploads/digitalpainters/danielieske.jpg'
import previewMercilessdesign from '../../../website/blog/wp-content/uploads/digitalpainters/mercilessdesign.jpg'
import previewCraigmullins from '../../../website/blog/wp-content/uploads/digitalpainters/craigmullins.jpg'
import previewAnry from '../../../website/blog/wp-content/uploads/digitalpainters/anry.jpg'
import previewScottrobertson from '../../../website/blog/wp-content/uploads/digitalpainters/scottrobertson.jpg'
import previewDandossantos from '../../../website/blog/wp-content/uploads/digitalpainters/dandossantos.jpg'
import previewMon from '../../../website/blog/wp-content/uploads/digitalpainters/mon.jpg'
import previewStevenstahlberg from '../../../website/blog/wp-content/uploads/digitalpainters/stevenstahlberg.jpg'
import previewAronstgoddard from '../../../website/blog/wp-content/uploads/digitalpainters/aronstgoddard.jpg'
import previewSub from '../../../website/blog/wp-content/uploads/digitalpainters/sub.jpg'
import previewJustinsweet from '../../../website/blog/wp-content/uploads/digitalpainters/justinsweet.jpg'
import previewTorstenwolber from '../../../website/blog/wp-content/uploads/digitalpainters/torstenwolber.jpg'
import previewFengzhu from '../../../website/blog/wp-content/uploads/digitalpainters/fengzhu.jpg'

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
          35 Digital Painters <em>you shouldn&rsquo;t miss</em>
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
                src={previewSonsofthestorm.src}
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
                src={previewSparth.src}
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
                src={previewJasonchan.src}
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
                src={previewXiaoyechen.src}
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
                src={previewNivbed.src}
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
                src={previewRyanchurch.src}
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
                src={previewMarkodjurdjevic.src}
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
                src={previewBarontieri.src}
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
                src={previewAlexanderdraude.src}
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
                src={previewDusso.src}
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
                src={previewDominiceise.src}
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
                src={previewJonfoster.src}
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
                src={previewHpx1.src}
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
                src={previewGeorgehull.src}
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
                src={previewFrancishsu.src}
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
                src={previewPrometheus.src}
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
                src={previewAndroid.src}
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
                src={previewArtpad.src}
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
                src={previewIankim.src}
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
                src={previewNickklein.src}
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
                src={previewVancekovacs.src}
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
                src={previewVyle.src}
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
                src={previewDanielieske.src}
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
                src={previewMercilessdesign.src}
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
                src={previewCraigmullins.src}
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
                src={previewAnry.src}
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
                src={previewScottrobertson.src}
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
                src={previewDandossantos.src}
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
              <img src={previewMon.src} title="mon" width="300" height="250" />
              Mattias “mon” Snygg
            </a>
          </p>
          <p>Swedish Concept Artist who is currently working for Starbreeze.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.androidblues.com/">
              <img
                src={previewStevenstahlberg.src}
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
                src={previewAronstgoddard.src}
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
              <img src={previewSub.src} title="sub" width="300" height="250" />
              Alex “Redbeardead” Stodolnik
            </a>
          </p>
          <p>American Digital Illustrator and Painter.</p>
        </div>
        <div className="fourwide many">
          <p>
            <a href="http://www.justinsweet.com/">
              <img
                src={previewJustinsweet.src}
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
                src={previewTorstenwolber.src}
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
                src={previewFengzhu.src}
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
