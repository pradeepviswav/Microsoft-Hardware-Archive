import { Product } from "../types";
import { recentProducts } from "./recent";
import { imageMetadata } from "./images";

export const products: Product[] = [
  {
    id: 1,
    name: "Microsoft Mouse",
    category: "Mice",
    year: 1983,
    description:
      "The first mouse released by Microsoft, often bundled with Microsoft Word. It was a two-button serial mouse that marked Microsoft's entry into the hardware market.",
    imageUrl: "/images/legacy-1.webp",
    links: [],
  },
  {
    id: 2,
    name: "Xbox",
    category: "Xbox",
    year: 2001,
    description:
      "Microsoft's first foray into the gaming console market, competing with Sony's PlayStation 2. Known for its powerful hardware and the launch of the iconic Halo franchise.",
    imageUrl: "/images/legacy-2.webp",
    links: [],
  },
  {
    id: 3,
    name: "Microsoft Zune",
    category: "Zune",
    year: 2006,
    description:
      "A portable media player created by Microsoft to compete with the Apple iPod. It featured a large screen, FM radio, and the Zune Music Pass subscription service.",
    imageUrl: "/images/legacy-3.webp",
    links: [],
  },
  {
    id: 4,
    name: "Surface RT",
    category: "Surface",
    year: 2012,
    description:
      "The first-generation Surface tablet, featuring a 10.6-inch screen and a built-in kickstand. It ran on Windows RT and introduced the innovative Touch Cover and Type Cover keyboards.",
    imageUrl: "/images/legacy-4.webp",
    links: [],
  },
  {
    id: 5,
    name: "Microsoft Band",
    category: "Wearables",
    year: 2014,
    description:
      "A smart band with fitness tracking capabilities, featuring 10 sensors including a heart rate monitor, GPS, and a UV sensor. It worked with Windows Phone, iOS, and Android.",
    imageUrl: "/images/legacy-5.webp",
    links: [],
  },
  {
    id: 6,
    name: "Xbox 360",
    category: "Xbox",
    year: 2005,
    description:
      "The second console in the Xbox series. It expanded Xbox Live with the Xbox Live Marketplace, achievements, and a wireless controller. Xbox Live itself had launched on the original Xbox in 2002.",
    imageUrl: "/images/legacy-6.webp",
    links: [],
  },
  {
    id: 7,
    name: "Windows Phone 7 (HTC 7 Trophy)",
    category: "Windows Phone",
    year: 2010,
    description:
      "A launch device for Windows Phone 7, which introduced the Metro UI (later Modern UI) with Live Tiles, offering a fresh alternative to iOS and Android.",
    imageUrl: "/images/legacy-7.webp",
    links: [],
  },
  {
    id: 8,
    name: "Microsoft HoloLens",
    category: "Mixed Reality",
    year: 2016,
    description:
      "A pair of mixed reality smartglasses that merge real-world elements with virtual holograms. A self-contained holographic computer.",
    imageUrl: "/images/legacy-8.webp",
    links: [],
  },
  {
    id: 9,
    name: "Surface Pro 3",
    category: "Surface",
    year: 2014,
    description:
      'Hailed as "the tablet that can replace your laptop," it featured a larger 12-inch display, a multi-position kickstand, and a more powerful Intel Core processor.',
    imageUrl: "/images/legacy-9.webp",
    links: [],
  },
  {
    id: 10,
    name: "Microsoft Natural Keyboard Elite",
    category: "Keyboards",
    year: 1998,
    description:
      "A compact successor to the original 1994 Natural Keyboard, with a split, angled key layout and integrated palm rest.",
    imageUrl: "/images/legacy-10.webp",
    links: [],
  },
  {
    id: 11,
    name: "Xbox One",
    category: "Xbox",
    year: 2013,
    description:
      "The third generation Xbox console, positioned as an all-in-one entertainment system with a focus on media integration and the Kinect sensor.",
    imageUrl: "/images/legacy-11.webp",
    links: [],
  },
  {
    id: 12,
    name: "Surface Book",
    category: "Surface",
    year: 2015,
    description:
      "A high-performance laptop with a detachable screen that functions as a standalone tablet. Known for its dynamic fulcrum hinge and optional discrete GPU in the keyboard base.",
    imageUrl: "/images/legacy-12.webp",
    links: [],
  },
  {
    id: 13,
    name: "Xbox Series X",
    category: "Xbox",
    year: 2020,
    description:
      "A fourth-generation Xbox console with a custom NVMe SSD, backward compatibility, and support for up to 4K resolution and up to 120 FPS in supported games.",
    imageUrl: "/images/legacy-13.webp",
    links: [],
  },
  {
    id: 14,
    name: "Surface Laptop Studio",
    category: "Surface",
    year: 2021,
    description:
      "A versatile laptop with a unique hinge that allows the screen to pull forward into stage mode or studio mode for drawing and inking with the Surface Slim Pen 2.",
    imageUrl: "/images/legacy-14.webp",
    links: [],
  },
  {
    id: 15,
    name: "Microsoft Arc Touch Mouse",
    category: "Mice",
    year: 2010,
    description:
      "A travel mouse with a flexible body that curves for use and flattens for storage. Its touch strip replaces a conventional scroll wheel. The Arc Touch model followed the folding Arc Mouse of 2008.",
    imageUrl: "/images/legacy-15.webp",
    links: [],
  },
  {
    id: 16,
    name: "Microsoft LifeCam Studio",
    category: "Webcams",
    year: 2010,
    description:
      "A high-definition webcam featuring a 1080p sensor, autofocus, and a high-fidelity microphone. It was designed for both personal and business video conferencing.",
    imageUrl: "/images/legacy-16.webp",
    links: [],
  },
  {
    id: 17,
    name: "Surface Duo",
    category: "Surface",
    year: 2020,
    description:
      "A dual-screen, foldable Android device designed for productivity on the go. It features two 5.6-inch displays connected by a 360-degree hinge.",
    imageUrl: "/images/legacy-17.webp",
    links: [],
  },
  {
    id: 18,
    name: "Kinect for Xbox 360",
    category: "Accessories",
    year: 2010,
    description:
      "A motion-sensing input device that allows users to control and interact with their Xbox 360 without the need for a game controller, through a natural user interface using gestures and spoken commands.",
    imageUrl: "/images/legacy-18.webp",
    links: [],
  },
  {
    id: 19,
    name: "Surface Pro X",
    category: "Surface",
    year: 2019,
    description:
      "An ultra-thin and always-connected 2-in-1 laptop powered by a custom Microsoft SQ1 ARM processor, featuring LTE connectivity and a stunning edge-to-edge 13” PixelSense display.",
    imageUrl: "/images/legacy-19.webp",
    links: [],
  },
  {
    id: 20,
    name: "Surface Headphones 2",
    category: "Accessories",
    year: 2020,
    description:
      "Over-ear headphones featuring spectacular Omnisonic sound, adjustable noise cancellation with 13 levels, and intuitive on-ear dials for volume and noise cancellation control.",
    imageUrl: "/images/legacy-20.webp",
    links: [],
  },
];

products.forEach((product) =>
  Object.assign(product, imageMetadata[product.id]),
);
products.push(...recentProducts);

export const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))).sort(),
];
