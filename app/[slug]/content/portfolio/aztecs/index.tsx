import imageAztecs from './aztecs.jpg'

export default function Page() {
  return (
    <>
      <div className="fullwidth">
        <img
          src={imageAztecs.src}
          alt="An Actecs slaughtering a Spanish Conquistador"
          title="An Actecs slaughtering a Spanish Conquiztador"
          width="780"
          height="351"
        />
      </div>
    </>
  )
}
