import Image from 'next/image'

import imageAnglerfish from './anglerfish.jpg'

import type { ReactNode } from 'react'

const Page = (): ReactNode => (
  <>
    <div className="eightwide">
      <Image
        alt="old man in boat trys to safe a drowning person which turns out to be an anglerfish"
        height="1640"
        placeholder="blur"
        priority
        src={imageAnglerfish}
        title="The Anglerfish"
        width="620"
      />
    </div>
    <div className="fourwide">
      This one was done for the{' '}
      <a href="http://features.cgsociety.org/challenge/strange_behavior/">
        cg-Challenge “Strange Behaviour”
      </a>
      .
    </div>
  </>
)

export default Page
