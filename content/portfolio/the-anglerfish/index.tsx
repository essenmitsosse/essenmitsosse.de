import imageAnglerfish from '../../../website/blog/wp-content/uploads/portfolio/anglerfish.jpg'

export default function Page() {
  return (
    <>
      <div className="eightwide">
        <img
          src={imageAnglerfish.src}
          alt="old man in boat trys to safe a drowning person which turns out to be an anglerfish"
          title="The Anglerfish"
          width="620"
          height="1640"
        />
      </div>
      <div className="fourwide">
        This one was done for the{' '}
        <a href="http://features.cgsociety.org/challenge/strange_behavior/">
          cg-Challenge “Strange Behaviour”
        </a>
        .
      </div>
    </>
  )
}
