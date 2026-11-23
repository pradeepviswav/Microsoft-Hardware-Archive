import type { Product } from "../types";

export const peripheralResearch: Record<number, Partial<Product>> = {
  "1": {
    additionalSources: [
      {
        title:
          "Microsoft · Mouse Programmer’s Reference (1989, Bitsavers scan)",
        url: "https://bitsavers.trailing-edge.com/pdf/microsoft/mouse/Microsoft_Mouse_Programmers_Reference_1989.pdf",
        kind: "Microsoft archive",
      },
      {
        title: "Wikipedia · Microsoft Mouse hardware revisions",
        url: "https://en.wikipedia.org/wiki/Microsoft_Mouse",
        kind: "Wikipedia",
      },
    ],
    specs: {
      Tracking: "Mechanical steel ball",
    },
    successor: 232,
    aliases: ["Microsoft Green-Eyed Mouse"],
    researchedAt: "2026-11-23",
  },
  "164": {
    additionalSources: [
      {
        title: "Wikipedia · Microsoft Mouse hardware revisions",
        url: "https://en.wikipedia.org/wiki/Microsoft_Mouse",
        kind: "Wikipedia",
      },
    ],
    specs: {
      Connections: "Serial and PS/2 editions",
      "Software at introduction": "Microsoft IntelliPoint",
    },
    predecessor: 233,
    aliases: ["Microsoft Mouse 2.0 kidney bean", "Project Carrera"],
    researchedAt: "2026-11-23",
  },
  "15": {
    additionalSources: [
      {
        title: "Microsoft · Arc Touch Mouse announcement",
        url: "https://news.microsoft.com/source/2010/09/01/think-the-mouse-is-dead-think-again-with-microsofts-arc-touch-mouse/",
        kind: "Microsoft archive",
        publishedAt: "2010-09-01",
      },
    ],
    specs: {
      Connection: "2.4 GHz USB nano transceiver",
      Tracking: "BlueTrack",
      Scrolling: "Capacitive touch strip with haptic feedback",
    },
    dateLabel:
      "Announced September 2010. Microsoft scheduled December retail availability.",
    softwareSupport:
      "The original receiver model is distinct from the Bluetooth Surface Edition.",
    researchedAt: "2026-11-23",
  },
  "25": {
    additionalSources: [
      {
        title: "Microsoft Store · Surface Mouse (2nd Edition)",
        url: "https://www.microsoft.com/en-us/d/surface-mouse-2nd-edition/8wg5vqp0x4bv",
        kind: "Microsoft",
      },
    ],
    lifecycle: {
      status: "active-microsoft",
      source:
        "https://www.microsoft.com/en-us/d/surface-mouse-2nd-edition/8wg5vqp0x4bv",
      checkedAt: "2026-11-23",
      note: "Microsoft Store lists the 2026 haptic model under this official name. Availability is regional.",
    },
    researchedAt: "2026-11-23",
  },
  "37": {
    additionalSources: [
      {
        title: "Microsoft · IntelliMouse TrackBall available",
        url: "https://news.microsoft.com/source/1997/11/14/microsoft-announces-availability-of-intellimouse-trackball/",
        kind: "Microsoft archive",
        publishedAt: "1997-11-14",
      },
    ],
    specs: {
      Tracking: "Finger-operated ball with scroll wheel",
      Connection: "PS/2 / serial",
    },
    launchDate: "1997-11-14",
    msrp: {
      amount: 84.95,
      currency: "USD",
      region: "United States",
      date: "1997-11-14",
      source:
        "https://news.microsoft.com/source/1997/11/14/microsoft-announces-availability-of-intellimouse-trackball/",
    },
    dateLabel:
      "Microsoft announced retail availability on 14 November 1997 at an estimated US price.",
    researchedAt: "2026-11-23",
  },
  "39": {
    additionalSources: [
      {
        title: "Microsoft · IntelliMouse Explorer and IntelliEye at COMDEX",
        url: "https://news.microsoft.com/source/1999/04/19/microsofts-sleek-new-intellimouse-explorer-and-intellieye-technology-toss-out-the-mouse-ball-today-at-comdex/",
        kind: "Microsoft archive",
        publishedAt: "1999-04-19",
      },
      {
        title:
          "Microsoft · New mouse family introduces 6,000-image/s IntelliEye",
        url: "https://news.microsoft.com/source/2001/09/25/new-microsoft-mouse-family-unleashes-wireless-intellimouse-explorer/",
        kind: "Microsoft archive",
        publishedAt: "2001-09-25",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Tracking: "Original IntelliEye optical sensor; 1,500 images per second",
    },
    successor: 234,
    description:
      "The 1999 IntelliMouse Explorer replaced the mechanical ball with Microsoft’s first IntelliEye optical sensor and added two side buttons to its right-handed shape.",
    usbIds: [
      {
        id: "045E:001E",
        label: "Original Explorer USB",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "40": {
    additionalSources: [
      {
        title:
          "Microsoft · New mouse family introduces 6,000-image/s IntelliEye",
        url: "https://news.microsoft.com/source/2001/09/25/new-microsoft-mouse-family-unleashes-wireless-intellimouse-explorer/",
        kind: "Microsoft archive",
        publishedAt: "2001-09-25",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Tracking:
        "IntelliEye optical; the September 2001 update scanned 6,000 images per second",
      Design: "Ambidextrous shell",
    },
    dateLabel:
      "The series appeared in 2000. The 6,000-image/s specification belongs to the September 2001 revision.",
    usbIds: [
      {
        id: "045E:0029",
        label: "Optical USB listing",
      },
      {
        id: "045E:0039",
        label: "Alternate Optical USB listing",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "41": {
    additionalSources: [
      {
        title:
          "Microsoft · New mouse family introduces 6,000-image/s IntelliEye",
        url: "https://news.microsoft.com/source/2001/09/25/new-microsoft-mouse-family-unleashes-wireless-intellimouse-explorer/",
        kind: "Microsoft archive",
        publishedAt: "2001-09-25",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Connection: "27 MHz radio with a USB receiver",
      Tracking: "IntelliEye optical; 6,000 images per second",
      Power: "Two AA batteries",
    },
    msrp: {
      amount: 74.95,
      currency: "USD",
      region: "United States",
      date: "2001-09-25",
      source:
        "https://news.microsoft.com/source/2001/09/25/new-microsoft-mouse-family-unleashes-wireless-intellimouse-explorer/",
    },
    successor: 236,
    usbIds: [
      {
        id: "045E:0059",
        label: "Original Wireless Explorer receiver",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "42": {
    additionalSources: [
      {
        title: "Microsoft · Classic IntelliMouse design and BlueTrack",
        url: "https://blogs.windows.com/devices/2018/06/26/a-legend-reborn-microsoft-brings-back-the-iconic-mouse-the-classic-intellimouse/",
        kind: "Microsoft archive",
        publishedAt: "2018-06-26",
      },
      {
        title: "Microsoft · Classic IntelliMouse specs and regional launch",
        url: "https://blogs.windows.com/japan/2018/01/09/classic_intellimouse/",
        kind: "Microsoft archive",
        publishedAt: "2018-01-09",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Tracking: "BlueTrack; 400–3,200 DPI",
      Connection: "Wired USB",
    },
    dateLabel:
      "Microsoft dates the Classic revival to 2017. Microsoft Japan documents its regional launch on 26 January 2018.",
    usbIds: [
      {
        id: "045E:0823",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "43": {
    additionalSources: [
      {
        title: "Microsoft · Pro IntelliMouse introduction",
        url: "https://blogs.windows.com/devices/2019/05/28/announcing-the-microsoft-pro-intellimouse/",
        kind: "Microsoft archive",
        publishedAt: "2019-05-28",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Tracking: "PixArt PAW3389 optical; up to 16,000 DPI",
      Polling: "Up to 1,000 Hz",
    },
    msrp: {
      amount: 59.99,
      currency: "USD",
      region: "United States",
      date: "2019-05-28",
      source:
        "https://blogs.windows.com/devices/2019/05/28/announcing-the-microsoft-pro-intellimouse/",
    },
    usbIds: [
      {
        id: "045E:082A",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "44": {
    additionalSources: [
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
    ],
    specs: {
      Tracking: "Laser",
      Connection: "2.4 GHz with snap-in USB receiver",
      Design: "Folding hinged body",
    },
    researchedAt: "2026-11-23",
  },
  "65": {
    additionalSources: [
      {
        title: "Microsoft · SideWinder Force Feedback Pro reaches stores",
        url: "https://news.microsoft.com/source/1997/09/29/microsoft-flight-simulator-98-and-sidewinder-force-feedback-pro-touch-down-on-store-shelves/",
        kind: "Microsoft archive",
        publishedAt: "1997-09-29",
      },
    ],
    specs: {
      Connection: "Game port",
      Input: "Force-feedback joystick with rotating handle",
    },
    dateLabel:
      "Microsoft’s September 1997 press release confirms retail availability for the game-port Pro.",
    researchedAt: "2026-11-23",
  },
  "66": {
    additionalSources: [
      {
        title: "Microsoft · Force Feedback 2 and digital controllers",
        url: "https://news.microsoft.com/source/2000/03/01/microsoft-in-tune-with-gamers-senses/",
        kind: "Microsoft archive",
        publishedAt: "2000-03-01",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Connection: "USB",
      Feedback: "More than 100 programmable forces advertised",
    },
    dateLabel:
      "Introduced in March 2000. Microsoft planned retail availability later that year. The 1997 Force Feedback Pro used a game port.",
    usbIds: [
      {
        id: "045E:001B",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "69": {
    additionalSources: [
      {
        title: "Microsoft · SideWinder X6 and X5 launch",
        url: "https://news.microsoft.com/source/2008/08/20/transform-with-microsofts-new-sidewinder-x6-keyboard-industrys-first-switchable-key-pad-moves-from-work-to-play/",
        kind: "Microsoft archive",
        publishedAt: "2008-08-20",
      },
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
    ],
    specs: {
      Connection: "Wired USB",
      Lighting: "Two-colour adjustable backlighting",
      "Number pad": "Detachable, left or right",
      Input: "Programmable macros",
    },
    msrp: {
      amount: 79.95,
      currency: "USD",
      region: "United States",
      date: "2008-08-20",
      source:
        "https://news.microsoft.com/source/2008/08/20/transform-with-microsofts-new-sidewinder-x6-keyboard-industrys-first-switchable-key-pad-moves-from-work-to-play/",
    },
    researchedAt: "2026-11-23",
  },
  "73": {
    additionalSources: [
      {
        title: "Microsoft · VX-1000, NX-6000 and LifeChat introduction",
        url: "https://news.microsoft.com/source/2006/09/13/microsoft-expands-digital-communications-line-with-notebook-lifecam-featuring-industrys-highest-video-and-still-resolution/",
        kind: "Microsoft archive",
        publishedAt: "2006-09-13",
      },
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Connection: "Wired USB",
      Microphone: "Pivoting 180° boom",
    },
    msrp: {
      amount: 39.95,
      currency: "USD",
      region: "United States",
      date: "2006-09-13",
      source:
        "https://news.microsoft.com/source/2006/09/13/microsoft-expands-digital-communications-line-with-notebook-lifecam-featuring-industrys-highest-video-and-still-resolution/",
    },
    usbIds: [
      {
        id: "045E:070F",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "155": {
    additionalSources: [
      {
        title: "Microsoft · Digital Sound System 80 introduction",
        url: "https://news.microsoft.com/source/1998/05/25/microsoft-pumps-up-the-volume-at-1998-electronics-entertainment-expo-with-debut-of-digital-sound-system-80/",
        kind: "Microsoft archive",
        publishedAt: "1998-05-25",
      },
      {
        title:
          "Microsoft · Digital Sound System 80 and SideWinder holiday availability",
        url: "https://news.microsoft.com/source/1998/11/25/just-in-time-for-the-holidays-microsoft-turns-personal-computers-into-home-entertainment-systems/",
        kind: "Microsoft archive",
        publishedAt: "1998-11-25",
      },
    ],
    specs: {
      Connection: "USB digital audio; analog input also provided",
      Speakers: "Two satellites and powered subwoofer",
    },
    softwareSupport:
      "Microsoft’s original sound adjustment software was designed for Windows 98.",
    researchedAt: "2026-11-23",
  },
  "177": {
    additionalSources: [
      {
        title:
          "Vancouver Computes · Game-port Force Feedback Wheel review (June 1999)",
        url: "https://www.zisman.ca/Articles/1999/Wheels.html",
      },
      {
        title:
          "Microsoft · SideWinder Force Feedback Wheel retail availability",
        url: "https://news.microsoft.com/source/1998/11/25/just-in-time-for-the-holidays-microsoft-turns-personal-computers-into-home-entertainment-systems/",
        kind: "Microsoft archive",
        publishedAt: "1998-11-25",
      },
    ],
    specs: {
      Connection: "Game port",
    },
    dateLabel:
      "Announced at the May 1998 show. Microsoft confirmed the wheel was on store shelves by 25 November 1998. The USB revision has its own record.",
    researchedAt: "2026-11-23",
  },
  "182": {
    additionalSources: [
      {
        title: "Microsoft · VX-1000, NX-6000 and LifeChat introduction",
        url: "https://news.microsoft.com/source/2006/09/13/microsoft-expands-digital-communications-line-with-notebook-lifecam-featuring-industrys-highest-video-and-still-resolution/",
        kind: "Microsoft archive",
        publishedAt: "2006-09-13",
      },
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
    ],
    specs: {
      Video: "640 × 480",
      Connection: "USB",
      Audio: "Built-in microphone",
    },
    msrp: {
      amount: 29.95,
      currency: "USD",
      region: "United States",
      date: "2006-09-13",
      source:
        "https://news.microsoft.com/source/2006/09/13/microsoft-expands-digital-communications-line-with-notebook-lifecam-featuring-industrys-highest-video-and-still-resolution/",
    },
    researchedAt: "2026-11-23",
  },
  "184": {
    additionalSources: [
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Video: "Up to 1.3 MP sensor resolution",
      Stills: "Up to 5.0 MP interpolated",
    },
    usbIds: [
      {
        id: "045E:00F4",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "185": {
    additionalSources: [
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Sensor: "2.0 MP",
      Stills: "Up to 7.6 MP interpolated",
    },
    usbIds: [
      {
        id: "045E:0723",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "186": {
    additionalSources: [
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
    ],
    specs: {
      Video: "VGA optics",
      Design: "Flexible base; multiple colours",
    },
    researchedAt: "2026-11-23",
  },
  "187": {
    additionalSources: [
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    specs: {
      Video: "VGA sensor",
      Connection: "USB",
      Mount: "Universal attachment base",
    },
    usbIds: [
      {
        id: "045E:074A",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "195": {
    additionalSources: [
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
    ],
    specs: {
      Design: "Foldable behind-the-head stereo headset",
      Controls: "Inline volume and microphone controls",
    },
    researchedAt: "2026-11-23",
  },
  "211": {
    additionalSources: [
      {
        title: "Microsoft · 2008 Hardware buyer’s guide",
        url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
        kind: "Microsoft archive",
      },
    ],
    specs: {
      Video: "VGA optics",
      Design: "Interchangeable faceplates and a fold-flat stand",
      Audio: "Built-in microphone",
    },
    year: 2008,
    dateLabel:
      "Microsoft’s 2008 buyer’s guide labels VX-5500 as a new model. Exact retail date is unconfirmed.",
    researchedAt: "2026-11-23",
  },
  "210": {
    additionalSources: [
      {
        title: "Windows Central · Surface Neo cancellation retrospective",
        url: "https://www.windowscentral.com/microsoft/revisiting-microsofts-biggest-canceled-devices-from-revolutionary-phones-to-dual-screen-pcs",
      },
    ],
    lifecycle: {
      status: "unreleased",
      source:
        "https://www.windowscentral.com/microsoft/revisiting-microsofts-biggest-canceled-devices-from-revolutionary-phones-to-dual-screen-pcs",
      checkedAt: "2026-11-23",
      note: "Shown publicly in 2019 and subsequently cancelled. No retail release.",
    },
    dateLabel:
      "Announced in 2019. The year refers to Microsoft’s public unveiling.",
    researchedAt: "2026-11-23",
  },
  "227": {
    additionalSources: [
      {
        title: "Microsoft Support · Use Surface Precision Mouse",
        url: "https://support.microsoft.com/en-us/surface/accessories/mouse-keyboard/use-surface-precision-mouse",
        kind: "Microsoft",
      },
    ],
    specs: {
      Connection: "Bluetooth or a wired USB connection",
      Pairing: "Up to three computers",
      Input: "Three customisable thumb buttons",
    },
    researchedAt: "2026-11-23",
  },
  "231": {
    additionalSources: [
      {
        title:
          "Microsoft · Updated IntelliMouse Explorer 3.0 and other gaming peripherals",
        url: "https://news.microsoft.com/source/2006/08/22/microsoft-on-top-of-its-game-with-launch-of-exciting-new-gaming-peripherals/",
        kind: "Microsoft archive",
        publishedAt: "2006-08-22",
      },
      {
        title: "Microsoft · Classic IntelliMouse design and BlueTrack",
        url: "https://blogs.windows.com/devices/2018/06/26/a-legend-reborn-microsoft-brings-back-the-iconic-mouse-the-classic-intellimouse/",
        kind: "Microsoft archive",
        publishedAt: "2018-06-26",
      },
      {
        title:
          "Microsoft Japan · Classic IntelliMouse and Explorer 3.0 production history",
        url: "https://blogs.windows.com/japan/2018/01/09/classic_intellimouse/",
        kind: "Microsoft archive",
        publishedAt: "2018-01-09",
      },
    ],
    specs: {
      Tracking: "Optical; 9,000 images per second",
      Connection: "Wired USB",
    },
    lifecycle: {
      status: "discontinued",
      source:
        "https://blogs.windows.com/japan/2018/01/09/classic_intellimouse/",
      checkedAt: "2026-11-23",
      note: "Microsoft dates the end of Explorer 3.0 production to 2010.",
    },
    researchedAt: "2026-11-23",
  },
  "31": {
    additionalSources: [
      {
        title: "Microsoft Support · Windows 10 S accessory compatibility",
        url: "https://support.microsoft.com/en-us/windows/experience/platform-variants/microsoft-accessories-experiences-with-windows-10-s",
        kind: "Microsoft",
      },
    ],
    softwareSupport:
      "Microsoft Mouse and Keyboard Center provides advanced settings for the original model. Those settings are unavailable under Windows 10 S.",
    researchedAt: "2026-11-23",
  },
  "33": {
    additionalSources: [
      {
        title: "Microsoft Support · Windows 10 S accessory compatibility",
        url: "https://support.microsoft.com/en-us/windows/experience/platform-variants/microsoft-accessories-experiences-with-windows-10-s",
        kind: "Microsoft",
      },
      {
        title: "Incase · Designed by Microsoft collection",
        url: "https://www.incase.com/pages/incase-designed-by-microsoft-collection",
      },
    ],
    softwareSupport:
      "Microsoft Mouse and Keyboard Center provides advanced settings for the original model. Those settings are unavailable under Windows 10 S.",
    lifecycle: {
      status: "licensed-incase",
      source:
        "https://www.incase.com/pages/incase-designed-by-microsoft-collection",
      checkedAt: "2026-11-23",
      note: "Incase catalogues a Designed by Microsoft variant. Listings and availability are regional.",
    },
    researchedAt: "2026-11-23",
  },
  "50": {
    additionalSources: [
      {
        title: "Microsoft Support · Windows 10 S accessory compatibility",
        url: "https://support.microsoft.com/en-us/windows/experience/platform-variants/microsoft-accessories-experiences-with-windows-10-s",
        kind: "Microsoft",
      },
      {
        title: "Incase · Designed by Microsoft collection",
        url: "https://www.incase.com/pages/incase-designed-by-microsoft-collection",
      },
    ],
    softwareSupport:
      "Microsoft Mouse and Keyboard Center provides advanced settings for the original model. Those settings are unavailable under Windows 10 S.",
    lifecycle: {
      status: "licensed-incase",
      source:
        "https://www.incase.com/pages/incase-designed-by-microsoft-collection",
      checkedAt: "2026-11-23",
      note: "Incase catalogues a Designed by Microsoft variant. Listings and availability are regional.",
    },
    researchedAt: "2026-11-23",
  },
  "61": {
    additionalSources: [
      {
        title: "Incase · Designed by Microsoft collection",
        url: "https://www.incase.com/pages/incase-designed-by-microsoft-collection",
      },
      {
        title: "Microsoft Support · Use Microsoft Bluetooth Ergonomic Mouse",
        url: "https://support.microsoft.com/en-us/surface/accessories/mouse-keyboard/use-microsoft-bluetooth-ergonomic-mouse",
        kind: "Microsoft",
      },
    ],
    lifecycle: {
      status: "licensed-incase",
      source:
        "https://www.incase.com/pages/incase-designed-by-microsoft-collection",
      checkedAt: "2026-11-23",
      note: "Incase catalogues a Designed by Microsoft variant. Listings and availability are regional.",
    },
    softwareSupport:
      "Microsoft Mouse and Keyboard Center provides Smart Switch configuration on the original Microsoft model.",
    researchedAt: "2026-11-23",
  },
  "36": {
    additionalSources: [
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    usbIds: [
      {
        id: "045E:0009",
        label: "Later USB edition",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "78": {
    additionalSources: [
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    usbIds: [
      {
        id: "045E:097A",
        label: "SuperSpeed hub",
      },
      {
        id: "045E:097B",
        label: "USB hub",
      },
      {
        id: "045E:097C",
        label: "Depth camera",
      },
      {
        id: "045E:097D",
        label: "4K camera",
      },
      {
        id: "045E:097E",
        label: "Microphone array",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "157": {
    additionalSources: [
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    usbIds: [
      {
        id: "045E:006E",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "168": {
    additionalSources: [
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    usbIds: [
      {
        id: "045E:00DD",
        label: "Comfort Curve 2000 v1.0",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "190": {
    additionalSources: [
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    usbIds: [
      {
        id: "045E:0721",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "235": {
    additionalSources: [
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    usbIds: [
      {
        id: "045E:0095",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "236": {
    additionalSources: [
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    usbIds: [
      {
        id: "045E:008C",
        label: "Wireless Explorer 2.0 receiver",
      },
    ],
    researchedAt: "2026-11-23",
  },
  "240": {
    additionalSources: [
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    usbIds: [
      {
        id: "045E:0034",
      },
    ],
    researchedAt: "2026-11-23",
  },
};
