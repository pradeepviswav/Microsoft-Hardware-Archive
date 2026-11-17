import { Product } from "../types";
/** Evidence for existing records called out as missing by the partial-manifest audit. */
export const legacyResearch: Record<number, Partial<Product>> = {
  1: {
    source: {
      title: "Microsoft · Hardware Timeline",
      url: "https://download.microsoft.com/download/4/b/8/4b8b3a0c-1d6f-46be-9bd1-e30a208d67e7/Hardware%20Timeline.pdf",
      kind: "Microsoft archive",
    },
    specs: {
      Input: "Two buttons",
      Milestone: "First Microsoft PC-compatible mouse shipped in 1983",
    },
  },
  4: {
    source: {
      title: "Microsoft · Surface now available at Microsoft retail stores",
      url: "https://news.microsoft.com/source/2012/10/26/microsoft-surface-now-available-at-microsoft-retail-stores/",
      kind: "Microsoft archive",
      publishedAt: "2012-10-26",
    },
    additionalSources: [
      {
        title: "Microsoft · Original Surface pricing and configuration details",
        url: "https://news.microsoft.com/source/2012/10/16/microsoft-announces-new-surface-details/",
        kind: "Microsoft archive",
        publishedAt: "2012-10-16",
      },
    ],
    launchDate: "2012-10-26",
    dateLabel:
      "First retail availability in the United States and Canada on 26 October 2012; announced earlier in June.",
    specs: {
      "Operating system": "Windows RT",
      Storage: "32 GB or 64 GB",
      "Launch base configuration": "32 GB tablet without Touch Cover",
    },
    msrp: {
      amount: 499,
      currency: "USD",
      region: "United States",
      date: "2012-10-16",
      source:
        "https://news.microsoft.com/source/2012/10/16/microsoft-announces-new-surface-details/",
    },
  },
  9: {
    source: {
      title: "Microsoft · Surface Pro 3 announcement and specifications",
      url: "https://news.microsoft.com/source/2014/05/20/microsoft-introduces-surface-pro-3-the-tablet-that-can-replace-your-laptop-2/",
      kind: "Microsoft archive",
      publishedAt: "2014-05-20",
    },
    specs: {
      Display: "12-inch ClearType Full HD",
      Processor: "4th-generation Intel Core options",
      Memory: "Up to 8 GB",
      "Operating system": "Windows 8.1 Pro",
    },
    dateLabel:
      "Announced 20 May 2014; the Core i5 model was scheduled for US and Canadian availability from 20 June. Other configurations and regions followed separately.",
  },
  12: {
    source: {
      title: "Microsoft · Surface Book and Surface Pro 4 go on sale",
      url: "https://blogs.windows.com/devices/2015/10/26/surface-sales-start/",
      kind: "Microsoft archive",
      publishedAt: "2015-10-26",
    },
    launchDate: "2015-10-26",
    dateLabel:
      "Announced 6 October; first retail availability in the US and Canada on 26 October 2015.",
  },
  14: {
    source: {
      title:
        "Microsoft · Introducing Surface Laptop Studio and other Windows 11 devices",
      url: "https://blogs.windows.com/devices/2021/09/22/introducing-new-surface-products-built-for-windows-11/",
      kind: "Microsoft archive",
      publishedAt: "2021-09-22",
    },
    specs: {
      Display: "14.4-inch PixelSense touchscreen; up to 120 Hz",
      Modes: "Laptop, Stage and Studio",
    },
    dateLabel:
      "Announced 22 September 2021. Announcement date is not recorded as an exact retail launch date.",
  },
  17: {
    source: {
      title: "Microsoft · Surface Duo preorder announcement",
      url: "https://blogs.windows.com/devices/2020/08/12/available-for-preorder-today-surface-duo-is-purpose-built-for-mobile-productivity/",
      kind: "Microsoft archive",
      publishedAt: "2020-08-12",
    },
    additionalSources: [
      {
        title: "Microsoft · Surface Duo availability and Edge",
        url: "https://blogs.windows.com/windowsexperience/2020/09/10/the-new-microsoft-edge-on-surface-duo-showcases-cross-platform-convenience/",
        kind: "Microsoft archive",
        publishedAt: "2020-09-10",
      },
    ],
    launchDate: "2020-09-10",
    dateLabel:
      "US launch on 10 September 2020, following the August preorder announcement.",
    specs: {
      Display: "Two PixelSense Fusion displays; 8.1-inch combined area",
      "Operating system": "Android",
    },
    msrp: {
      amount: 1399,
      currency: "USD",
      region: "United States",
      date: "2020-08-12",
      source:
        "https://blogs.windows.com/devices/2020/08/12/available-for-preorder-today-surface-duo-is-purpose-built-for-mobile-productivity/",
    },
  },
};
