import classNames from 'classnames'

import styles from './date.module.scss'

import type { HTMLAttributes, ReactNode } from 'react'

export type FormatDate =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`

const Date = (
  props: HTMLAttributes<HTMLDivElement> & { readonly date: FormatDate },
): ReactNode => (
  <span className={classNames(styles.date, props.className)}>{props.date}</span>
)

export default Date
