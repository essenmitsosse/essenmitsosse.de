import type { ReactNode } from 'react'

const TheHumanBrain = (): ReactNode => (
  <>
    <p>
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="635"
        src="https://www.youtube-nocookie.com/embed/ozOJeg8TXWI"
        width="940"
      />
    </p>
    <div className="fourwide">
      <p>
        Animated movie created during an exchange semester at Staffordshire
        University. The part about how the brain not works is inspired by{' '}
        <em>Der Mensch als Industriepalast</em> by{' '}
        <a href="http://www.fritz-kahn.com/">Fritz Kahn</a>. Music by
        thefloorisnowlava.
      </p>
      <p>
        The idea was to dispel misunderstandings about how the human brain
        works. It is not meant to actually explain the function of the brain,
        which would be quite difficult, since there are still a lot of questions
        to be answered in this area of science. It is about giving an idea, that
        the brain is not made up of smaller brains, but of simple parts, which
        alone are not that intelligent. The whole is greater than the sum of its
        parts.
      </p>
      <p>
        I am aware of the fact, that not just the human brain works like this,
        but humans were a requirement for this terms project.
      </p>
    </div>
  </>
)

export default TheHumanBrain
