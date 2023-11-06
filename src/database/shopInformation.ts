interface Shop {
  city: string;
  address: string;
  description: string;
  imageURL: string;
  id: number | string;
}

export const AVAILABLE_SHOPS: Shop[] = [
  {
    city: "London",
    address: "123 Oxford Street",
    description:
      "Find us near the Oxford Circus tube station, we're open 7 days a week.",
    imageURL: "/resources/sede-1.jpg",
    id: 1,
  },
  {
    city: "New York",
    address: "456 Times Square",
    description:
      "   Visit us in the heart of Times Square, we're open 24 hours a day.",
    imageURL: "/resources/sede-2.jpg",
    id: 2,
  },
  {
    city: "Tokyo",
    address: "789 Shibuya Crossing",
    description:
      "  See us at the world-famous Shibuya Crossing, we're open late into the night.",
    id: 3,
    imageURL: "/resources/sede-3.jpeg",
  },
];
