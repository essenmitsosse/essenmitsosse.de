import Image from 'next/image'

import imageArtrage from './artrage.jpg'
import imageArtweaver from './artweaver.jpg'
import imageDeeppaint from './deeppaint.jpg'
import imageDogwaffle from './dogwaffle.jpg'
import imageGimp from './gimp.jpg'
import imageOpencanvas from './opencanvas.jpg'
import imagePaint from './paint.jpg'
import imagePainter from './painter.jpg'
import imagePaintshoppro from './paintshoppro.jpg'
import imagePhotoshop from './photoshop.jpg'
import imageSketchbookpro from './sketchbookpro.jpg'

import type { ReactNode } from 'react'

const ApplicationsForDigitalPainting = (): ReactNode => (
  <>
    <p>
      You should know that Photoshop isn&#8217;t the one and only graphics
      editor. There are many alternatives, whereof some are better for
      simulating real painting or fast sketching than others. And some of them
      are even for free. This is a compilation of the 11 most important
      applications for digital painting.
    </p>
    <h2>Adobe Photoshop</h2>
    <div className="sixwide">
      <p>
        Photoshop is still the master of all graphics editiors. It got a massive
        amount of functions and you can do nearly everything with it, making it
        the industry standard for graphics professionals.
      </p>
      <p>
        Who wants to go professional won&#8217;t get by Photoshop. But being one
        of the most powerful tools it&#8217;s also one of the most expensive.
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
            <a href="http://en.wikipedia.org/wiki/Adobe_Photoshop">Wikipedia</a>
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
          <Image
            alt="Adobe Photoshop"
            className="alignnone size-full wp-image-41"
            height="211"
            placeholder="blur"
            src={imagePhotoshop}
            title="Adobe Photoshop"
            width="350"
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
        Paint Shop Pro is pretty much like Photoshop, but with less functions
        for a smaller price.
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
          <Image
            alt="Corel Paint Shop Pro"
            className="alignnone size-full wp-image-40"
            height="169"
            placeholder="blur"
            src={imagePaintshoppro}
            title="Corel Paint Shop Pro"
            width="350"
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
        Unlike Photoshop, Painter is an application mainly for digital painting,
        designed specifically for the use with graphics tablets. It&#8217;s
        primarily intended for digital painting (and less for image editing).
      </p>
      <p>
        Painter can simulate real brushes much better than Photoshop, making the
        pictures look more naturally. However some people think the brushes are
        a bit harder to control making it more difficult at first to achieve
        what you want. Thought with some practice the brushes can be handled and
        than it will be a lot of fun painting with Painter.
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
            <a href="http://en.wikipedia.org/wiki/Corel_painter">Wikipedia</a>
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
          <Image
            alt="Corel Painter"
            className="alignnone size-full wp-image-39"
            height="220"
            placeholder="blur"
            src={imagePainter}
            title="Corel Painter"
            width="350"
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
        Like Corel Painter, SketchBook Pro is designed specifically for being
        used with a graphics tablet. It has less functions and focuses even more
        on the simulation of pencils making it more appropriate for drawing and
        sketching than it is for painting.
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
          <Image
            alt="Alias SketchBook Pro"
            className="alignnone size-full wp-image-42"
            height="144"
            placeholder="blur"
            src={imageSketchbookpro}
            title="Alias SketchBook Pro"
            width="350"
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
        OpenCanvas is a tiny program with some great functions. Like SketchBook
        Pro it was designed specifically for sketching. The most significant
        feature of openCanvas is the ability to record what you are painting and
        play-back your painting-process.
      </p>
      <p>
        Up until Version 1.1 openCanvas was <strong>Freeware</strong> and also{' '}
        <strong>included network support</strong> allowing you to paint over the
        internet with your friends on the same Canvas.
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
          <Image
            alt="OpenCanvas"
            className="alignnone size-full wp-image-37"
            height="195"
            placeholder="blur"
            src={imageOpencanvas}
            title="OpenCanvas"
            width="350"
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
        ArtRage is available as well as a <strong>free Starter Edition</strong>{' '}
        and as a Full Version with more features which must be payed. It&#8217;s
        also bundled with some graphics tablets.
      </p>
      <p>
        Like SketchBook Pro it&#8217;s a smaller program, focusing on digital
        painting by simulating real brushes and pens.
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
          <Image
            alt="Artrage"
            className="alignnone size-full wp-image-32"
            height="215"
            placeholder="blur"
            src={imageArtrage}
            title="Artrage"
            width="350"
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
        The “GNU Image Manipulation Program” is a graphics editor, pretty much
        like Photoshop. It&#8217;s a bit more powerless than Photoshop but
        it&#8217;s <strong>completely for free</strong> and for this reason a
        good alternative.
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
          <Image
            alt="GIMP"
            className="alignnone size-full wp-image-36"
            height="175"
            placeholder="blur"
            src={imageGimp}
            title="GIMP"
            width="350"
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
        Artweaver can be compared to ArtRage or SketchBook Pro. Like ArtRage{' '}
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
          <Image
            alt="Artweaver"
            className="alignnone size-full wp-image-33"
            height="151"
            placeholder="blur"
            src={imageArtweaver}
            title="Artweaver"
            width="350"
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
        Deep Paint combines the look of Photoshop with the functions of Painter.
        In Addition it can be integrated into Photoshop.
      </p>
      <p>
        The development of Deep Paint has been stopped, but it&#8217;s{' '}
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
          <Image
            alt="Deeppaint"
            className="alignnone size-full wp-image-34"
            height="202"
            placeholder="blur"
            src={imageDeeppaint}
            title="Deeppaint"
            width="350"
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
        Even if there was no update since 2004 of the <strong>free</strong>{' '}
        Version of this program, this Corel-Painter-Clone still is worth a look.
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
          <Image
            alt="Dogwaffle"
            className="alignnone size-full wp-image-35"
            height="211"
            placeholder="blur"
            src={imageDogwaffle}
            title="Dogwaffle"
            width="350"
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
        Paint.NET is the powerful cousin of Microsoft Paint. It&#8217;s mainly
        for image editing and not that well suited for digital painting.{' '}
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
          <Image
            alt=""
            className="alignnone size-full wp-image-38"
            height="211"
            placeholder="blur"
            src={imagePaint}
            title="Paint.NET"
            width="350"
          />
        </a>
      </div>
      <p>
        <strong>available for Windows</strong>
      </p>
    </div>
  </>
)

export default ApplicationsForDigitalPainting
