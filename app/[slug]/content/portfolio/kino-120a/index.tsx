import Image from 'next/image'

import imageTheDayTheEarthStoodStill from '../../../../../website/blog/wp-content/uploads/kino120a/the-day-the-earth-stood-still.png'
import imageAnderwelten from '../../../../../website/blog/wp-content/uploads/kino120a/anderwelten.png'
import imageUnderdogs from '../../../../../website/blog/wp-content/uploads/kino120a/underdogs.png'
import imageImNotThere1 from '../../../../../website/blog/wp-content/uploads/kino120a/im-not-there-1.png'
import imageImNotThere2 from '../../../../../website/blog/wp-content/uploads/kino120a/im-not-there-2.png'
import imageImNotThereMarcusCarlFranklin from '../../../../../website/blog/wp-content/uploads/kino120a/im-not-there-marcus-carl-franklin.png'
import imageImNotThereChristianBale from '../../../../../website/blog/wp-content/uploads/kino120a/im-not-there-christian-bale.png'
import imageImNotThereCateBlanchett from '../../../../../website/blog/wp-content/uploads/kino120a/im-not-there-cate-blanchett.png'
import imageImNotThere3 from '../../../../../website/blog/wp-content/uploads/kino120a/im-not-there-3.png'
import imageImNotThereHeathLedger from '../../../../../website/blog/wp-content/uploads/kino120a/im-not-there-heath-ledger.png'
import imageImNotThereBenWhishaw from '../../../../../website/blog/wp-content/uploads/kino120a/im-not-there-ben-whishaw.png'
import imageImNotThereRichardGere from '../../../../../website/blog/wp-content/uploads/kino120a/im-not-there-richard-gere.png'
import imageBerlincalling from '../../../../../website/blog/wp-content/uploads/kino120a/berlincalling.png'
import imageMetropolis from '../../../../../website/blog/wp-content/uploads/kino120a/metropolis.png'
import imageAllegroNonTroppo1 from '../../../../../website/blog/wp-content/uploads/kino120a/allegro-non-troppo-1.png'
import imageAllegroNonTroppo3 from '../../../../../website/blog/wp-content/uploads/kino120a/allegro-non-troppo-3.png'
import imageAllegroNonTroppo2 from '../../../../../website/blog/wp-content/uploads/kino120a/allegro-non-troppo-2.png'
import imageAllegroNonTroppo4 from '../../../../../website/blog/wp-content/uploads/kino120a/allegro-non-troppo-4.png'

export default function Page() {
  return (
    <>
      <div className="fourwide">
        <div>
          These poster series was done for our student cinema{' '}
          <a href="http://kino120a.de/">kino.120a</a> at Burg Giebichenstein.
        </div>
        <p>
          <Image
            title="The day the earth stood still"
            src={imageTheDayTheEarthStoodStill}
            alt="The day the earth stood still poster"
            width="300"
            height="424"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="Anderwelten — semester program"
            src={imageAnderwelten}
            alt="Anderwelten poster"
            width="300"
            height="900"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="Underdogs — semester program"
            src={imageUnderdogs}
            alt="Underdogs poster"
            width="300"
            height="900"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <hr />
      <div className="fourwide">
        <p>
          <Image
            title="I&rsquo;m not there — Bob Dylan"
            src={imageImNotThere1}
            alt="I&rsquo;m not there — Bob Dylan —poster"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="I&rsquo;m not there"
            src={imageImNotThere2}
            alt="I&rsquo;m not there - poster"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="I&rsquo;m not there — Marcus Carl Franklin"
            src={imageImNotThereMarcusCarlFranklin}
            alt="I&rsquo;m not there — Marcus Carl Franklin"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="I&rsquo;m not there — Christian Bale"
            src={imageImNotThereChristianBale}
            alt="I&rsquo;m not there — Christian Bale"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="I&rsquo;m not there — Cate Blanchett"
            src={imageImNotThereCateBlanchett}
            alt="I&rsquo;m not there — Cate Blanchett"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="I&rsquo;m not there"
            src={imageImNotThere3}
            alt="I&rsquo;m not there"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="I&rsquo;m not there — Heath Ledger"
            src={imageImNotThereHeathLedger}
            alt="I&rsquo;m not there — Heath Ledger"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="I&rsquo;m not there — Bin Whishaw"
            src={imageImNotThereBenWhishaw}
            alt="I&rsquo;m not there — Bin Whishaw"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="I&rsquo;m not there — Richard Gere"
            src={imageImNotThereRichardGere}
            alt="I&rsquo;m not there — Richard Gere"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fullwidth">
        <p>
          <Image
            title="Berlin Calling"
            src={imageBerlincalling}
            alt="Berlin Calling poster"
            width="940"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="Metropolis"
            src={imageMetropolis}
            alt="Metropolis poster"
            width="300"
            height="1200"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="Allegro non Troppo"
            src={imageAllegroNonTroppo1}
            alt="Allegro non Troppo poster"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
        <hr />
        <p>
          <Image
            title="Allegro non Troppo"
            src={imageAllegroNonTroppo3}
            alt="Allegro non Troppo poster"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
      <div className="fourwide">
        <p>
          <Image
            title="Allegro non Troppo"
            src={imageAllegroNonTroppo2}
            alt="Allegro non Troppo poster"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
        <hr />
        <p>
          <Image
            title="Allegro non Troppo"
            src={imageAllegroNonTroppo4}
            alt="Allegro non Troppo poster"
            width="300"
            height="300"
            placeholder="blur"
            quality={100}
          />
        </p>
      </div>
    </>
  )
}
