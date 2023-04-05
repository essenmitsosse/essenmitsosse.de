import dynamic from 'next/dynamic'
import { Post } from '../types'

const listPortfolio: ReadonlyArray<Post> = [
  {
    slug: 'aztecs',
    Component: dynamic(() => import('./aztecs')),
    date: '2008-03-30',
    meta: {
      title: 'Aztecs ♣ essenmitsosse',
      description:
        'An image showing an Aztec warrior killing a Spanish Conquiztador',
      keywords:
        'actecs, digital painting, images, marcus blättermann, painting, photoshop',
    },
  },
  {
    slug: 'blockator',
    Component: dynamic(() => import('./blockator')),
    date: '2009-08-18',
    meta: {
      title: 'Blockator ♣ essenmitsosse',
      description:
        'Blockator is an isometric 3-d Pixelfont, that is generated with Flash.',
      keywords: 'font, marcus blättermann, pixel, student, Typography',
    },
  },
  {
    slug: 'blondheadredhead',
    Component: dynamic(() => import('./blondheadredhead')),
    date: '2008-03-28',
    meta: {
      title: 'Blondehead &#038; Redhead ♣ essenmitsosse',
      description: 'Paintings of a blonde girl and a redhead.',
      keywords:
        'digital painting, images, marcus blättermann, painting, photoshop, portrait',
    },
  },
  {
    slug: 'creature-combat',
    Component: dynamic(() => import('./creature-combat')),
    date: '2010-07-06',
    meta: {
      title: 'Creature Combat IV ♣ essenmitsosse',
      description: 'Animation movie of a battle between a cat and a mouse.',
      keywords:
        'animation, cat, drawing, funny, marcus blaettermann, mouse, student, susanne wohlfahrt',
    },
  },
  {
    slug: 'digital-life-drawing',
    Component: dynamic(() => import('./digital-life-drawing')),
    date: '2008-04-18',
    meta: {
      title: 'Digital Life Drawing ♣ essenmitsosse',
      description:
        'I went to a life drawing class, equipped with a graphics tablet and Photoshop.',
      keywords:
        'colors, digital painting, drawing, figure drawing, images, life drawing, marcus blättermann, nude, painting, study',
    },
  },
  {
    slug: 'essenmitsosse-redesign',
    Component: dynamic(() => import('./essenmitsosse-redesign')),
    date: '2009-08-17',
    meta: {
      title: 'essenmitsosse Redesign ♣ essenmitsosse',
      description: 'Redesign of the homepage of Marcus Blättermann.',
      keywords: 'essenmitsosse, marcus blättermann, Webdesign, website',
    },
  },
  {
    slug: 'faust',
    Component: dynamic(() => import('./faust')),
    date: '2010-05-30',
    meta: {
      title: 'Faust ♣ essenmitsosse',
      description: 'Announcement for my new comic Faust.',
      keywords: 'comic, graphic design, marcus blaettermann, student',
    },
  },
  {
    slug: 'jack-of-all-trades',
    Component: dynamic(() => import('./jack-of-all-trades')),
    date: '2012-04-17',
    meta: {
      title: 'Jack of all Trades ♣ essenmitsosse',
      description: 'A movie about creativity and getting things done.',
      keywords: '',
    },
  },
  {
    slug: 'kino-120a',
    Component: dynamic(() => import('./kino-120a')),
    date: '2010-07-27',
    meta: {
      title: 'kino.120a ♣ essenmitsosse',
      description: 'Poster series for student cinema kino.120a.',
      keywords:
        'allegro non troppo, berlin calling, cinema, graphic design, i&rsquo;m not there, marcus blaettermann, metropolis, poster, student, Test, the day the earth stood still, Typography, underdogs',
    },
  },
  {
    slug: 'linen-tunic',
    Component: dynamic(() => import('./linen-tunic')),
    date: '2008-03-30',
    meta: {
      title: 'Linen Tunic ♣ essenmitsosse',
      description:
        'Image of a man in linen tunic with a sword, who is cursed by a wraith in the snow.',
      keywords:
        'digital painting, images, marcus blättermann, painting, photoshop',
    },
  },
  {
    slug: 'older-paintings',
    Component: dynamic(() => import('./older-paintings')),
    date: '2008-03-18',
    meta: {
      title: 'Older Paintings ♣ essenmitsosse',
      description: 'Some older paintings by Marcus Blättermann.',
      keywords:
        'digital painting, Dinosaur, Dragon, Gondola, images, Jungle, marcus blättermann, painting, photoshop, portrait, Turtle',
    },
  },
  {
    slug: 'portrait-class',
    Component: dynamic(() => import('./portrait-class')),
    date: '2008-10-02',
    meta: {
      title: 'Portrait Class ♣ essenmitsosse',
      description:
        'Paintings from a portrait class, made with Photoshop and a graphics tablet.',
      keywords:
        'colors, digital painting, images, life drawing, marcus blättermann, painting, portrait, student, study',
    },
  },
  {
    slug: 'realistically-painted-bowser',
    Component: dynamic(() => import('./realistically-painted-bowser')),
    date: '2008-04-27',
    meta: {
      title: 'Realistically Painted Bowser ♣ essenmitsosse',
      description:
        'How would Bowser from “Super Mario” look like, if he would be a real animal?',
      keywords:
        'bowser, brush, coloration, digital painting, fanart, images, marcus blättermann, painting, photoshop, realistic, redesign, untoon',
    },
  },
  {
    slug: 'sonic-the-real-hedgehog',
    Component: dynamic(() => import('./sonic-the-real-hedgehog')),
    date: '2008-05-09',
    meta: {
      title: 'Sonic The Real Hedgehog ♣ essenmitsosse',
      description: 'How would Sonic look like if he would exist in reality?',
      keywords:
        'brush, digital painting, fanart, images, marcus blättermann, painting, photoshop, pixel, realistic, redesign, sonic, untoon',
    },
  },
  {
    slug: 'sparta-fanart',
    Component: dynamic(() => import('./sparta-fanart')),
    date: '2008-03-30',
    meta: {
      title: 'Sparta! ♣ essenmitsosse',
      description: 'Image of a Spartan who slaughters a Persian warrior.',
      keywords:
        'digital painting, fanart, images, marcus blättermann, painting, photoshop, sparta',
    },
  },
  {
    slug: 'the-anglerfish',
    Component: dynamic(() => import('./the-anglerfish')),
    date: '2008-03-30',
    meta: {
      title: 'The Anglerfish ♣ essenmitsosse',
      description: '',
      keywords:
        'anglerfish, cg-challenge, contest, digital painting, images, marcus blättermann, painting, photoshop',
    },
  },
  {
    slug: 'the-human-brain',
    Component: dynamic(() => import('./the-human-brain')),
    date: '2010-12-16',
    meta: {
      title: 'The Human Brain ♣ essenmitsosse',
      description:
        'Animated movie giving an idea about how the brain really works.',
      keywords:
        '8bit, animation, brain, human, intelligence, marcus blaettermann, neuron, pixel, student',
    },
  },
]

export default listPortfolio
