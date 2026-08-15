export interface RSVPData {
  id: string;
  fullName: string;
  email: string;
  attendance: 'accept' | 'decline';
  guestCount: number;
  events: string[];
  dietary: string;
  songRequest?: string;
  createdAt: string;
}

export interface GuestbookWish {
  id: string;
  senderName: string;
  relationship: string;
  message: string;
  createdAt: string;
  likes: number;
}

export interface StoryMilestone {
  id: string;
  year: string;
  title: string;
  location: string;
  description: string;
  image: string;
  quote: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  caption: string;
  url: string;
  aspectRatio: string;
}

export interface EventScheduleItem {
  time: string;
  title: string;
  location: string;
  description: string;
  dressCode: string;
}
