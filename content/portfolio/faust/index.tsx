import coverFaust from '../../../website/blog/wp-content/uploads/faust/cover.png'

export default function Page() {
  return (
    <>
      <div className="eightwide">
        <img
          src={coverFaust.src}
          alt="cover of my comic Faust"
          title="Faust"
          width="620"
          height="919"
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
}
