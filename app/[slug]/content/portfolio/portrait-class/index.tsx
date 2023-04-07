import imagePortrait12 from '../../../../../website/blog/wp-content/uploads/portraitclass/portrait12.jpg'
import imagePortrait8 from '../../../../../website/blog/wp-content/uploads/portraitclass/portrait8.jpg'
import imagePortrait9 from '../../../../../website/blog/wp-content/uploads/portraitclass/portrait9.jpg'
import imagePortrait11 from '../../../../../website/blog/wp-content/uploads/portraitclass/portrait11.jpg'
import imagePortrait3 from '../../../../../website/blog/wp-content/uploads/portraitclass/portrait3.jpg'
import imagePortrait13 from '../../../../../website/blog/wp-content/uploads/portraitclass/portrait13.jpg'

export default function Page() {
  return (
    <>
      <div className="sixwide">
        <img
          src={imagePortrait12.src}
          alt="Caricature of a guy in a chair"
          title="Photoshop painting from portrait class – male caricature"
          width="460"
          height="575"
          className="marginbottom"
        />
        <img
          src={imagePortrait8.src}
          alt="sausage-like girl with a crown caricature"
          title="Photoshop painting from portrait class – female caricature"
          width="460"
          height="588"
          className="marginbottom"
        />
        <img
          src={imagePortrait9.src}
          alt="square girl caricature"
          title="Photoshop painting from portrait class – female caricature"
          width="460"
          height="460"
          className="marginbottom"
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
          <img
            src={imagePortrait11.src}
            alt="caricature of a fat man reading a book"
            title="Photoshop painting from portrait class – male caricature"
            width="460"
            height="575"
            className="marginbottom"
          />
          <img
            src={imagePortrait3.src}
            alt="painting of a girl"
            title="Photoshop painting from portrait class – female"
            width="460"
            height="497"
            className="marginbottom"
          />
          <img
            src={imagePortrait13.src}
            alt="two abstract cartoon square girls"
            title="Photoshop painting from portrait class – female caricature"
            width="460"
            height="271"
            className="marginbottom"
          />
        </div>
      </div>
    </>
  )
}
