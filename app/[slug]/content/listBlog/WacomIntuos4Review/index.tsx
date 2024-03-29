import Image from 'next/image'
import Link from 'next/link'

import imageMainphoto from './mainphoto.jpg'
import imagePentips from './pentips.png'
import imageRadialmenu from './radialmenu.png'
import imageTouchingring from './touchingring.jpg'

import type { ReactNode } from 'react'

const WacomIntuos4Review = (): ReactNode => (
  <>
    <p>
      Over the last few month I was able to test the new Wacom Intuos4 drawing
      tablet in all details. I used the{' '}
      <a href="http://www.amazon.com/gp/product/B001TUYU06/essencompucan-20">
        Intuos4 Large
      </a>{' '}
      mainly for digital painting, but since this task makes use of nearly all
      features of a graphics tablet, I think I can tell pretty good what has
      improved and if it&rsquo;s worth to buy.
    </p>
    <p>
      If you&rsquo;re not quite sure if you need a graphics tablet or what
      it&rsquo;s good for at all I have written an article about this.
    </p>
    <p>
      <Link href="graphics-tablet">
        Read: “An Introduction To The Graphics Tablet”
      </Link>
    </p>
    <h2>Improvements</h2>
    <hr />
    <h3>New Design</h3>
    <div className="alignright">
      <Image
        alt="Wacom Intuos4 L"
        height="242"
        placeholder="blur"
        priority
        src={imageMainphoto}
        title="Wacom Intuos4 L"
        width="460"
      />
    </div>
    <p>
      The changes in the design of the new Intuos4 aren&rsquo;t just optical. In
      contrast to its predecessor all buttons are now only on one side. The two
      touch strips of the Intuos3 has been replaced by one Touching Ring, which
      can be compared to the click-wheel of the iPod. Every size of the Intuos4
      always has eight buttons and the one Touching Ring which can be assigned
      four different functions.
    </p>
    <p>
      The advantage of all buttons being on one side is that you neither has to
      use your “pen-hand” to press a button, nor accidently can press a button
      or use a touch strip on the right side. All buttons can be pressed with
      your left hand. But the best feature is, that if you are left-handed, the
      whole tablet can be turned by 180&deg;, since it&rsquo;s symmetrical
      (there are even two USB connections).
    </p>
    <p>
      In addition, there are small LED-Displays (on the M, L &#038; XL) next to
      all buttons, showing which function they are assigned to. Since you get
      used to the assignment of the buttons pretty fast, the Displays probably
      become useless after some time.
    </p>
    <h3>Touching Ring</h3>
    <div className="alignright">
      <Image
        alt="Wacom Intuos4 Touching Ring"
        height="242"
        placeholder="blur"
        src={imageTouchingring}
        title="Wacom Intuos4 Touching Ring"
        width="460"
      />
    </div>
    <p>
      The Touching Ring is a mixed blessing. On the one hand it&rsquo;s nice to
      be able to assign four different functions to it on the other hand you
      have to switch through these functions by pressing the button in the
      center of the wheel and this works only in one way. So if you want to
      switch from function A to B you have to press only one time, but if you
      want to get back from B to A you have to press another three times,
      switching through C and D, which can be pretty annoying. Also it&rsquo;s
      hard to see which function is currently activated, since it&rsquo;s only
      indicated, by a small LED next to the wheel. On the other hand the wheel
      is much more comfortable if you need to “scroll” a lot and all four
      functions can be used with one hand.
    </p>
    <h3>Rougher surface</h3>
    <p>
      Some people really wished for this “feature”, since they found the smooth
      surface of the Intuos3 offered not enough control over the pen. If you are
      one of these people you will probably love the new rougher surface. For me
      it&rsquo;s more kind of a downside, since I liked the smoother surface of
      the Intuos3.
    </p>
    <p>
      Another disadvantage of the new surface is that it drastically increases
      the wearing of the tips. This is especially noticeable compared to the
      Intuos3, where it took the tips an eternity before they became unusable (I
      used some for over a year) and now first signs of use can already be seen
      after several days.
    </p>
    <p>
      So for me these are two downsides of the new surface, but I think a lot of
      people can live with the increased consumption of tips, because they will
      enjoy the new surface.
    </p>
    <h3>
      New rubber pen nibs <br />
      &#038; improved pen nib holder
    </h3>
    <div className="alignright">
      <Image
        alt="Wacom Intuos4 Pen Holder"
        height="255"
        placeholder="blur"
        src={imagePentips}
        style={{ marginTop: '-100px' }}
        title="Wacom Intuos4 Pen Holder"
        width="460"
      />
    </div>
    <p>
      In addition to the three different pen nibs of the Intuos3 (normal
      plastic, a spring-loaded nib and one that feels like a felt tip),
      there&rsquo;s also a new one, which tip seems to be made out of rubber and
      offers even more friction than the felt nib and feels much more natural.
    </p>
    <p>
      The new pen holder can now be opened and is also a storage for up to ten
      additional nibs.
    </p>
    <h3>More Accuracy</h3>
    <p>
      The accuracy of the Intuos4 has been increased. The Pen now has twice as
      many pressure levels (2048 instead of 1024) and the minimum pressure that
      can be recognized has been reduced from 10 to 1 gram. This is pretty nice,
      but barley noticeable, since the Intuos3 was already pretty accurate
      (especially compared to lower-price graphics tablets) and the change is
      minimal.
    </p>
    <p>
      There&rsquo;s also a precision mode, which can be activated over one of
      the buttons and scales down the area of the screen the tablet is mapped
      to, giving you an immense (temporarily) increase of accuracy and
      precision.
    </p>
    <h3>Radial Menu</h3>
    <div className="alignright">
      <Image
        alt="Wacom Intuos4 Radial Menu"
        height="300"
        placeholder="blur"
        src={imageRadialmenu}
        style={{ marginBottom: '-80px', marginTop: '-100px' }}
        title="Wacom Intuos4 Radial Menu"
        width="460"
      />
    </div>
    <p>
      Another new feature is the Radial Menu, which can be applied to one of the
      buttons. It can give you fast access to a lot of shortcuts and features
      and by this can improve your workflow. Also it&rsquo;s customizable for
      different programms.
    </p>
    <h2>Comparison of Intuos3 &#038; Intuos4</h2>
    <table>
      <colgroup>
        <col style={{ width: '160px' }} />
        <col style={{ width: '380px' }} />
        <col style={{ width: '380px' }} />
      </colgroup>
      <thead>
        <tr>
          <th scope="row" />
          <th scope="col">Intuos3</th>
          <th scope="col">Intuos4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            available sizes <br />
            <em>(active area)</em>
          </th>
          <td>
            <a href="http://www.amazon.com/gp/product/B0003009BC/essencompucan-20">
              4×5&#8243; (A6)
            </a>
            ,
            <a href="http://www.amazon.com/gp/product/B000I62PEU/essencompucan-20">
              4×6&#8243; (A6 Wide)
            </a>
            , <br />
            <a href="http://www.amazon.com/gp/product/B00030097G?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00030097G">
              6×8&#8243; (A5)
            </a>
            ,
            <a href="http://www.amazon.com/gp/product/B000BVB2FK?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000BVB2FK">
              6×11&#8243; (A5 Wide)
            </a>
            , <br />
            <a href="http://www.amazon.com/gp/product/B0003009AI?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0003009AI">
              9×12&#8243; (A4)
            </a>
            ,
            <a href="http://www.amazon.com/gp/product/B000E6EIJY?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000E6EIJY">
              12×12&#8243; (A4 Oversize)
            </a>
            , <br />
            <a href="http://www.amazon.com/gp/product/B000E6IJ6C?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000E6IJ6C">
              12×19&#8243; (A3)
            </a>
          </td>
          <td>
            <a href="http://www.amazon.com/gp/product/B001TUYTZM?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B001TUYTZM">
              3.9×6.2&#8243; (Small)
            </a>
            , <br />
            <a href="http://www.amazon.com/gp/product/B001TUYTZW?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B001TUYTZW">
              5.5×8.8&#8243; (Medium)
            </a>
            , <br />
            <a href="http://www.amazon.com/gp/product/B001TUYU06/essencompucan-20">
              8×12.8&#8243; (Large)
            </a>
            , <br />
            <a href="http://www.amazon.com/gp/product/B001TUYU0G?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B001TUYU0G">
              12×18.2&#8243; (Extra Large)
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row">Buttons</th>
          <td>
            8 <br />
            <em>(only 4 on the Intuos3 4×5&#8243; and 4×6&#8243;)</em>
          </td>
          <td>8</td>
        </tr>
        <tr>
          <th scope="row">Scroll Input</th>
          <td>
            2 touch strips <br />
            <em>(only 1 on the Intuos3 4×5&#8243; and 4×6&#8243;)</em>
          </td>
          <td>
            1 Touching Ring <br />
            <em>(4 different functions can be assigned)</em>
          </td>
        </tr>
        <tr>
          <th scope="row">
            LED-Display <br />
            next to each button
          </th>
          <td>No</td>
          <td>
            Yes <br />
            <em>(except the Intuos4 Small)</em>
          </td>
        </tr>
        <tr>
          <th scope="row">Pressure Levels</th>
          <td>1024</td>
          <td>2048</td>
        </tr>
        <tr>
          <th scope="row">Nibs in the shipment</th>
          <td>
            standard <em>(plastic)</em>, spring-loaded nib, Felt nib
          </td>
          <td>
            standard <em>(plastic)</em>, spring-loaded nib, Felt nib, <br />
            nib with rubber top
          </td>
        </tr>
        <tr>
          <th scope="row">
            Available Pens <br />
            <em>
              (all Pens are pressure and tilt sensitive, <br />
              Intuos3 Pens are not compatible with Intuos4)
            </em>
          </th>
          <td>
            <a href="http://www.amazon.com/gp/product/B0006698PG?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0006698PG">
              Intuos3 Grip Pen
            </a>
            <em>(included)</em>, <br />
            <a href="http://www.amazon.com/gp/product/B00083Y87U?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00083Y87U">
              Intuos3 Classic Pen
            </a>
            <em>(slimmer profile)</em>, <br />
            <a href="http://www.amazon.com/gp/product/B0006698PQ?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0006698PQ">
              Intuos3 Airbrush
            </a>
            <em>(finger wheel)</em>, <br />
            <a href="http://www.amazon.com/gp/product/B0006698T2?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0006698T2">
              Intuos3 Inking Pen
            </a>
            <em>(can write on paper)</em>, <br />
            <a href="http://www.amazon.com/gp/product/B00083Y86G?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00083Y86G">
              Cintiq Art Pen
            </a>
            <em>(rotation sensitiv, can be used with Intuos3)</em>
          </td>
          <td>
            <a href="http://www.amazon.com/gp/product/B0020ZDGBI?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0020ZDGBI">
              Intuos4 Grip Pen
            </a>
            <em>(included)</em>, <br />
            <a href="http://www.amazon.com/gp/product/B0020ZFLWA?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0020ZFLWA">
              Intuos4 Classic Pen
            </a>
            <em>(slimmer profile)</em>, <br />
            <a href="http://www.amazon.com/gp/product/B0020ZBBW4?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0020ZBBW4">
              Intuos4 Airbrush Pen
            </a>
            <em>(finger wheel)</em>, <br />
            <a href="http://www.amazon.com/gp/product/B0020ZHOES?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0020ZHOES">
              Intuos4 Inking Pen
            </a>
            <em>(can write on paper)</em>, <br />
            <a href="http://www.amazon.com/gp/product/B0020ZHOGQ?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0020ZHOGQ">
              Intuos4 Art Pen
            </a>
            <em>(rotation sensitiv)</em>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Overview</h2>
    <div className="sixwide">
      <h3>+ Pros</h3>
      <ul>
        <li>
          <p>
            Some people might like the rougher surface, which can give you more
            control over the pen.
          </p>
        </li>
        <li>
          <p>Greater range of pen tips, which offer even more friction.</p>
        </li>
        <li>
          <p>
            Buttons are only on one side (no accidently pressing of the
            buttons/touch strip on the right), while the whole tablet can be
            turned, which makes it usable for leftand right-handed people.
          </p>
        </li>
        <li>
          <p>
            The USB-cable is removable (with a standard mini-USB plug), making
            it easier to put the tablet aside.
          </p>
        </li>
        <li>
          <p>
            The Radial menu offers a lot of possibiltys to improve and quicken
            your workflow.
          </p>
        </li>
        <li>
          <p>Precision Mode can be handy in some situations.</p>
        </li>
        <li>
          <p>
            The advantage of all Wacom tablets: No battery in the pen, making
            them lighter and you don&rsquo;t have to change the battery.
          </p>
        </li>
      </ul>
    </div>
    <div className="sixwide">
      <h3>&#8211; Cons</h3>
      <ul>
        <li>
          <p>
            If you liked the smooth surface of the Intuos3 you will have to get
            used to the rougher surface of the Intuos4.
          </p>
        </li>
        <li>
          <p>The tips wear of much faster, due to the rougher surface.</p>
        </li>
        <li>
          <p>
            Only one TouchingRing, in contrast to the two touch strips of the
            bigger Intuos3 tablets. Switching through the four different
            assignments is often cumbersome.
          </p>
        </li>
        <li>
          <p>
            Still only eight buttons, which can be too few, if you use a lot of
            short-cuts.
          </p>
        </li>
        <li>
          <p>
            Intuos3 Equipment (like the special-pens) isn&rsquo;t compatible
            with Intuos4 and has to be bought again.
          </p>
        </li>
        <li>
          <p>
            The price is still pretty high, especially compared to cheaper
            tablets (like the{' '}
            <a href="http://www.amazon.com/gp/product/B000V9T2JA?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000V9T2JA">
              Wacom Bamboo
            </a>{' '}
            or competitive products like the{' '}
            <a href="http://www.amazon.com/gp/product/B00007FRZ8?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00007FRZ8">
              Aiptek tablets
            </a>
            ) export default Page, even though the quality you get is probably
            worth the price.
          </p>
        </li>
      </ul>
    </div>
    <h2>Roundup</h2>
    <p>
      The Intuos4 has definitely been improved in many areas and especially
      professional users will enjoy the new features, the greater accuracy and
      the more usable buttons. But it should also be noted that the Intuos3 was
      already a great graphics tablet and it&rsquo;s still today. So it&rsquo;s
      up to you to decide if you really need the improvements of the Intuos4 or
      if the Intuos3 (or maybe even a{' '}
      <a href="http://www.amazon.com/gp/product/B000V9T2JA?ie=UTF8&amp;tag=essencompucan-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000V9T2JA">
        Bamboo
      </a>
      ) my suffice for you.
    </p>
  </>
)

export default WacomIntuos4Review
