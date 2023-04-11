import imageBlockator from './blockator.png'

export default function Page() {
  return (
    <>
      <div style={{ marginTop: '-80px' }}>
        <img
          src={imageBlockator.src}
          alt="Blockator is an isometric 3-d Pixelfont, that is generated with Flash."
          width="940"
          height="1495"
        />
      </div>
    </>
  )
}
