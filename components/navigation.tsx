import Link from 'next/link'

import { PostSome } from '@/app/[slug]/content/types'
import Logo from './logo'
import styles from './navigation.module.scss'

const Navigation = (props: {
  isHome?: boolean
  postPrev?: PostSome
  postNext?: PostSome
}) => (
  <>
    <ul className={styles.navigation}>
      {!props.isHome && (
        <li className={styles.home}>
          <Link href="/" rel="index">
            Home
          </Link>
        </li>
      )}
      {(props.postPrev || props.postNext) && (
        <li className={styles.articleNavigation}>
          <ul>
            {props.postPrev && (
              <li className={styles.prev}>
                <Link href={props.postPrev.slug} rel="prev">
                  <span className={styles.arrow}>&#9658;</span>{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        'htmlTitle' in props.postPrev
                          ? props.postPrev.htmlTitle
                          : props.postPrev.meta.title,
                    }}
                  />
                </Link>
              </li>
            )}
            {props.postNext && (
              <li className={styles.next}>
                <Link href={props.postNext.slug} rel="next">
                  <span className={styles.arrow}>&#9668;</span>{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        'htmlTitle' in props.postNext
                          ? props.postNext.htmlTitle
                          : props.postNext.meta.title,
                    }}
                  />
                </Link>
              </li>
            )}
          </ul>
        </li>
      )}
    </ul>

    <Logo />
  </>
)

export default Navigation
