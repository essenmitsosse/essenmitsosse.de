import dynamic from 'next/dynamic'
import { Post } from '../types'

import sortByDate from '../sortByDate'

export type PostBlog = {
  htmlTitle: string
  imageHeader: StaticImageData
} & Post

import headerDigitalPainting from './applications-for-digital-painting/header.png'
import headerDigitalPainter from './digital-painters/header.png'
import headerGraphicsTablet from './graphics-tablet/header.png'
import headerColorManagement from './how-to-set-up-color-management/header.png'
import headerPortrait from './likeness-in-portrait/header.png'
import headerBrushEngine from './photoshop-brush-engine/header.png'
import headerVader from './the-designs-of-star-wars/header.png'
import headerIntuos4 from './wacom-intuos4-review/header.png'
import headerEvolution from './what-designers-can-learn-from-evolution/header.png'
import { StaticImageData } from 'next/image'
import cleanKeywords from '../cleanKeywords'

const listBlog: ReadonlyArray<PostBlog> = [
  {
    htmlTitle: '<em>11 applications for</em> Digital Painting',
    slug: 'applications-for-digital-painting',
    Component: dynamic(() => import('./applications-for-digital-painting')),
    imageHeader: headerDigitalPainting,
    date: '2008-03-30',
    meta: {
      title: '11 applications for Digital Painting',
      description:
        'A compilation of software you can use to paint with your computer.',
      keywords: cleanKeywords(
        'adobe, artrage, artweaver, collection, corel, deep paint, digital painting, dogwaffle, free, gimp, graphics editor, guide, list, opencanvas, paint shop pro, paint.net, painter, photoshop, sketchbook pro, Software'
      ),
    },
  },
  {
    htmlTitle: '35 Digital Painters <em>you shouldn’t miss</em>',
    slug: 'digital-painters',
    Component: dynamic(() => import('./digital-painters')),
    imageHeader: headerDigitalPainter,
    date: '2008-05-15',
    meta: {
      title: '35 Digital Painters you shouldn’t miss',
      description:
        'A compilation of artists how paint with their computer. From illustrators to concept-artists.',
      keywords: cleanKeywords(
        'artist, collection, community, craig mullins, digital painting, gfxartist, link, list, Portfolio, websites'
      ),
    },
  },
  {
    htmlTitle: '<em>An introduction to the </em>Graphics Tablet',
    slug: 'graphics-tablet',
    Component: dynamic(() => import('./graphics-tablet')),
    imageHeader: headerGraphicsTablet,
    date: '2008-03-28',
    meta: {
      title: 'An introduction to the Graphics Tablet',
      description:
        'A small how to for graphics tablet beginners. Why should you use one?',
      keywords: cleanKeywords(
        'brush, digital painting, graphics tablet, guide, Hardware, stylus'
      ),
    },
  },
  {
    htmlTitle: '<em>How to set up</em> Color Management',
    slug: 'how-to-set-up-color-management',
    Component: dynamic(() => import('./how-to-set-up-color-management')),
    imageHeader: headerColorManagement,
    date: '2008-04-10',
    meta: {
      title: 'How to set up Color Management',
      description:
        'A tutorial on how to correctly set up color-management. This might also solve the color shift problem when saving for the web in Photoshop.',
      keywords: cleanKeywords(
        'adobe, Adobe RGB, calibration, CMS, color-management, colors, creative suite, display, guide, photoshop, save for web, sRGB'
      ),
    },
  },
  {
    htmlTitle: '<em>How to achieve</em> Likeness In A Portrait',
    slug: 'likeness-in-portrait',
    Component: dynamic(() => import('./likeness-in-portrait')),
    imageHeader: headerPortrait,
    date: '2008-04-08',
    meta: {
      title: 'How to achieve Likeness In A Portrait',
      description:
        'What is it that let&rsquo;s a drawing look like the original face? Some thoughts on similarity.',
      keywords: cleanKeywords(
        'Analysis, caricature, drawing, guide, likeness, portrait, Theory, Tutorial'
      ),
    },
  },
  {
    htmlTitle: '<em>An Introduction to the</em> Photoshop Brush Engine',
    slug: 'photoshop-brush-engine',
    Component: dynamic(() => import('./photoshop-brush-engine')),
    imageHeader: headerBrushEngine,
    date: '2008-05-03',
    meta: {
      title: 'An Introduction to the Photoshop Brush Engine',
      description:
        'An introduction and how-to on the possibilitys photoshop offers you to create custom brushes.',
      keywords: cleanKeywords(
        'adobe, brush, brush engine, graphics tablet, guide, photoshop, Software, stylus'
      ),
    },
  },
  {
    htmlTitle:
      'The Designs Of Star Wars <em>10 reasons why they are awesome</em>',
    slug: 'the-designs-of-star-wars',
    Component: dynamic(() => import('./the-designs-of-star-wars')),
    imageHeader: headerVader,
    date: '2008-09-24',
    meta: {
      title: 'The Designs Of Star Wars 10 reasons why they are awesome',
      description:
        'What is it, that make the concept art of Star Wars so damn good.',
      keywords: cleanKeywords(
        'Analysis, collection, concept art, guide, inspiration, list, redesign, Showcase, starwars, Theory'
      ),
    },
  },
  {
    htmlTitle: 'Wacom Intuos4 <em>Review</em>',
    slug: 'wacom-intuos4-review',
    Component: dynamic(() => import('./wacom-intuos4-review')),
    imageHeader: headerIntuos4,
    date: '2009-08-24',
    meta: {
      title: 'Wacom Intuos4 Review',
      description:
        'An review of the Wacom Intous4 graphics pad with a look at its new functions.',
      keywords: cleanKeywords(
        'brush, digital painting, graphics tablet, Hardware, Review, stylus'
      ),
    },
  },
  {
    htmlTitle: '<em>What designers can learn from</em> Evolution',
    slug: 'what-designers-can-learn-from-evolution',
    Component: dynamic(
      () => import('./what-designers-can-learn-from-evolution')
    ),
    imageHeader: headerEvolution,
    date: '2009-09-10',
    meta: {
      title: 'What designers can learn from Evolution',
      description:
        'Evolution has more in common with design than one might think. This look at nature will teach you a lot about design.',
      keywords: cleanKeywords(
        'advertising, Analysis, convergence, design, economics, evolution, flexibility, inspiration, quality, Theory, usabily'
      ),
    },
  },
]

export default [...listBlog].sort(sortByDate)
