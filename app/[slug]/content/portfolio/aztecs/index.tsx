import Image from 'next/image'

import imageAztecs from './aztecs.jpg'

export default function Page() {
  return (
    <>
      <div className="fullwidth">
        <Image
          src={imageAztecs}
          alt="An Actecs slaughtering a Spanish Conquistador"
          title="An Actecs slaughtering a Spanish Conquiztador"
          width="780"
          height="351"
          placeholder="blur"
          priority
        />
      </div>
    </>
  )
}
