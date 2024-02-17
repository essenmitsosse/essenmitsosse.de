import Image from 'next/image'

import imageSparta from './sparta.jpg'

export default function Page() {
  return (
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
}
