import dynamic from 'next/dynamic'

import cleanKeywords from '@/app/[slug]/content/cleanKeywords'
import sortByDate from '@/app/[slug]/content/sortByDate'

import previewAztheken from './Aztecs/preview.jpg'
import previewBloackator from './Blockator/preview.png'
import previewBlondhead from './BlondheadRedhead/preview.jpg'
import previewCreaturecombat from './CreatureCombat/preview.png'
import previewAkt from './DigitalLifeDrawing/preview.jpg'
import previewEssenmitsosse from './EssenmitsosseRedesign/preview.png'
import previewFaust from './Faust/preview.png'
import previewJackofalltrades from './JackOfAllTrades/preview.png'
import previewKino120a from './Kino120a/preview.png'
import previewLinentunic from './LinenTunic/preview.jpg'
import previewGondel from './OlderPaintings/preview.jpg'
import previewPortrait from './PortraitClass/preview.jpg'
import previewBowser from './RealisticallyPaintedBowser/preview.jpg'
import previewSonic from './SonicTheRealHedgehog/preview.jpg'
import previewSparta from './SpartaFanart/preview.jpg'
import previewAnglerfish from './TheAnglerfish/preview.jpg'
import previewHumanbrain from './TheHumanBrain/preview.png'

import type { Post } from '@/app/[slug]/content/types'
import type { StaticImageData } from 'next/image'

export type PostPortfolio = Post & { readonly preview: StaticImageData }

const listPortfolioUnsorted: ReadonlyArray<PostPortfolio> = [
  {
    Component: dynamic(() => import('./Aztecs')),
    date: '2008-03-30',
    meta: {
      description:
        'An image showing an Aztec warrior killing a Spanish Conquiztador',
      keywords: cleanKeywords(
        'actecs, digital painting, images, painting, photoshop',
      ),
      title: 'Aztecs',
    },
    preview: previewAztheken,
    slug: 'aztecs',
  },
  {
    Component: dynamic(() => import('./Blockator')),
    date: '2009-08-18',
    meta: {
      description:
        'Blockator is an isometric 3-d Pixelfont, that is generated with Flash.',
      keywords: cleanKeywords('font, 8bit, pixel, student, Typography'),
      title: 'Blockator',
    },
    preview: previewBloackator,
    slug: 'blockator',
  },
  {
    Component: dynamic(() => import('./BlondheadRedhead')),
    date: '2008-03-28',
    meta: {
      description: 'Paintings of a blonde girl and a redhead.',
      keywords: cleanKeywords(
        'digital painting, images, painting, photoshop, portrait',
      ),
      title: 'Blondehead & Redhead',
    },
    preview: previewBlondhead,
    slug: 'blondheadredhead',
  },
  {
    Component: dynamic(() => import('./CreatureCombat')),
    date: '2010-07-06',
    meta: {
      description: 'Animation movie of a battle between a cat and a mouse.',
      keywords: cleanKeywords(
        'animation, cat, drawing, funny, mouse, student, susanne wohlfahrt',
      ),
      title: 'Creature Combat IV',
    },
    preview: previewCreaturecombat,
    slug: 'creature-combat',
  },
  {
    Component: dynamic(() => import('./DigitalLifeDrawing')),
    date: '2008-04-18',
    meta: {
      description:
        'I went to a life drawing class, equipped with a graphics tablet and Photoshop.',
      keywords: cleanKeywords(
        'colors, digital painting, drawing, figure drawing, images, life drawing, nude, painting, study',
      ),
      title: 'Digital Life Drawing',
    },
    preview: previewAkt,
    slug: 'digital-life-drawing',
  },
  {
    Component: dynamic(() => import('./EssenmitsosseRedesign')),
    date: '2009-08-17',
    meta: {
      description: 'Redesign of the homepage of Marcus Blättermann.',
      keywords: cleanKeywords('essenmitsosse, Webdesign, website'),
      title: 'essenmitsosse Redesign',
    },
    preview: previewEssenmitsosse,
    slug: 'essenmitsosse-redesign',
  },
  {
    Component: dynamic(() => import('./Faust')),
    date: '2010-05-30',
    meta: {
      description: 'Announcement for my new comic Faust.',
      keywords: cleanKeywords('comic, graphic design, student'),
      title: 'Faust',
    },
    preview: previewFaust,
    slug: 'faust',
  },
  {
    Component: dynamic(() => import('./JackOfAllTrades')),
    date: '2012-04-17',
    meta: {
      description: 'A movie about creativity and getting things done.',
      keywords: cleanKeywords('animation, 8bit, pixel animation, student'),
      title: 'Jack of all Trades',
    },
    preview: previewJackofalltrades,
    slug: 'jack-of-all-trades',
  },
  {
    Component: dynamic(() => import('./Kino120a')),
    date: '2010-07-27',
    meta: {
      description: 'Poster series for student cinema kino.120a.',
      keywords: cleanKeywords(
        'allegro non troppo, berlin calling, cinema, graphic design, i’m not there, metropolis, poster, student, Test, the day the earth stood still, Typography, underdogs',
      ),
      title: 'kino.120a',
    },
    preview: previewKino120a,
    slug: 'kino-120a',
  },
  {
    Component: dynamic(() => import('./LinenTunic')),
    date: '2008-03-30',
    meta: {
      description:
        'Image of a man in linen tunic with a sword, who is cursed by a wraith in the snow.',
      keywords: cleanKeywords('digital painting, images, painting, photoshop'),
      title: 'Linen Tunic',
    },
    preview: previewLinentunic,
    slug: 'linen-tunic',
  },
  {
    Component: dynamic(() => import('./OlderPaintings')),
    date: '2008-03-18',
    meta: {
      description: 'Some older paintings by Marcus Blättermann.',
      keywords: cleanKeywords(
        'digital painting, Dinosaur, Dragon, Gondola, images, Jungle, painting, photoshop, portrait, Turtle',
      ),
      title: 'Older Paintings',
    },
    preview: previewGondel,
    slug: 'older-paintings',
  },
  {
    Component: dynamic(() => import('./PortraitClass')),
    date: '2008-10-02',
    meta: {
      description:
        'Paintings from a portrait class, made with Photoshop and a graphics tablet.',
      keywords: cleanKeywords(
        'colors, digital painting, images, life drawing, painting, portrait, student, study',
      ),
      title: 'Portrait Class',
    },
    preview: previewPortrait,
    slug: 'portrait-class',
  },
  {
    Component: dynamic(() => import('./RealisticallyPaintedBowser')),
    date: '2008-04-27',
    meta: {
      description:
        'How would Bowser from “Super Mario” look like, if he would be a real animal?',
      keywords: cleanKeywords(
        'bowser, brush, coloration, digital painting, fanart, images, painting, photoshop, realistic, redesign, untoon',
      ),
      title: 'Realistically Painted Bowser',
    },
    preview: previewBowser,
    slug: 'realistically-painted-bowser',
  },
  {
    Component: dynamic(() => import('./SonicTheRealHedgehog')),
    date: '2008-05-09',
    meta: {
      description: 'How would Sonic look like if he would exist in reality?',
      keywords: cleanKeywords(
        'brush, digital painting, fanart, images, painting, photoshop, pixel, realistic, redesign, sonic, untoon',
      ),
      title: 'Sonic The Real Hedgehog',
    },
    preview: previewSonic,
    slug: 'sonic-the-real-hedgehog',
  },
  {
    Component: dynamic(() => import('./SpartaFanart')),
    date: '2008-03-30',
    meta: {
      description: 'Image of a Spartan who slaughters a Persian warrior.',
      keywords: cleanKeywords(
        'digital painting, fanart, images, painting, photoshop, sparta',
      ),
      title: 'Sparta!',
    },
    preview: previewSparta,
    slug: 'sparta-fanart',
  },
  {
    Component: dynamic(() => import('./TheAnglerfish')),
    date: '2008-03-30',
    meta: {
      description: '',
      keywords: cleanKeywords(
        'anglerfish, cg-challenge, contest, digital painting, images, painting, photoshop',
      ),
      title: 'The Anglerfish',
    },
    preview: previewAnglerfish,
    slug: 'the-anglerfish',
  },
  {
    Component: dynamic(() => import('./TheHumanBrain')),
    date: '2010-12-16',
    meta: {
      description:
        'Animated movie giving an idea about how the brain really works.',
      keywords: cleanKeywords(
        '8bit, animation, brain, human, intelligence, neuron, pixel, student',
      ),
      title: 'The Human Brain',
    },
    preview: previewHumanbrain,
    slug: 'the-human-brain',
  },
]

const listPortfolio = [...listPortfolioUnsorted].sort(sortByDate)

export default listPortfolio
