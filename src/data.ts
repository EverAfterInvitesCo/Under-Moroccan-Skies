import { StoryMilestone, GalleryImage, GuestbookWish, EventScheduleItem } from './types';

// Palace Illustration Assets
import gateHeroImg from './assets/images/palace_gate_entrance_1786117407156.jpg';
import courtyardImg from './assets/images/palace_courtyard_pool_1786117420890.jpg';
import gardenHallImg from './assets/images/palace_gardens_arch_1786117431420.jpg';
import ballroomImg from './assets/images/palace_ballroom_pavilion_1786117467701.jpg';
import sunsetGlowImg from './assets/images/palace_sunset_terrace_1786117447875.jpg';

// Gallery Photo Assets
import galleryImg1 from './assets/images/img1.jpg';
import galleryImg2 from './assets/images/img2.jpg';
import galleryImg3 from './assets/images/img3.jpg';
import galleryImg4 from './assets/images/img4.jpg';
import galleryImg5 from './assets/images/img5.jpg';
import galleryImg6 from './assets/images/img6.jpg';

export const ASSETS = {
  gateHero: gateHeroImg,
  courtyard: courtyardImg,
  gardenHall: gardenHallImg,
  ballroom: ballroomImg,
  sunsetGlow: sunsetGlowImg,
};

export const INITIAL_WISHES: GuestbookWish[] = [
  {
    id: 'wish-1',
    senderName: 'Amina & Youssef Al-Hassan',
    relationship: 'Aunt & Uncle of the Bride',
    message: 'May Allah bless your union with endless happiness, prosperity, and everlasting harmony. We cannot wait to celebrate this majestic day with you in Marrakech!',
    createdAt: '2026-08-01T10:30:00Z',
    likes: 12,
  },
  {
    id: 'wish-2',
    senderName: 'Tariq Mansoor',
    relationship: 'Best Man & Lifelong Friend',
    message: 'To my brother Khaled and his beautiful queen Maryam! Yours is truly a fairytale written in the stars. Wishing you a lifetime of laughter and adventure!',
    createdAt: '2026-08-03T14:15:00Z',
    likes: 19,
  },
  {
    id: 'wish-3',
    senderName: 'Dr. Layla & Samir El-Kady',
    relationship: 'Family Friends',
    message: 'Sending our warmest congratulations from Cairo! You both bring so much light and joy into every room. Mabrouk Ya Ahla Arees w Arousa!',
    createdAt: '2026-08-05T09:45:00Z',
    likes: 8,
  },
  {
    id: 'wish-4',
    senderName: 'Sami & Fatima Benali',
    relationship: 'Cousins',
    message: 'Counting down the days to dance under the lanterns in the palace courtyard! Mabrouk Alaikom!',
    createdAt: '2026-08-06T18:20:00Z',
    likes: 15,
  }
];

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    id: 'story-1',
    year: '2021',
    title: 'Childhood & Parallel Paths',
    location: 'Cairo & Marrakech',
    description: 'Though born across the Mediterranean in Egypt and Morocco, their families shared generations of warmth, music, and deep appreciation for heritage and architecture.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    quote: '"Two hearts destined to cross ancient sands and golden seas."',
  },
  {
    id: 'story-2',
    year: '2023',
    title: 'The First Crossing',
    location: 'Andalusian Art Biennale, Seville',
    description: 'A serendipitous encounter amidst tilework arches and classical oud melodies. What began as an hour-long discussion on traditional geometry turned into endless nightly conversations.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    quote: '"In her eyes, I found the home I had searched for across every city."',
  },
  {
    id: 'story-3',
    year: '2025',
    title: 'The Sunset Proposal',
    location: 'Agafay Desert Pavilion',
    description: 'Surrounded by hundreds of warm amber lanterns under the open desert sky, Khaled asked Maryam to spend a lifetime painting stories together.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    quote: '"Under a canopy of stars, she whispered yes."',
  },
  {
    id: 'story-4',
    year: '2026',
    title: 'The Eternal Promise',
    location: 'Royal Mirage Palace, Marrakech',
    description: 'Joined by cherished family and dear friends, Maryam and Khaled open a new chapter of love, devotion, and shared dreams.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    quote: '"And so their forever begins..."',
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'An Oasis Evening',
    caption: 'Soft twilight moments in the palace garden.',
    url: galleryImg1,
    aspectRatio: '3/4',
  },
  {
    id: 'gal-2',
    title: 'Desert Romance',
    caption: 'Golden hour at Agafay dunes.',
    url: galleryImg2,
    aspectRatio: '1/1',
  },
  {
    id: 'gal-3',
    title: 'Lover’s Courtyard',
    caption: 'Among terracotta arches and jasmine blooms.',
    url: galleryImg3,
    aspectRatio: '3/4',
  },
  {
    id: 'gal-4',
    title: 'Lantern Promises',
    caption: 'Warm glow under Moroccan starlight.',
    url: galleryImg4,
    aspectRatio: '4/3',
  },
  {
    id: 'gal-5',
    title: 'Embroidered Heritage',
    caption: 'Intricate details of traditional silk attire.',
    url: galleryImg5,
    aspectRatio: '1/1',
  },
  {
    id: 'gal-6',
    title: 'Everlasting Harmony',
    caption: 'A quiet laugh captured before sunset.',
    url: galleryImg6,
    aspectRatio: '3/4',
  }
];

export const SCHEDULE_ITEMS: EventScheduleItem[] = [
  {
    time: '4:00 PM',
    title: 'Welcome Tea & Royal Henna Reception',
    location: 'Palace Jasmine Courtyard',
    description: 'Traditional mint tea, artisan Moroccan pastries, live Andalusian harp performance, and bespoke Henna art.',
    dressCode: 'Royal Moroccan Caftan or Elegant Black Tie',
  },
  {
    time: '6:30 PM',
    title: 'The Sacred Katb Al-Kitab Ceremony',
    location: 'The Reflecting Pool Pavilion',
    description: 'Exchanging eternal vows under golden palm arches with spiritual chants and family blessings.',
    dressCode: 'Formal Elegance (Warm Earth Tones Encouraged)',
  },
  {
    time: '8:00 PM',
    title: 'Grand Zaffe & Gala Celebration',
    location: 'The Sunset Ballroom & Gardens',
    description: 'A feast of royal cuisine, live Egyptian & Moroccan orchestra, lantern lighting, and dancing under the stars.',
    dressCode: 'Evening Couture',
  }
];
