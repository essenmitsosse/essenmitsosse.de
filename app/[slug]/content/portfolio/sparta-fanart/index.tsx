import Image from 'next/image'

import imageSparta from './sparta.jpg'

import type { ReactNode } from 'react'

const Page = (): ReactNode => (
  <div className="fullwidth">
    <Image
      alt="A Spartan who is going to cut the head of an Persian"
      height="507"
      placeholder="blur"
      priority
      src={imageSparta}
      title="A Spartan killing a Persian with his sword"
      width="940"
    />
  </div>
)

export default Page
