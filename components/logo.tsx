import Link from 'next/link'

import styles from './logo.module.scss'

const Logo = () => (
  <p className={styles.logo}>
    <Link className={styles.link} href="/" title="Homepage">
      <span className={styles.club}>&clubs;</span>essenmitsosse{' '}
      <em className={styles.presents}>presents</em>
    </Link>
  </p>
)

export default Logo
