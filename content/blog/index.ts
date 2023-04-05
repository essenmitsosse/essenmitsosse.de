import dynamic from 'next/dynamic'
import { Post } from '../types'

const listBlog: ReadonlyArray<Post> = [
  {
    slug: 'applications-for-digital-painting',
    Component: dynamic(() => import('./applications-for-digital-painting')),
    date: '2008-03-30',
    meta: {
      title: '11 applications for Digital Painting ♣ essenmitsosse',
      description:
        'A compilation of software you can use to paint with your computer.',
      keywords:
        'adobe, artrage, artweaver, collection, corel, deep paint, digital painting, dogwaffle, free, gimp, graphics editor, guide, list, opencanvas, paint shop pro, paint.net, painter, photoshop, sketchbook pro, Software',
    },
  },
  {
    slug: 'digital-painters',
    Component: dynamic(() => import('./digital-painters')),
    date: '2008-05-15',
    meta: {
      title: '35 Digital Painters you shouldn&rsquo;t miss ♣ essenmitsosse',
      description:
        'A compilation of artists how paint with their computer. From illustrators to concept-artists.',
      keywords:
        'artist, collection, community, craig mullins, digital painting, gfxartist, link, list, Portfolio, websites',
    },
  },
  {
    slug: 'graphics-tablet',
    Component: dynamic(() => import('./graphics-tablet')),
    date: '2008-03-28',
    meta: {
      title: 'An introduction to the Graphics Tablet ♣ essenmitsosse',
      description:
        'A small how to for graphics tablet beginners. Why should you use one?',
      keywords:
        'brush, digital painting, graphics tablet, guide, Hardware, stylus',
    },
  },
  {
    slug: 'how-to-set-up-color-management',
    Component: dynamic(() => import('./how-to-set-up-color-management')),
    date: '2008-04-10',
    meta: {
      title: 'How to set up Color Management ♣ essenmitsosse',
      description:
        'A tutorial on how to correctly set up color-management. This might also solve the color shift problem when saving for the web in Photoshop.',
      keywords:
        'adobe, Adobe RGB, calibration, CMS, color-management, colors, creative suite, display, guide, photoshop, save for web, sRGB',
    },
  },
  {
    slug: 'likeness-in-portrait',
    Component: dynamic(() => import('./likeness-in-portrait')),
    date: '2008-04-08',
    meta: {
      title: 'How to achieve Likeness In A Portrait ♣ essenmitsosse',
      description:
        'What is it that let&rsquo;s a drawing look like the original face? Some thoughts on similarity.',
      keywords:
        'Analysis, caricature, drawing, guide, likeness, portrait, Theory, Tutorial',
    },
  },
  {
    slug: 'photoshop-brush-engine',
    Component: dynamic(() => import('./photoshop-brush-engine')),
    date: '2008-05-03',
    meta: {
      title: 'An Introduction to the Photoshop Brush Engine ♣ essenmitsosse',
      description:
        'An introduction and how-to on the possibilitys photoshop offers you to create custom brushes.',
      keywords:
        'adobe, brush, brush engine, graphics tablet, guide, photoshop, Software, stylus',
    },
  },
  {
    slug: 'the-designs-of-star-wars',
    Component: dynamic(() => import('./the-designs-of-star-wars')),
    date: '2008-09-24',
    meta: {
      title:
        'The Designs Of Star Wars 10 reasons why they are awesome ♣ essenmitsosse',
      description:
        'What is it, that make the concept art of Star Wars so damn good.',
      keywords:
        'Analysis, collection, concept art, guide, inspiration, list, redesign, Showcase, starwars, Theory',
    },
  },
  {
    slug: 'wacom-intuos4-review',
    Component: dynamic(() => import('./wacom-intuos4-review')),
    date: '2009-08-24',
    meta: {
      title: 'Wacom Intuos4 Review ♣ essenmitsosse',
      description:
        'An review of the Wacom Intous4 graphics pad with a look at its new functions.',
      keywords:
        'brush, digital painting, graphics tablet, Hardware, Review, stylus',
    },
  },
  {
    slug: 'what-designers-can-learn-from-evolution',
    Component: dynamic(
      () => import('./what-designers-can-learn-from-evolution')
    ),
    date: '2009-09-10',
    meta: {
      title: 'What designers can learn from Evolution ♣ essenmitsosse',
      description:
        'Evolution has more in common with design than one might think. This look at nature will teach you a lot about design.',
      keywords:
        'advertising, Analysis, convergence, design, economics, evolution, flexibility, inspiration, quality, Theory, usabily',
    },
  },
]

export default listBlog
