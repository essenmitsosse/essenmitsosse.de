import Image from 'next/image'

import imageDragonavenue from './dragonavenue.jpg'
import imageSaltlake from './saltlake.jpg'
import imageGondel from './gondel.jpg'
import imageBaldface from './baldface.jpg'
import imageAirface from './airface.jpg'
import imageTurtleline from './turtleline.jpg'
import imageTurtle from './turtle.jpg'

export default function Page() {
  return (
    <>
      <div className="eightwide">
        <h3>Dragon Avenue</h3>
        <p>
          <Image
            src={imageDragonavenue}
            alt="Tiger-Dragon wrecking havoc in the streets because somebody has stolen his egg"
            title="Dragon Avenue"
            width="620"
            height="463"
            placeholder="blur"
            className="marginbottom"
            priority
          />
        </p>
        <h3>Salt Lake</h3>
        <p>
          <Image
            src={imageSaltlake}
            alt="Tyrannosaurus hunts his prey on a salt lake"
            title="Salt Lake"
            width="620"
            height="429"
            placeholder="blur"
            className="marginbottom"
          />
        </p>
        <h3>Gondola</h3>
        <p>
          <Image
            src={imageGondel}
            alt="sceleton in a gondola floating through colorful clouds"
            title="Gondola"
            width="620"
            height="351"
            placeholder="blur"
            className="marginbottom"
          />
        </p>
      </div>
      <div className="fourwide">
        <h3>Baldface</h3>
        <p>
          <Image
            src={imageBaldface}
            alt="A bald strange looking man"
            title="Baldface"
            width="300"
            height="300"
            placeholder="blur"
            className="marginbottom"
            priority
          />
        </p>
        <h3>Airface</h3>
        <p>
          <Image
            src={imageAirface}
            alt="A guy with a red nose floating through the air"
            title="Airface"
            width="300"
            height="300"
            placeholder="blur"
            className="marginbottom"
          />
        </p>
        <h3>Turtle</h3>
        <div>
          <Image
            src={imageTurtleline}
            alt="A linedrawing of a turtle"
            title="Turtle"
            width="300"
            height="196"
            placeholder="blur"
            className="marginbottom"
          />
          <Image
            src={imageTurtle}
            alt="Colored version of the turtle"
            title="Turtle"
            width="300"
            height="196"
            placeholder="blur"
            className="marginbottom"
          />
        </div>
      </div>
    </>
  )
}
