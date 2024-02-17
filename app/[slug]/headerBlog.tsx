import classnames from 'classnames'
import Image from 'next/image'

import styles from './headerBlog.module.scss'

import type { PostBlog } from './content/blog'

const HeaderBlog = (props: { readonly post: PostBlog }) => (
  <div className={classnames(styles.intro, 'color')}>
    <h1 dangerouslySetInnerHTML={{ __html: props.post.htmlTitle }} />
    <Image
      alt=""
      className={styles.headerImage}
      src={props.post.imageHeader}
      unoptimized
    />
  </div>
)

export default HeaderBlog
