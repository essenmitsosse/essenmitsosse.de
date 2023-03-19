import { Metadata } from 'next'
import headerDigitalPainting from '../../../../website/blog/wp-content/uploads/digitalpainting/digitalpainting-header.png'

export const metadata: Metadata = {
  title: '11 applications for Digital Painting ♣ essenmitsosse',
  description:
    'A compilation of software you can use to paint with your computer.',
  keywords:
    'adobe, artrage, artweaver, collection, corel, deep paint, digital painting, dogwaffle, free, gimp, graphics editor, guide, list, opencanvas, paint shop pro, paint.net, painter, photoshop, sketchbook pro, Software',
}

export default function Page() {
  return (
    <body className="single article">
      <ul id="navigation" className="black">
        <li className="home">
          <a href="index.html" rel="index">
            Home
          </a>
        </li>
        <li className="articlenavigation">
          <ul>
            <li className="newer">
              <a href="likeness-in-portrait" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">
                  <em>How to achieve</em> Likeness In A Portrait
                </span>
              </a>
            </li>
            <li className="older">
              <a href="graphics-tablet" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">
                  <em>An introduction to the </em>Graphics Tablet
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div
        className="intro color"
        style={{ backgroundImage: `url(${headerDigitalPainting.src})` }}
      >
        <p className="logo">
          <a href="index.html" id="essenmitsosse">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        <h1>
          <em>11 applications for</em> Digital Painting
        </h1>
      </div>

      <div className="content white">
        <div className="date">
          <p>2008-03-30</p>
        </div>
        <p>
          You should know that Photoshop isn&#8217;t the one and only graphics
          editor. There are many alternatives, whereof some are better for
          simulating real painting or fast sketching than others. And some of
          them are even for free. This is a compilation of the 11 most important
          applications for digital painting.
        </p>
        <h2>Adobe Photoshop</h2>
        <div className="sixwide">
          <p>
            Photoshop is still the master of all graphics editiors. It got a
            massive amount of functions and you can do nearly everything with
            it, making it the industry standard for graphics professionals.
          </p>
          <p>
            Who wants to go professional won&#8217;t get by Photoshop. But being
            one of the most powerful tools it&#8217;s also one of the most
            expensive.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://www.adobe.com/products/photoshop/">
                  Official Product Page
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://en.wikipedia.org/wiki/Adobe_Photoshop">
                  Wikipedia
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://www.amazon.com/Adobe-65015634-Photoshop-CS4/dp/B001EUBSL0/essencompucan-20">
                  Adobe Photoshop CS3 on Amazon.com
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="http://www.adobe.com/products/photoshop/">
              <img
                src="blog/wp-content/uploads/2008/04/photoshop.jpg"
                alt="Adobe Photoshop"
                title="Adobe Photoshop"
                width="350"
                height="211"
                className="alignnone size-full wp-image-41"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/photoshop.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/photoshop-150x90.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/photoshop-300x180.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Mac, Windows &#038; Unix</strong>
          </p>
        </div>
        <h2>Corel Paint Shop Pro</h2>
        <div className="sixwide">
          <p>
            Paint Shop Pro is pretty much like Photoshop, but with less
            functions for a smaller price.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://www.corel.com/servlet/Satellite/us/en/Product/1184951547051">
                  Official Product Page
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://en.wikipedia.org/wiki/Corel_Paint_Shop_Pro">
                  Wikipedia
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://www.amazon.com/gp/product/B000VJTL1Y/essencompucan-20">
                  Paint Shop Pro Photo X2 on Amazon
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="http://www.corel.com/servlet/Satellite/us/en/Product/1184951547051">
              <img
                src="blog/wp-content/uploads/2008/04/paintshoppro.jpg"
                alt="Corel Paint Shop Pro"
                title="Corel Paint Shop Pro"
                width="350"
                height="169"
                className="alignnone size-full wp-image-40"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/paintshoppro.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/paintshoppro-150x72.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/paintshoppro-300x144.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Windows</strong>
          </p>
        </div>
        <h2>Corel Painter</h2>
        <div className="sixwide">
          <p>
            Unlike Photoshop, Painter is an application mainly for digital
            painting, designed specifically for the use with graphics tablets.
            It&#8217;s primarily intended for digital painting (and less for
            image editing).
          </p>
          <p>
            Painter can simulate real brushes much better than Photoshop, making
            the pictures look more naturally. However some people think the
            brushes are a bit harder to control making it more difficult at
            first to achieve what you want. Thought with some practice the
            brushes can be handled and than it will be a lot of fun painting
            with Painter.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://www.corel.com/servlet/Satellite/de/de/Product/1166553885783">
                  Official Product Page
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://en.wikipedia.org/wiki/Corel_painter">
                  Wikipedia
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://www.amazon.com/gp/product/B000MTEBTU/essencompucan-20">
                  Corel Painter X on Amazon
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="http://www.corel.com/servlet/Satellite/de/de/Product/1166553885783">
              <img
                src="blog/wp-content/uploads/2008/04/painter.jpg"
                alt="Corel Painter"
                title="Corel Painter"
                width="350"
                height="220"
                className="alignnone size-full wp-image-39"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/painter.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/painter-150x94.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/painter-300x188.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Mac &#038; Windows</strong>
          </p>
        </div>
        <h2>Alias SketchBook Pro</h2>
        <div className="sixwide">
          <p>
            Like Corel Painter, SketchBook Pro is designed specifically for
            being used with a graphics tablet. It has less functions and focuses
            even more on the simulation of pencils making it more appropriate
            for drawing and sketching than it is for painting.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://usa.autodesk.com/adsk/servlet/index?id=6848332&amp;siteID=123112">
                  Official Product Page
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://en.wikipedia.org/wiki/Alias_SketchBook_Pro">
                  Wikipedia
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="http://usa.autodesk.com/adsk/servlet/index?id=6848332&amp;siteID=123112">
              <img
                src="blog/wp-content/uploads/2008/04/sketchbookpro.jpg"
                alt="Alias SketchBook Pro"
                title="Alias SketchBook Pro"
                width="350"
                height="144"
                className="alignnone size-full wp-image-42"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/sketchbookpro.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/sketchbookpro-150x61.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/sketchbookpro-300x123.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Mac &#038; Windows</strong>
          </p>
        </div>
        <h2>openCanvas</h2>
        <div className="sixwide">
          <p>
            OpenCanvas is a tiny program with some great functions. Like
            SketchBook Pro it was designed specifically for sketching. The most
            significant feature of openCanvas is the ability to record what you
            are painting and play-back your painting-process.
          </p>
          <p>
            Up until Version 1.1 openCanvas was <strong>Freeware</strong> and
            also
            <strong>included network support</strong> allowing you to paint over
            the internet with your friends on the same Canvas.
          </p>
          <p>Later Versions are only Shareware.</p>
          <ul>
            <li>
              <p>
                <a href="opencanvas11b71.html">
                  Free Version 1.1 (click to start the download)
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://www.portalgraphics.net/en/">
                  Official Product Page
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://en.wikipedia.org/wiki/Open_canvas">Wikipedia</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="http://www.portalgraphics.net/en/">
              <img
                src="blog/wp-content/uploads/2008/04/opencanvas.jpg"
                alt="OpenCanvas"
                title="OpenCanvas"
                width="350"
                height="195"
                className="alignnone size-full wp-image-37"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/opencanvas.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/opencanvas-150x83.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/opencanvas-300x167.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Windows</strong>
          </p>
        </div>
        <h2>ArtRage</h2>
        <div className="sixwide">
          <p>
            ArtRage is available as well as a
            <strong>free Starter Edition</strong> and as a Full Version with
            more features which must be payed. It&#8217;s also bundled with some
            graphics tablets.
          </p>
          <p>
            Like SketchBook Pro it&#8217;s a smaller program, focusing on
            digital painting by simulating real brushes and pens.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://www.ambientdesign.com/artrage.html">
                  Official Product Page (with free Starter Edition)
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://en.wikipedia.org/wiki/Artrage">Wikipedia</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="http://www.ambientdesign.com/artrage.html">
              <img
                src="blog/wp-content/uploads/2008/04/artrage.jpg"
                alt="Artrage"
                title="Artrage"
                width="350"
                height="215"
                className="alignnone size-full wp-image-32"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/artrage.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/artrage-150x92.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/artrage-300x184.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Mac &#038; Windows</strong>
          </p>
        </div>
        <h2>
          <abbr title="GNU Image Manipulation Program">Gimp</abbr>
        </h2>
        <div className="sixwide">
          <p>
            The “GNU Image Manipulation Program” is a graphics editor, pretty
            much like Photoshop. It&#8217;s a bit more powerless than Photoshop
            but it&#8217;s <strong>completely for free</strong> and for this
            reason a good alternative.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://www.gimp.org/">
                  Official Product Page (with free download)
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://en.wikipedia.org/wiki/GIMP">Wikipedia</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="hhttp://www.gimp.org/">
              <img
                src="blog/wp-content/uploads/2008/04/gimp.jpg"
                alt="GIMP"
                title="GIMP"
                width="350"
                height="175"
                className="alignnone size-full wp-image-36"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/gimp.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/gimp-150x75.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/gimp-300x150.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Mac, Windows &#038; Unix</strong>
          </p>
        </div>
        <h2>Artweaver</h2>
        <div className="sixwide">
          <p>
            Artweaver can be compared to ArtRage or SketchBook Pro. Like ArtRage
            <strong>it is also for free</strong>.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://www.artweaver.de/">
                  Official Product Page (with free download)
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://en.wikipedia.org/wiki/Artweaver">Wikipedia</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="http://www.artweaver.de/">
              <img
                src="blog/wp-content/uploads/2008/04/artweaver.jpg"
                alt="Artweaver"
                title="Artweaver"
                width="350"
                height="151"
                className="alignnone size-full wp-image-33"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/artweaver.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/artweaver-150x64.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/artweaver-300x129.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Windows</strong>
          </p>
        </div>
        <h2>Deep Paint</h2>
        <div className="sixwide">
          <p>
            Deep Paint combines the look of Photoshop with the functions of
            Painter. In Addition it can be integrated into Photoshop.
          </p>
          <p>
            The development of Deep Paint has been stopped, but it&#8217;s
            <strong>Freeware</strong>.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://download.chip.eu/en/Deep-Paint-2.0_132831.html">
                  Site where you can download Deep Paint for free
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="http://download.chip.eu/en/Deep-Paint-2.0_132831.html">
              <img
                src="blog/wp-content/uploads/2008/04/deeppaint.jpg"
                alt="Deeppaint"
                title="Deeppaint"
                width="350"
                height="202"
                className="alignnone size-full wp-image-34"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/deeppaint.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/deeppaint-150x86.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/deeppaint-300x173.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Windows</strong>
          </p>
        </div>
        <h2>Dogwaffle</h2>
        <div className="sixwide">
          <p>
            Even if there was no update since 2004 of the
            <strong>free</strong> Version of this program, this
            Corel-Painter-Clone still is worth a look.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://www.thebest3d.com/dogwaffle/free">
                  Offical Product Page (with free download)
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="http://www.thebest3d.com/dogwaffle/free">
              <img
                src="blog/wp-content/uploads/2008/04/dogwaffle.jpg"
                alt="Dogwaffle"
                title="Dogwaffle"
                width="350"
                height="211"
                className="alignnone size-full wp-image-35"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/dogwaffle.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/dogwaffle-150x90.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/dogwaffle-300x180.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Windows</strong>
          </p>
        </div>
        <h2>Paint.NET</h2>
        <div className="sixwide">
          <p>
            Paint.NET is the powerful cousin of Microsoft Paint. It&#8217;s
            mainly for image editing and not that well suited for digital
            painting.
            <strong>But it&#8217;s for free</strong>.
          </p>
          <ul>
            <li>
              <p>
                <a href="http://www.getpaint.net/">
                  Offical Product Page (with free download)
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="http://en.wikipedia.org/wiki/Paint.net">Wikipedia</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="sixwide center">
          <div>
            <a href="ttp://www.getpaint.net/">
              <img
                src="blog/wp-content/uploads/2008/04/paint.jpg"
                alt=""
                title="Paint.NET"
                width="350"
                height="211"
                className="alignnone size-full wp-image-38"
                srcset="
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/paint.jpg         350w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/paint-150x90.jpg  150w,
                https://essenmitsosse.de/blog/wp-content/uploads/2008/04/paint-300x180.jpg 300w
              "
                sizes="(max-width: 350px) 100vw, 350px"
              />
            </a>
          </div>
          <p>
            <strong>available for Windows</strong>
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
            Don’t forget to follow me on
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="index.html">Portfolio</a>.
          </p>
        </div>
      </div>
    </body>
  )
}
