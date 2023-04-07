import imageDragonavenue from '../../../../../website/blog/wp-content/uploads/portfolio/dragonavenue.jpg'
import imageSaltlake from '../../../../../website/blog/wp-content/uploads/portfolio/saltlake.jpg'
import imageGondel from '../../../../../website/blog/wp-content/uploads/portfolio/gondel.jpg'
import imageBaldface from '../../../../../website/blog/wp-content/uploads/portfolio/baldface.jpg'
import imageAirface from '../../../../../website/blog/wp-content/uploads/portfolio/airface.jpg'
import imageTurtleline from '../../../../../website/blog/wp-content/uploads/portfolio/turtleline.jpg'
import imageTurtle from '../../../../../website/blog/wp-content/uploads/portfolio/turtle.jpg'

export default function Page() {
  return (
    <>
      <div className="eightwide">
        <h3>Dragon Avenue</h3>
        <p>
          <img
            src={imageDragonavenue.src}
            alt="Tiger-Dragon wrecking havoc in the streets because somebody has stolen his egg"
            title="Dragon Avenue"
            width="620"
            height="463"
            className="marginbottom"
          />
        </p>
        <h3>Salt Lake</h3>
        <p>
          <img
            src={imageSaltlake.src}
            alt="Tyrannosaurus hunts his prey on a salt lake"
            title="Salt Lake"
            width="620"
            height="429"
            className="marginbottom"
          />
        </p>
        <h3>Gondola</h3>
        <p>
          <img
            src={imageGondel.src}
            alt="sceleton in a gondola floating through colorful clouds"
            title="Gondola"
            width="620"
            height="351"
            className="marginbottom"
          />
        </p>
      </div>
      <div className="fourwide">
        <h3>Baldface</h3>
        <p>
          <img
            src={imageBaldface.src}
            alt="A bald strange looking man"
            title="Baldface"
            width="300"
            height="300"
            className="marginbottom"
          />
        </p>
        <h3>Airface</h3>
        <p>
          <img
            src={imageAirface.src}
            alt="A guy with a red nose floating through the air"
            title="Airface"
            width="300"
            height="300"
            className="marginbottom"
          />
        </p>
        <h3>Turtle</h3>
        <div>
          <img
            src={imageTurtleline.src}
            alt="A linedrawing of a turtle"
            title="Turtle"
            width="300"
            height="196"
            className="marginbottom"
          />
          <img
            src={imageTurtle.src}
            alt="Colored version of the turtle"
            title="Turtle"
            width="300"
            height="196"
            className="marginbottom"
          />
        </div>
      </div>
    </>
  )
}
