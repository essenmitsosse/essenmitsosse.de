import { Metadata } from 'next'
import headerEvolution from '../../../../website/article/evolution/evolution.png'

export const metadata: Metadata = {
  title: 'What designers can learn from Evolution ♣ essenmitsosse',
  description:
    'Evolution has more in common with design than one might think. This look at nature will teach you a lot about design.',
  keywords:
    'advertising, Analysis, convergence, design, economics, evolution, flexibility, inspiration, quality, Theory, usabily',
}

export default function Page() {
  return (
    <body className="single article">
      <ul id="navigation" className="black">
        <li className="home">
          <a href="/" rel="index">
            Home
          </a>
        </li>
        <li className="articlenavigation">
          <ul>
            <li className="older">
              <a href="wacom-intuos4-review" rel="prev">
                <span className="arrow">&#9658;</span>
                <span className="title">
                  Wacom Intuos4 <em>Review</em>
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div
        className="intro color"
        style={{ backgroundImage: `url(${headerEvolution.src})` }}
      >
        <p className="logo">
          <a href="/" id="essenmitsosse" rel="index">
            <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
          </a>
        </p>
        <h1>
          <em>What designers can learn from</em> Evolution
        </h1>
      </div>

      <div className="content white">
        <div className="date">
          <p>2009-09-10</p>
        </div>
        <p>
          Designing means to plan and create something on purpose to solve a
          specific problem. Evolution has no purpose, it doesn’t plan, but in
          the end it breeds all different kind of organisms, which are able to
          solve certain problems. Even though design has a cause and evolution
          doesn’t, in the end they are both the reason for the solution of a
          problem, thus they achieve the same thing. Therefore a closer look at
          evolution can teach you a lot about what design is, how it works, what
          it can achieve and what not..
        </p>
        <h2>Basic principle</h2>
        <p>
          <img
            width="940"
            height="170"
            src="article/evolution/basic.png"
            alt="A diagram showing a basic principle of evolution"
          />
        </p>
        <div className="sixwide">
          <h4>Evolution</h4>
          <p>
            Evolution is based upon two basic principles: Heredity and
            Variation. Hereditable traits are characteristics of an organism
            that are passed from one generation to the next. They are controlled
            by the genes on the DNA. Variations in these traits can occur
            through mutation of a gene and by recombining them (by sexual
            reproduction). Because some traits are controlled by multiple genes,
            recombination can lead to new and advantageous combinations.
          </p>
        </div>
        <div className="sixwide">
          <h4>Design</h4>
          <p>
            Ideas are the genes of design. Every design is based upon ideas or
            concepts that have been there before. Inspiration is the search for
            these ideas to combine, it’s the heredity of design. Finding a new
            combinations of ideas is called invention. Finding the ideas itself
            is called discovery. Even the invention of the wheel wasn’t neither
            the invention of round things, nor of rolling things. It was just
            the discovery of the concept that something round can roll and
            inventing a way to utilize this to fulfill a purpose.
          </p>
        </div>
        <h2>Quality control</h2>
        <p>
          <img
            width="940"
            height="170"
            src="article/evolution/quality.png"
            alt="A diagram showing a basic principle of evolution"
          />
        </p>
        <div className="sixwide">
          <h4>Evolution</h4>
          <p>
            Evolution won’t breed something that sucks. If something is really
            bad and doesn’t work it takes evolution about one generation to get
            rid of it. Even if an animal would think, that it would be really
            cool to have no mouth at all, it wouldn’t stand a chance, since it
            would be completely unviable. Thereby it wouldn’t be able to produce
            offsprings that can pass on the crackpot ability of having no mouth.
            This is called natural selection. It doesn’t matter what a good idea
            something might sound like, the only thing that matters is, if it’s
            an advantage or not. If it‘s a disadvantage nature will get rid of
            it. Nature never tries to fool itself.
            <br />
            This trail and error may seems a bit inefficient, but it’s as
            bulletproof as it can get, when it comes to check if a system works
            as a whole.
          </p>
        </div>
        <div className="sixwide">
          <h4>Design</h4>
          <p>
            What natural selection is to evolution, supply and demand is to
            design. If nobody wants it, it won’t last. Most ideas are dropped
            right after they came up, because they are obviously bullshit. In
            nature this would be called stillbirth. On the other way around, if
            something turns out to be pretty good it can win recognition, will
            be reproduced and influence other designers, thereby become a trend.
          </p>
          <p>
            The advantage of design is, that ideas are seldom lost forever. You
            don’t need a direct line of heritage for a design, since every idea
            in the world can be combined with each other, as long as somebody
            remembers it. Also designers seem to have an advantage over
            evolution, since they can consciously work toward a certain problem.
            On the other hand this bears the risk of forgetting to concern about
            something. You can only look at a few properties at a time, while
            it’s hard to check a product as a whole. Nevertheless it should
            somehow be done.
          </p>
        </div>
        <h2>Benefit of disadvantages</h2>
        <p>
          <img
            width="940"
            height="170"
            src="article/evolution/disadvantage.png"
            alt="A diagram showing a basic principle of evolution"
          />
        </p>
        <div className="sixwide">
          <h4>Evolution</h4>
          <p>
            Some animals show traits, that seem to be disadvantageous in the
            first place. The huge tail of the peacock makes him easily
            recognizable to predators and handicaps him in his ability to fly.
            The reason for developing this apparent disadvantage is sexual
            selection. The peahen just loves her peacocks with a hugh, flashy
            tail. Her selection benefits a trait of their species, that actual
            should be obviously supposed to die out. This shows that evolution
            doesn’t support the individual with the best chances to survive, but
            the ones with the best chances to reproduce. Just being able to
            totally not get killed isn’t enough if you got no offsprings to pass
            on this ability.
          </p>
        </div>
        <div className="sixwide">
          <h4>Design</h4>
          <p>
            In design something really similar occurs. Several objects just
            simply suck. Nevertheless everybody seems to want them. The reason
            why these pieces of crap sell anyway is advertising and looking like
            a good deal. This can make people want a product no matter what a
            huge pile of shit it is. Designers like to complain about this
            situation, however it can’t be changed. The ability of a product to
            appeal and to sell is as much part of its quality as everything
            else. Just being awesome isn’t enough if nobody wants you.
          </p>
        </div>
        <h2>Usability</h2>
        <p>
          <img
            width="940"
            height="170"
            src="article/evolution/usability.png"
            alt="A diagram showing a basic principle of evolution"
          />
        </p>
        <div className="sixwide">
          <h4>Evolution</h4>
          <p>
            Eyes are a fine invention. You can see the world around you with
            them. Now let’s assume nature wouldn’t pay attention and put those
            eyes on the back of an animals head. It always would have to turn
            around to see something and won’t see where it’s walking. Sounds
            pretty implausible, doesn’t it? No matter how awesome something is:
            if you can’t use it, it’s vain. Nature never ignores this. A chain
            is only as strong as its weakest link and evolution will make sure,
            nothing is wasted just because some part of the product is a little
            less elaborated.
          </p>
        </div>
        <div className="sixwide">
          <h4>Design</h4>
          <p>
            Usability shouldn’t be misunderstood as something like a nice
            feature. “Oh we could add some usability here, maybe people will
            enjoy this.” It’s the key concept of design. No matter how good
            something is, if you can’t use it, there’s no use in it. If it’s
            only barely usable, than it’s also only barely good. One good idea
            alone will get you nowhere. It’s the whole package that counts. This
            idea is really not that hard to understand, however some designers
            think they can ignore it, as if nobody would notice when it’s a pain
            in the ass to use something.
          </p>
        </div>
        <h2>Economics</h2>
        <p>
          <img
            width="940"
            height="170"
            src="article/evolution/economics.png"
            alt="A diagram showing a basic principle of evolution"
          />
        </p>
        <div className="sixwide">
          <h4>Evolution</h4>
          <p>
            Ever wondered why there’s no super-strong animal that can crush an
            elephant with its jaws? You should note, that the ability to crush
            an elephant with your jaws requires quite an amount of energy.
            Carrying around such an enormous jaw also requires energy. So you
            just don’t have to crush the elephant, foremost you have to find
            him. Again evolution takes great care, that its spawns work as
            economically as possible, since being ineffective is no good trait.
            Enormous jaws are of little use when you’re dying of starvation
            because you’re out of elephants.
          </p>
        </div>
        <div className="sixwide">
          <h4>Design</h4>
          <p>
            It’s no secret, how important it’s to have a look at the costs of
            something. If it’s too expensive, nobody will be able to afford it,
            if it’s too cheap the quality will suffer. What’s most likely to be
            forgotten is, that there are other resources, that aren’t unlimited
            and should also be considered. Time, attention or nerves are just a
            few of them. Keep it simple stupid.
          </p>
        </div>
        <h2>Convergence</h2>
        <p>
          <img
            width="940"
            height="170"
            src="article/evolution/convergence.png"
            alt="A diagram showing a basic principle of evolution"
          />
        </p>
        <div className="sixwide">
          <h4>Evolution</h4>
          <p>
            Creatures that live in water are quit uncreative. Nearly everybody
            there looks the same. Fish, dolphins, whales, as well as ichthyosaur
            came up with basically the same streamlined body and paddle-like
            flippers or fins. They aren’t copycats, it just turns out that this
            is a pretty good way to move through water. Nature doesn’t try to be
            creative just for the sake of it. Under similar circumstances
            organisms will most likely develop analogous solutions for a
            problem. This is called convergent evolution.
          </p>
          <p>
            On the other hand, species in the same eco system can develop
            varying traits. By this divergent evolution they can specialize to
            fill in different ecological niches.
          </p>
        </div>
        <div className="sixwide">
          <h4>Design</h4>
          <p>
            Sometimes different people come up with the same idea. This is often
            blamed as stealing, even if it was by accident and happened
            completely independently from each other. While it can be
            comprehended that it’s not nice to steal a whole product to compete
            with the initial inventor, there’s little sense in not doing
            something that has proven of value, just because it’s been done
            before. On the other hand the best solutions are often specially
            crafted for a certain problem or are solving problems no one else
            has thought about before.
          </p>
        </div>
        <h2>Flexibility</h2>
        <p>
          <img
            width="940"
            height="170"
            src="article/evolution/flexibility.png"
            alt="A diagram showing a basic principle of evolution"
          />
        </p>
        <div className="sixwide">
          <h4>Evolution</h4>
          <p>
            Nothing can last forever. No matter how good creatures have adapted
            to their environment, sooner or later things will change and
            everything will be put on trail. Either the solutions are flexible
            enough to work under these altered circumstances, or evolution must
            work quickest possible to adapt to the new conditions. No matter how
            good something works in a given environment, when rapid change is
            happening, it will be endangered to struck out if it can’t handle
            it.
          </p>
        </div>
        <div className="sixwide">
          <h4>Design</h4>
          <p>
            Designers have a great advantage over evolution: sometimes they
            might be able to predict a change before it’s happening, enabling
            their product to handle a new situation before it’s occurred.
            However this is not always possible. To create something that’s
            persistent, you must find solutions that are flexible. The more you
            specialized something is, the greater the chances are that it will
            fails even after the slightest shift. It’s the job of the designer
            to balance specialization and flexibility against each other.
          </p>
        </div>
        <h2>Perfection</h2>
        <p>
          <img
            width="940"
            height="170"
            src="article/evolution/perfection.png"
            alt="A diagram showing a basic principle of evolution"
          />
        </p>
        <div className="sixwide">
          <h4>Evolution</h4>
          <p>
            There’s no such thing as perfection. Evolution has no goal and
            doesn’t try to evolve towards something. Evolution doesn’t even try
            to reach a higher complexity, it sometimes even decreases
            complexity. Even if men like to think so, there’s nothing like the
            perfect organism. There are only better or worser solutions to
            certain problems, but no ultimate answer to everything or even a
            best answer to something. There’s no universal good or bad, it only
            depends on the situation or the criteria you use to make a
            comparison.
          </p>
        </div>
        <div className="sixwide">
          <h4>Design</h4>
          <p>
            Throughout history a lot of people thought they have found the
            perfect solution for a certain problem. But many tend to forget,
            that this doesn’t mean, that this solution is of any quality for any
            other situation. No matter how good a solution might be, there will
            come a time when it’s rendered completely useless. There will never
            be an ultimate solution, that solves every problem forever.
          </p>
        </div>
        <h2>
          <em>What is it, that you can</em> learn from evolution?
        </h2>
        <p>
          No matter how good one aspect of an idea might be, when you become
          dazzled by its awesomeness and thereby oversee something else it can
          be totally wasted. You always must perceive something as a whole. The
          quality of something can’t be judged by a single part. Also keep in
          mind that quality doesn’t depend on how good you think it is, but on
          how good it turns out to be. Unlike nature you can’t always check
          everything again and again, so it’s important to stay honest to
          yourself and always keep critical. Fooling yourself will get you
          nowhere. Knowing your bounds is important if you want to push them.
        </p>
        <hr />
        <div className="sixwide">
          <h3>
            <em>A little bit</em> about me
          </h3>
          <p>
            My name ist Marcus Blättermann. <br />
            I’m majoring in communication design and work as a freelancer for
            illustration, print- & webdesign.
          </p>
        </div>

        <div className="sixwide">
          <h3>
            <em>What you should </em>do next
          </h3>
          <p>
            Don’t forget to follow me on{' '}
            <a href="http://twitter.com/essenmitsosse">Twitter</a>. You should
            also check out my <a href="/">Portfolio</a>.
          </p>
        </div>
      </div>
    </body>
  )
}
