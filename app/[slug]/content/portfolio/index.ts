import dynamic from 'next/dynamic'
import { StaticImageData } from 'next/image'
import { Post } from '../types'
import sortByDate from '../sortByDate'

import previewAkt from './digital-life-drawing/preview.jpg'
import previewAnglerfish from './the-anglerfish/preview.jpg'
import previewAztheken from './aztecs/preview.jpg'
import previewBlondhead from './blondheadredhead/preview.jpg'
import previewBowser from './realistically-painted-bowser/preview.jpg'
import previewGondel from './older-paintings/preview.jpg'
import previewLinentunic from './linen-tunic/preview.jpg'
import previewPortrait from './portrait-class/preview.jpg'
import previewSonic from './sonic-the-real-hedgehog/preview.jpg'
import previewSparta from './sparta-fanart/preview.jpg'
import previewBloackator from './blockator/preview.png'
import previewJackofalltrades from './jack-of-all-trades/preview.png'
import previewHumanbrain from './the-human-brain/preview.png'
import previewKino120a from './kino-120a/preview.png'
import previewCreaturecombat from './creature-combat/preview.png'
import previewFaust from './faust/preview.png'
import previewEssenmitsosse from './essenmitsosse-redesign/preview.png'
import cleanKeywords from '../cleanKeywords'

export type PostPortfolio = { preview: StaticImageData } & Post

const listPortfolio: ReadonlyArray<PostPortfolio> = [
  {
    slug: 'aztecs',
    Component: dynamic(() => import('./aztecs')),
    preview: previewAztheken,
    date: '2008-03-30',
    meta: {
      title: 'Aztecs',
      description:
        'An image showing an Aztec warrior killing a Spanish Conquiztador',
      keywords: cleanKeywords(
        'actecs, digital painting, images, painting, photoshop',
      ),
    },
  },
  {
    slug: 'blockator',
    Component: dynamic(() => import('./blockator')),
    preview: previewBloackator,
    date: '2009-08-18',
    meta: {
      title: 'Blockator',
      description:
        'Blockator is an isometric 3-d Pixelfont, that is generated with Flash.',
      keywords: cleanKeywords('font, 8bit, pixel, student, Typography'),
    },
  },
  {
    slug: 'blondheadredhead',
    Component: dynamic(() => import('./blondheadredhead')),
    preview: previewBlondhead,
    date: '2008-03-28',
    meta: {
      title: 'Blondehead & Redhead',
      description: 'Paintings of a blonde girl and a redhead.',
      keywords: cleanKeywords(
        'digital painting, images, painting, photoshop, portrait',
      ),
    },
  },
  {
    slug: 'creature-combat',
    Component: dynamic(() => import('./creature-combat')),
    preview: previewCreaturecombat,
    date: '2010-07-06',
    meta: {
      title: 'Creature Combat IV',
      description: 'Animation movie of a battle between a cat and a mouse.',
      keywords: cleanKeywords(
        'animation, cat, drawing, funny, mouse, student, susanne wohlfahrt',
      ),
    },
  },
  {
    slug: 'digital-life-drawing',
    Component: dynamic(() => import('./digital-life-drawing')),
    preview: previewAkt,
    date: '2008-04-18',
    meta: {
      title: 'Digital Life Drawing',
      description:
        'I went to a life drawing class, equipped with a graphics tablet and Photoshop.',
      keywords: cleanKeywords(
        'colors, digital painting, drawing, figure drawing, images, life drawing, nude, painting, study',
      ),
    },
  },
  {
    slug: 'essenmitsosse-redesign',
    Component: dynamic(() => import('./essenmitsosse-redesign')),
    preview: previewEssenmitsosse,
    date: '2009-08-17',
    meta: {
      title: 'essenmitsosse Redesign',
      description: 'Redesign of the homepage of Marcus Blättermann.',
      keywords: cleanKeywords('essenmitsosse, Webdesign, website'),
    },
  },
  {
    slug: 'faust',
    Component: dynamic(() => import('./faust')),
    preview: previewFaust,
    date: '2010-05-30',
    meta: {
      title: 'Faust',
      description: 'Announcement for my new comic Faust.',
      keywords: cleanKeywords('comic, graphic design, student'),
    },
  },
  {
    slug: 'jack-of-all-trades',
    Component: dynamic(() => import('./jack-of-all-trades')),
    preview: previewJackofalltrades,
    date: '2012-04-17',
    meta: {
      title: 'Jack of all Trades',
      description: 'A movie about creativity and getting things done.',
      keywords: cleanKeywords('animation, 8bit, pixel animation, student'),
    },
  },
  {
    slug: 'kino-120a',
    Component: dynamic(() => import('./kino-120a')),
    preview: previewKino120a,
    date: '2010-07-27',
    meta: {
      title: 'kino.120a',
      description: 'Poster series for student cinema kino.120a.',
      keywords: cleanKeywords(
        'allegro non troppo, berlin calling, cinema, graphic design, i’m not there, metropolis, poster, student, Test, the day the earth stood still, Typography, underdogs',
      ),
    },
  },
  {
    slug: 'linen-tunic',
    Component: dynamic(() => import('./linen-tunic')),
    preview: previewLinentunic,
    date: '2008-03-30',
    meta: {
      title: 'Linen Tunic',
      description:
        'Image of a man in linen tunic with a sword, who is cursed by a wraith in the snow.',
      keywords: cleanKeywords('digital painting, images, painting, photoshop'),
    },
  },
  {
    slug: 'older-paintings',
    Component: dynamic(() => import('./older-paintings')),
    preview: previewGondel,
    date: '2008-03-18',
    meta: {
      title: 'Older Paintings',
      description: 'Some older paintings by Marcus Blättermann.',
      keywords: cleanKeywords(
        'digital painting, Dinosaur, Dragon, Gondola, images, Jungle, painting, photoshop, portrait, Turtle',
      ),
    },
  },
  {
    slug: 'portrait-class',
    Component: dynamic(() => import('./portrait-class')),
    preview: previewPortrait,
    date: '2008-10-02',
    meta: {
      title: 'Portrait Class',
      description:
        'Paintings from a portrait class, made with Photoshop and a graphics tablet.',
      keywords: cleanKeywords(
        'colors, digital painting, images, life drawing, painting, portrait, student, study',
      ),
    },
  },
  {
    slug: 'realistically-painted-bowser',
    Component: dynamic(() => import('./realistically-painted-bowser')),
    preview: previewBowser,
    date: '2008-04-27',
    meta: {
      title: 'Realistically Painted Bowser',
      description:
        'How would Bowser from “Super Mario” look like, if he would be a real animal?',
      keywords: cleanKeywords(
        'bowser, brush, coloration, digital painting, fanart, images, painting, photoshop, realistic, redesign, untoon',
      ),
    },
  },
  {
    slug: 'sonic-the-real-hedgehog',
    Component: dynamic(() => import('./sonic-the-real-hedgehog')),
    preview: previewSonic,
    date: '2008-05-09',
    meta: {
      title: 'Sonic The Real Hedgehog',
      description: 'How would Sonic look like if he would exist in reality?',
      keywords: cleanKeywords(
        'brush, digital painting, fanart, images, painting, photoshop, pixel, realistic, redesign, sonic, untoon',
      ),
    },
  },
  {
    slug: 'sparta-fanart',
    Component: dynamic(() => import('./sparta-fanart')),
    preview: previewSparta,
    date: '2008-03-30',
    meta: {
      title: 'Sparta!',
      description: 'Image of a Spartan who slaughters a Persian warrior.',
      keywords: cleanKeywords(
        'digital painting, fanart, images, painting, photoshop, sparta',
      ),
    },
  },
  {
    slug: 'the-anglerfish',
    Component: dynamic(() => import('./the-anglerfish')),
    preview: previewAnglerfish,
    date: '2008-03-30',
    meta: {
      title: 'The Anglerfish',
      description: '',
      keywords: cleanKeywords(
        'anglerfish, cg-challenge, contest, digital painting, images, painting, photoshop',
      ),
    },
  },
  {
    slug: 'the-human-brain',
    Component: dynamic(() => import('./the-human-brain')),
    preview: previewHumanbrain,
    date: '2010-12-16',
    meta: {
      title: 'The Human Brain',
      description:
        'Animated movie giving an idea about how the brain really works.',
      keywords: cleanKeywords(
        '8bit, animation, brain, human, intelligence, neuron, pixel, student',
      ),
    },
  },
]

export default [...listPortfolio].sort(sortByDate)
