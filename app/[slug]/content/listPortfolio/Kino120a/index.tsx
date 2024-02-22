import Image from 'next/image'

import imageAllegroNonTroppo1 from './allegro-non-troppo-1.png'
import imageAllegroNonTroppo2 from './allegro-non-troppo-2.png'
import imageAllegroNonTroppo3 from './allegro-non-troppo-3.png'
import imageAllegroNonTroppo4 from './allegro-non-troppo-4.png'
import imageAnderwelten from './anderwelten.png'
import imageBerlincalling from './berlincalling.png'
import imageImNotThere1 from './im-not-there-1.png'
import imageImNotThere2 from './im-not-there-2.png'
import imageImNotThere3 from './im-not-there-3.png'
import imageImNotThereBenWhishaw from './im-not-there-ben-whishaw.png'
import imageImNotThereCateBlanchett from './im-not-there-cate-blanchett.png'
import imageImNotThereChristianBale from './im-not-there-christian-bale.png'
import imageImNotThereHeathLedger from './im-not-there-heath-ledger.png'
import imageImNotThereMarcusCarlFranklin from './im-not-there-marcus-carl-franklin.png'
import imageImNotThereRichardGere from './im-not-there-richard-gere.png'
import imageMetropolis from './metropolis.png'
import imageTheDayTheEarthStoodStill from './the-day-the-earth-stood-still.png'
import imageUnderdogs from './underdogs.png'

import type { ReactNode } from 'react'

const Kino120a = (): ReactNode => (
  <>
    <div className="fourwide">
      <div>
        These poster series was done for our student cinema{' '}
        <a href="http://kino120a.de/">kino.120a</a> at Burg Giebichenstein.
      </div>
      <p>
        <Image
          alt="The day the earth stood still poster"
          height="424"
          placeholder="blur"
          quality={100}
          src={imageTheDayTheEarthStoodStill}
          title="The day the earth stood still"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="Anderwelten poster"
          height="900"
          placeholder="blur"
          quality={100}
          src={imageAnderwelten}
          title="Anderwelten — semester program"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="Underdogs poster"
          height="900"
          placeholder="blur"
          quality={100}
          src={imageUnderdogs}
          title="Underdogs — semester program"
          width="300"
        />
      </p>
    </div>
    <hr />
    <div className="fourwide">
      <p>
        <Image
          alt="I&rsquo;m not there — Bob Dylan —poster"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageImNotThere1}
          title="I&rsquo;m not there — Bob Dylan"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="I&rsquo;m not there - poster"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageImNotThere2}
          title="I&rsquo;m not there"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="I&rsquo;m not there — Marcus Carl Franklin"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageImNotThereMarcusCarlFranklin}
          title="I&rsquo;m not there — Marcus Carl Franklin"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="I&rsquo;m not there — Christian Bale"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageImNotThereChristianBale}
          title="I&rsquo;m not there — Christian Bale"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="I&rsquo;m not there — Cate Blanchett"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageImNotThereCateBlanchett}
          title="I&rsquo;m not there — Cate Blanchett"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="I&rsquo;m not there"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageImNotThere3}
          title="I&rsquo;m not there"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="I&rsquo;m not there — Heath Ledger"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageImNotThereHeathLedger}
          title="I&rsquo;m not there — Heath Ledger"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="I&rsquo;m not there — Bin Whishaw"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageImNotThereBenWhishaw}
          title="I&rsquo;m not there — Bin Whishaw"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="I&rsquo;m not there — Richard Gere"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageImNotThereRichardGere}
          title="I&rsquo;m not there — Richard Gere"
          width="300"
        />
      </p>
    </div>
    <div className="fullwidth">
      <p>
        <Image
          alt="Berlin Calling poster"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageBerlincalling}
          title="Berlin Calling"
          width="940"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="Metropolis poster"
          height="1200"
          placeholder="blur"
          quality={100}
          src={imageMetropolis}
          title="Metropolis"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="Allegro non Troppo poster"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageAllegroNonTroppo1}
          title="Allegro non Troppo"
          width="300"
        />
      </p>
      <hr />
      <p>
        <Image
          alt="Allegro non Troppo poster"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageAllegroNonTroppo3}
          title="Allegro non Troppo"
          width="300"
        />
      </p>
    </div>
    <div className="fourwide">
      <p>
        <Image
          alt="Allegro non Troppo poster"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageAllegroNonTroppo2}
          title="Allegro non Troppo"
          width="300"
        />
      </p>
      <hr />
      <p>
        <Image
          alt="Allegro non Troppo poster"
          height="300"
          placeholder="blur"
          quality={100}
          src={imageAllegroNonTroppo4}
          title="Allegro non Troppo"
          width="300"
        />
      </p>
    </div>
  </>
)

export default Kino120a
