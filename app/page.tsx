import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <head>
        <link
          rel="stylesheet"
          href="blog/wp-content/themes/essenmitsosse-behemoth/style.css"
          type="text/css"
          media="screen"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="essenmitsosse RSS-Feed"
          href="https://feeds.feedburner.com/essenmitsosse"
        />
        <link rel="shortcut icon" type="image/png" href="favicon.png" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="index" title="essenmitsosse" href="index.html" />

        <title>&clubs; essenmitsosse</title>

        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="The work and thoughts of an illustrator, print- & webdesigner."
        />
        <meta
          name="keywords"
          content="freelancer, illustrator, designer, design, layout, typography, wacom, photoshop"
        />
        <meta name="date" content="2012-04-17" />
        <meta name="author" content="Marcus Bl&auml;ttermann" />

        <script type="text/javascript">
          function mail() {
            var name = 'marcus'
            var domain = 'essenmitsosse.de'
            document.write(
              '<a href="mailto:' +
                name +
                '@' +
                domain +
                '">' +
                name +
                '@' +
                domain +
                '</a>'
            )
          }
          function mail2() {
            var name = 'marcus'
            var domain = 'essenmitsosse.de'
            document.write(
              '<a className="important" href="mailto:' +
                name +
                '@' +
                domain +
                '">hire me</a>'
            )
          }
        </script>

        <meta name="generator" content="WordPress 4.8.21" />
      </head>

      <body className="homepage">
        <ul id="navigation" className="black"></ul>

        <p className="logo">
          <a href="index.html" title="Homepage" id="essenmitsosse">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>

        <div className="allwrapper">
          <div id="introduction" className="homepresentation">
            <div className="wrapper">
              <h1>About</h1>
              <p>
                My name ist Marcus Blättermann. I’m majoring in Communication
                Design at{' '}
                <a href="http://burg-halle.de/">
                  Burg Giebichenstein University of Art & Design
                </a>
                . I work as a freelancer for illustration, print- & webdesign.
                If you like my work you can
                <script type="text/javascript">mail2()</script>
                <noscript>hire me</noscript>.
              </p>
              <p>
                You should get my{' '}
                <a href="https://feeds.feedburner.com/essenmitsosse">
                  RSS-Feed
                </a>{' '}
                and follow me on{' '}
                <a href="http://twitter.com/essenmitsosse">Twitter</a>.
              </p>

              <h1>Contact</h1>
              <table>
                <tbody>
                  <tr>
                    <th>Mail</th>
                    <td>
                      <script type="text/javascript">mail()</script>
                      <noscript>marcus -at- essenmitsosse -dot- de</noscript>
                    </td>
                  </tr>
                  <tr>
                    <th>Facebook</th>
                    <td>
                      <a href="http://www.facebook.com/essenmitsosse">
                        /essenmitsosse
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Twitter</th>
                    <td>
                      <a href="http://twitter.com/essenmitsosse">
                        @essenmitsosse
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Youtube</th>
                    <td>
                      <a href="https://www.youtube.com/user/essenmitsosse">
                        /user/essenmitsosse
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Instagram</th>
                    <td>
                      <a href="http://instagram.com/essenmitsosse">
                        @essenmitsosse
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="articles" className="homepresentation">
            <div className="wrapper color">
              <h1>Articles</h1>
              <ul>
                <li>
                  <h3>
                    <a href="what-designers-can-learn-from-evolution">
                      <span className="date">2009-09-10</span>
                      <em>What designers can learn from</em> Evolution
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="wacom-intuos4-review">
                      <span className="date">2009-08-24</span>
                      Wacom Intuos4 <em>Review</em>
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="the-designs-of-star-wars">
                      <span className="date">2008-09-24</span>
                      The Designs Of Star Wars
                      <em>10 reasons why they are awesome</em>
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="digital-painters">
                      <span className="date">2008-05-15</span>
                      35 Digital Painters <em>you shouldn’t miss</em>
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="photoshop-brush-engine">
                      <span className="date">2008-05-03</span>
                      <em>An Introduction to the</em> Photoshop Brush Engine
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="how-to-set-up-color-management">
                      <span className="date">2008-04-10</span>
                      <em>How to set up</em> Color Management
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="likeness-in-portrait">
                      <span className="date">2008-04-08</span>
                      <em>How to achieve</em> Likeness In A Portrait
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="applications-for-digital-painting">
                      <span className="date">2008-03-30</span>
                      <em>11 applications for</em> Digital Painting
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="graphics-tablet">
                      <span className="date">2008-03-28</span>
                      <em>An introduction to the </em>Graphics Tablet
                    </a>
                  </h3>
                </li>
              </ul>
            </div>
          </div>

          <div id="portfolio" className="homepresentation black">
            <div className="wrapper">
              <h1>Portfolio</h1>
              <ul>
                <li className="commentPortfolio">
                  I am sorry that this portfolio is quite out of date. New stuff
                  will be coming soon. For now you can find my portfolio on{' '}
                  <a
                    href="https://www.behance.net/essenmitsosse"
                    style={{ display: 'inline', borderBottom: 'none' }}
                  >
                    Behance
                  </a>
                  .
                </li>
                <li>
                  <a
                    href="jack-of-all-trades"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/jackofalltrades/jack-of-all-trades.png)',
                    }}
                  >
                    <span>Jack of all Trades</span>
                  </a>
                </li>
                <li>
                  <a
                    href="the-human-brain"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/humanbrain/humanbrain.png)',
                    }}
                  >
                    <span>The Human Brain</span>
                  </a>
                </li>
                <li>
                  <a
                    href="kino-120a"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/kino120a/kino120a.png)',
                    }}
                  >
                    <span>kino.120a</span>
                  </a>
                </li>
                <li>
                  <a
                    href="creature-combat"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/creaturecombat/creaturecombat.png)',
                    }}
                  >
                    <span>Creature Combat IV</span>
                  </a>
                </li>
                <li>
                  <a
                    href="faust"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/faust/faust.png)',
                    }}
                  >
                    <span>Faust</span>
                  </a>
                </li>
                <li>
                  <a
                    href="blockator"
                    style={{
                      backgroundImage:
                        'url(portfolioupload/blockator/blockator-preview.gif)',
                    }}
                  >
                    <span>Blockator</span>
                  </a>
                </li>
                <li>
                  <a
                    href="essenmitsosse-redesign"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/essenmitsosse/website-preview.png)',
                    }}
                  >
                    <span>essenmitsosse Redesign</span>
                  </a>
                </li>
                <li>
                  <a
                    href="portrait-class"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/portrait-preview.jpg)',
                    }}
                  >
                    <span>Portrait Class</span>
                  </a>
                </li>
                <li>
                  <a
                    href="sonic-the-real-hedgehog"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/sonic-preview.jpg)',
                    }}
                  >
                    <span>Sonic The Real Hedgehog</span>
                  </a>
                </li>
                <li>
                  <a
                    href="realistically-painted-bowser"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/bowser-preview.jpg)',
                    }}
                  >
                    <span>Realistically Painted Bowser</span>
                  </a>
                </li>
                <li>
                  <a
                    href="digital-life-drawing"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/akt-preview.jpg)',
                    }}
                  >
                    <span>Digital Life Drawing</span>
                  </a>
                </li>
                <li>
                  <a
                    href="linen-tunic"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/linentunic-preview.jpg)',
                    }}
                  >
                    <span>Linen Tunic</span>
                  </a>
                </li>
                <li>
                  <a
                    href="aztecs"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/aztheken-preview.jpg)',
                    }}
                  >
                    <span>Aztecs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="the-anglerfish"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/anglerfish-preview.jpg)',
                    }}
                  >
                    <span>The Anglerfish</span>
                  </a>
                </li>
                <li>
                  <a
                    href="sparta-fanart"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/sparta-preview.jpg)',
                    }}
                  >
                    <span>Sparta!</span>
                  </a>
                </li>
                <li>
                  <a
                    href="blondheadredhead"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/blondhead-preview.jpg)',
                    }}
                  >
                    <span>Blondehead &#038; Redhead</span>
                  </a>
                </li>
                <li>
                  <a
                    href="older-paintings"
                    style={{
                      backgroundImage:
                        'url(blog/wp-content/uploads/portfoliothumb/gondel-preview.jpg)',
                    }}
                  >
                    <span>Older Paintings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <script
          type="text/javascript"
          src="blog/wp-includes/js/wp-embed.min4918.js?ver=4.8.21"
        ></script>
      </body>
    </Fragment>
  )
}
