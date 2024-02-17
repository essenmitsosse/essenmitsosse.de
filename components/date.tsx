import classNames from 'classnames'

import styles from './date.module.scss'

import type { HTMLAttributes } from 'react'

export type Date =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`

const Date = (
  props: HTMLAttributes<HTMLDivElement> & { readonly date: Date },
) => (
  <span className={classNames(styles.date, props.className)}>{props.date}</span>
)

export default Date
