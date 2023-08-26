import Link from 'next/link'

import styles from './logo.module.scss'

const Logo = () => (
  <p className={styles.logo}>
    <Link href="/" title="Homepage" className={styles.link}>
      <span className={styles.club}>&clubs;</span>essenmitsosse{' '}
      <em className={styles.presents}>presents</em>
    </Link>
  </p>
)

export default Logo
