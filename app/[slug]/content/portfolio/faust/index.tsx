import Image from 'next/image'

import coverFaust from './cover.png'

import type { ReactNode } from 'react'

const Page = (): ReactNode => (
  <>
    <div className="eightwide">
      <Image
        alt="cover of my comic Faust"
        height="919"
        placeholder="blur"
        priority
        src={coverFaust}
        title="Faust"
        width="620"
      />
    </div>
    <div className="fourwide">
      <p>
        My new comic project will premiere at the{' '}
        <a href="http://www.comic-salon.de/">Comic Salon Erlangen</a>, at the
        booth of my university{' '}
        <a href="http://www.comic-salon.de/index.asp?FsID=50&amp;PPID=4&amp;EventID=217&amp;spr=1">
          Burg Giebichenstein (JF7)
        </a>
        .
      </p>
      <p>More infos soon …</p>
    </div>
  </>
)

export default Page
