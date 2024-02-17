import dynamic from 'next/dynamic'

import cleanKeywords from '../cleanKeywords'
import sortByDate from '../sortByDate'

import headerDigitalPainting from './applications-for-digital-painting/header.png'
import headerDigitalPainter from './digital-painters/header.png'
import headerGraphicsTablet from './graphics-tablet/header.png'
import headerColorManagement from './how-to-set-up-color-management/header.png'
import headerPortrait from './likeness-in-portrait/header.png'
import headerBrushEngine from './photoshop-brush-engine/header.png'
import headerVader from './the-designs-of-star-wars/header.png'
import headerIntuos4 from './wacom-intuos4-review/header.png'
import headerEvolution from './what-designers-can-learn-from-evolution/header.png'

import type { Post } from '../types'
import type { StaticImageData } from 'next/image'

export type PostBlog = Post & {
  readonly htmlTitle: string
  readonly imageHeader: StaticImageData
}

const listBlogUnsorted: ReadonlyArray<PostBlog> = [
  {
    Component: dynamic(() => import('./applications-for-digital-painting')),
    date: '2008-03-30',
    htmlTitle: '<em>11 applications for</em> Digital Painting',
    imageHeader: headerDigitalPainting,
    meta: {
      description:
        'A compilation of software you can use to paint with your computer.',
      keywords: cleanKeywords(
        'adobe, artrage, artweaver, collection, corel, deep paint, digital painting, dogwaffle, free, gimp, graphics editor, guide, list, opencanvas, paint shop pro, paint.net, painter, photoshop, sketchbook pro, Software',
      ),
      title: '11 applications for Digital Painting',
    },
    slug: 'applications-for-digital-painting',
  },
  {
    Component: dynamic(() => import('./digital-painters')),
    date: '2008-05-15',
    htmlTitle: '35 Digital Painters <em>you shouldn’t miss</em>',
    imageHeader: headerDigitalPainter,
    meta: {
      description:
        'A compilation of artists how paint with their computer. From illustrators to concept-artists.',
      keywords: cleanKeywords(
        'artist, collection, community, craig mullins, digital painting, gfxartist, link, list, Portfolio, websites',
      ),
      title: '35 Digital Painters you shouldn’t miss',
    },
    slug: 'digital-painters',
  },
  {
    Component: dynamic(() => import('./graphics-tablet')),
    date: '2008-03-28',
    htmlTitle: '<em>An introduction to the </em>Graphics Tablet',
    imageHeader: headerGraphicsTablet,
    meta: {
      description:
        'A small how to for graphics tablet beginners. Why should you use one?',
      keywords: cleanKeywords(
        'brush, digital painting, graphics tablet, guide, Hardware, stylus',
      ),
      title: 'An introduction to the Graphics Tablet',
    },
    slug: 'graphics-tablet',
  },
  {
    Component: dynamic(() => import('./how-to-set-up-color-management')),
    date: '2008-04-10',
    htmlTitle: '<em>How to set up</em> Color Management',
    imageHeader: headerColorManagement,
    meta: {
      description:
        'A tutorial on how to correctly set up color-management. This might also solve the color shift problem when saving for the web in Photoshop.',
      keywords: cleanKeywords(
        'adobe, Adobe RGB, calibration, CMS, color-management, colors, creative suite, display, guide, photoshop, save for web, sRGB',
      ),
      title: 'How to set up Color Management',
    },
    slug: 'how-to-set-up-color-management',
  },
  {
    Component: dynamic(() => import('./likeness-in-portrait')),
    date: '2008-04-08',
    htmlTitle: '<em>How to achieve</em> Likeness In A Portrait',
    imageHeader: headerPortrait,
    meta: {
      description:
        'What is it that let&rsquo;s a drawing look like the original face? Some thoughts on similarity.',
      keywords: cleanKeywords(
        'Analysis, caricature, drawing, guide, likeness, portrait, Theory, Tutorial',
      ),
      title: 'How to achieve Likeness In A Portrait',
    },
    slug: 'likeness-in-portrait',
  },
  {
    Component: dynamic(() => import('./photoshop-brush-engine')),
    date: '2008-05-03',
    htmlTitle: '<em>An Introduction to the</em> Photoshop Brush Engine',
    imageHeader: headerBrushEngine,
    meta: {
      description:
        'An introduction and how-to on the possibilitys photoshop offers you to create custom brushes.',
      keywords: cleanKeywords(
        'adobe, brush, brush engine, graphics tablet, guide, photoshop, Software, stylus',
      ),
      title: 'An Introduction to the Photoshop Brush Engine',
    },
    slug: 'photoshop-brush-engine',
  },
  {
    Component: dynamic(() => import('./the-designs-of-star-wars')),
    date: '2008-09-24',
    htmlTitle:
      'The Designs Of Star Wars <em>10 reasons why they are awesome</em>',
    imageHeader: headerVader,
    meta: {
      description:
        'What is it, that make the concept art of Star Wars so damn good.',
      keywords: cleanKeywords(
        'Analysis, collection, concept art, guide, inspiration, list, redesign, Showcase, starwars, Theory',
      ),
      title: 'The Designs Of Star Wars 10 reasons why they are awesome',
    },
    slug: 'the-designs-of-star-wars',
  },
  {
    Component: dynamic(() => import('./wacom-intuos4-review')),
    date: '2009-08-24',
    htmlTitle: 'Wacom Intuos4 <em>Review</em>',
    imageHeader: headerIntuos4,
    meta: {
      description:
        'An review of the Wacom Intous4 graphics pad with a look at its new functions.',
      keywords: cleanKeywords(
        'brush, digital painting, graphics tablet, Hardware, Review, stylus',
      ),
      title: 'Wacom Intuos4 Review',
    },
    slug: 'wacom-intuos4-review',
  },
  {
    Component: dynamic(
      () => import('./what-designers-can-learn-from-evolution'),
    ),
    date: '2009-09-10',
    htmlTitle: '<em>What designers can learn from</em> Evolution',
    imageHeader: headerEvolution,
    meta: {
      description:
        'Evolution has more in common with design than one might think. This look at nature will teach you a lot about design.',
      keywords: cleanKeywords(
        'advertising, Analysis, convergence, design, economics, evolution, flexibility, inspiration, quality, Theory, usabily',
      ),
      title: 'What designers can learn from Evolution',
    },
    slug: 'what-designers-can-learn-from-evolution',
  },
]

const listBlog = listBlogUnsorted.sort(sortByDate)

export default listBlog
