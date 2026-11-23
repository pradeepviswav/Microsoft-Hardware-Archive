import type { Product } from "../types";

export const peripheralProducts: Product[] = [
  {
    id: 232,
    name: "Microsoft Mouse (Gray-Eyed)",
    category: "Mice",
    year: 1985,
    description:
      "The gray-button update to Microsoft’s original mouse improved tracking resolution and made mechanical operation quieter. Microsoft’s timeline calls it Mouse 5.0.",
    specs: {
      Resolution: "200 counts per inch",
      Tracking: "Mechanical ball",
      Buttons: "Two grey buttons",
    },
    links: [],
    source: {
      title: "Microsoft · Hardware Timeline",
      url: "https://download.microsoft.com/download/4/b/8/4b8b3a0c-1d6f-46be-9bd1-e30a208d67e7/Hardware%20Timeline.pdf",
      kind: "Microsoft archive",
    },
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
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    aliases: ["Microsoft Mouse 5.0", "Gray-button Microsoft Mouse"],
    predecessor: 1,
    successor: 233,
  },
  {
    id: 233,
    name: "Microsoft Mouse (Dove Bar)",
    category: "Mice",
    year: 1987,
    description:
      "A lower, contoured successor nicknamed after a bar of soap. Its shape and button arrangement differ from those of the boxier gray-button mouse.",
    specs: {
      Design: "Contoured two-button housing",
      Tracking: "Mechanical ball",
      Variants: "Bus/InPort, serial and PS/2 versions",
    },
    links: [],
    source: {
      title: "Microsoft · Hardware Timeline",
      url: "https://download.microsoft.com/download/4/b/8/4b8b3a0c-1d6f-46be-9bd1-e30a208d67e7/Hardware%20Timeline.pdf",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Microsoft Learn · The History of Microsoft, 1987",
        url: "https://learn.microsoft.com/en-us/shows/history/history-of-microsoft-1987",
        kind: "Microsoft",
      },
      {
        title: "Wikipedia · Microsoft Mouse hardware revisions",
        url: "https://en.wikipedia.org/wiki/Microsoft_Mouse",
        kind: "Wikipedia",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    aliases: ["Dove Soap Bar", "Contoured Microsoft Mouse"],
    predecessor: 232,
    successor: 164,
  },
  {
    id: 234,
    name: "Microsoft IntelliMouse Explorer (2001 revision)",
    category: "Mice",
    year: 2001,
    description:
      "The wired 2001 Explorer update introduced a faster IntelliEye sensor and revised the right-handed grip with finger grooves.",
    specs: {
      Tracking: "IntelliEye optical; 6,000 images per second",
      Design: "Shaped right-handed grip with finger grooves",
      Connection: "Wired",
    },
    links: [],
    source: {
      title: "Microsoft · New mouse family introduces 6,000-image/s IntelliEye",
      url: "https://news.microsoft.com/source/2001/09/25/new-microsoft-mouse-family-unleashes-wireless-intellimouse-explorer/",
      kind: "Microsoft archive",
      publishedAt: "2001-09-25",
    },
    additionalSources: [
      {
        title: "Wikipedia · IntelliMouse variants and sensors",
        url: "https://en.wikipedia.org/wiki/IntelliMouse",
        kind: "Wikipedia",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    aliases: ["IntelliMouse Explorer 6000 fps"],
    predecessor: 39,
  },
  {
    id: 235,
    name: "Microsoft IntelliMouse Explorer 4.0",
    category: "Mice",
    year: 2003,
    description:
      "The wired Tilt Wheel Explorer added side-to-side scrolling to the ergonomic Explorer line.",
    specs: {
      Scrolling: "Tilt Wheel, vertical and horizontal",
      Connection: "USB",
    },
    links: [],
    source: {
      title: "Microsoft · Tilt Wheel and the 2003 peripheral lineup",
      url: "https://news.microsoft.com/source/2003/09/03/microsoft-hardware-puts-new-spin-on-innovation/",
      kind: "Microsoft archive",
      publishedAt: "2003-09-03",
    },
    additionalSources: [
      {
        title: "Wikipedia · IntelliMouse variants and sensors",
        url: "https://en.wikipedia.org/wiki/IntelliMouse",
        kind: "Wikipedia",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    msrp: {
      amount: 44.95,
      currency: "USD",
      region: "United States",
      date: "2003-09-03",
      source:
        "https://news.microsoft.com/source/2003/09/03/microsoft-hardware-puts-new-spin-on-innovation/",
    },
    dateLabel:
      "Announced in September 2003. Microsoft’s press release lists February 2004 availability for the wired Explorer.",
  },
  {
    id: 236,
    name: "Microsoft Wireless IntelliMouse Explorer 2.0",
    category: "Mice",
    year: 2003,
    description:
      "The 2.0 wireless model added horizontal scrolling, improved receiver identification and came in several finishes.",
    specs: {
      Scrolling: "Tilt Wheel, vertical and horizontal",
      Connection: "27 MHz RF receiver",
      Input: "Five buttons",
    },
    links: [],
    source: {
      title: "Microsoft · Tilt Wheel and the 2003 peripheral lineup",
      url: "https://news.microsoft.com/source/2003/09/03/microsoft-hardware-puts-new-spin-on-innovation/",
      kind: "Microsoft archive",
      publishedAt: "2003-09-03",
    },
    additionalSources: [
      {
        title: "Wikipedia · IntelliMouse variants and sensors",
        url: "https://en.wikipedia.org/wiki/IntelliMouse",
        kind: "Wikipedia",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    msrp: {
      amount: 54.95,
      currency: "USD",
      region: "United States",
      date: "2003-09-03",
      source:
        "https://news.microsoft.com/source/2003/09/03/microsoft-hardware-puts-new-spin-on-innovation/",
    },
    predecessor: 41,
    dateLabel:
      "Microsoft announced availability by the end of September 2003. The black leather finish had a separate price.",
  },
  {
    id: 237,
    name: "Microsoft Wireless IntelliMouse Explorer for Bluetooth",
    category: "Mice",
    year: 2002,
    description:
      "The first Bluetooth Explorer was sold separately with a USB transceiver and was also part of Microsoft’s Wireless Optical Desktop for Bluetooth.",
    specs: {
      Connection: "Bluetooth with USB transceiver",
      Tracking: "IntelliEye optical",
    },
    links: [],
    source: {
      title: "Microsoft · Retail availability of Bluetooth desktop and mouse",
      url: "https://news.microsoft.com/source/2002/10/15/microsoft-makes-history-delivers-unprecedented-wireless-freedom-with-new-desktop-hardware-solution-for-bluetooth/",
      kind: "Microsoft archive",
      publishedAt: "2002-10-15",
    },
    additionalSources: [],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    launchDate: "2002-10-15",
    msrp: {
      amount: 84.95,
      currency: "USD",
      region: "United States",
      date: "2002-10-15",
      source:
        "https://news.microsoft.com/source/2002/10/15/microsoft-makes-history-delivers-unprecedented-wireless-freedom-with-new-desktop-hardware-solution-for-bluetooth/",
    },
    dateLabel:
      "US retail availability was announced by Microsoft on 15 October 2002.",
  },
  {
    id: 238,
    name: "Microsoft Wireless IntelliMouse Explorer with Fingerprint Reader",
    category: "Mice",
    year: 2004,
    description:
      "This bundle paired a Wireless IntelliMouse Explorer with a fingerprint-reading USB receiver for password and sign-in workflows of the Windows XP era.",
    specs: {
      Connection: "Wireless mouse with USB receiver",
      Biometrics: "Fingerprint reader in the receiver",
      "Mouse model": "1007",
      "Receiver model": "1034",
      "FCC identifiers": "C3K1007 (mouse), C3K1034 (receiver)",
    },
    links: [],
    source: {
      title: "Microsoft · Nine new ways to get in touch with the PC",
      url: "https://news.microsoft.com/source/2004/09/08/microsoft-reveals-nine-new-ways-to-get-in-touch-with-the-pc/",
      kind: "Microsoft archive",
      publishedAt: "2004-09-08",
    },
    additionalSources: [
      {
        title: "Microsoft · Fingerprint Reader bundle technical data sheet",
        url: "https://download.microsoft.com/download/2/9/5/29575e5d-895e-475c-a2e8-d37ce895a7ff/TDS_WirelessIntelliMouseExplorerwithFPR_0602A.PDF",
        kind: "Microsoft archive",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
  },
  {
    id: 239,
    name: "Microsoft Arc Touch Mouse Surface Edition",
    category: "Mice",
    year: 2013,
    description:
      "The Surface Edition of Arc Touch kept the flexible body and replaced the original model’s dedicated USB receiver with Bluetooth.",
    specs: {
      Connection: "Bluetooth",
      Design: "Bends to use; flattens for storage",
      Input: "Touch scroll strip",
    },
    links: [],
    source: {
      title: "Microsoft · Surface 2 and Bluetooth Arc Touch Surface Edition",
      url: "https://blogs.windows.com/devices/2013/09/23/announcing-surface-2-surface-pro-2-and-new-surface-accessories/",
      kind: "Microsoft archive",
      publishedAt: "2013-09-23",
    },
    additionalSources: [
      {
        title: "Wikipedia · Arc Mouse revisions",
        url: "https://en.wikipedia.org/wiki/Arc_Mouse",
        kind: "Wikipedia",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    aliases: ["Arc Touch Bluetooth Mouse", "Arc Touch BT"],
    dateLabel:
      "Announced alongside Surface 2 in September 2013. The archive does not assign the Surface tablet’s ship date to the mouse.",
  },
  {
    id: 240,
    name: "Microsoft SideWinder Force Feedback Wheel USB",
    category: "Game Controllers",
    year: null,
    description:
      "The USB revision combined a force-feedback wheel and pedals with a USB connection. Microsoft documented it separately from the earlier game-port model.",
    specs: {
      Connection: "USB",
      Input: "Wheel and pedals",
      Feedback: "Motor-driven force effects",
    },
    links: [],
    source: {
      title:
        "Microsoft · KB 271890: USB Force Feedback Wheel requirements (archive mirror)",
      url: "https://ftp.zx.net.nz/pub/Patches/ftp.microsoft.com/MISC/KB/en-us/271/890.HTM",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · SideWinder wheel revisions",
        url: "https://en.wikipedia.org/wiki/Microsoft_SideWinder",
        kind: "Wikipedia",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    operatingSystem:
      "Windows 98 or Windows 2000 (historical Microsoft minimum requirements)",
    dateLabel:
      "Microsoft’s archived USB requirements confirm this revision. Exact original release year remains unconfirmed.",
  },
  {
    id: 241,
    name: "Microsoft Presenter+",
    category: "Accessories",
    year: 2022,
    description:
      "A Bluetooth presentation remote with a digital pointer for PowerPoint Live, dedicated Teams controls and tactile feedback.",
    specs: {
      Connection: "Bluetooth",
      Controls: "Slide navigation, presentation pointer and Teams button",
      Charging: "Included charging dock",
    },
    links: [],
    source: {
      title: "Microsoft · Microsoft Audio Dock and Presenter+ announcement",
      url: "https://blogs.windows.com/devices/2022/10/12/introducing-new-surface-devices-that-take-the-windows-pc-into-the-next-era-of-computing/",
      kind: "Microsoft archive",
      publishedAt: "2022-10-12",
    },
    additionalSources: [
      {
        title: "Microsoft Support · Set up and use Microsoft Presenter+",
        url: "https://support.microsoft.com/en-us/surface/accessories/certified/set-up-and-use-microsoft-presenter",
        kind: "Microsoft",
      },
      {
        title:
          "Microsoft Support · Devices supported by Microsoft Accessory Center",
        url: "https://support.microsoft.com/en-us/surface/service-repair/find-the-serial-number-for-your-surface-device-and-accessories-or-microsoft-accessories",
        kind: "Microsoft",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    softwareSupport:
      "Microsoft Accessory Center on Windows 10/11 for configuration. Teams and PowerPoint Live functions depend on the host application.",
  },
  {
    id: 242,
    name: "Microsoft Audio Dock",
    category: "Audio",
    year: 2022,
    description:
      "A desk speakerphone with USB-C connectivity, display output and laptop charging, built for meetings as well as playback.",
    specs: {
      Connection: "USB-C host cable",
      Ports: "HDMI, USB-A and USB-C",
      "Host charging": "Up to 60 W",
      Controls: "Teams, play/pause, volume and mute",
    },
    links: [],
    source: {
      title: "Microsoft · Microsoft Audio Dock and Presenter+ announcement",
      url: "https://blogs.windows.com/devices/2022/10/12/introducing-new-surface-devices-that-take-the-windows-pc-into-the-next-era-of-computing/",
      kind: "Microsoft archive",
      publishedAt: "2022-10-12",
    },
    additionalSources: [
      {
        title: "Microsoft Support · Microsoft Audio Dock in Teams",
        url: "https://support.microsoft.com/en-us/surface/accessories/certified/use-microsoft-audio-dock-in-microsoft-teams",
        kind: "Microsoft",
      },
      {
        title: "Microsoft · Audio Dock fact sheet",
        url: "https://news.microsoft.com/wp-content/uploads/prod/sites/646/2022/10/Microsoft-Audio-Dock-Fact-Sheet.pdf",
        kind: "Microsoft",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    softwareSupport:
      "Microsoft Accessory Center on Windows 10/11 is used to customise supported settings.",
  },
  {
    id: 243,
    name: "Microsoft Modern Webcam",
    category: "Webcams",
    year: 2021,
    description:
      "A Teams-certified USB webcam with HDR and a physical shutter that covers the lens between meetings.",
    specs: {
      Video: "1080p with HDR",
      "Field of view": "78°",
      Connection: "USB",
      Mount: "Monitor clip or tripod",
    },
    links: [],
    source: {
      title: "Microsoft · Surface Laptop 4 and Modern meeting accessories",
      url: "https://blogs.windows.com/devices/2021/04/13/introducing-surface-laptop-4-and-new-accessories-for-enhanced-meeting-experiences/",
      kind: "Microsoft archive",
      publishedAt: "2021-04-13",
    },
    additionalSources: [
      {
        title: "Microsoft Support · Microsoft Modern Webcam in Teams",
        url: "https://support.microsoft.com/en-us/surface/accessories/certified/use-microsoft-modern-webcam-in-microsoft-teams",
        kind: "Microsoft",
      },
      {
        title: "Incase · Modern Webcam listing",
        url: "https://www.incase.com/products/modern-webcam",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    msrp: {
      amount: 69.99,
      currency: "USD",
      region: "United States",
      date: "2021-04-13",
      source:
        "https://blogs.windows.com/devices/2021/04/13/introducing-surface-laptop-4-and-new-accessories-for-enhanced-meeting-experiences/",
    },
    lifecycle: {
      status: "licensed-incase",
      source: "https://www.incase.com/products/modern-webcam",
      checkedAt: "2026-11-23",
      note: "Incase catalogues a Designed by Microsoft version. Availability depends on region.",
    },
    softwareSupport:
      "Microsoft Accessory Center on Windows 10/11 for the original Microsoft model.",
  },
  {
    id: 244,
    name: "Microsoft Modern USB Headset",
    category: "Audio",
    year: 2021,
    description:
      "A wired Teams-certified headset with an inline call controller and a light that confirms microphone mute.",
    specs: {
      Connection: "USB-A",
      Controls: "Teams, answer/end, volume and microphone mute",
      "Incase catalogue SKU": "6ID-00012",
    },
    links: [],
    source: {
      title: "Microsoft · Surface Laptop 4 and Modern meeting accessories",
      url: "https://blogs.windows.com/devices/2021/04/13/introducing-surface-laptop-4-and-new-accessories-for-enhanced-meeting-experiences/",
      kind: "Microsoft archive",
      publishedAt: "2021-04-13",
    },
    additionalSources: [
      {
        title: "Microsoft Support · Microsoft Modern USB Headset in Teams",
        url: "https://support.microsoft.com/en-us/surface/accessories/certified/use-microsoft-modern-usb-headset-in-microsoft-teams",
        kind: "Microsoft",
      },
      {
        title: "Incase · Modern USB Headset listing",
        url: "https://www.incase.com/products/modern-usb-headset",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    msrp: {
      amount: 49.99,
      currency: "USD",
      region: "United States",
      date: "2021-04-13",
      source:
        "https://blogs.windows.com/devices/2021/04/13/introducing-surface-laptop-4-and-new-accessories-for-enhanced-meeting-experiences/",
    },
    softwareSupport:
      "Microsoft Accessory Center on Windows 10/11 for the original Microsoft model. Physical call controls have limitations in Teams for the web. Incase says its version does not work with either Microsoft configuration utility.",
    lifecycle: {
      status: "licensed-incase",
      source: "https://www.incase.com/products/modern-usb-headset",
      checkedAt: "2026-11-23",
      note: "Incase catalogues a Designed by Microsoft variant. Availability is regional.",
    },
  },
  {
    id: 245,
    name: "Microsoft Modern USB-C Headset",
    category: "Audio",
    year: 2021,
    description:
      "The USB-C version of the Modern wired headset keeps the inline Teams controls while changing its host connector.",
    specs: {
      Connection: "USB-C",
      "Model number": "2026",
      Controls: "Inline Teams, mute and volume buttons",
    },
    links: [],
    source: {
      title: "Microsoft Support · Microsoft Modern USB-C Headset in Teams",
      url: "https://support.microsoft.com/en-us/surface/accessories/certified/use-microsoft-modern-usb-c-headset-in-microsoft-teams",
      kind: "Microsoft",
    },
    additionalSources: [
      {
        title: "9to5Toys · Modern USB-C Headset preorder (September 2021)",
        url: "https://9to5toys.com/2021/09/27/microsoft-modern-usb-c-headset/",
      },
      {
        title: "Microsoft · Model 2026 UK declaration of conformity",
        url: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/wmcfx/documents/presentations/UK_DOC_2026_092723.pdf",
        kind: "Microsoft",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    softwareSupport:
      "Microsoft Accessory Center on Windows 10/11 for the original Microsoft model.",
  },
  {
    id: 246,
    name: "Microsoft Modern Wireless Headset",
    category: "Audio",
    year: 2021,
    description:
      "A rechargeable headset with a boom microphone and a bundled USB Link for the Teams-certified connection.",
    specs: {
      Connection: "Microsoft USB Link or Bluetooth",
      Input: "Dedicated Teams button and physical mute controls",
      "Incase catalogue SKU": "8JR-00001",
    },
    links: [],
    source: {
      title: "Microsoft · Surface Laptop 4 and Modern meeting accessories",
      url: "https://blogs.windows.com/devices/2021/04/13/introducing-surface-laptop-4-and-new-accessories-for-enhanced-meeting-experiences/",
      kind: "Microsoft archive",
      publishedAt: "2021-04-13",
    },
    additionalSources: [
      {
        title: "Microsoft Support · Set up Modern Wireless Headset",
        url: "https://support.microsoft.com/en-us/surface/accessories/certified/set-up-microsoft-modern-wireless-headset",
        kind: "Microsoft",
      },
      {
        title: "Incase · Modern Wireless Headset listing",
        url: "https://www.incase.com/products/modern-wireless-headset",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    softwareSupport:
      "The included USB Link is used for the Teams-certified experience on Windows 10/11 or Mac. Microsoft Accessory Center is a Windows application. Incase says its version does not work with either Microsoft configuration utility.",
    lifecycle: {
      status: "licensed-incase",
      source: "https://www.incase.com/products/modern-wireless-headset",
      checkedAt: "2026-11-23",
      note: "Incase catalogues a Designed by Microsoft variant. Availability is regional.",
    },
  },
  {
    id: 247,
    name: "Microsoft Modern USB-C Speaker",
    category: "Audio",
    year: 2021,
    description:
      "A compact wired speakerphone with dual microphones, a Teams control and storage for its cable.",
    specs: {
      Connection: "USB-C",
      Audio: "Speaker with two microphones",
      Design: "Integrated cable storage",
    },
    links: [],
    source: {
      title: "Microsoft · Surface Laptop 4 and Modern meeting accessories",
      url: "https://blogs.windows.com/devices/2021/04/13/introducing-surface-laptop-4-and-new-accessories-for-enhanced-meeting-experiences/",
      kind: "Microsoft archive",
      publishedAt: "2021-04-13",
    },
    additionalSources: [
      {
        title:
          "Microsoft Support · Devices supported by Microsoft Accessory Center",
        url: "https://support.microsoft.com/en-us/surface/service-repair/find-the-serial-number-for-your-surface-device-and-accessories-or-microsoft-accessories",
        kind: "Microsoft",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    msrp: {
      amount: 99.99,
      currency: "USD",
      region: "United States",
      date: "2021-04-13",
      source:
        "https://blogs.windows.com/devices/2021/04/13/introducing-surface-laptop-4-and-new-accessories-for-enhanced-meeting-experiences/",
    },
    softwareSupport:
      "Microsoft Accessory Center on Windows 10/11 for the original Microsoft model.",
  },
  {
    id: 248,
    name: "Surface Headphones 2+",
    category: "Accessories",
    year: 2021,
    description:
      "A business variant of Surface Headphones 2 with a dedicated Teams button and a bundled USB Link for certified conferencing.",
    specs: {
      Connection: "Bluetooth or Microsoft Surface USB Link",
      Controls: "Noise-cancelling and volume dials; Microsoft Teams button",
    },
    links: [],
    source: {
      title: "Microsoft · Surface Laptop 4 and Modern meeting accessories",
      url: "https://blogs.windows.com/devices/2021/04/13/introducing-surface-laptop-4-and-new-accessories-for-enhanced-meeting-experiences/",
      kind: "Microsoft archive",
      publishedAt: "2021-04-13",
    },
    additionalSources: [
      {
        title: "Microsoft Support · Using Surface Headphones 2+",
        url: "https://support.microsoft.com/en-us/surface/accessories/headphones/use-surface-headphones",
        kind: "Microsoft",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
  },
  {
    id: 250,
    name: "Microsoft RoundTable",
    category: "Webcams",
    year: 2007,
    description:
      "A tabletop conferencing unit with panoramic video, an active-speaker view and a microphone array. Polycom later licensed it as the CX5000.",
    specs: {
      Video: "360° panoramic coverage and an active-speaker view",
      Audio: "Six-microphone array",
      "Original software":
        "Office Live Meeting and Office Communications Server 2007",
    },
    links: [],
    source: {
      title: "Microsoft · Unified Communications Launch (2007)",
      url: "https://news.microsoft.com/speeches/bill-gates-and-jeff-raikes-unified-communications-launch/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Microsoft · Polycom licenses RoundTable",
        url: "https://news.microsoft.com/source/2009/03/30/microsoft-and-polycom-expand-their-relationship-to-enhance-unified-communications-and-collaboration-solutions/",
        kind: "Microsoft archive",
        publishedAt: "2009-03-30",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
  },
  {
    id: 251,
    name: "Microsoft LifeCam VX-700",
    category: "Webcams",
    year: 2008,
    description:
      "A compact plug-and-play VGA webcam offered with a separate headset and microphone in Microsoft’s buyer’s guide.",
    specs: {
      Video: "VGA sensor",
      Audio: "Bundled headset with microphone",
      Mount: "Universal attachment base",
    },
    links: [],
    source: {
      title: "Microsoft · 2008 Hardware buyer’s guide",
      url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · LifeCam models",
        url: "https://en.wikipedia.org/wiki/LifeCam",
        kind: "Wikipedia",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    dateLabel:
      "Documented as a new model in Microsoft’s 2008 buyer’s guide. Exact retail date is unconfirmed.",
  },
  {
    id: 252,
    name: "Incase Compact Ergonomic Keyboard (Designed by Microsoft)",
    category: "Keyboards",
    year: null,
    description:
      "Incase previewed this split ergonomic keyboard with a Copilot key and a compact layout that omits a numeric keypad.",
    specs: {
      Layout: "Compact split keyset without numeric keypad",
      Input: "Dedicated Copilot key",
    },
    links: [],
    source: {
      title: "Incase · Compact Ergonomic Keyboard product preview",
      url: "https://www.incase.com/products/compact-ergonomic-keyboard",
    },
    additionalSources: [
      {
        title: "Wikipedia · Microsoft ergonomic keyboard history",
        url: "https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards",
        kind: "Wikipedia",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    manufacturer: "Incase",
    lifecycle: {
      status: "unreleased",
      source: "https://www.incase.com/products/compact-ergonomic-keyboard",
      checkedAt: "2026-11-23",
      note: "The listing is a product preview and says Coming Soon. A retail release could not be substantiated.",
    },
    dateLabel: "Announced product preview. Retail launch date is unconfirmed.",
  },
  {
    id: 253,
    name: "Lumia McLaren (prototype)",
    category: "Phones",
    year: 2014,
    description:
      "An unreleased Lumia flagship prototype documented in period reporting, with a prominent rear camera housing and experimental touch interactions.",
    specs: {
      Format: "Windows Phone prototype",
      Interaction: "Experimental proximity-based touch",
    },
    links: [],
    source: {
      title: "Ars Technica · Photographs of the cancelled McLaren prototype",
      url: "https://arstechnica.com/gadgets/2014/12/what-might-have-been-photos-leak-of-cancelled-windows-phone-flagship/",
    },
    additionalSources: [
      {
        title: "Windows Central · Surface Neo cancellation retrospective",
        url: "https://www.windowscentral.com/microsoft/revisiting-microsofts-biggest-canceled-devices-from-revolutionary-phones-to-dual-screen-pcs",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    lifecycle: {
      status: "unreleased",
      source:
        "https://arstechnica.com/gadgets/2014/12/what-might-have-been-photos-leak-of-cancelled-windows-phone-flagship/",
      checkedAt: "2026-11-23",
      note: "Cancelled prototype with no retail launch.",
    },
    dateLabel:
      "2014 is the year of documented prototype reporting, not a launch year.",
  },
  {
    id: 254,
    name: "Microsoft Sculpt Ergonomic Desktop",
    category: "Keyboards",
    year: 2013,
    description:
      "The original Microsoft desktop bundle combined the split Sculpt keyboard, separate number pad and Sculpt Ergonomic Mouse with a shared wireless receiver.",
    specs: {
      Connection: "Wireless USB receiver",
      Bundle: "Split keyboard, numeric keypad and Sculpt Ergonomic Mouse",
    },
    links: [],
    source: {
      title: "Microsoft · Sculpt Ergonomic Desktop introduction",
      url: "https://blogs.windows.com/windowsexperience/2013/08/13/announcing-the-sculpt-ergonomic-desktop/",
      kind: "Microsoft archive",
      publishedAt: "2013-08-13",
    },
    additionalSources: [
      {
        title: "Incase · Sculpt Ergonomic Desktop support",
        url: "https://www.incase.com/pages/sculpt-ergonomic-desktop-support",
      },
      {
        title: "Incase · Designed by Microsoft collection",
        url: "https://www.incase.com/pages/incase-designed-by-microsoft-collection",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    msrp: {
      amount: 129.95,
      currency: "USD",
      region: "United States",
      date: "2013-08-13",
      source:
        "https://blogs.windows.com/windowsexperience/2013/08/13/announcing-the-sculpt-ergonomic-desktop/",
    },
    lifecycle: {
      status: "licensed-incase",
      source:
        "https://www.incase.com/pages/incase-designed-by-microsoft-collection",
      checkedAt: "2026-11-23",
      note: "Incase catalogues a licensed version. Its support page excludes both Microsoft configuration utilities for the Incase hardware.",
    },
    softwareSupport:
      "Microsoft Mouse and Keyboard Center supports original hardware where documented. Incase says its version works with neither Microsoft Mouse and Keyboard Center nor Microsoft Accessory Center.",
  },
  {
    id: 255,
    name: "Microsoft LifeCam Show",
    category: "Webcams",
    year: 2008,
    description:
      "A slim webcam designed for portable or desktop use, with a magnetic attachment system and a choice of mounting accessories.",
    specs: {
      Sensor: "2.0 MP",
      Mount: "Magnetic clip, base or desktop stand",
      "Still capture": "Up to 8.0 MP interpolated",
    },
    links: [],
    source: {
      title: "Microsoft · 2008 Hardware buyer’s guide",
      url: "https://download.microsoft.com/download/2/7/2/272DF0DA-5CBD-46CB-B1F2-0780251202E4/LM_KIT_08_BOOKLET_FG_HR.pdf",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Wikipedia · LifeCam models",
        url: "https://en.wikipedia.org/wiki/LifeCam",
        kind: "Wikipedia",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    dateLabel: "Documented in the 2008 Microsoft Hardware buyer’s guide.",
  },
  {
    id: 256,
    name: "Microsoft Wireless Desktop 900",
    category: "Keyboards",
    year: 2015,
    description:
      "A full-size keyboard and matching optical mouse that share a single 2.4 GHz USB receiver. Microsoft’s US price list identifies the North American retail bundle as PT3-00001.",
    specs: {
      Connection: "2.4 GHz USB transceiver",
      "Keyboard model": "1738",
      "Mouse model": "1737",
      "Receiver model": "1461",
      "FCC identifiers":
        "C3K1738 (keyboard), C3K1737 (mouse), C3K1461 (receiver)",
    },
    links: [],
    source: {
      title: "Microsoft Germany · Wireless Desktop 900 retail availability",
      url: "https://news.microsoft.com/de-de/microsoft-macht-neues-pc-zubehoer-fuer-windows-10-auf-dem-deutschen-markt-verfuegbar/",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "Microsoft · Wireless Desktop 900 technical data sheet",
        url: "https://download.microsoft.com/download/7/A/2/7A2A35DD-7FA8-4EAC-8A41-F47884AB8783/TDS_WirelessDesktop900.pdf",
        kind: "Microsoft archive",
      },
      {
        title:
          "Microsoft · US Surface and accessory price list (September 2017)",
        url: "https://download.microsoft.com/download/4/4/6/4468A0FC-FF3F-4952-AC93-1D411B8E6FEC/SurfacePriceList_090117.pdf",
        kind: "Microsoft archive",
      },
      {
        title: "Microsoft Support · Windows 10 S accessory compatibility",
        url: "https://support.microsoft.com/en-us/windows/experience/platform-variants/microsoft-accessories-experiences-with-windows-10-s",
        kind: "Microsoft",
      },
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
      {
        title: "Incase · Wireless Desktop 900 catalogue listing",
        url: "https://www.incase.com/pages/incase-designed-by-microsoft-collection",
      },
      {
        title: "Incase · Wireless Desktop 900 listing",
        url: "https://www.incase.com/products/wireless-desktop-900",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    partNumber: "PT3-00001 (US retail)",
    usbIds: [
      {
        id: "045E:07B2",
        label: "2.4 GHz transceiver v8.0",
      },
    ],
    softwareSupport:
      "Microsoft documents basic use under Windows 10 S. Its advanced Mouse and Keyboard Center settings are unavailable in that mode.",
    dateLabel:
      "Retail availability in Germany was announced in October 2015. Other regions followed separately.",
    lifecycle: {
      status: "licensed-incase",
      source: "https://www.incase.com/products/wireless-desktop-900",
      checkedAt: "2026-11-23",
      note: "Incase catalogues a Designed by Microsoft variant. Availability is regional.",
    },
  },
  {
    id: 257,
    name: "Microsoft Basic Optical Mouse v2.0",
    category: "Mice",
    year: null,
    description:
      "A simple wired optical mouse with a clickable wheel and an ambidextrous housing. This entry covers the USB v2.0 hardware identified in Microsoft’s technical sheet.",
    specs: {
      Connection: "Wired USB",
      Tracking: "800 counts per inch",
      "Model number": "1113",
      Input: "Two main buttons and clickable wheel",
    },
    links: [],
    source: {
      title: "Microsoft · Basic Optical Mouse USB v2.0 technical data sheet",
      url: "https://download.microsoft.com/download/A/E/B/AEB70318-6FE3-48C7-863B-5BFB3BED1FD4/TDS_BasicOpticalMouseUSBV2.0.pdf",
      kind: "Microsoft archive",
    },
    additionalSources: [
      {
        title: "USB ID Repository · Microsoft VID 045E device listing",
        url: "https://github.com/usbids/usbids/blob/master/usb.ids",
      },
    ],
    researchedAt: "2026-11-23",
    addedAt: "2026-11-23",
    usbIds: [
      {
        id: "045E:00CB",
        label: "Basic Optical Mouse v2.0 USB",
      },
    ],
    dateLabel:
      "Microsoft documents the exact revision, but its first retail year is unconfirmed.",
  },
];
