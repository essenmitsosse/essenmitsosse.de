import Image from 'next/image'

import imageAkt10 from './akt10.jpg'
import imageAkt11 from './akt11.jpg'
import imageAkt12 from './akt12.jpg'
import imageAkt13 from './akt13.jpg'
import imageAkt14 from './akt14.jpg'
import imageAkt2 from './akt2.jpg'
import imageAkt4 from './akt4.jpg'

import type { ReactNode } from 'react'

const DigitalLifeDrawing = (): ReactNode => (
  <>
    <div className="sixwide">
      <p>
        The last times I went to the nude figure drawing class I took my Laptop
        with me to try doing it digitally.
      </p>
      <p>
        This was the first time I was drawing digitally from life at all. At
        first it was hard to handle the colors in the short time frame, because
        the models at our figure drawing class pose only for about 10 &#8211; 15
        minutes.
      </p>
      <p>
        While working analog this is no trouble because typically you just use
        one or two colors if you are working in colors at all. But working
        digital there seems no reason why you shouldn&#8217;t use all colors and
        go photo-realistic.
      </p>
      <p>
        So I realized after some pictures, that I would have to slow down and
        drop the colors for the moment and concentrate on getting the values
        right.
      </p>
      <p>
        After some warm-up I went back to the colors to give them a new try. It
        is difficult at first but after some time I was just stunned by the
        possibilities. As hard as it is, as much it can teach you.
      </p>
      <p>
        Digital life drawing is killing two birds with one stone. It is a great
        training for your digital painting skills because you are pushed to try
        new techniques to achieves your goals (getting a realistic look in a
        short amount of time) and it is also a great way to study colors.
      </p>
      <p>
        I couldn&#8217;t come up with an other medium that allows you so easily
        (after some practicing) to study the full range of color without any
        handicaps from the medium itself in such a fast way.
      </p>
    </div>
    <div className="sixwide">
      <Image
        alt="nude guy from the back"
        height="395"
        placeholder="blur"
        priority
        src={imageAkt12}
        title="digital nude male figure drawing"
        width="460"
      />
    </div>
    <hr />
    <div className="sixwide many">
      <Image
        alt="nacked boy squat"
        className="marginbottom"
        height="576"
        placeholder="blur"
        src={imageAkt10}
        title="nude boy figure drawing sitting"
        width="460"
      />
      <Image
        alt="nude girl standing with crossed arms"
        className="marginbottom"
        height="552"
        placeholder="blur"
        src={imageAkt2}
        title="nude female figure drawing standing"
        width="460"
      />
      <Image
        alt="black&#038;white head of a nude girl"
        className="marginbottom"
        height="357"
        placeholder="blur"
        src={imageAkt4}
        title="nude girl figure drawing head black&#038;white"
        width="460"
      />
    </div>
    <div className="sixwide many">
      <Image
        alt="nude boy sitting"
        className="marginbottom"
        height="576"
        placeholder="blur"
        src={imageAkt11}
        title="nude boy figure drawing sitting"
        width="460"
      />
      <Image
        alt="nude old woman holding a ball"
        className="marginbottom"
        height="460"
        placeholder="blur"
        src={imageAkt13}
        title="old nude woman figure drawing torso"
        width="460"
      />
      <Image
        alt="detail of arm of nude old woman"
        className="marginbottom"
        height="460"
        placeholder="blur"
        src={imageAkt14}
        title="old nude woman figure drawing closeup"
        width="460"
      />
    </div>
  </>
)

export default DigitalLifeDrawing
