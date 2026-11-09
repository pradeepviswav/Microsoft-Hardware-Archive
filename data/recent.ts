import { Product } from "../types";
const september = {
  title: "Microsoft Devices Blog · September 2026 Surface announcement",
  url: "https://blogs.windows.com/devices/2026/09/23/introducing-surface-pro-12-inch-and-surface-laptop-13-inch-with-snapdragon-x2/",
};
const june = {
  title: "Microsoft Devices Blog · June 2026 Surface announcement",
  url: "https://blogs.windows.com/devices/2026/06/16/introducing-the-next-surface-pro-and-surface-laptop-built-for-performance-and-flexibility/",
};
const imageCredit =
  "Microsoft / Microsoft Devices Blog (editorial product photography)";
export const recentProducts: Product[] = [
  {
    id: 21,
    name: "Surface Pro 13-inch (12th Edition)",
    category: "Surface",
    year: 2026,
    description:
      "The 2026 13-inch Surface Pro pairs a detachable form with Snapdragon X2 processors and an optional OLED screen. A new Quad HD camera supports video calls.",
    imageUrl: "/images/surface-pro-13.jpg",
    links: [],
    source: june,
    specs: {
      Processor: "Snapdragon X2",
      Display: "13-inch; OLED option",
      Format: "Detachable 2-in-1",
    },
    dateLabel: "Available from 16 June 2026 in launch markets",
    addedAt: "2026-11-09",
    imageCredit,
    imageSource: june.url,
  },
  {
    id: 22,
    name: "Surface Laptop 13.8-inch (8th Edition)",
    category: "Surface",
    year: 2026,
    description:
      "A Snapdragon X2 update to the everyday Surface laptop, including a Jade color option for the 13.8-inch model and a haptic touchpad.",
    imageUrl: "/images/surface-laptop-14.jpg",
    links: [],
    source: june,
    specs: {
      Processor: "Snapdragon X2",
      Display: "13.8-inch LCD",
      Format: "Clamshell laptop",
    },
    dateLabel: "Available from 16 June 2026 in launch markets",
    addedAt: "2026-11-09",
    imageCredit,
    imageSource: june.url,
  },
  {
    id: 23,
    name: "Surface Pro 12-inch (2nd Edition)",
    category: "Surface",
    year: 2026,
    description:
      "A compact, fanless Surface Pro with Snapdragon X2 Plus. The second edition adds a brighter touchscreen and a Black finish, with optional 5G for business.",
    imageUrl: "/images/surface-pro-12.jpg",
    links: [],
    source: september,
    specs: {
      Processor: "Snapdragon X2 Plus",
      Display: "12-inch PixelSense, 500 nits",
      Format: "Fanless detachable 2-in-1",
    },
    dateLabel: "Available from 13 October 2026 in select markets",
    addedAt: "2026-11-09",
    imageCredit,
    imageSource: september.url,
  },
  {
    id: 24,
    name: "Surface Laptop 13-inch (2nd Edition)",
    category: "Surface",
    year: 2026,
    description:
      "The portable Surface Laptop moves to Snapdragon X2 Plus, with a brighter 3:2 touchscreen, a backlit keyboard, and a new Black finish.",
    imageUrl: "/images/surface-laptop-13.jpg",
    links: [],
    source: september,
    specs: {
      Processor: "Snapdragon X2 Plus",
      Display: "13-inch PixelSense, 500 nits",
      Format: "Clamshell laptop",
    },
    dateLabel: "Available from 13 October 2026 in select markets",
    addedAt: "2026-11-09",
    imageCredit,
    imageSource: september.url,
  },
  {
    id: 25,
    name: "Surface Mouse (2026)",
    category: "Mice",
    year: 2026,
    description:
      "A new ambidextrous Surface Mouse adds haptic feedback, a customizable action button, and Bluetooth 6.0 for switching between paired devices.",
    imageUrl: "/images/surface-mouse.jpg",
    links: [],
    source: september,
    specs: {
      Connection: "Bluetooth 6.0",
      Input: "Haptic feedback; customizable action button",
    },
    dateLabel: "Available from 13 October 2026 in select markets",
    addedAt: "2026-11-09",
    imageCredit,
    imageSource: september.url,
  },
];
