import Link from 'next/link'

import Logo from './Logo'
import styles from './navigation.module.scss'

import type { PostSome } from '@/app/[slug]/content/types'
import type { ReactNode } from 'react'

const Navigation = (props: {
  readonly isHome?: boolean
  readonly postPrev?: PostSome
  readonly postNext?: PostSome
}): ReactNode => (
  <>
    <ul className={styles.navigation}>
      {!props.isHome && (
        <li className={styles.home}>
          <Link href="/" rel="index">
            Home
          </Link>
        </li>
      )}
      {props.postPrev || props.postNext ? (
        <li className={styles.articleNavigation}>
          <ul>
            {props.postPrev ? (
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
            ) : null}
            {props.postNext ? (
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
            ) : null}
          </ul>
        </li>
      ) : null}
    </ul>

    <Logo />
  </>
)

export default Navigation
