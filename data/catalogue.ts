import { Product } from "../types";

// Curated from Microsoft specifications, press archives, and Wikipedia.
// See docs/COLLECTION_EXPANSION.md for methodology and source coverage.
export const catalogueProducts: Product[] = [
  {
    id: 26,
    name: "Microsoft Z-80 SoftCard",
    category: "Expansion Cards",
    year: 1980,
    description:
      "An Apple II expansion card that added a Z80 processor so the computer could run CP/M software.",
    specs: {
      Platform: "Apple II",
      Processor: "Zilog Z80",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Z-80 SoftCard",
      url: "https://en.wikipedia.org/wiki/Z-80_SoftCard",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/26.webp",
    imageCredit: "OlivierBerger · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Softcard_Z80_coprocessor_for_Apple_II.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 27,
    name: "Microsoft BallPoint Mouse",
    category: "Trackballs",
    year: 1991,
    description:
      "A compact pointing device that clipped to notebook computers, with a small ball operated by the fingers.",
    specs: {
      Format: "Clip-on notebook trackball",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "The History of Microsoft - 1991 | Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/shows/history/history-of-microsoft-1991",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft Mouse",
        url: "https://en.wikipedia.org/wiki/Microsoft_Mouse",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 28,
    name: "Microsoft Natural Keyboard",
    category: "Keyboards",
    year: 1994,
    description:
      "The original split Microsoft keyboard, with angled key groups, a raised center, and an integrated palm rest.",
    specs: {
      Connection: "PS/2",
      Layout: "Split ergonomic",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Hardware Celebrates 20 Years of Product Innovation - Source",
      url: "https://news.microsoft.com/source/2003/05/02/microsoft-hardware-celebrates-20-years-of-product-innovation/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft ergonomic keyboards",
        url: "https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/28.webp",
    imageCredit: "DeanW77 · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:MicrosoftNaturalKeyboardGen1.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 29,
    name: "Microsoft Natural Keyboard Pro",
    category: "Keyboards",
    year: 1999,
    description:
      "An expanded Natural keyboard with application hotkeys and a built-in two-port USB hub.",
    specs: {
      Connection: "USB / PS/2",
      Ports: "Two-port USB hub",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Microsoft Announces New Line of Keyboards - Source",
      url: "https://news.microsoft.com/source/1999/06/22/microsoft-announces-new-line-of-keyboards/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft ergonomic keyboards",
        url: "https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/29.webp",
    imageCredit:
      "The original uploader was PCStuff at English Wikipedia. · CC BY-SA 2.5",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:MS_Natural_Keyboard_Pro.JPG",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.5",
  },
  {
    id: 30,
    name: "Microsoft Natural MultiMedia Keyboard",
    category: "Keyboards",
    year: 2002,
    description:
      "A split keyboard that added media controls and customizable function keys to the Natural family.",
    specs: {
      Connection: "PS/2",
      Layout: "Split ergonomic",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Rolls Out Largest Collection of Desktop Peripherals in Company History - Source",
      url: "https://news.microsoft.com/source/2002/09/03/microsoft-rolls-out-largest-collection-of-desktop-peripherals-in-company-history/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft ergonomic keyboards",
        url: "https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/30.webp",
    imageCredit: "James Petts from London, England · CC BY-SA 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Old_Ergonomic_Keyboard_%2853551301228%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.0",
  },
  {
    id: 31,
    name: "Microsoft Natural Ergonomic Keyboard 4000",
    category: "Keyboards",
    year: 2005,
    description:
      "A wired ergonomic keyboard with a central zoom rocker, cushioned palm rest, and removable front riser.",
    specs: {
      Connection: "USB",
      Layout: "Split ergonomic",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft ergonomic keyboards",
      url: "https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/31.webp",
    imageCredit: "Mliu92 · CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Natural_Ergonomic_Keyboard_4000.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  {
    id: 32,
    name: "Microsoft Natural Wireless Ergonomic Keyboard 7000",
    category: "Keyboards",
    year: 2007,
    description:
      "The wireless counterpart to the Natural Ergonomic Keyboard 4000, sold as part of an ergonomic desktop set.",
    specs: {
      Connection: "Wireless USB receiver",
      Layout: "Split ergonomic",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft ergonomic keyboards",
      url: "https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/32.webp",
    imageCredit: "Eugene Kim from San Francisco, USA · CC BY 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Wireless_Ergonomic_Keyboard_and_Mouse_%282173702909%29_%28cropped%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 33,
    name: "Microsoft Sculpt Ergonomic Keyboard",
    category: "Keyboards",
    year: 2013,
    description:
      "A domed, split keyboard with a separate number pad and cushioned palm rest, designed to reduce sideways reach.",
    specs: {
      Connection: "Wireless USB receiver",
      "Number pad": "Separate wireless unit",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Announcing the Sculpt Ergonomic Desktop | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2013/08/13/announcing-the-sculpt-ergonomic-desktop/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft ergonomic keyboards",
        url: "https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/33.webp",
    imageCredit: "erocsid · CC BY 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Sculpt_ergonomic_keyboard_%281%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 34,
    name: "Surface Ergonomic Keyboard",
    category: "Keyboards",
    year: 2016,
    description:
      "A Bluetooth ergonomic keyboard with a split layout, aluminum top, and Alcantara-covered palm rest.",
    specs: {
      Connection: "Bluetooth",
      Layout: "Split ergonomic",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft ergonomic keyboards",
      url: "https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 35,
    name: "Microsoft Ergonomic Keyboard",
    category: "Keyboards",
    year: 2019,
    description:
      "A wired ergonomic keyboard with a split key layout, fabric palm rest, and dedicated productivity shortcuts.",
    specs: {
      Connection: "USB",
      Layout: "Split ergonomic",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft ergonomic keyboards",
      url: "https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 36,
    name: "Microsoft IntelliMouse",
    category: "Mice",
    year: 1996,
    description:
      "An early Microsoft mouse with a clickable scroll wheel, combining scrolling and middle-button input.",
    specs: {
      Tracking: "Mechanical ball",
      Input: "Two buttons and clickable wheel",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Microsoft Announces Microsoft IntelliMouse - Source",
      url: "https://news.microsoft.com/source/1996/07/22/microsoft-announces-microsoft-intellimouse/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · IntelliMouse",
        url: "https://en.wikipedia.org/wiki/IntelliMouse",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/36.webp",
    imageCredit: "Edward Wilders · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoftintellimouseexpo98.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 37,
    name: "Microsoft IntelliMouse TrackBall",
    category: "Trackballs",
    year: 1997,
    description:
      "A finger-operated trackball paired with an IntelliMouse scroll wheel, keeping pointer movement in a stationary base.",
    specs: {
      Tracking: "Finger-operated ball",
      Connection: "PS/2 / serial",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Announces Availability of IntelliMouse TrackBall - Source",
      url: "https://news.microsoft.com/source/1997/11/14/microsoft-announces-availability-of-intellimouse-trackball/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · IntelliMouse",
        url: "https://en.wikipedia.org/wiki/IntelliMouse",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 38,
    name: "Microsoft IntelliMouse with IntelliEye",
    category: "Mice",
    year: 1999,
    description:
      "The original IntelliMouse shape updated with optical tracking, replacing the mechanical ball.",
    specs: {
      Tracking: "IntelliEye optical",
      Connection: "USB / PS/2",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft's Sleek New IntelliMouse Explorer and IntelliEye Technology Toss Out the Mouse Ball Today at COMDEX - Source",
      url: "https://news.microsoft.com/source/1999/04/19/microsofts-sleek-new-intellimouse-explorer-and-intellieye-technology-toss-out-the-mouse-ball-today-at-comdex/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · IntelliMouse",
        url: "https://en.wikipedia.org/wiki/IntelliMouse",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/38.webp",
    imageCredit: "Kokkarani · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_IntelliEye_mouse_1.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 39,
    name: "Microsoft IntelliMouse Explorer",
    category: "Mice",
    year: 1999,
    description:
      "A sculpted optical mouse with thumb buttons and a red tail light, introducing the Explorer shape.",
    specs: {
      Tracking: "IntelliEye optical",
      Buttons: "Five",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "A Microsoft Milestone: Hardware Celebrates 25 Years of Proven Success - Source",
      url: "https://news.microsoft.com/source/2007/08/22/a-microsoft-milestone-hardware-celebrates-25-years-of-proven-success/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · IntelliMouse",
        url: "https://en.wikipedia.org/wiki/IntelliMouse",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/39.webp",
    imageCredit: "GaryBGordon · Public domain",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_IntelliMouse_2001.jpg",
    imageKind: "photo",
  },
  {
    id: 40,
    name: "Microsoft IntelliMouse Optical",
    category: "Mice",
    year: 2000,
    description:
      "An ambidextrous optical mouse with side buttons, a clickable wheel, and wired connectivity.",
    specs: {
      Tracking: "Optical",
      Buttons: "Five",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · IntelliMouse",
      url: "https://en.wikipedia.org/wiki/IntelliMouse",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/40.webp",
    imageCredit: "Darkone (talk · contribs) · CC BY-SA 2.5",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:5_Tastenmaus_Microsoft_IntelliMouse_Optical_Black.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.5",
  },
  {
    id: 41,
    name: "Microsoft Wireless IntelliMouse Explorer",
    category: "Mice",
    year: 2001,
    description:
      "A wireless version of the sculpted Explorer mouse, combining optical tracking with a desktop receiver.",
    specs: {
      Tracking: "Optical",
      Connection: "Wireless receiver",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · IntelliMouse",
      url: "https://en.wikipedia.org/wiki/IntelliMouse",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 42,
    name: "Microsoft Classic IntelliMouse",
    category: "Mice",
    year: 2017,
    description:
      "A revival of the IntelliMouse Explorer shape, with BlueTrack tracking and an illuminated tail.",
    specs: {
      Tracking: "BlueTrack",
      Connection: "Wired USB",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Announcing the Microsoft Pro Intellimouse | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2019/05/28/announcing-the-microsoft-pro-intellimouse/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · IntelliMouse",
        url: "https://en.wikipedia.org/wiki/IntelliMouse",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 43,
    name: "Microsoft Pro IntelliMouse",
    category: "Mice",
    year: 2019,
    description:
      "A performance-focused IntelliMouse with a higher-specification optical sensor, textured side grips, and customizable tail lighting.",
    specs: {
      Tracking: "PixArt PAW3389 optical",
      Connection: "Wired USB",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Announcing the Microsoft Pro Intellimouse | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2019/05/28/announcing-the-microsoft-pro-intellimouse/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · IntelliMouse",
        url: "https://en.wikipedia.org/wiki/IntelliMouse",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/43.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/devices/2019/05/28/announcing-the-microsoft-pro-intellimouse/",
    imageKind: "photo",
  },
  {
    id: 44,
    name: "Microsoft Arc Mouse",
    category: "Mice",
    year: 2008,
    description:
      "The first Arc mouse used a folding rear section and a conventional scroll wheel for travel.",
    specs: {
      Design: "Hinged folding body",
      Connection: "Wireless USB receiver",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Arc Mouse",
      url: "https://en.wikipedia.org/wiki/Arc_Mouse",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/44.webp",
    imageCredit: "Evan-Amos · Public domain",
    imageSource: "https://commons.wikimedia.org/wiki/File:MS-Arc-Mouse.jpg",
    imageKind: "photo",
  },
  {
    id: 45,
    name: "Microsoft Touch Mouse",
    category: "Mice",
    year: 2011,
    description:
      "A mouse with a multitouch top surface for one-, two-, and three-finger Windows gestures.",
    specs: {
      Input: "Multitouch surface",
      Tracking: "BlueTrack",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Bring Multitouch Gestures to your Windows 7 PC with the new Touch Mouse | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2011/01/05/bring-multitouch-gestures-to-your-windows-7-pc-with-the-new-touch-mouse/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/45.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 46,
    name: "Microsoft Explorer Touch Mouse",
    category: "Mice",
    year: 2011,
    description:
      "A BlueTrack mouse with a touch strip for horizontal and vertical scrolling and tactile feedback.",
    specs: {
      Input: "Four-way touch strip",
      Tracking: "BlueTrack",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Announcing the Explorer Touch Mouse | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2011/07/19/announcing-the-explorer-touch-mouse/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/46.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 47,
    name: "Microsoft Wedge Touch Mouse",
    category: "Mice",
    year: 2012,
    description:
      "A pocket-sized Bluetooth mouse with a wedge-shaped body and a touch surface for four-way scrolling.",
    specs: {
      Connection: "Bluetooth",
      Tracking: "BlueTrack",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "New Windows 8-ready mice and keyboards from Microsoft Hardware | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2012/07/30/new-windows-8-ready-mice-and-keyboards-from-microsoft-hardware/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/47.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 48,
    name: "Microsoft Sculpt Touch Mouse",
    category: "Mice",
    year: 2012,
    description:
      "A compact Bluetooth mouse with a four-way touch strip, designed for navigating long pages and Windows interfaces.",
    specs: {
      Connection: "Bluetooth",
      Input: "Four-way touch strip",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "New Windows 8-ready mice and keyboards from Microsoft Hardware | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2012/07/30/new-windows-8-ready-mice-and-keyboards-from-microsoft-hardware/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/48.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 49,
    name: "Microsoft Sculpt Comfort Mouse",
    category: "Mice",
    year: 2013,
    description:
      "A Bluetooth mouse with a blue Windows touch tab that supports clicking and swiping between applications.",
    specs: {
      Connection: "Bluetooth",
      Input: "Windows touch tab",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Announcing Sculpt Comfort Mouse & Mobile Mouse | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2013/05/23/announcing-sculpt-comfort-mouse-mobile-mouse/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 50,
    name: "Microsoft Sculpt Ergonomic Mouse",
    category: "Mice",
    year: 2013,
    description:
      "A rounded mouse with a thumb recess, Windows button, and four-way wheel, paired with the Sculpt ergonomic family.",
    specs: {
      Connection: "Wireless USB receiver",
      Tracking: "BlueTrack",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Announcing the Sculpt Ergonomic Desktop | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2013/08/13/announcing-the-sculpt-ergonomic-desktop/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/50.webp",
    imageCredit: "Mack Male from Edmonton, AB, Canada · CC BY-SA 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AMicrosoft%20Sculpt%20Ergonomic%20Mouse%20%2813491077733%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.0",
  },
  {
    id: 51,
    name: "Microsoft Explorer Mouse",
    category: "Mice",
    year: 2008,
    description:
      "A full-size wireless mouse that introduced BlueTrack tracking alongside a rechargeable design and charging base.",
    specs: {
      Tracking: "BlueTrack",
      Power: "Rechargeable",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Unveils World’s Most Advanced Tracking Technology - Source",
      url: "https://news.microsoft.com/source/2008/09/09/microsoft-unveils-worlds-most-advanced-tracking-technology/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/51.webp",
    imageCredit: "Mayuki Sawatari · CC BY 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AMicrosoft%20Explorer%20Mouse%20%283004730185%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 52,
    name: "Microsoft Explorer Mini Mouse",
    category: "Mice",
    year: 2008,
    description:
      "A smaller Explorer mouse that brought BlueTrack tracking to a portable, battery-powered design.",
    specs: {
      Tracking: "BlueTrack",
      Format: "Portable mouse",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Unveils World’s Most Advanced Tracking Technology - Source",
      url: "https://news.microsoft.com/source/2008/09/09/microsoft-unveils-worlds-most-advanced-tracking-technology/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 53,
    name: "Microsoft Optical Mouse by S+ARCK",
    category: "Mice",
    year: 2004,
    description:
      "A Philippe Starck-designed optical mouse with a rounded shell and illuminated center strip.",
    specs: {
      Designer: "Philippe Starck",
      Tracking: "Optical",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft and Philippe Starck Unite to Create Performance Art - Source",
      url: "https://news.microsoft.com/source/2004/07/08/microsoft-and-philippe-starck-unite-to-create-performance-art/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 54,
    name: "Microsoft Wedge Mobile Keyboard",
    category: "Keyboards",
    year: 2012,
    description:
      "A Bluetooth tablet keyboard whose protective cover folds into a tablet stand.",
    specs: {
      Connection: "Bluetooth",
      Accessory: "Cover converts to stand",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "New Windows 8-ready mice and keyboards from Microsoft Hardware | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2012/07/30/new-windows-8-ready-mice-and-keyboards-from-microsoft-hardware/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/54.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 55,
    name: "Microsoft Sculpt Mobile Keyboard",
    category: "Keyboards",
    year: 2012,
    description:
      "A portable Bluetooth keyboard with a curved key layout and Windows 8 shortcut keys.",
    specs: {
      Connection: "Bluetooth",
      Layout: "Curved compact",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "New Windows 8-ready mice and keyboards from Microsoft Hardware | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2012/07/30/new-windows-8-ready-mice-and-keyboards-from-microsoft-hardware/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/55.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 56,
    name: "Microsoft Sculpt Comfort Keyboard",
    category: "Keyboards",
    year: 2012,
    description:
      "A curved desktop keyboard with a detachable palm rest and a split spacebar with optional backspace functionality.",
    specs: {
      Layout: "Curved with split spacebar",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Hardware announces Sculpt Comfort Keyboard | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2012/09/19/microsoft-hardware-announces-sculpt-comfort-keyboard/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/56.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 57,
    name: "Microsoft Universal Mobile Keyboard",
    category: "Keyboards",
    year: 2014,
    description:
      "A compact Bluetooth keyboard with a protective cover and device switch for Windows, Android, and iOS.",
    specs: {
      Connection: "Bluetooth",
      Platforms: "Windows / Android / iOS",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Microsoft Accessories Press Materials - Stories",
      url: "https://news.microsoft.com/accessories-press-materials/",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 58,
    name: "Microsoft Universal Foldable Keyboard",
    category: "Keyboards",
    year: 2015,
    description:
      "A thin Bluetooth keyboard that folds in half and switches between two paired devices.",
    specs: {
      Connection: "Bluetooth",
      Design: "Folding, spill-resistant",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Universal Foldable Keyboard Now Available | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2015/07/14/microsoft-universal-foldable-keyboard-now-available/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/58.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/windowsexperience/2015/07/14/microsoft-universal-foldable-keyboard-now-available/",
    imageKind: "photo",
  },
  {
    id: 59,
    name: "Microsoft All-in-One Media Keyboard",
    category: "Keyboards",
    year: 2014,
    description:
      "A living-room keyboard with an integrated multitouch trackpad and media controls for a connected PC.",
    specs: {
      Connection: "Wireless USB receiver",
      Input: "Integrated multitouch trackpad",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Microsoft Accessories Press Materials - Stories",
      url: "https://news.microsoft.com/accessories-press-materials/",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 60,
    name: "Microsoft Designer Compact Keyboard",
    category: "Keyboards",
    year: 2020,
    description:
      "A low-profile Bluetooth keyboard with a compact layout and switching for up to three paired devices.",
    specs: {
      Connection: "Bluetooth",
      Pairing: "Up to three devices",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Use Microsoft Designer Compact Keyboard | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/accessories/mouse-keyboard/use-microsoft-designer-compact-keyboard",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title:
          "Introducing Surface Laptop Go, new updates to Surface Pro X and new accessories | Microsoft Devices Blog",
        url: "https://blogs.windows.com/devices/2020/10/01/introducing-surface-laptop-go-new-updates-to-surface-pro-x-and-new-accessories/",
        kind: "Microsoft archive",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/60.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/accessories/mouse-keyboard/use-microsoft-designer-compact-keyboard",
    imageKind: "diagram",
  },
  {
    id: 61,
    name: "Microsoft Bluetooth Ergonomic Mouse",
    category: "Mice",
    year: 2020,
    description:
      "A wireless mouse with a sculpted thumb rest, customizable buttons, and switching between paired devices.",
    specs: {
      Connection: "Bluetooth",
      Pairing: "Up to three devices",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Use Microsoft Bluetooth Ergonomic Mouse | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/accessories/mouse-keyboard/use-microsoft-bluetooth-ergonomic-mouse",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title:
          "Introducing Surface Laptop Go, new updates to Surface Pro X and new accessories | Microsoft Devices Blog",
        url: "https://blogs.windows.com/devices/2020/10/01/introducing-surface-laptop-go-new-updates-to-surface-pro-x-and-new-accessories/",
        kind: "Microsoft archive",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/61.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/accessories/mouse-keyboard/use-microsoft-bluetooth-ergonomic-mouse",
    imageKind: "diagram",
  },
  {
    id: 62,
    name: "Surface Arc Mouse",
    category: "Mice",
    year: 2017,
    description:
      "A travel mouse that snaps flat to switch off, with a broad touch surface for vertical and horizontal scrolling.",
    specs: {
      Connection: "Bluetooth",
      Input: "Full scroll plane",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Arc Mouse",
      url: "https://en.wikipedia.org/wiki/Arc_Mouse",
      kind: "Wikipedia",
    },
    additionalSources: [
      {
        title: "Microsoft Store · Surface Arc Mouse",
        url: "https://www.microsoft.com/en-us/d/surface-arc-mouse/8p5sv2rx3rn5",
        kind: "Microsoft",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/62.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/surface-arc-mouse/8p5sv2rx3rn5",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 63,
    name: "Microsoft Wireless Mobile Mouse 3500",
    category: "Mice",
    year: 2010,
    description:
      "A compact BlueTrack mouse with a small USB receiver that can remain in a laptop while travelling.",
    specs: {
      Tracking: "BlueTrack",
      Connection: "Wireless USB nano receiver",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Go Anywhere for Less: Microsoft Hardware Offers BlueTrack Technology at Its Lowest Price Ever - Source",
      url: "https://news.microsoft.com/source/2010/02/24/go-anywhere-for-less-microsoft-hardware-offers-bluetrack-technology-at-its-lowest-price-ever/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/63.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 64,
    name: "Microsoft SideWinder 3D Pro",
    category: "Game Controllers",
    year: 1995,
    description:
      "A flight joystick with a twisting handle, throttle control, and a digital game-port interface.",
    specs: {
      Input: "Joystick with twist axis",
      Connection: "Game port",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft SideWinder",
      url: "https://en.wikipedia.org/wiki/Microsoft_SideWinder",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/64.webp",
    imageCredit: "Smirnoff103 at English Wikipedia · CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Sidewinder_3D_Pro.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/licenses/by-sa/3.0/",
  },
  {
    id: 65,
    name: "Microsoft SideWinder Force Feedback Pro",
    category: "Game Controllers",
    year: 1997,
    description:
      "A flight joystick that used motorized force feedback to convey movement and effects from supported games.",
    specs: {
      Input: "Force-feedback joystick",
      Connection: "Game port",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft SideWinder",
      url: "https://en.wikipedia.org/wiki/Microsoft_SideWinder",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/65.webp",
    imageCredit: "Scanjo99 · CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Force_Feedback_Pro.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  {
    id: 66,
    name: "Microsoft SideWinder Force Feedback 2",
    category: "Game Controllers",
    year: 2000,
    description:
      "A USB flight joystick with force feedback, a twist rudder, and programmable controls.",
    specs: {
      Input: "Force-feedback joystick",
      Connection: "USB",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Microsoft in Tune With Gamers' Senses - Source",
      url: "https://news.microsoft.com/source/2000/03/01/microsoft-in-tune-with-gamers-senses/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft SideWinder",
        url: "https://en.wikipedia.org/wiki/Microsoft_SideWinder",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/66.webp",
    imageCredit: "Oliver Mezger · CC BY-SA 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AMS-FF2-JoyStick%20%283839550620%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.0",
  },
  {
    id: 67,
    name: "Microsoft SideWinder Strategic Commander",
    category: "Game Controllers",
    year: 2000,
    description:
      "A left-hand strategy-game controller with a sliding, rotating grip and programmable buttons.",
    specs: {
      Input: "Sliding / rotating controller",
      Connection: "USB",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Microsoft in Tune With Gamers' Senses - Source",
      url: "https://news.microsoft.com/source/2000/03/01/microsoft-in-tune-with-gamers-senses/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft SideWinder",
        url: "https://en.wikipedia.org/wiki/Microsoft_SideWinder",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/67.webp",
    imageCredit: "CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Ms_sidewinder_sc_right.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/licenses/by-sa/3.0/",
  },
  {
    id: 68,
    name: "Microsoft SideWinder Game Pad",
    category: "Game Controllers",
    year: 1996,
    description:
      "A PC gamepad with six face buttons, shoulder buttons, and a directional pad, introduced for Windows games.",
    specs: {
      Input: "Directional pad and buttons",
      Connection: "Game port",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft SideWinder",
      url: "https://en.wikipedia.org/wiki/Microsoft_SideWinder",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/68.webp",
    imageCredit: "Julien Jorge · CC BY-SA 3.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Ms_sidewinder.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/licenses/by-sa/3.0/",
  },
  {
    id: 69,
    name: "Microsoft SideWinder X6 Keyboard",
    category: "Keyboards",
    year: 2008,
    description:
      "A backlit gaming keyboard with a detachable number pad that can be placed on either side.",
    specs: {
      Input: "Programmable macros",
      "Number pad": "Detachable, left or right",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft SideWinder",
      url: "https://en.wikipedia.org/wiki/Microsoft_SideWinder",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 70,
    name: "Microsoft SideWinder X4 Keyboard",
    category: "Keyboards",
    year: 2010,
    description:
      "A backlit gaming keyboard with anti-ghosting support, macro recording, and a fixed number pad.",
    specs: {
      Input: "Anti-ghosting / programmable macros",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft SideWinder",
      url: "https://en.wikipedia.org/wiki/Microsoft_SideWinder",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/70.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 71,
    name: "Microsoft LifeCam Cinema",
    category: "Webcams",
    year: 2009,
    description:
      "A cylindrical webcam with a native widescreen HD sensor, autofocus, and a built-in microphone.",
    specs: {
      Video: "720p",
      Lens: "Autofocus",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing the Microsoft LifeCam Cinema | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2009/08/20/introducing-the-microsoft-lifecam-cinema/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · LifeCam",
        url: "https://en.wikipedia.org/wiki/LifeCam",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/71.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 72,
    name: "Microsoft LifeCam HD-3000",
    category: "Webcams",
    year: 2011,
    description:
      "A USB webcam with widescreen HD video and a flexible mounting base for a monitor or notebook.",
    specs: {
      Video: "720p",
      Connection: "USB",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · LifeCam",
      url: "https://en.wikipedia.org/wiki/LifeCam",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/72.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 73,
    name: "Microsoft LifeChat LX-3000",
    category: "Audio",
    year: 2006,
    description:
      "A USB stereo headset with a noise-cancelling boom microphone and inline audio controls.",
    specs: {
      Connection: "USB",
      Input: "Boom microphone",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Expands Digital Communications Line With Notebook LifeCam Featuring Industry’s Highest Video and Still Resolution - Source",
      url: "https://news.microsoft.com/source/2006/09/13/microsoft-expands-digital-communications-line-with-notebook-lifecam-featuring-industrys-highest-video-and-still-resolution/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/73.webp",
    imageCredit:
      "Microsoft Hardware Product Catalogue 2013 · extracted product photograph",
    imageSource:
      "https://download.microsoft.com/documents/uk/hardware/Consumer_HW_Brochure_FY13_FINAL.pdf",
    imageKind: "photo",
  },
  {
    id: 74,
    name: "Surface Headphones",
    category: "Audio",
    year: 2018,
    description:
      "The original Surface over-ear headphones combined adjustable noise cancellation with rotating earcup dials.",
    specs: {
      Connection: "Bluetooth / 3.5 mm",
      Controls: "Rotating earcup dials",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Meet Surface Pro 6, Surface Laptop 2, Surface Studio 2 and Surface Headphones | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2018/10/02/meet-surface-pro-6-surface-laptop-2-surface-studio-2-and-surface-headphones/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · List of Microsoft Surface accessories",
        url: "https://en.wikipedia.org/wiki/List_of_Microsoft_Surface_accessories",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 75,
    name: "Surface Earbuds",
    category: "Audio",
    year: 2020,
    description:
      "Wireless earbuds with a broad touch surface, charging case, and integration with supported Microsoft 365 apps.",
    specs: {
      Connection: "Bluetooth",
      Format: "True wireless earbuds",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing Surface Go 2, Surface Book 3, Surface Headphones 2 and Surface Earbuds | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2020/05/06/introducing-surface-go-2-surface-book-3-surface-headphones-2-and-surface-earbuds/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · List of Microsoft Surface accessories",
        url: "https://en.wikipedia.org/wiki/List_of_Microsoft_Surface_accessories",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/75.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/devices/2020/05/06/introducing-surface-go-2-surface-book-3-surface-headphones-2-and-surface-earbuds/",
    imageKind: "photo",
  },
  {
    id: 76,
    name: "Microsoft Band 2",
    category: "Wearables",
    year: 2015,
    description:
      "A second-generation fitness band with a curved display, optical heart-rate monitoring, GPS, and a barometer.",
    specs: {
      Display: "Curved AMOLED",
      Sensors: "GPS / heart rate / barometer",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft Band 2",
      url: "https://en.wikipedia.org/wiki/Microsoft_Band_2",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/76.webp",
    imageCredit: "Pmattes · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Band_2_20151024_145235.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 77,
    name: "Microsoft HoloLens 2",
    category: "Mixed Reality",
    year: 2019,
    description:
      "A standalone mixed-reality headset with articulated hand tracking, eye tracking, and a flip-up visor.",
    specs: {
      Processor: "Snapdragon 850",
      Input: "Hand and eye tracking",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "HoloLens 2 gives Microsoft the edge in next generation of computing",
      url: "https://news.microsoft.com/innovation-stories/hololens-2/",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · HoloLens 2",
        url: "https://en.wikipedia.org/wiki/HoloLens_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/77.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource: "https://news.microsoft.com/innovation-stories/hololens-2/",
    imageKind: "photo",
  },
  {
    id: 78,
    name: "Azure Kinect DK",
    category: "Development",
    year: 2019,
    description:
      "A developer sensor kit combining a time-of-flight depth camera, color camera, and microphone array.",
    specs: {
      "Depth sensor": "1 MP time-of-flight",
      Audio: "Seven-microphone array",
      "Color camera": "12 MP CMOS rolling shutter",
      Weight: "440 g",
      Dimensions: "103 × 39 × 126 mm",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Azure Kinect DK hardware specifications | Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/azure/kinect-dk/hardware-specification",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Azure Kinect",
        url: "https://en.wikipedia.org/wiki/Azure_Kinect",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/78.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://learn.microsoft.com/en-us/azure/kinect-dk/hardware-specification",
    imageKind: "diagram",
  },
  {
    id: 79,
    name: "Microsoft Fingerprint Reader",
    category: "Security",
    year: 2004,
    description:
      "A desktop USB fingerprint reader for supported Windows logon and password-management workflows of its era.",
    specs: {
      Connection: "USB",
      Input: "Fingerprint sensor",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft Fingerprint Reader",
      url: "https://en.wikipedia.org/wiki/Microsoft_Fingerprint_Reader",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/79.webp",
    imageCredit:
      "Original uploader was Bluessound at nl.wikipedia\n\n(Original text : gemaakt door nl:Gebruiker:Bluessound) · CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Fingerprint_Reader.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/licenses/by-sa/3.0/",
  },
  {
    id: 80,
    name: "Microsoft Broadband Wireless Base Station MN-500",
    category: "Networking",
    year: 2002,
    description:
      "An early home-networking router that combined 802.11b wireless access with four wired Ethernet ports.",
    specs: {
      Wireless: "802.11b",
      Ports: "Four 10/100 Ethernet LAN",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft Broadband Networking",
      url: "https://en.wikipedia.org/wiki/Microsoft_Broadband_Networking",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 81,
    name: "Microsoft Broadband Wireless Base Station MN-700",
    category: "Networking",
    year: 2003,
    description:
      "A home router that upgraded Microsoft Broadband Networking to the faster 802.11g wireless standard.",
    specs: {
      Wireless: "802.11g",
      Format: "Wireless router",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft Broadband Networking",
      url: "https://en.wikipedia.org/wiki/Microsoft_Broadband_Networking",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 82,
    name: "Zune 80",
    category: "Zune",
    year: 2007,
    description:
      "A second-generation hard-drive Zune with a touch-sensitive navigation pad, Wi-Fi sharing, and FM radio.",
    specs: {
      Storage: "80 GB hard drive",
      Connection: "Wi-Fi / USB",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Unveils Device Customization via New Zune Originals Store, New Zune Players Available Tomorrow - Source",
      url: "https://news.microsoft.com/source/2007/11/12/microsoft-unveils-device-customization-via-new-zune-originals-store-new-zune-players-available-tomorrow/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Zune 80, 120",
        url: "https://en.wikipedia.org/wiki/Zune_80,_120",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/82.webp",
    imageCredit: "Bkwparadox · CC BY-SA 3.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Zune80and4.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/licenses/by-sa/3.0/",
    imageNote: "From left; Zune 80/120 and Zune 4/8/16 menu system",
  },
  {
    id: 83,
    name: "Zune 4 / 8 / 16",
    category: "Zune",
    year: 2007,
    description:
      "A flash-based Zune with a smaller body and touch-sensitive navigation pad; the 16 GB model followed in 2008.",
    specs: {
      Storage: "4 / 8 / 16 GB flash",
      Connection: "Wi-Fi / USB",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Unveils Device Customization via New Zune Originals Store, New Zune Players Available Tomorrow - Source",
      url: "https://news.microsoft.com/source/2007/11/12/microsoft-unveils-device-customization-via-new-zune-originals-store-new-zune-players-available-tomorrow/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel:
      "4 GB and 8 GB models launched in 2007; the 16 GB capacity followed in 2008.",
    imageUrl: "/images/catalogue/83.webp",
    imageCredit: "Bkwparadox · CC BY-SA 3.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Zune80and4.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/licenses/by-sa/3.0/",
    imageNote: "From left; Zune 80/120 and Zune 4/8/16 menu system",
  },
  {
    id: 84,
    name: "Zune HD",
    category: "Zune",
    year: 2009,
    description:
      "A touchscreen Zune with an OLED display, HD Radio, Wi-Fi, and video output through an optional dock.",
    specs: {
      Display: "3.3-inch OLED",
      Processor: "Nvidia Tegra",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Zune HD",
      url: "https://en.wikipedia.org/wiki/Zune_HD",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/84.webp",
    imageCredit: "Deggle · CC BY 2.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Zune_HD.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 85,
    name: "Microsoft Kin ONE",
    category: "Phones",
    year: 2010,
    description:
      "A compact social-focused phone with a slide-out keyboard, developed by Microsoft and manufactured by Sharp.",
    specs: {
      Input: "Slide-out QWERTY keyboard",
      Manufacturer: "Sharp for Microsoft",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft Kin",
      url: "https://en.wikipedia.org/wiki/Microsoft_Kin",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel:
      "First sold in May 2010; Kin used Windows CE, not Windows Phone.",
  },
  {
    id: 86,
    name: "Microsoft Kin TWO",
    category: "Phones",
    year: 2010,
    description:
      "The larger Kin phone paired a landscape slide-out keyboard with an eight-megapixel camera.",
    specs: {
      Input: "Landscape slide-out keyboard",
      Camera: "8 MP",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft Kin",
      url: "https://en.wikipedia.org/wiki/Microsoft_Kin",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel:
      "First sold in May 2010; Kin used Windows CE, not Windows Phone.",
    imageUrl: "/images/catalogue/86.webp",
    imageCredit: "Evan-Amos · Public domain",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft-Sharp-Kin-Two-Phone-Open.jpg",
    imageKind: "photo",
  },
  {
    id: 87,
    name: "Microsoft Lumia 535",
    category: "Phones",
    year: 2014,
    description:
      "The first Microsoft-branded Lumia combined a five-inch display with five-megapixel front and rear cameras.",
    specs: {
      Display: "5-inch",
      "Launch OS": "Windows Phone 8.1",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "High five for Microsoft Lumia 535 | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2014/11/11/lumia-535/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft Lumia 535",
        url: "https://en.wikipedia.org/wiki/Microsoft_Lumia_535",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/87.webp",
    imageCredit: "Kārlis Dambrāns from Latvia · CC BY 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Lumia_535_%2815898895398%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 88,
    name: "Microsoft Lumia 640",
    category: "Phones",
    year: 2015,
    description:
      "An affordable Lumia with a five-inch HD screen, removable battery, and Windows Phone 8.1 at launch.",
    specs: {
      Display: "5-inch, 1280 × 720",
      Processor: "Snapdragon 400",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Announcing the Lumia 640 and Lumia 640 XL | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2015/03/02/announcing-the-lumia-640-and-lumia-640-xl/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft Lumia 640",
        url: "https://en.wikipedia.org/wiki/Microsoft_Lumia_640",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/88.webp",
    imageCredit: "Raimond Spekking · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AMicrosoft%20Lumia%20640%2C%20model%20RM-1077%2C%20orange-47223.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 89,
    name: "Microsoft Lumia 640 XL",
    category: "Phones",
    year: 2015,
    description:
      "A larger Lumia 640 variant with a 5.7-inch display and a thirteen-megapixel rear camera.",
    specs: {
      Display: "5.7-inch, 1280 × 720",
      Camera: "13 MP rear",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Announcing the Lumia 640 and Lumia 640 XL | Windows Experience Blog",
      url: "https://blogs.windows.com/windowsexperience/2015/03/02/announcing-the-lumia-640-and-lumia-640-xl/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft Lumia 640",
        url: "https://en.wikipedia.org/wiki/Microsoft_Lumia_640",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/89.webp",
    imageCredit: "Maurizio Pesce · CC BY 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AMicrosoft%20Lumia%20640%20XL%20%28cropped%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 90,
    name: "Microsoft Lumia 650",
    category: "Phones",
    year: 2016,
    description:
      "A thin, metal-framed Lumia with a five-inch OLED screen and Windows 10 Mobile.",
    specs: {
      Display: "5-inch OLED",
      "Launch OS": "Windows 10 Mobile",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Microsoft Lumia 650: sophisticated, metal design and Windows 10 under $200 USD | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2016/02/15/microsoft-lumia-650-sophisticated-metal-design-and-windows-10-under-200-usd",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft Lumia 650",
        url: "https://en.wikipedia.org/wiki/Microsoft_Lumia_650",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/90.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/devices/2016/02/15/microsoft-lumia-650-sophisticated-metal-design-and-windows-10-under-200-usd",
    imageKind: "photo",
  },
  {
    id: 91,
    name: "Microsoft Lumia 950",
    category: "Phones",
    year: 2015,
    description:
      "A flagship Lumia with a high-resolution OLED screen, a twenty-megapixel camera, and support for Continuum.",
    specs: {
      Display: "5.2-inch, 2560 × 1440",
      Processor: "Snapdragon 808",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Camera magic on Microsoft Lumia 950 and Lumia 950 XL | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2015/10/15/camera-magic-on-microsoft-lumia-950-and-lumia-950-xl",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft Lumia 950",
        url: "https://en.wikipedia.org/wiki/Microsoft_Lumia_950",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/91.webp",
    imageCredit: "Indrek Haav · CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Lumia950.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 92,
    name: "Microsoft Lumia 950 XL",
    category: "Phones",
    year: 2015,
    description:
      "The larger Lumia flagship paired a 5.7-inch OLED display with Snapdragon 810 and liquid cooling.",
    specs: {
      Display: "5.7-inch, 2560 × 1440",
      Processor: "Snapdragon 810",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Camera magic on Microsoft Lumia 950 and Lumia 950 XL | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2015/10/15/camera-magic-on-microsoft-lumia-950-and-lumia-950-xl",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft Lumia 950 XL",
        url: "https://en.wikipedia.org/wiki/Microsoft_Lumia_950_XL",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/92.webp",
    imageCredit: "Ommelander1984Uploader · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Lumia_950_XL_%28Black%29_front.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 93,
    name: "Nokia Lumia 920",
    category: "Phones",
    year: 2012,
    description:
      "A Nokia Windows Phone flagship with optical image stabilization and integrated wireless charging.",
    specs: {
      Display: "4.5-inch",
      Manufacturer: "Nokia",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Get a feel for Nokia’s super sensitive touch displays | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2012/10/02/get-a-feel-for-nokias-super-sensitive-touch-displays",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Nokia Lumia 920",
        url: "https://en.wikipedia.org/wiki/Nokia_Lumia_920",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/93.webp",
    imageCredit: "N i c o l a · CC BY 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Nokia_Lumia_920_-_Caledos_Runner.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 94,
    name: "Nokia Lumia 1020",
    category: "Phones",
    year: 2013,
    description:
      "A camera-focused Nokia Lumia with a forty-one-megapixel PureView sensor and optical image stabilization.",
    specs: {
      Camera: "41 MP PureView",
      Manufacturer: "Nokia",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Ellie Goulding stars in amazing Nokia Lumia 1020 music video | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2013/11/13/going-gould-ellie-stars-worlds-first-nokia-lumia-1020-music-video",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Nokia Lumia 1020",
        url: "https://en.wikipedia.org/wiki/Nokia_Lumia_1020",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/94.webp",
    imageCredit: "Cryonic07 · CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Nokia_Lumia_1020_front.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  {
    id: 95,
    name: "Surface Pro (1st generation)",
    category: "Surface",
    year: 2013,
    description:
      "The first Intel-powered Surface ran desktop Windows and included an active pen.",
    specs: {
      Processor: "Intel Core i5",
      Display: "10.6-inch, 1920 × 1080",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro (1st Gen) specifications | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-1st-gen-specifications",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Pro (1st generation)",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_(1st_generation)",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/95.webp",
    imageCredit: "Intel Free Press · CC BY-SA 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Virginia_Ballot_on_Microsoft_Surface_Pro_Tablet.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.0",
  },
  {
    id: 96,
    name: "Surface 2",
    category: "Surface",
    year: 2013,
    description:
      "The second Windows RT tablet upgraded the original Surface with Tegra 4 and a Full HD display.",
    specs: {
      Processor: "Nvidia Tegra 4",
      Display: "10.6-inch, 1920 × 1080",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface 2 specifications | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-2-specifications",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface 2",
        url: "https://en.wikipedia.org/wiki/Surface_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/96.webp",
    imageCredit: "Kārlis Dambrāns from Latvia · CC BY 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Surface_2_-_Windows_8_Logon_screen_%2812907863644%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 97,
    name: "Surface 3",
    category: "Surface",
    year: 2015,
    description:
      "A smaller Surface that switched from ARM and Windows RT to Intel Atom and full Windows.",
    specs: {
      Processor: "Intel Atom x7",
      Display: "10.8-inch, 1920 × 1280",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface 3 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-3-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface 3",
        url: "https://en.wikipedia.org/wiki/Surface_3",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/97.webp",
    imageCredit: "Yea55 · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Surface_3_with_type_cover_and_stylus.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 98,
    name: "Surface Pro 2",
    category: "Surface",
    year: 2013,
    description:
      "A Haswell-powered Surface Pro with a two-position kickstand and improved battery life over its predecessor.",
    specs: {
      Processor: "Intel Core i5, 4th generation",
      Display: "10.6-inch, 1920 × 1080",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro 2 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-2-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Pro 2",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/98.webp",
    imageCredit: "Vernon Chan · CC BY 2.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Surface_Pro_2.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 99,
    name: "Surface Pro 4",
    category: "Surface",
    year: 2015,
    description:
      "A thinner Surface Pro that introduced a larger 12.3-inch display and sixth-generation Intel Core processors.",
    specs: {
      Processor: "Intel Core, 6th generation",
      Display: "12.3-inch, 2736 × 1824",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro 4 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-4-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Pro 4",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_4",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/99.webp",
    imageCredit: "Dienthoaiquangcao12 · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Surface_Pro_4.png",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 100,
    name: "Surface Pro (2017)",
    category: "Surface",
    year: 2017,
    description:
      "The fifth-generation Surface Pro refined the detachable design with seventh-generation Intel processors and an expanded kickstand angle.",
    specs: {
      Processor: "Intel Core, 7th generation",
      Display: "12.3-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro (5th Gen) specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-5th-gen-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Pro (2017)",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_(2017)",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/100.webp",
    imageCredit: "Takeaway · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3A2019%2002%20Microsoft%20Surface%20Pro%202017%20with%20signature%20type%20cover.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 101,
    name: "Surface Pro 6",
    category: "Surface",
    year: 2018,
    description:
      "A Surface Pro refresh with eighth-generation Intel Core processors and an optional black finish.",
    specs: {
      Processor: "Intel Core, 8th generation",
      Display: "12.3-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro 6 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-6-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Pro 6",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_6",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/101.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-pro-6-specs-and-features",
    imageKind: "diagram",
  },
  {
    id: 102,
    name: "Surface Pro 7",
    category: "Surface",
    year: 2019,
    description:
      "A tenth-generation Intel Surface Pro that replaced Mini DisplayPort with USB-C.",
    specs: {
      Processor: "Intel Core, 10th generation",
      Display: "12.3-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro 7 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-7-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Pro 7",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_7",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/102.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-pro-7-specs-and-features",
    imageKind: "diagram",
  },
  {
    id: 103,
    name: "Surface Pro 7+",
    category: "Surface",
    year: 2021,
    description:
      "A business-oriented Pro update with eleventh-generation Intel processors, removable SSD storage, and optional LTE.",
    specs: {
      Processor: "Intel Core, 11th generation",
      Storage: "Removable SSD",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro 7+ features and specs | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-7-features-and-specs",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title:
          "Introducing Surface Pro 7+ for Business: Purpose-built to empower people, teams and classrooms in the new digital age | Microsoft Devices Blog",
        url: "https://blogs.windows.com/devices/2021/01/11/introducing-surface-pro-7-for-business-purpose-built-to-empower-people-teams-and-classrooms-in-the-new-digital-age/",
        kind: "Microsoft archive",
      },
      {
        title: "Wikipedia · Surface Pro 7",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_7",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/103.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-pro-7-features-and-specs",
    imageKind: "diagram",
  },
  {
    id: 104,
    name: "Surface Pro 8",
    category: "Surface",
    year: 2021,
    description:
      "A redesigned Intel Surface Pro with a thirteen-inch 120 Hz display and Thunderbolt 4 ports.",
    specs: {
      Display: "13-inch, up to 120 Hz",
      Ports: "Two Thunderbolt 4",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro 8 features and specs | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-8-features-and-specs",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title:
          "Introducing new Surface products, built for Windows 11 | Microsoft Devices Blog",
        url: "https://blogs.windows.com/devices/2021/09/22/introducing-new-surface-products-built-for-windows-11/",
        kind: "Microsoft archive",
      },
      {
        title: "Wikipedia · Surface Pro 8",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_8",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/104.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-pro-8-features-and-specs",
    imageKind: "diagram",
  },
  {
    id: 105,
    name: "Surface Pro 9",
    category: "Surface",
    year: 2022,
    description:
      "A unified Surface Pro family offered Intel models or an ARM-based SQ3 version with 5G.",
    specs: {
      Processor: "Intel Core, 12th generation / Microsoft SQ3",
      Display: "13-inch, up to 120 Hz",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing new Surface devices that take the Windows PC into the next era of computing | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2022/10/12/introducing-new-surface-devices-that-take-the-windows-pc-into-the-next-era-of-computing/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Pro 9",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_9",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/105.webp",
    imageCredit: "Kyler Chin · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Surface_Pro_9_in_Sapphire_colour.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 106,
    name: "Surface Pro 10 for Business",
    category: "Surface",
    year: 2024,
    description:
      "A business-focused Surface Pro with Intel Core Ultra processors and a built-in neural processing unit.",
    specs: {
      Processor: "Intel Core Ultra",
      Display: "13-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro 10 for Business features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-10-for-business-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Pro 10",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_10",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/106.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-pro-10-for-business-features",
    imageKind: "diagram",
  },
  {
    id: 107,
    name: "Surface Pro 11th Edition (Snapdragon)",
    category: "Surface",
    year: 2024,
    description:
      "A Copilot+ Surface Pro with Snapdragon X processors and a choice of LCD or OLED displays.",
    specs: {
      Processor: "Snapdragon X Plus / X Elite",
      Display: "13-inch; OLED option",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Pro (11th Edition) features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-pro-11th-edition-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Pro 11th Edition",
        url: "https://en.wikipedia.org/wiki/Surface_Pro_11th_Edition",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/107.webp",
    imageCredit: "KK IN HK · Public domain",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Surface_Pro.jpg",
    imageKind: "photo",
  },
  {
    id: 108,
    name: "Surface Pro 12-inch (1st Edition)",
    category: "Surface",
    year: 2025,
    description:
      "A compact, fanless Surface Pro with Snapdragon X Plus and a twelve-inch touchscreen.",
    specs: {
      Processor: "Snapdragon X Plus, 8-core",
      Display: "12-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing all-new Surface Copilot+ PCs: The Surface Pro, 12-inch and Surface Laptop, 13-inch | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2025/05/06/introducing-all-new-surface-copilot-pcs-the-surface-pro-12-inch-and-surface-laptop-13-inch/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/108.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/devices/2025/05/06/introducing-all-new-surface-copilot-pcs-the-surface-pro-12-inch-and-surface-laptop-13-inch/",
    imageKind: "photo",
  },
  {
    id: 109,
    name: "Surface Go",
    category: "Surface",
    year: 2018,
    description:
      "A compact ten-inch Surface with a kickstand, Intel Pentium processor, and optional keyboard cover.",
    specs: {
      Processor: "Intel Pentium Gold 4415Y",
      Display: "10-inch, 1800 × 1200",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Meet Surface Go, starting at $399 MSRP, it’s the smallest and most affordable Surface yet | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2018/07/09/meet-surface-go-starting-at-399-msrp-its-the-smallest-and-most-affordable-surface-yet/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Go",
        url: "https://en.wikipedia.org/wiki/Surface_Go",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/109.webp",
    imageCredit: "Munzimus_Octavius · CC0",
    imageSource: "https://commons.wikimedia.org/wiki/File:SurfaceGo1.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  },
  {
    id: 110,
    name: "Surface Go 2",
    category: "Surface",
    year: 2020,
    description:
      "A small Surface tablet that kept the Go footprint while fitting a larger 10.5-inch display.",
    specs: {
      Processor: "Intel Pentium Gold / Core m3",
      Display: "10.5-inch, 1920 × 1280",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Go 2 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-go-2-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Go 2",
        url: "https://en.wikipedia.org/wiki/Surface_Go_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/110.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-go-2-specs-and-features",
    imageKind: "diagram",
  },
  {
    id: 111,
    name: "Surface Go 3",
    category: "Surface",
    year: 2021,
    description:
      "A Windows 11 update to the compact Go tablet, with Pentium Gold or Core i3 processors.",
    specs: {
      Processor: "Intel Pentium Gold / Core i3",
      Display: "10.5-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Go 3 features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-go-3-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Go 3",
        url: "https://en.wikipedia.org/wiki/Surface_Go_3",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/111.webp",
    imageCredit: "Redaltise · CC BY 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:MS_Surface_Go_3.png",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/4.0",
  },
  {
    id: 112,
    name: "Surface Go 4 for Business",
    category: "Surface",
    year: 2023,
    description:
      "A business-focused Go tablet with Intel N200, removable storage, and more serviceable internal components.",
    specs: {
      Processor: "Intel N200",
      Display: "10.5-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Go 4 features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-go-4-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Go 4",
        url: "https://en.wikipedia.org/wiki/Surface_Go_4",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/112.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-go-4-features",
    imageKind: "diagram",
    imageNote:
      "Shared hardware diagram published by Microsoft on the Surface Go 4 support page; the illustration is labelled Surface Go 3 in the original.",
  },
  {
    id: 113,
    name: "Surface Book 2",
    category: "Surface",
    year: 2017,
    description:
      "The second detachable Surface laptop introduced a fifteen-inch option alongside the 13.5-inch model.",
    specs: {
      Display: "13.5-inch / 15-inch",
      Design: "Detachable tablet and keyboard base",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Book 2 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-book-2-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Book 2",
        url: "https://en.wikipedia.org/wiki/Surface_Book_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/113.webp",
    imageCredit: "Tinh tế Photo · CC0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Surface_Book_2_-_Top_%2838828932021%29.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  },
  {
    id: 114,
    name: "Surface Book 3",
    category: "Surface",
    year: 2020,
    description:
      "A Surface Book refresh with tenth-generation Intel processors and updated optional discrete graphics.",
    specs: {
      Processor: "Intel Core, 10th generation",
      Display: "13.5-inch / 15-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Book 3 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-book-3-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Book 3",
        url: "https://en.wikipedia.org/wiki/Surface_Book_3",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/114.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-book-3-specs-and-features",
    imageKind: "diagram",
  },
  {
    id: 115,
    name: "Surface Laptop (1st generation)",
    category: "Surface",
    year: 2017,
    description:
      "The first conventional Surface laptop paired a 13.5-inch touchscreen with an Alcantara-covered keyboard deck.",
    specs: {
      Processor: "Intel Core, 7th generation",
      Display: "13.5-inch, 2256 × 1504",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop (1st Gen) specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-1st-gen-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop (1st generation)",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_(1st_generation)",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/115.webp",
    imageCredit: "WikIan · CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:SurfaceLaptop.png",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 116,
    name: "Surface Laptop 2",
    category: "Surface",
    year: 2018,
    description:
      "An update to the original Surface Laptop with eighth-generation Intel processors and a black finish option.",
    specs: {
      Processor: "Intel Core, 8th generation",
      Display: "13.5-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop 2 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-2-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop 2",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/116.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-laptop-2-specs-and-features",
    imageKind: "diagram",
  },
  {
    id: 117,
    name: "Surface Laptop 3",
    category: "Surface",
    year: 2019,
    description:
      "A Surface Laptop generation that added USB-C, a fifteen-inch model, and selected AMD processor configurations.",
    specs: {
      Processor: "Intel Core / AMD Ryzen Surface Edition",
      Display: "13.5-inch / 15-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop 3 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-3-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop 3",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_3",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/117.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-laptop-3-specs-and-features",
    imageKind: "diagram",
  },
  {
    id: 118,
    name: "Surface Laptop 4",
    category: "Surface",
    year: 2021,
    description:
      "A choice of Intel or AMD Surface Edition processors across two touchscreen laptop sizes.",
    specs: {
      Processor: "Intel Core / AMD Ryzen Surface Edition",
      Display: "13.5-inch / 15-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop 4 features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-4-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop 4",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_4",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/118.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-laptop-4-features",
    imageKind: "diagram",
  },
  {
    id: 119,
    name: "Surface Laptop 5",
    category: "Surface",
    year: 2022,
    description:
      "An Intel-only Surface Laptop generation that added Thunderbolt 4 and a Sage finish option.",
    specs: {
      Processor: "Intel Core, 12th generation",
      Ports: "Thunderbolt 4",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop 5 specs and features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-5-specs-and-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop 5",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_5",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/119.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-laptop-5-specs-and-features",
    imageKind: "diagram",
  },
  {
    id: 120,
    name: "Surface Laptop 6 for Business",
    category: "Surface",
    year: 2024,
    description:
      "A business laptop with Intel Core Ultra processors, an NPU, and a Full HD webcam.",
    specs: {
      Processor: "Intel Core Ultra",
      Display: "13.5-inch / 15-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop 6 for Business features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-6-for-business-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop 6",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_6",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/120.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-laptop-6-for-business-features",
    imageKind: "diagram",
  },
  {
    id: 121,
    name: "Surface Laptop 7th Edition (Snapdragon)",
    category: "Surface",
    year: 2024,
    description:
      "A Copilot+ laptop generation with Snapdragon X processors, thinner display bezels, and a haptic touchpad.",
    specs: {
      Processor: "Snapdragon X Plus / X Elite",
      Display: "13.8-inch / 15-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop (7th Edition) features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-7th-edition-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop 7th Edition",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_7th_Edition",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/121.webp",
    imageCredit: "StrangeApparition2011 · CC0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Surface_Laptop_7.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  },
  {
    id: 122,
    name: "Surface Laptop 13-inch (1st Edition)",
    category: "Surface",
    year: 2025,
    description:
      "A smaller Surface Laptop with Snapdragon X Plus and a thirteen-inch touchscreen.",
    specs: {
      Processor: "Snapdragon X Plus, 8-core",
      Display: "13-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing all-new Surface Copilot+ PCs: The Surface Pro, 12-inch and Surface Laptop, 13-inch | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2025/05/06/introducing-all-new-surface-copilot-pcs-the-surface-pro-12-inch-and-surface-laptop-13-inch/",
      kind: "Microsoft archive",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/122.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/devices/2025/05/06/introducing-all-new-surface-copilot-pcs-the-surface-pro-12-inch-and-surface-laptop-13-inch/",
    imageKind: "photo",
  },
  {
    id: 123,
    name: "Surface Laptop Go",
    category: "Surface",
    year: 2020,
    description:
      "A lightweight Surface laptop with a 12.4-inch touchscreen, Intel Core i5, and selected fingerprint-enabled configurations.",
    specs: {
      Processor: "Intel Core i5, 10th generation",
      Display: "12.4-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing Surface Laptop Go, new updates to Surface Pro X and new accessories | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2020/10/01/introducing-surface-laptop-go-new-updates-to-surface-pro-x-and-new-accessories/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop Go",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_Go",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/123.webp",
    imageCredit: "Ckazemi · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:A_platinum_Microsoft_Surface_Laptop_Go.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 124,
    name: "Surface Laptop Go 2",
    category: "Surface",
    year: 2022,
    description:
      "The second Laptop Go retained its compact display while moving to an eleventh-generation Intel Core i5.",
    specs: {
      Processor: "Intel Core i5, 11th generation",
      Display: "12.4-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop Go 2 features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-go-2-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop Go 2",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_Go_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/124.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-laptop-go-2-features",
    imageKind: "diagram",
  },
  {
    id: 125,
    name: "Surface Laptop Go 3",
    category: "Surface",
    year: 2023,
    description:
      "A compact Surface laptop refresh with a twelfth-generation Intel Core i5 and higher starting memory.",
    specs: {
      Processor: "Intel Core i5, 12th generation",
      Display: "12.4-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop Go 3 features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-go-3-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop Go 3",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_Go_3",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/125.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-laptop-go-3-features",
    imageKind: "diagram",
  },
  {
    id: 126,
    name: "Surface Laptop SE",
    category: "Surface",
    year: 2022,
    description:
      "An education-focused laptop running Windows 11 SE, with an 11.6-inch display and serviceable components.",
    specs: {
      Processor: "Intel Celeron",
      Display: "11.6-inch",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop SE features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-se-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop SE",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_SE",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/126.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-laptop-se-features",
    imageKind: "diagram",
  },
  {
    id: 127,
    name: "Surface Laptop Studio 2",
    category: "Surface",
    year: 2023,
    description:
      "A second-generation hinged creator laptop with thirteenth-generation Intel Core processors and optional Nvidia graphics.",
    specs: {
      Processor: "Intel Core i7, 13th generation",
      Display: "14.4-inch, up to 120 Hz",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Laptop Studio 2 features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-laptop-studio-2-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Laptop Studio 2",
        url: "https://en.wikipedia.org/wiki/Surface_Laptop_Studio_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/127.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-laptop-studio-2-features",
    imageKind: "diagram",
  },
  {
    id: 128,
    name: "Surface Studio",
    category: "Surface",
    year: 2016,
    description:
      "A touchscreen all-in-one whose counterbalanced hinge lowered the display into a drawing surface.",
    specs: {
      Display: "28-inch, 4500 × 3000",
      Design: "Zero Gravity Hinge",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Surface Studio",
      url: "https://en.wikipedia.org/wiki/Surface_Studio",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/128.webp",
    imageCredit: "Dienthoaiquangcao12 · CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Surface_Studio.png",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 129,
    name: "Surface Studio 2",
    category: "Surface",
    year: 2018,
    description:
      "The second Surface all-in-one kept the adjustable 28-inch display and upgraded its processor, graphics, and SSD storage.",
    specs: {
      Display: "28-inch, 4500 × 3000",
      Graphics: "Nvidia GeForce GTX 1060 / 1070",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Meet Surface Pro 6, Surface Laptop 2, Surface Studio 2 and Surface Headphones | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2018/10/02/meet-surface-pro-6-surface-laptop-2-surface-studio-2-and-surface-headphones/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Studio 2",
        url: "https://en.wikipedia.org/wiki/Surface_Studio_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 130,
    name: "Surface Studio 2+",
    category: "Surface",
    year: 2022,
    description:
      "A Studio refresh with eleventh-generation Intel Core, GeForce RTX graphics, and Thunderbolt 4.",
    specs: {
      Processor: "Intel Core i7, 11th generation",
      Graphics: "Nvidia GeForce RTX 3060",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing new Surface devices that take the Windows PC into the next era of computing | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2022/10/12/introducing-new-surface-devices-that-take-the-windows-pc-into-the-next-era-of-computing/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Studio 2",
        url: "https://en.wikipedia.org/wiki/Surface_Studio_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/130.webp",
    imageCredit: "Microsoft Support · hardware diagram",
    imageSource:
      "https://support.microsoft.com/en-us/surface/models/surface-studio-2-features",
    imageKind: "diagram",
  },
  {
    id: 131,
    name: "Surface Duo 2",
    category: "Surface",
    year: 2021,
    description:
      "A dual-screen Android phone that added 5G and a three-camera rear array to the Duo design.",
    specs: {
      Processor: "Snapdragon 888",
      Display: "Two 5.8-inch AMOLED panels",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Surface Duo 2 features | Microsoft Support",
      url: "https://support.microsoft.com/en-us/surface/models/surface-duo-2-features",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Duo 2",
        url: "https://en.wikipedia.org/wiki/Surface_Duo_2",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/131.webp",
    imageCredit: "KKPCW · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Surface_Duo_2_-_1.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 132,
    name: "Surface Hub (1st generation)",
    category: "Displays",
    year: 2016,
    description:
      "A meeting-room collaboration display with pen input, cameras, and integrated Windows software, offered in two sizes.",
    specs: {
      Display: "55-inch / 84-inch",
      Format: "Interactive collaboration display",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Surface Hub",
      url: "https://en.wikipedia.org/wiki/Surface_Hub",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/132.webp",
    imageCredit: "ayustety · CC BY-SA 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Microsoft_Surface_Hub_msfest2015.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.0",
  },
  {
    id: 133,
    name: "Surface Hub 2S",
    category: "Displays",
    year: 2019,
    description:
      "A collaboration display designed for shared whiteboarding and video meetings, with a modular compute cartridge.",
    specs: {
      Display: "50-inch at launch",
      Format: "Interactive collaboration display",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Buy Surface Hub 2S - Microsoft Store",
      url: "https://www.microsoft.com/en-us/d/surface-hub-2s/8xgr3x8n3768/",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Surface Hub",
        url: "https://en.wikipedia.org/wiki/Surface_Hub",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/surface-hub-2s/8xgr3x8n3768/",
    imageKind: "photo",
  },
  {
    id: 134,
    name: "Surface Dial",
    category: "Accessories",
    year: 2016,
    description:
      "A rotating input puck with haptic feedback for contextual tools and supported on-screen interactions.",
    specs: {
      Connection: "Bluetooth",
      Input: "Rotation / press with haptics",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · List of Microsoft Surface accessories",
      url: "https://en.wikipedia.org/wiki/List_of_Microsoft_Surface_accessories",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/134.webp",
    imageCredit: "Siegbert v2 · CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File%3ASurface%20Dial.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 135,
    name: "Surface Dock 2",
    category: "Accessories",
    year: 2020,
    description:
      "A Surface Connect docking station with USB-C display outputs, wired networking, and accessory connections.",
    specs: {
      Connection: "Surface Connect",
      Ports: "USB-C / USB-A / Ethernet / audio",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · List of Microsoft Surface accessories",
      url: "https://en.wikipedia.org/wiki/List_of_Microsoft_Surface_accessories",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/135.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/devices/2020/05/06/introducing-surface-go-2-surface-book-3-surface-headphones-2-and-surface-earbuds/",
    imageKind: "photo",
  },
  {
    id: 136,
    name: "Surface Thunderbolt 4 Dock",
    category: "Accessories",
    year: 2023,
    description:
      "A USB-C docking station with Thunderbolt 4, multi-monitor support, wired networking, and laptop charging.",
    specs: {
      "Host connection": "Thunderbolt 4",
      Charging: "Up to 96 W to host",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing the Microsoft Surface Thunderbolt™ 4 Dock | Microsoft Devices Blog",
      url: "https://blogs.windows.com/devices/2023/04/04/introducing-the-microsoft-surface-thunderbolt-4-dock/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · List of Microsoft Surface accessories",
        url: "https://en.wikipedia.org/wiki/List_of_Microsoft_Surface_accessories",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/136.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/devices/2023/04/04/introducing-the-microsoft-surface-thunderbolt-4-dock/",
    imageKind: "photo",
  },
  {
    id: 137,
    name: "Surface Slim Pen 2",
    category: "Accessories",
    year: 2021,
    description:
      "A rechargeable pen with a flat profile and tactile feedback in supported Surface devices and applications.",
    specs: {
      Input: "4,096 pressure levels",
      Feature: "Tactile signals on supported devices",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Surface Pen",
      url: "https://en.wikipedia.org/wiki/Surface_Pen",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/137.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/devices/2021/09/22/introducing-new-surface-products-built-for-windows-11/",
    imageKind: "photo",
  },
  {
    id: 138,
    name: "Surface Pro 13-inch Flex Keyboard",
    category: "Keyboards",
    year: 2024,
    description:
      "A Surface Pro keyboard that can work attached or detached, with a haptic touchpad and rechargeable battery.",
    specs: {
      Input: "Keyboard / haptic touchpad",
      Feature: "Attached or detached use",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Surface Pro Flex Keyboard - Attached/Detached Wireless Keyboard Cover | Microsoft Store",
      url: "https://www.microsoft.com/en-us/d/surface-pro-13-inch-flex-keyboard/91xw9xj8bm7l",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/138.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/surface-pro-13-inch-flex-keyboard/91xw9xj8bm7l",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 139,
    name: "Surface Pro 12-inch Keyboard",
    category: "Keyboards",
    year: 2025,
    description:
      "A keyboard cover designed for the twelve-inch Surface Pro, with a full-size keyset and precision touchpad.",
    specs: {
      Compatibility: "Surface Pro 12-inch",
      Format: "Keyboard cover",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Buy Surface Pro 12-inch Keyboard for Surface Pro, Copilot+ PC - Microsoft Store",
      url: "https://www.microsoft.com/en-us/d/surface-pro-12-inch-keyboard/8mzbmmcjzqv0",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/139.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/surface-pro-12-inch-keyboard/8mzbmmcjzqv0",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 140,
    name: "Microsoft Adaptive Mouse",
    category: "Adaptive Accessories",
    year: 2022,
    description:
      "A compact mouse core that accepts optional tails, thumb supports, and custom attachments for different grips.",
    specs: {
      Connection: "Bluetooth / USB-C",
      Design: "Modular mouse core",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Buy Microsoft Adaptive Mouse - Microsoft Store",
      url: "https://www.microsoft.com/en-us/d/microsoft-adaptive-mouse/8pjx197lnqd7",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/140.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/microsoft-adaptive-mouse/8pjx197lnqd7",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 141,
    name: "Microsoft Adaptive Hub",
    category: "Adaptive Accessories",
    year: 2022,
    description:
      "A programmable hub that connects adaptive buttons and wired switches to create personalized computer controls.",
    specs: {
      Inputs: "Adaptive buttons / 3.5 mm switches",
      Connection: "Wireless / USB-C",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing new Surface devices that take the Windows PC into the next era of computing",
      url: "https://news.microsoft.com/october-2022-news-event/",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Microsoft Store · Microsoft Adaptive Hub",
        url: "https://www.microsoft.com/en-us/d/microsoft-adaptive-hub/8pbjx6zn089b",
        kind: "Microsoft",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/141.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/microsoft-adaptive-hub/8pbjx6zn089b",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 142,
    name: "Microsoft Adaptive D-pad Button",
    category: "Adaptive Accessories",
    year: 2022,
    description:
      "A configurable directional button for the Adaptive Hub, with a replaceable topper for customized input.",
    specs: {
      Input: "Eight digital inputs",
      Requires: "Microsoft Adaptive Hub",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing new Surface devices that take the Windows PC into the next era of computing",
      url: "https://news.microsoft.com/october-2022-news-event/",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Microsoft Store · Microsoft Adaptive D-pad Button",
        url: "https://www.microsoft.com/en-us/d/microsoft-adaptive-d-pad-button/8w5kw5bk60zp",
        kind: "Microsoft",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/142.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/microsoft-adaptive-d-pad-button/8w5kw5bk60zp",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 143,
    name: "Microsoft Adaptive Joystick Button",
    category: "Adaptive Accessories",
    year: 2022,
    description:
      "A joystick-style input for the Adaptive Hub, designed to accept alternative or custom printed toppers.",
    specs: {
      Input: "Eight digital inputs",
      Requires: "Microsoft Adaptive Hub",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing new Surface devices that take the Windows PC into the next era of computing",
      url: "https://news.microsoft.com/october-2022-news-event/",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Microsoft Store · Microsoft Adaptive Joystick Button",
        url: "https://www.microsoft.com/en-us/d/microsoft-adaptive-joystick-button/8wfqxsh5q4lb",
        kind: "Microsoft",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/143.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/microsoft-adaptive-joystick-button/8wfqxsh5q4lb",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 144,
    name: "Microsoft Adaptive Dual Button",
    category: "Adaptive Accessories",
    year: 2022,
    description:
      "A two-part button accessory for the Adaptive Hub, supporting remapped controls and custom toppers.",
    specs: {
      Input: "Configurable button commands",
      Requires: "Microsoft Adaptive Hub",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Introducing new Surface devices that take the Windows PC into the next era of computing",
      url: "https://news.microsoft.com/october-2022-news-event/",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Microsoft Store · Microsoft Adaptive Dual Button",
        url: "https://www.microsoft.com/en-us/d/microsoft-adaptive-dual-button/911z415gjlrd",
        kind: "Microsoft",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/144.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/microsoft-adaptive-dual-button/911z415gjlrd",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 145,
    name: "Xbox One S",
    category: "Xbox",
    year: 2016,
    description:
      "A smaller Xbox One revision with an internal power supply, HDR support, and a UHD Blu-ray drive.",
    specs: {
      Video: "4K video / HDR",
      Media: "UHD Blu-ray",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Xbox One",
      url: "https://en.wikipedia.org/wiki/Xbox_One",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/145.webp",
    imageCredit: "Evan-Amos, modified by Gunnar.offel · Public domain",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AMicrosoft-Xbox-One-S-Console-FL.png",
    imageKind: "photo",
  },
  {
    id: 146,
    name: "Xbox One X",
    category: "Xbox",
    year: 2017,
    description:
      "A higher-performance Xbox One revision designed for enhanced-resolution games and 4K media playback.",
    specs: {
      Graphics: "6 TFLOPS GPU",
      Media: "UHD Blu-ray",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Xbox One",
      url: "https://en.wikipedia.org/wiki/Xbox_One",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/146.webp",
    imageCredit: "dronepicr · CC BY 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AXBOX%20ONE%20X%20Gamescom%20%2836042607743%29.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    id: 147,
    name: "Xbox Series S",
    category: "Xbox",
    year: 2020,
    description:
      "A compact, disc-free Xbox Series console using SSD storage and targeting lower rendering resolutions than Series X.",
    specs: {
      Storage: "NVMe SSD",
      Media: "Digital only",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Xbox Series X and Series S",
      url: "https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/147.webp",
    imageCredit: "AsmodeanUnderscore · CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AXbox%20Series%20S%20with%20controller.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    id: 148,
    name: "Xbox Adaptive Controller",
    category: "Game Controllers",
    year: 2018,
    description:
      "An accessibility controller with large buttons and external input jacks for building a personalized gaming setup.",
    specs: {
      Inputs: "Nineteen 3.5 mm jacks / USB",
      Design: "External switches and controls",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Buy XBOX Adaptive Controller - Microsoft Store",
      url: "https://www.microsoft.com/en-us/d/xbox-adaptive-controller/8nsdbhz1n3d8",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Xbox Adaptive Controller",
        url: "https://en.wikipedia.org/wiki/Xbox_Adaptive_Controller",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/148.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/xbox-adaptive-controller/8nsdbhz1n3d8",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 149,
    name: "Xbox Elite Wireless Controller",
    category: "Game Controllers",
    year: 2015,
    description:
      "A premium Xbox controller with interchangeable sticks, directional pads, rear paddles, and adjustable trigger travel.",
    specs: {
      Input: "Interchangeable sticks / rear paddles",
      Feature: "Hair-trigger locks",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Xbox Wireless Controller",
      url: "https://en.wikipedia.org/wiki/Xbox_Wireless_Controller",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/149.webp",
    imageCredit: "mliu92 · CC BY-SA 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AXbox%20One%20Elite%20Controller%20%28Model%201698%29%20-%20underside.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.0",
    imageNote: "Underside of the first-generation Xbox Elite controller.",
  },
  {
    id: 150,
    name: "Xbox Elite Wireless Controller Series 2",
    category: "Game Controllers",
    year: 2019,
    description:
      "The second Elite controller added adjustable-tension thumbsticks, Bluetooth, and a rechargeable battery.",
    specs: {
      Input: "Adjustable-tension thumbsticks",
      Power: "Rechargeable battery",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Buy XBOX Elite Wireless Controller Series 2 for XBOX Series X|S & Windows PC - See Price & Availability | Microsoft Store",
      url: "https://www.microsoft.com/en-us/d/xbox-elite-wireless-controller-series-2/8rsn7j6375gg",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Xbox Wireless Controller",
        url: "https://en.wikipedia.org/wiki/Xbox_Wireless_Controller",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/150.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/xbox-elite-wireless-controller-series-2/8rsn7j6375gg",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 151,
    name: "Xbox Wireless Headset (2021)",
    category: "Audio",
    year: 2021,
    description:
      "A gaming headset with rotating earcup controls and simultaneous Xbox Wireless and Bluetooth connectivity.",
    specs: {
      Connection: "Xbox Wireless / Bluetooth",
      Controls: "Earcup dials",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Immerse Yourself in the Future of Gaming Audio with the Xbox Wireless Headset - XBOX Wire",
      url: "https://news.xbox.com/en-us/2021/02/16/xbox-wireless-headset/",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 152,
    name: "Xbox Adaptive Joystick",
    category: "Game Controllers",
    year: 2025,
    description:
      "A configurable wired joystick designed to complement the Xbox Adaptive Controller and other accessible gaming setups.",
    specs: {
      Connection: "Wired USB",
      Input: "Joystick and remappable buttons",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "XBOX Adaptive Joystick",
      url: "https://www.microsoft.com/en-us/d/xbox-adaptive-joystick/8mzbmmcjzqs4",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/152.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/xbox-adaptive-joystick/8mzbmmcjzqs4",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 153,
    name: "Xbox Wireless Controller (2020)",
    category: "Game Controllers",
    year: 2020,
    description:
      "The Xbox Series controller added a Share button, a hybrid directional pad, and a USB-C connector.",
    specs: {
      Connection: "Xbox Wireless / Bluetooth / USB-C",
      Input: "Hybrid D-pad / Share button",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Buy XBOX Wireless Controller - Carbon Black for XBOX Series X|S & Windows PC - See Price & Availability | Microsoft Store",
      url: "https://www.microsoft.com/en-us/d/xbox-wireless-controller/8xn59crbsqgz",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "Wikipedia · Xbox Wireless Controller",
        url: "https://en.wikipedia.org/wiki/Xbox_Wireless_Controller",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/153.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/xbox-wireless-controller/8xn59crbsqgz",
    imageKind: "photo",
    storeListed: true,
  },
  {
    id: 154,
    name: "Windows Dev Kit 2023",
    category: "Development",
    year: 2022,
    description:
      "An ARM developer desktop built for creating and testing Windows applications, with an integrated NPU.",
    specs: {
      Processor: "Snapdragon 8cx Gen 3",
      "Memory / storage": "32 GB / 512 GB NVMe",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Available today: Windows Dev Kit 2023 aka Project Volterra - Windows Developer Blog",
      url: "https://blogs.windows.com/windowsdeveloper/2022/10/24/available-today-windows-dev-kit-2023-aka-project-volterra/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · Windows Dev Kit 2023",
        url: "https://en.wikipedia.org/wiki/Windows_Dev_Kit_2023",
        kind: "Wikipedia",
      },
    ],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/154.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://blogs.windows.com/windowsdeveloper/2022/10/24/available-today-windows-dev-kit-2023-aka-project-volterra/",
    imageKind: "photo",
  },
  {
    id: 155,
    name: "Microsoft Digital Sound System 80",
    category: "Audio",
    year: 1998,
    description:
      "A Microsoft and Philips speaker system with USB digital audio, two satellite speakers, and a powered subwoofer.",
    specs: {
      Connection: "USB / 3.5 mm",
      Format: "2.1 speaker system",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Digital Sound System 80",
      url: "https://en.wikipedia.org/wiki/Digital_Sound_System_80",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/155.webp",
    imageCredit: "Saxbryn at English Wikipedia · CC BY-SA 3.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Dss80.jpg",
    imageKind: "photo",
    imageLicense: "http://creativecommons.org/licenses/by-sa/3.0/",
  },
  {
    id: 156,
    name: "Surface Laptop Ultra",
    category: "Surface",
    year: 2026,
    description:
      "A creator-focused Surface laptop with Nvidia RTX Spark hardware, unified memory, and a mini-LED touchscreen.",
    specs: {
      Display: "15-inch mini-LED",
      Memory: "Up to 128 GB unified",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Buy Surface Laptop Ultra - Price, Specs, Windows | Microsoft Store",
      url: "https://www.microsoft.com/en-us/d/surface-laptop-ultra/8wg5vqp0x4b8",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/156.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/surface-laptop-ultra/8wg5vqp0x4b8",
    imageKind: "photo",
  },
  {
    id: 157,
    name: "Microsoft Broadband Wireless USB Adapter MN-510",
    category: "Networking",
    year: 2002,
    description:
      "A USB adapter that connected a desktop or notebook to an 802.11b wireless network.",
    specs: {
      Wireless: "802.11b",
      "Host connection": "USB",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft Broadband Networking",
      url: "https://en.wikipedia.org/wiki/Microsoft_Broadband_Networking",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 158,
    name: "Microsoft Broadband Wireless Notebook Adapter MN-520",
    category: "Networking",
    year: 2002,
    description:
      "A PC Card adapter that added 802.11b wireless networking to compatible notebook computers.",
    specs: {
      Wireless: "802.11b",
      "Host connection": "PC Card",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · Microsoft Broadband Networking",
      url: "https://en.wikipedia.org/wiki/Microsoft_Broadband_Networking",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 159,
    name: "Microsoft Wireless Display Adapter",
    category: "Accessories",
    year: 2014,
    description:
      "An HDMI adapter that used Miracast to mirror supported computers and mobile devices onto a television or monitor.",
    specs: {
      "Display connection": "HDMI",
      Wireless: "Miracast",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Microsoft Accessories Press Materials - Stories",
      url: "https://news.microsoft.com/accessories-press-materials/",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
    imageUrl: "/images/catalogue/159.webp",
    imageCredit: "Martin @pokipsie  Rechsteiner · CC BY-SA 2.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File%3AMicrosoft%20Wireless%20Display%20Adapter.jpg",
    imageKind: "photo",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.0",
  },
  {
    id: 160,
    name: "Microsoft ActiMates Barney",
    category: "Toys",
    year: 1997,
    description:
      "An interactive plush Barney that responded to touch and compatible television programming or computer activities.",
    specs: {
      Input: "Touch sensors",
      Format: "Interactive educational toy",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title: "Wikipedia · ActiMates",
      url: "https://en.wikipedia.org/wiki/ActiMates",
      kind: "Wikipedia",
    },
    additionalSources: [],
    dateLabel: "Release or introduction year; availability differed by region.",
  },
  {
    id: 161,
    name: "Surface Keyboard (2nd Edition)",
    category: "Keyboards",
    year: null,
    description:
      "A Bluetooth desktop keyboard with a number pad, a dedicated Copilot key, and productivity shortcut keys.",
    specs: {
      Connection: "Bluetooth 4.0",
      Layout: "Full-size with number pad",
    },
    links: [],
    addedAt: "2026-11-09",
    researchedAt: "2026-11-09",
    source: {
      title:
        "Surface Keyboard - Wireless Bluetooth Keyboard w/Number Pad & Copilot Key | Microsoft Store",
      url: "https://www.microsoft.com/en-us/d/surface-keyboard-2nd-edition/93d9l5tctr0b",
      kind: "Microsoft",
    },
    additionalSources: [],
    dateLabel:
      "Listed in Microsoft Store on 9 November 2026; introduction year not established.",
    imageUrl: "/images/catalogue/161.webp",
    imageCredit: "Microsoft · editorial product image",
    imageSource:
      "https://www.microsoft.com/en-us/d/surface-keyboard-2nd-edition/93d9l5tctr0b",
    imageKind: "photo",
    storeListed: true,
  },
];
