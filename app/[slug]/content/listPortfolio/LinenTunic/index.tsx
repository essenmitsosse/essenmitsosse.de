import Image from 'next/image'

import imageLinentunic from './linentunic.jpg'

import type { ReactNode } from 'react'

const LinenTunic = (): ReactNode => (
  <>
    <div className="eightwide">
      <Image
        alt="Man in linen tunic with a sword is cursed by a wraith in the snow"
        height="957"
        placeholder="blur"
        priority
        src={imageLinentunic}
        title="Linen Tunic"
        width="620"
      />
    </div>
    <div className="fourwide">
      <p>
        Done for the{' '}
        <a href="http://gurneyjourney.blogspot.com/2008/04/art-by-committee-looming-up.html">
          “Art by Committee”
        </a>{' '}
        at Gourney Journey. The author of this blog, James Gourney posts an
        excerpt snipped from an actual science fiction manuscript and you have
        to illustrate it.
      </p>
      <blockquote>
        <p>
          … sandals where they were mired. His sword he kept, although the
          scabbard went the way of the rest of his armor. Left naked excat for
          his linen tunic, he was thankful that it was late June and the waters
          had lost the bit in their chill.
          <br />
          Turning his head, he saw someone was looming up out …
        </p>
      </blockquote>
      <p>
        <cite>
          <a href="http://en.wikipedia.org/wiki/James_Warhola">James Warhola</a>
        </cite>
      </p>
    </div>
  </>
)

export default LinenTunic
