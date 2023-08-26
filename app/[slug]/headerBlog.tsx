import classnames from 'classnames'
import Image from 'next/image'

import styles from './headerBlog.module.scss'
import { PostBlog } from './content/blog'

const HeaderBlog = (props: { post: PostBlog }) => (
  <div className={classnames(styles.intro, 'color')}>
    <h1 dangerouslySetInnerHTML={{ __html: props.post.htmlTitle }} />
    <Image
      src={props.post.imageHeader}
      alt=""
      className={styles.headerImage}
      unoptimized
    />
  </div>
)

export default HeaderBlog
