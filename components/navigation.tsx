import Link from 'next/link'

import { PostSome } from '@/app/[slug]/content/types'
import Logo from './logo'

const Navigation = (props: {
  isHome?: boolean
  postPrev?: PostSome
  postNext?: PostSome
}) => (
  <>
    <ul id="navigation" className="black">
      {!props.isHome && (
        <li className="home">
          <Link href="/" rel="index">
            Home
          </Link>
        </li>
      )}
      {(props.postPrev || props.postNext) && (
        <li className="articlenavigation">
          <ul>
            {props.postPrev && (
              <li className="newer">
                <Link href={props.postPrev.slug} rel="prev">
                  <span className="arrow">&#9668;</span>{' '}
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
              <li className="older">
                <Link href={props.postNext.slug} rel="next">
                  <span className="arrow">&#9658;</span>{' '}
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
