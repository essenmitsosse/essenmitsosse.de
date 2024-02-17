import Image from 'next/image'

import imagePortrait11 from './portrait11.jpg'
import imagePortrait12 from './portrait12.jpg'
import imagePortrait13 from './portrait13.jpg'
import imagePortrait3 from './portrait3.jpg'
import imagePortrait8 from './portrait8.jpg'
import imagePortrait9 from './portrait9.jpg'

import type { ReactNode } from 'react'

const Page = (): ReactNode => (
  <>
    <div className="sixwide">
      <Image
        alt="Caricature of a guy in a chair"
        className="marginbottom"
        height="575"
        placeholder="blur"
        priority
        src={imagePortrait12}
        title="Photoshop painting from portrait class – male caricature"
        width="460"
      />
      <Image
        alt="sausage-like girl with a crown caricature"
        className="marginbottom"
        height="588"
        placeholder="blur"
        src={imagePortrait8}
        title="Photoshop painting from portrait class – female caricature"
        width="460"
      />
      <Image
        alt="square girl caricature"
        className="marginbottom"
        height="460"
        placeholder="blur"
        src={imagePortrait9}
        title="Photoshop painting from portrait class – female caricature"
        width="460"
      />
    </div>
    <div className="sixwide">
      <p>
        These paintings where done during the portrait class in my scholastics.
        They are all live drawings, no photo references. And they are all done
        completely in Photoshop. After doing some standard realistic portraits,
        I tried to stylize the head more, by giving them simple geometrical
        shapes which creates the look of a caricature.
      </p>
      <div>
        <Image
          alt="caricature of a fat man reading a book"
          className="marginbottom"
          height="575"
          placeholder="blur"
          priority
          src={imagePortrait11}
          title="Photoshop painting from portrait class – male caricature"
          width="460"
        />
        <Image
          alt="painting of a girl"
          className="marginbottom"
          height="497"
          placeholder="blur"
          src={imagePortrait3}
          title="Photoshop painting from portrait class – female"
          width="460"
        />
        <Image
          alt="two abstract cartoon square girls"
          className="marginbottom"
          height="271"
          placeholder="blur"
          src={imagePortrait13}
          title="Photoshop painting from portrait class – female caricature"
          width="460"
        />
      </div>
    </div>
  </>
)

export default Page
