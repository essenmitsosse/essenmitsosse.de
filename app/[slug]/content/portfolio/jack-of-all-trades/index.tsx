import type { ReactNode } from 'react'

const Page = (): ReactNode => (
  <>
    <p>
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="425"
        src="https://www.youtube-nocookie.com/embed/2QWPz5oKcuI"
        width="940"
      />
    </p>
    <div className="sixwide">
      <p>
        With Nele, a fellow student of mine, I did an experiment: We wanted to
        see how creativity works, how you can force yourself to get things done,
        how to make decisions, avoid distraction and boost concentration. The
        initial idea was to make a short documentation about what we found out
        for ourselves. But we decided that we didn&rsquo;t want to sit there and
        tell people how we think things work. Instead we decided to share our
        insights in form of a small parable. No absolute statements. Everybody
        should decide for themselves, what can be drawn from the film.
      </p>
    </div>
  </>
)

export default Page
