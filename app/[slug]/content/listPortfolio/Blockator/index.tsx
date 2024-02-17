import Image from 'next/image'

import imageBlockator from './blockator.png'

import type { ReactNode } from 'react'

const Blockator = (): ReactNode => (
  <div style={{ marginTop: '-80px' }}>
    <Image
      alt="Blockator is an isometric 3-d Pixelfont, that is generated with Flash."
      height="1495"
      src={imageBlockator}
      unoptimized
      width="940"
    />
  </div>
)

export default Blockator
