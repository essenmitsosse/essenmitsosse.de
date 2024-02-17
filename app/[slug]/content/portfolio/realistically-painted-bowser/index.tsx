import Image from 'next/image'

import imageBowser from './bowser.jpg'

export default function Page() {
  return (
    <>
      <div>
        <Image
          alt="Realistically Painted Bowser"
          height="627"
          placeholder="blur"
          priority
          src={imageBowser}
          title="Realistically Painted Bowser"
          width="940"
        />
      </div>
      <div className="sixwide">
        <p>
          Some weeks ago Pixeloo did his great untoonings of{' '}
          <a href="http://pixeloo.blogspot.com/2008/03/super-real-mario-world.html">
            Mario
          </a>{' '}
          and{' '}
          <a href="http://pixeloo.blogspot.com/2008/03/homer-simpson-untooned.html">
            Homer
          </a>
          . This inspired me to try something similar.
        </p>
        <p>
          Like Pixeloo I also wanted to use Photoshop. But I didn&#8217;t wanted
          to use any Photos. I just wanted to paint the whole thing.
        </p>
        <p>
          In Addition I not just wanted to lay a realistic texture over the
          original figure, but to rework the forms and proportions as well, to
          get the whole creature a more realistic look. This isn&#8217;t a
          untooning of bowser, it&#8217;s a redesign. How would he look like if
          he would be a real animal.
        </p>
        <p>
          While I changed some of his proportions here and there I still wanted
          to keep his overall character. My redesign is a bowser who is a bit
          more slender with a narrower mouth that resembles a dinosaur. All this
          to give him a more realistic, faster and threatening look. I also took
          the original color scheme of Bowser and tried to convert it into some
          kind of realistic animal coloration.
        </p>
        <p>
          For this picture I only used the Photoshop Brushtool (99% a simple
          round brush) and sometimes the smudge tool. I never used more than two
          layers at once, trying to work much like painting as possible.
        </p>
      </div>
    </>
  )
}
