import redesignWebsite from '../../../../../website/blog/wp-content/uploads/essenmitsosse/website.png'

export default function Page() {
  return (
    <>
      <div>
        <img src={redesignWebsite.src} width="940" height="391" />
      </div>
      <p>
        After several redesign attempts over the last few years I finally ended
        up with something I&rsquo;m happy with. I fought a long time with myself
        to find something that&rsquo;s neither boring to look at nor
        overpowering the content. In the end I came up with a strong color
        scheme, that catches the attention of the viewer and than steps back
        when the content starts. Also note how the design can adjust to
        different screen sizes, while the content itself has a fixed width.
      </p>
      <p>
        If you want to see the new design in all its glory, just surf around
        this website.
      </p>
    </>
  )
}
