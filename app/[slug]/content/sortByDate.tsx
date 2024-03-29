import type { Post } from '@/app/[slug]/content/types'

const sortByDate = (postA: Post, postB: Post): number =>
  postA.date > postB.date ? -1 : 1

export default sortByDate
