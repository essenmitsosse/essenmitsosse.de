import imageBlondhead from './blondhead.jpg'
import imageRedhead from './redhead.jpg'

export default function Page() {
  return (
    <>
      <div className="sixwide">
        <img
          src={imageBlondhead.src}
          alt="painting of a blonde girl with patterned clothing"
          title="A blonde girl"
          width="460"
          height="662"
        />
      </div>
      <div className="sixwide">
        <img
          src={imageRedhead.src}
          alt="A redhead nip slip"
          title="A redhead girl"
          width="460"
          height="662"
        />
      </div>
    </>
  )
}
