import Image from 'next/image'

import imageAkt12 from './akt12.jpg'
import imageAkt10 from './akt10.jpg'
import imageAkt2 from './akt2.jpg'
import imageAkt4 from './akt4.jpg'
import imageAkt11 from './akt11.jpg'
import imageAkt13 from './akt13.jpg'
import imageAkt14 from './akt14.jpg'

export default function Page() {
  return (
    <>
      <div className="sixwide">
        <p>
          The last times I went to the nude figure drawing class I took my
          Laptop with me to try doing it digitally.
        </p>
        <p>
          This was the first time I was drawing digitally from life at all. At
          first it was hard to handle the colors in the short time frame,
          because the models at our figure drawing class pose only for about 10
          &#8211; 15 minutes.
        </p>
        <p>
          While working analog this is no trouble because typically you just use
          one or two colors if you are working in colors at all. But working
          digital there seems no reason why you shouldn&#8217;t use all colors
          and go photo-realistic.
        </p>
        <p>
          So I realized after some pictures, that I would have to slow down and
          drop the colors for the moment and concentrate on getting the values
          right.
        </p>
        <p>
          After some warm-up I went back to the colors to give them a new try.
          It is difficult at first but after some time I was just stunned by the
          possibilities. As hard as it is, as much it can teach you.
        </p>
        <p>
          Digital life drawing is killing two birds with one stone. It is a
          great training for your digital painting skills because you are pushed
          to try new techniques to achieves your goals (getting a realistic look
          in a short amount of time) and it is also a great way to study colors.
        </p>
        <p>
          I couldn&#8217;t come up with an other medium that allows you so
          easily (after some practicing) to study the full range of color
          without any handicaps from the medium itself in such a fast way.
        </p>
      </div>
      <div className="sixwide">
        <Image
          src={imageAkt12}
          placeholder="blur"
          alt="nude guy from the back"
          title="digital nude male figure drawing"
          width="460"
          height="395"
          priority
        />
      </div>
      <hr />
      <div className="sixwide many">
        <Image
          src={imageAkt10}
          placeholder="blur"
          alt="nacked boy squat"
          title="nude boy figure drawing sitting"
          width="460"
          height="576"
          className="marginbottom"
        />
        <Image
          src={imageAkt2}
          placeholder="blur"
          alt="nude girl standing with crossed arms"
          title="nude female figure drawing standing"
          width="460"
          height="552"
          className="marginbottom"
        />
        <Image
          src={imageAkt4}
          placeholder="blur"
          alt="black&#038;white head of a nude girl"
          title="nude girl figure drawing head black&#038;white"
          width="460"
          height="357"
          className="marginbottom"
        />
      </div>
      <div className="sixwide many">
        <Image
          src={imageAkt11}
          placeholder="blur"
          alt="nude boy sitting"
          title="nude boy figure drawing sitting"
          width="460"
          height="576"
          className="marginbottom"
        />
        <Image
          src={imageAkt13}
          placeholder="blur"
          alt="nude old woman holding a ball"
          title="old nude woman figure drawing torso"
          width="460"
          height="460"
          className="marginbottom"
        />
        <Image
          src={imageAkt14}
          placeholder="blur"
          alt="detail of arm of nude old woman"
          title="old nude woman figure drawing closeup"
          width="460"
          height="460"
          className="marginbottom"
        />
      </div>
    </>
  )
}
