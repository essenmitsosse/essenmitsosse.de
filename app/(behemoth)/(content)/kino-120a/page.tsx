import { Metadata } from 'next'

import imageTheDayTheEarthStoodStill from '../../../../website/blog/wp-content/uploads/kino120a/the-day-the-earth-stood-still.png'
import imageAnderwelten from '../../../../website/blog/wp-content/uploads/kino120a/anderwelten.png'
import imageUnderdogs from '../../../../website/blog/wp-content/uploads/kino120a/underdogs.png'
import imageImNotThere1 from '../../../../website/blog/wp-content/uploads/kino120a/im-not-there-1.png'
import imageImNotThere2 from '../../../../website/blog/wp-content/uploads/kino120a/im-not-there-2.png'
import imageImNotThereMarcusCarlFranklin from '../../../../website/blog/wp-content/uploads/kino120a/im-not-there-marcus-carl-franklin.png'
import imageImNotThereChristianBale from '../../../../website/blog/wp-content/uploads/kino120a/im-not-there-christian-bale.png'
import imageImNotThereCateBlanchett from '../../../../website/blog/wp-content/uploads/kino120a/im-not-there-cate-blanchett.png'
import imageImNotThere3 from '../../../../website/blog/wp-content/uploads/kino120a/im-not-there-3.png'
import imageImNotThereHeathLedger from '../../../../website/blog/wp-content/uploads/kino120a/im-not-there-heath-ledger.png'
import imageImNotThereBenWhishaw from '../../../../website/blog/wp-content/uploads/kino120a/im-not-there-ben-whishaw.png'
import imageImNotThereRichardGere from '../../../../website/blog/wp-content/uploads/kino120a/im-not-there-richard-gere.png'
import imageBerlincalling from '../../../../website/blog/wp-content/uploads/kino120a/berlincalling.png'
import imageMetropolis from '../../../../website/blog/wp-content/uploads/kino120a/metropolis.png'
import imageAllegroNonTroppo1 from '../../../../website/blog/wp-content/uploads/kino120a/allegro-non-troppo-1.png'
import imageAllegroNonTroppo3 from '../../../../website/blog/wp-content/uploads/kino120a/allegro-non-troppo-3.png'
import imageAllegroNonTroppo2 from '../../../../website/blog/wp-content/uploads/kino120a/allegro-non-troppo-2.png'
import imageAllegroNonTroppo4 from '../../../../website/blog/wp-content/uploads/kino120a/allegro-non-troppo-4.png'

export const metadata: Metadata = {
  title: 'kino.120a ♣ essenmitsosse',
  description: 'Poster series for student cinema kino.120a.',
  keywords:
    'allegro non troppo, berlin calling, cinema, graphic design, i&rsquo;m not there, marcus blaettermann, metropolis, poster, student, Test, the day the earth stood still, Typography, underdogs',
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
              <a href="the-human-brain" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">The Human Brain</span>
              </a>
            </li>
            <li className="older">
              <a href="creature-combat" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">Creature Combat IV</span>
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
        <h1>kino.120a</h1>
      </div>

      <div className="content white">
        <div className="fourwide">
          <div>
            These poster series was done for our student cinema{' '}
            <a href="http://kino120a.de/">kino.120a</a> at Burg Giebichenstein.
          </div>
          <p>
            <img
              title="The day the earth stood still"
              src={imageTheDayTheEarthStoodStill.src}
              alt="The day the earth stood still poster"
              width="300"
              height="424"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="Anderwelten — semester program"
              src={imageAnderwelten.src}
              alt="Anderwelten poster"
              width="300"
              height="900"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="Underdogs — semester program"
              src={imageUnderdogs.src}
              alt="Underdogs poster"
              width="300"
              height="900"
            />
          </p>
        </div>
        <hr />
        <div className="fourwide">
          <p>
            <img
              title="I&rsquo;m not there — Bob Dylan"
              src={imageImNotThere1.src}
              alt="I&rsquo;m not there — Bob Dylan —poster"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="I&rsquo;m not there"
              src={imageImNotThere2.src}
              alt="I&rsquo;m not there - poster"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="I&rsquo;m not there — Marcus Carl Franklin"
              src={imageImNotThereMarcusCarlFranklin.src}
              alt="I&rsquo;m not there — Marcus Carl Franklin"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="I&rsquo;m not there — Christian Bale"
              src={imageImNotThereChristianBale.src}
              alt="I&rsquo;m not there — Christian Bale"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="I&rsquo;m not there — Cate Blanchett"
              src={imageImNotThereCateBlanchett.src}
              alt="I&rsquo;m not there — Cate Blanchett"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="I&rsquo;m not there"
              src={imageImNotThere3.src}
              alt="I&rsquo;m not there"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="I&rsquo;m not there — Heath Ledger"
              src={imageImNotThereHeathLedger.src}
              alt="I&rsquo;m not there — Heath Ledger"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="I&rsquo;m not there — Bin Whishaw"
              src={imageImNotThereBenWhishaw.src}
              alt="I&rsquo;m not there — Bin Whishaw"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="I&rsquo;m not there — Richard Gere"
              src={imageImNotThereRichardGere.src}
              alt="I&rsquo;m not there — Richard Gere"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fullwidth">
          <p>
            <img
              title="Berlin Calling"
              src={imageBerlincalling.src}
              alt="Berlin Calling poster"
              width="940"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="Metropolis"
              src={imageMetropolis.src}
              alt="Metropolis poster"
              width="300"
              height="1200"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="Allegro non Troppo"
              src={imageAllegroNonTroppo1.src}
              alt="Allegro non Troppo poster"
              width="300"
              height="300"
            />
          </p>
          <hr />
          <p>
            <img
              title="Allegro non Troppo"
              src={imageAllegroNonTroppo3.src}
              alt="Allegro non Troppo poster"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="fourwide">
          <p>
            <img
              title="Allegro non Troppo"
              src={imageAllegroNonTroppo2.src}
              alt="Allegro non Troppo poster"
              width="300"
              height="300"
            />
          </p>
          <hr />
          <p>
            <img
              title="Allegro non Troppo"
              src={imageAllegroNonTroppo4.src}
              alt="Allegro non Troppo poster"
              width="300"
              height="300"
            />
          </p>
        </div>
        <div className="eightwide">
          <div>
            <iframe
              width="620"
              height="374"
              src="https://www.youtube.com/embed/fJjT6WX1ANY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <hr />
        <div className="fourwide">
          <h3>
            <em>A little bit</em> about me
          </h3>
          <p>
            My name ist Marcus Blättermann. <br />
            I&rsquo;m majoring in communication design and work as a freelancer
            for illustration, print- & webdesign. If you like my work you can
            <script type="text/javascript">mail2()</script>
            <noscript>hire me. marcus -at- essenmitsosse -dot- de</noscript>.
          </p>
        </div>

        <div className="fourwide">
          <h3>
            <em>What you should </em>do next
          </h3>
          <p>
            Don&rsquo;t forget to subscribe to my{' '}
            <a href="http://feeds.feedburner.com/essenmitsosse" rel="alternate">
              RSS-Feed
            </a>{' '}
            and follow me on{' '}
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="/">Portfolio</a>.
          </p>
        </div>

        <div className="fourwide">
          <h3>
            <em>If you didn&#8217;t like this one</em>You will hate these
          </h3>
        </div>
      </div>
    </body>
  )
}
