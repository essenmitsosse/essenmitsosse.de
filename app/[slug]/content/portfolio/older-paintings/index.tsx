import Image from 'next/image'

import imageAirface from './airface.jpg'
import imageBaldface from './baldface.jpg'
import imageDragonavenue from './dragonavenue.jpg'
import imageGondel from './gondel.jpg'
import imageSaltlake from './saltlake.jpg'
import imageTurtle from './turtle.jpg'
import imageTurtleline from './turtleline.jpg'

export default function Page() {
  return (
    <>
      <div className="eightwide">
        <h3>Dragon Avenue</h3>
        <Image
          alt="Tiger-Dragon wrecking havoc in the streets because somebody has stolen his egg"
          className="marginbottom"
          height="463"
          placeholder="blur"
          priority
          src={imageDragonavenue}
          title="Dragon Avenue"
          width="620"
        />
        <h3>Salt Lake</h3>
        <Image
          alt="Tyrannosaurus hunts his prey on a salt lake"
          className="marginbottom"
          height="429"
          placeholder="blur"
          src={imageSaltlake}
          title="Salt Lake"
          width="620"
        />
        <h3>Gondola</h3>
        <Image
          alt="sceleton in a gondola floating through colorful clouds"
          className="marginbottom"
          height="351"
          placeholder="blur"
          src={imageGondel}
          title="Gondola"
          width="620"
        />
      </div>
      <div className="fourwide">
        <h3>Baldface</h3>
        <Image
          alt="A bald strange looking man"
          className="marginbottom"
          height="300"
          placeholder="blur"
          priority
          src={imageBaldface}
          title="Baldface"
          width="300"
        />
        <h3>Airface</h3>
        <Image
          alt="A guy with a red nose floating through the air"
          className="marginbottom"
          height="300"
          placeholder="blur"
          src={imageAirface}
          title="Airface"
          width="300"
        />
        <h3>Turtle</h3>
        <div>
          <Image
            alt="A linedrawing of a turtle"
            className="marginbottom"
            height="196"
            placeholder="blur"
            src={imageTurtleline}
            title="Turtle"
            width="300"
          />
          <Image
            alt="Colored version of the turtle"
            className="marginbottom"
            height="196"
            placeholder="blur"
            src={imageTurtle}
            title="Turtle"
            width="300"
          />
        </div>
      </div>
    </>
  )
}
