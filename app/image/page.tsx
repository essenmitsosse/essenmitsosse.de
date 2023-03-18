import Image from 'next/image'
import forrest from '../../public/images/16.12.17.forrest-nr.-3.png'
import livingRoom from '../../public/images/preview-wohnzimmer.jpg'
import styles from './page.module.css'

export default function ImagePage() {
  return (
    <>
      <p>Some Text</p>
      <div>
        <Image
          src={forrest}
          alt="Daily Illustration: Forrest #3"
          placeholder="blur"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.wrapperImage}>
        <Image
          src={livingRoom}
          alt="Living Room"
          placeholder="blur"
          fill
          sizes="20vw"
        />
      </div>
    </>
  )
}
