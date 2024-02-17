import Image from 'next/image'

import imageBlondhead from './blondhead.jpg'
import imageRedhead from './redhead.jpg'

import type { ReactNode } from 'react'

const BlondheadRedhead = (): ReactNode => (
  <>
    <div className="sixwide">
      <Image
        alt="painting of a blonde girl with patterned clothing"
        height="662"
        placeholder="blur"
        priority
        src={imageBlondhead}
        title="A blonde girl"
        width="460"
      />
    </div>
    <div className="sixwide">
      <Image
        alt="A redhead nip slip"
        height="662"
        placeholder="blur"
        priority
        src={imageRedhead}
        title="A redhead girl"
        width="460"
      />
    </div>
  </>
)

export default BlondheadRedhead
