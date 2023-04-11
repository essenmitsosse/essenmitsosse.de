import imageSparta from './sparta.jpg'

export default function Page() {
  return (
    <>
      <div className="fullwidth">
        <img
          src={imageSparta.src}
          alt="A Spartan who is going to cut the head of an Persian"
          title="A Spartan killing a Persian with his sword"
          width="940"
          height="507"
        />
      </div>
    </>
  )
}
