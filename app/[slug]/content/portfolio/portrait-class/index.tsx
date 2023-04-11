import Image from 'next/image'

import imagePortrait12 from './portrait12.jpg'
import imagePortrait8 from './portrait8.jpg'
import imagePortrait9 from './portrait9.jpg'
import imagePortrait11 from './portrait11.jpg'
import imagePortrait3 from './portrait3.jpg'
import imagePortrait13 from './portrait13.jpg'

export default function Page() {
  return (
    <>
      <div className="sixwide">
        <Image
          src={imagePortrait12}
          alt="Caricature of a guy in a chair"
          title="Photoshop painting from portrait class – male caricature"
          width="460"
          height="575"
          className="marginbottom"
          placeholder="blur"
          priority
        />
        <Image
          src={imagePortrait8}
          alt="sausage-like girl with a crown caricature"
          title="Photoshop painting from portrait class – female caricature"
          width="460"
          height="588"
          className="marginbottom"
          placeholder="blur"
        />
        <Image
          src={imagePortrait9}
          alt="square girl caricature"
          title="Photoshop painting from portrait class – female caricature"
          width="460"
          height="460"
          className="marginbottom"
          placeholder="blur"
        />
      </div>
      <div className="sixwide">
        <p>
          These paintings where done during the portrait class in my
          scholastics. They are all live drawings, no photo references. And they
          are all done completely in Photoshop. After doing some standard
          realistic portraits, I tried to stylize the head more, by giving them
          simple geometrical shapes which creates the look of a caricature.
        </p>
        <div>
          <Image
            src={imagePortrait11}
            alt="caricature of a fat man reading a book"
            title="Photoshop painting from portrait class – male caricature"
            width="460"
            height="575"
            className="marginbottom"
            placeholder="blur"
            priority
          />
          <Image
            src={imagePortrait3}
            alt="painting of a girl"
            title="Photoshop painting from portrait class – female"
            width="460"
            height="497"
            className="marginbottom"
            placeholder="blur"
          />
          <Image
            src={imagePortrait13}
            alt="two abstract cartoon square girls"
            title="Photoshop painting from portrait class – female caricature"
            width="460"
            height="271"
            className="marginbottom"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  )
}
