import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './date.module.scss'

export type Date =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`

const Date = (props: { date: Date } & HTMLAttributes<HTMLDivElement>) => (
  <span className={classNames(styles.date, props.className)}>{props.date}</span>
)

export default Date
