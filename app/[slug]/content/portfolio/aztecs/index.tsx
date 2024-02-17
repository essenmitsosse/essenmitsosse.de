import Image from 'next/image'

import imageAztecs from './aztecs.jpg'

export default function Page() {
  return (
    <div className="fullwidth">
      <Image
        alt="An Actecs slaughtering a Spanish Conquistador"
        height="351"
        placeholder="blur"
        priority
        src={imageAztecs}
        title="An Actecs slaughtering a Spanish Conquiztador"
        width="780"
      />
    </div>
  )
}
