import Image from 'next/image'
import imageBlockator from './blockator.png'

export default function Page() {
  return (
    <>
      <div style={{ marginTop: '-80px' }}>
        <Image
          src={imageBlockator}
          alt="Blockator is an isometric 3-d Pixelfont, that is generated with Flash."
          width="940"
          height="1495"
          unoptimized
        />
      </div>
    </>
  )
}
