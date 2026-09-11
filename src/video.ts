/**
 * Centralized Video Registry for Savora Restaurant
 * All video sources, titles, descriptions, and posters are managed here.
 * Uses high-uptime demo MP4 video streams instead of YouTube embeds.
 */
import { IMAGES } from './images';

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  type: string;
  poster: string;
  duration: string;
}

export const VIDEOS: Record<string, VideoItem> = {
  culinaryStory: {
    id: 'culinary-story',
    title: 'Savora Culinary Story & Kitchen Artistry',
    subtitle: 'Our Culinary Philosophy',
    description:
      'From farm-harvested organic produce to 48-hour dry-aged cuts and handmade pasta, watch how our culinary team transforms fresh ingredients into unforgettable dining memories.',
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
    type: 'video/mp4',
    poster: IMAGES.videoPoster,
    duration: '0:46',
  },
  artisanPlating: {
    id: 'artisan-plating',
    title: 'The Art of Plating & Heritage Flavors',
    subtitle: 'Master Chef Showcase',
    description:
      'Experience the precision and delicate craftsmanship behind our signature wood-fired and garden-fresh dishes, prepared daily by our executive culinary team.',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    type: 'video/mp4',
    poster: IMAGES.hero.mainSteak,
    duration: '0:10',
  },
  eveningAmbiance: {
    id: 'evening-ambiance',
    title: 'Evening Atmosphere & Sommelier Selection',
    subtitle: 'Hospitality & Ambiance',
    description:
      'Immerse yourself in our candlelit dining hall, acoustic melodies, and curated vintage wine pairings designed to celebrate every special occasion.',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4',
    type: 'video/mp4',
    poster: IMAGES.backgrounds.home,
    duration: '0:15',
  },
};

export const VIDEOS_LIST: VideoItem[] = Object.values(VIDEOS);
export const DEFAULT_VIDEO: VideoItem = VIDEOS.culinaryStory;

export default VIDEOS;
