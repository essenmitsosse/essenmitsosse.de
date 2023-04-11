import Image from 'next/image'
import imageBlondhead from './blondhead.jpg'
import imageRedhead from './redhead.jpg'

export default function Page() {
  return (
    <>
      <div className="sixwide">
        <Image
          src={imageBlondhead}
          alt="painting of a blonde girl with patterned clothing"
          title="A blonde girl"
          width="460"
          height="662"
          placeholder="blur"
          priority
        />
      </div>
      <div className="sixwide">
        <Image
          src={imageRedhead}
          alt="A redhead nip slip"
          title="A redhead girl"
          width="460"
          height="662"
          placeholder="blur"
          priority
        />
      </div>
    </>
  )
}
