import Image from 'next/image'

import imageWhoisthis from './whoisthis.jpg'
import imageWhoisthis2 from './whoisthis2.jpg'
import imageWhoisthis3 from './whoisthis3.jpg'

import type { ReactNode } from 'react'

const LikenessInPortrait = (): ReactNode => (
  <>
    <p>
      In todays portrait-class I asked myself, what it is, that makes a drawing
      look like the person that you have drawn. What do you have to consider
      when you want to achieve resemblance, which factors are important? I did
      some experiments and found out some pretty interesting things.
    </p>
    <h2>
      <em>It&#8217;s not about </em>the proportion
    </h2>
    <div className="sixwide">
      <p>
        Just look at the picture to the right. Can you recognize this person? I
        drew exactly over a photo of him, so the proportion should be quite
        correct.
      </p>
      <p>
        Nevertheless it&#8217;s not that easy to realize who this person is
        supposed to be. In fact, this portrait sucks pretty much even if the
        proportions are correct.
      </p>
      <p>
        Besides caricatures wouldn&#8217;t work, if the proportions where that
        important for recognizing a face.
      </p>
      <p>
        For example look at the great paintings of{' '}
        <a href="http://sebastian-kruger-news.blogspot.com/">
          Sebastian Krüger
        </a>
        . In most of his caricatures the proportions are completely displaced
        but you still won&#8217;t have any problem to identify the persons
        caricatured.
      </p>
      <p>
        It seems like the relation between the size and distance of parts of the
        face are not that important for the recognition value of a face.
      </p>
    </div>
    <div className="sixwide center">
      <Image
        alt="Who is this?"
        height="476"
        placeholder="blur"
        priority
        src={imageWhoisthis}
        title="Who is this?"
        width="300"
      />
    </div>
    <h2>
      Creating Likeness <em>in a Portrait</em>
    </h2>
    <div className="sixwide">
      <p>
        Now take a look at this picture. This time it should be quite easy to
        identify the person.
      </p>
      <h3>Is is because we can see more of the detail?</h3>
      <p>
        No. Even if you squint your eyes, making your view blurred you will
        still be able to recognize the person.
      </p>
      <h3>So it must have something to do with the light!</h3>
      <p>
        Yes and no. It&#8217;s not the light itself. If you could recognize a
        person because of the light, it would depend on the lightning, if you
        are able to identify someone or not. But you can identify a face you
        know under nearly every lightning condition.
      </p>
      <p>
        But the light shows you something else. Something we didn&#8217;t saw in
        the first line-drawing. It shows you the 3-dimensional volume of the
        face.
      </p>
      <p>
        Everyone is able to identify someone from nearly every angle. Our brains
        seem to recognizes faces independently from the perspective in which we
        are seeing it. Our brains don&#8217;t remembers certain outlines, they
        remember the 3-dimensional form and the volume.
      </p>
      <p>
        Edges, corners, dints, furrows, coves, convex- and concavities. The ups
        and downs of a (sur-)face, how it arches and dips. All this
        characterizes a form. In case of a face this is what creates its
        likeness.
      </p>
      <p>
        This is why it is so hard to recognize the person from the shitty
        line-drawing above, which just shows outlines, but gives only a few
        clues about the 3-dimensional form itself.
      </p>
      <p>
        But drawing lines along the shadow borders just don&#8217;t mean you are
        doing a good portrait.
      </p>
      <p>
        This picture shows the outline of the black &#038; white picutre above.
      </p>
      <p>
        Though the lines are running exactly along the shadow borders of the
        above picture, the likeness is completely destroyed. This kind of
        drawing just don&#8217;t make sense to our brain.
      </p>
    </div>
    <div className="sixwide center">
      <Image
        alt="Who is this?"
        height="476"
        placeholder="blur"
        src={imageWhoisthis2}
        title="Who is this?"
        width="300"
      />
      <br />
      <Image
        alt="Who is this?"
        height="476"
        placeholder="blur"
        src={imageWhoisthis3}
        title="Who is this?"
        width="300"
      />
    </div>
    <h2>
      <em>How to</em> line-draw a portrait
    </h2>
    <p>
      The line-drawing above shows you why computers can&#8217;t do art. A good
      drawing is neither made by just following the major outlines of a face,
      nor by following a shadow border.
    </p>
    <p>
      Neither do you have to draw every single change of direction in the face
      nor can you just draw lines around the eyes, mouth and nose. You have to
      find the big and the important shapes and forms and you have to find lines
      to describe them 2-dimensional.
    </p>
    <p>
      But don&#8217;t think 2-dimensional.{' '}
      <strong>
        {' '}
        Try to imagine how the lines are running into the room, try to push them
        into the space.
      </strong>
    </p>
    <p>
      Eyes or mouth are often drawn just as flat forms, but they got a volume
      that is important for their recognition, so you have to draw it. If the
      eyes of your drawing don&#8217;t look like the ones from your model, you
      probably just didn&#8217;t capture their subtle form and shape or gave no
      attention to their volume.
    </p>
    <p>
      That&#8217;s also why it&#8217;s so difficult to draw from a photo. You
      tend to draw just 2-dimensional shapes, ignoring the 3-dimensional form of
      the object. But you have to paint the volume.
    </p>
    <p>
      The more you are able to draw the volume instead of just flat shapes, the
      more you will notice, that your drawings will come to life, get more
      personality and will be easier recognized.
    </p>
    <p>
      Trying to rescue a drawing by shading it fails most of the time. This is
      because if your lines don&#8217;t capture the form correctly, a shading
      won&#8217;t undo this mistake. So try to draw a face and only if the
      drawing works start shading it.
    </p>
    <hr />
    <h2>
      <em>How to draw</em> a person from a photo
    </h2>
    <p>
      Don&#8217;t try to draw from just one photos. Try to get as much photo as
      possible of the person you are going to draw. The more references you
      have, the better you can try to understand the 3-dimensional form of the
      face.
    </p>
    <p>
      Try to imagine the head in 3 dimensions while drawing. Don&#8217;t just
      copy a photo.
    </p>
    <hr />
    <h2>
      <em>A last hint for</em> caricatures
    </h2>
    <p>
      Try to exaggerate the 3-dimensional forms instead of 2-dimensional shapes.
      This will make your caricatures look much more realistic and increase the
      likeness of them.
    </p>
  </>
)

export default LikenessInPortrait
