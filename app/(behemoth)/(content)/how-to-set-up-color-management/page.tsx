import { Metadata } from 'next'
import headerColorManagement from '../../../../website/blog/wp-content/uploads/colormanagement/colormanagement-header.png'

import imageSettings from '../../../../website/blog/wp-content/uploads/2008/04/settings.jpg'
import imageSaveforwebsettings from '../../../../website/blog/wp-content/uploads/2008/04/saveforwebsettings.jpg'

export const metadata: Metadata = {
  title: 'How to set up Color Management ♣ essenmitsosse',
  description:
    'A tutorial on how to correctly set up color-management. This might also solve the color shift problem when saving for the web in Photoshop.',
  keywords:
    'adobe, Adobe RGB, calibration, CMS, color-management, colors, creative suite, display, guide, photoshop, save for web, sRGB',
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
              <a href="photoshop-brush-engine" rel="next">
                <span className="arrow">&#9668;</span>
                <span className="title">
                  <em>An Introduction to the</em> Photoshop Brush Engine
                </span>
              </a>
            </li>
            <li className="older">
              <a href="likeness-in-portrait" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">
                  <em>How to achieve</em> Likeness In A Portrait
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div
        className="intro color"
        style={{ backgroundImage: `url(${headerColorManagement.src})` }}
      >
        <p className="logo">
          <a href="/" id="essenmitsosse" rel="index">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        <h1>
          <em>How to set up</em> Color Management
        </h1>
      </div>

      <div className="content white">
        <div className="date">
          <p>2008-04-10</p>
        </div>
        <p>
          Color management is the one and only way to achieve perfect color
          reproduction across multiple devices. Color management systems are
          affordable and pretty easy to use today. But after you created a
          profile for your device, the job is not done. Setting up your
          application correctly is essential to exactly know how your pictures
          will look on the web or in print.
        </p>
        <h2>
          <em>First things first</em> calibrate your devices
        </h2>
        <div className="sixwide">
          <p>
            To make sure your monitor displays all colors as correctly as
            possible, you have to calibrate them and create a color profile.
          </p>
          <h3 className="dontclear">Color management systems</h3>
          <p>
            A <abbr title="Color management system">CMS</abbr> is the best way
            to calibrate and profile your display. They will give you the best
            results and are pretty foolproof. Some of the most common{' '}
            <abbr title="Color management system">CMS</abbr>&#8216; are the{' '}
            <a href="http://www.amazon.com/gp/product/B000ES4PYU/essencompucan-20">
              Spyder 2
            </a>
            ,{' '}
            <a href="http://www.amazon.com/gp/product/B000X4X37A/essencompucan-20">
              Spyder 3
            </a>{' '}
            and the{' '}
            <a href="http://www.amazon.com/gp/product/B000JLO31M/essencompucan-20">
              Eye-One
            </a>
            .
          </p>
          <h3 className="dontclear">On a Mac</h3>
          <p>
            Mac OS X has a good programm to calibrate your monitor without any
            expensive measuring device (but not that accurate).
          </p>
          <p>
            It can be found in{' '}
            <strong>
              {' '}
              Apple &gt; System Preference &gt; Displays &gt; Color &gt;
              Calibrate…
            </strong>
            .
          </p>
          <p>The program itself is self-explanatory.</p>
          <h3 className="dontclear">Testing images</h3>
          <p>
            While it is hard to test your{' '}
            <a href="http://en.wikipedia.org/wiki/Color_temperature">
              color temperature
            </a>{' '}
            and white luminance with the naked eye, you can at least check your{' '}
            <a href="http://en.wikipedia.org/wiki/Gamma_correction">gamma</a>{' '}
            manually.
          </p>
          <p>
            <a href="http://werbefoto.at/d_base/calibration.htm">
              Werbefotos.at
            </a>{' '}
            has some good images to find out and adjust your Gamma.
          </p>
          <p>
            Remember, that this won&#8217;t produce a profile for your monitor!
          </p>
        </div>
        <div className="sixwide">
          <blockquote>
            <p>
              In order to describe the behavior of the various output devices,
              they must be compared (calibrated) in relation to a standard{' '}
              <a href="http://en.wikipedia.org/wiki/Color_space">color space</a>
              . Often a step called linearization is performed first, in order
              to get the most out of limited 8-bit color paths. Instruments used
              for measuring device colors include{' '}
              <a href="http://en.wikipedia.org/wiki/Colorimeter">
                colorimeters
              </a>{' '}
              and spectrophotometers. As an intermediate result, the device{' '}
              <a href="http://en.wikipedia.org/wiki/Gamut">gamut</a> is
              described in the form of scattered measurement data. The
              measurement data (CGATS) is often not usable immediately. Such
              data need to be prepared for high speed conversions of the actual
              image data. The transformation of the scattered measurement data
              into a more regular form, usable by the application, is called
              profiling. Profiling is a complex process involving mathematics,
              intense computation, judgement, testing, and iteration. After the
              profiling is finished, an idealized color description of the
              device is created. This description is called a profile.
            </p>
          </blockquote>
          <p>
            <cite>
              From{' '}
              <a href="http://en.wikipedia.org/wiki/Color_management">
                Wikipedia
              </a>
            </cite>
          </p>
        </div>

        <h2>
          <em>How to setup your</em> operating system
        </h2>
        <p>
          After the calibration your profile should be applied automatically.
        </p>
        <p>
          Under Mac OS X you can check if everything is set up correctly in{' '}
          <strong>
            {' '}
            Apple &gt; System Preference &gt; Displays &gt; Color &gt; Display
            Profile
          </strong>
          .
        </p>
        <p>
          For Windows user this is a bit more difficult, because Windows itself
          can&#8217;t apply a color profile because Windows can&#8217;t really
          do color management. This makes an additional program necessary which
          typically comes with every{' '}
          <abbr title="Color management system">CMS</abbr> and is installed
          automatically. Make sure this program is in the autostart.
        </p>
        <h2>
          <em>How to setup</em> Creative Suite
        </h2>
        <div className="sixwide">
          <p>
            Start Photoshop or any other CS application. Go to{' '}
            <strong>Edit &gt; Color Settings…</strong>.
          </p>
          <p>Your settings should look like these on the right.</p>
          <p>
            <strong>RGB:</strong> If you only work for the web you can choose
            sRGB, but if your work will probably be printed you should go with
            Adobe RGB, because it&rsquo;s the bigger{' '}
            <a href="http://en.wikipedia.org/wiki/Gamut">gamut</a>. Never chose
            your monitor profile (even if many people think, that this is what
            should be chosen). This wouldn&#8217;t make sense, because your
            monitor profile is already applied by your graphics-card and would
            be run a second time over your image if you chose that.
          </p>
          <p>
            <strong>CMYK:</strong> Choose a standard CMYK Profile like Euroscale
            Coated v2.
          </p>
          <p>
            Leave <strong>Gray</strong> and <strong>Spot</strong> as they are.
          </p>
          <p>
            To make shure you always know what&#8217;s happening deactivate all{' '}
            <strong>Color Management Policies</strong> and check{' '}
            <strong>Ask When Opening</strong>. This means, that always if a
            picture has no or a different color profile than your working space,
            you will be asked what to do.
          </p>
          <p>
            In this case you should either choose to keep the profile or to
            convert it to your working space (depends on what you want to do).
            If you have an image from the web with no profile you should assign
            sRGB, because images on the web are in the majority of cases in
            sRGB.
          </p>
          <p>
            Never, ever deactivate or turn off color management! This will screw
            things completely up!
          </p>
          <p>
            Save these settings under a name of your choice. To synchronize all
            CS applications open up Adobe Bridge and go to{' '}
            <strong>Edit &gt; Creative Suite Color Settings…</strong> look for
            the profile you just saved and click Apply. Now all your CS
            applications will work with the same setting.
          </p>
        </div>
        <div className="sixwide center">
          <img
            src={imageSettings.src}
            alt="CS Settings"
            title="CS Settings"
            width="300"
          />
        </div>
        <h2>
          <em>The</em> “Save for Web”-Problem
        </h2>
        <div className="sixwide">
          <p className="firstline">
            Many people have the problem, that their colors change when they use
            the option “Save for Web”.
          </p>
          <p>
            In fact they don&#8217;t change. They are just not displayed the
            right way while working in Photoshop.
          </p>
          <p>
            By default Photoshop applies your working space to your images,
            which is good for print work, but leads to a difference in color
            displaying. To make sure Photoshop displays the colors like an
            application, that don&#8217;t color manage (like your browser or
            your operating system) you have to check{' '}
            <strong>View &gt; Proof Setup &gt; Monitor RGB</strong>. Furthermore
            you have to check <strong>View &gt; Proof Colors</strong>. Make sure
            this is always checked in every image you are working on (because
            its deactivated by default).
          </p>
          <p>
            When saving for the web you should also make sure to check{' '}
            <strong>Convert to sRGB</strong>, especially if you are not working
            in sRGB.
          </p>
          <p>
            If you work in Adobe RGB (or an other profile than sRGB) there could
            be a slight difference in color after Saving For Web because of the
            difference between Adobe RGB and sRGB. You can check your images by
            converting them manually to sRGB before saving for the web by
            clicking on{' '}
            <strong>Edit &gt; Convert to Profile… &gt; Profile: sRGB</strong>.
            Make sure you undo this step afterwards or you will keep on working
            in sRGB.
          </p>
          <p>
            If you follow these steps you will see your images in Photoshop
            exactly like in your browser. But now you are color managing to make
            sure your pictures will also look great in print.
          </p>
        </div>
        <div className="sixwide center">
          <img
            src={imageSaveforwebsettings.src}
            alt="Save for Web Settings"
            title="Save for Web Settings"
            width="300"
          />
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
