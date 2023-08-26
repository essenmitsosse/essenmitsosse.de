import Image from 'next/image'

import imageAnglerfish from './anglerfish.jpg'

export default function Page() {
  return (
    <>
      <div className="eightwide">
        <Image
          src={imageAnglerfish}
          alt="old man in boat trys to safe a drowning person which turns out to be an anglerfish"
          title="The Anglerfish"
          width="620"
          height="1640"
          placeholder="blur"
          priority
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
}
