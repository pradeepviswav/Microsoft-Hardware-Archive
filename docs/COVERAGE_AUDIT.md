# Catalogue additions and provenance audit — 17 November 2026

## First request: missing products

The first batch adds 48 individual records (IDs 164–211) to the existing 163.
This covers each of the missing named items from the comparison, and expands
families into distinct models rather than adding generic family placeholders:

- Mouse 2.0; Natural Wireless Laser Mouse 6000; Bluetooth Notebook Mouse 5000
  and Bluetooth Mobile Mouse 3600.
- Comfort Curve 2000/3000, Digital Media Pro/3000, Wireless Entertainment
  Desktops 7000/8000.
- SideWinder Precision Pro, Game Voice, Precision Racing Wheel, Force Feedback
  Wheel, original Mouse, X5 and X8; X3 is also included.
- LifeCam VX-500/1000/2000/3000/5000/5500/6000/7000, NX-3000/6000,
  HD-5000/5001/6000; LifeChat ZX-6000, LX-1000/2000/4000/6000.
- Lumia 430 Dual SIM, 435, 532, 540 Dual SIM and 550. Single/dual-SIM versions
  of the 435 and 532 are grouped, not counted as duplicate hardware records.
- Mach 20, three partner-manufactured MSN Companion appliances, TouchLight,
  IVAS and Surface Neo.

Each entry links its actual research source and records the research date.
Most use Microsoft announcements, research publications or fact sheets. The
Precision Racing Wheel uses Wikipedia's product chronology; Neo's unreleased
status is cross-referenced to Wikipedia. Primary-source preference is not a
claim that a dated preview proves subsequent shipping.

Date distinctions are deliberate: Mach 20 is dated 1987 by Microsoft's
retrospective (8 MHz 80286), X8 uses the confirmed 2009 retail announcement,
Wireless Entertainment Desktops use their 2006 announcement year, and Neo is
explicitly unreleased. TouchLight is a research prototype; IVAS uses its 2021
production-phase milestone and links the 2025 Anduril update. Unknown original
launch years remain null, including LifeChat LX-1000 and LifeCam VX-5500.

MSN Companion records identify Compaq/eMachines as the manufacturer and
Microsoft's role as software/service provider. They are not Microsoft-built PCs.
Unconfirmed photographs are not replaced with unrelated product images.

## Follow-up audit: reconciled against the complete collection

The old `catalogue-provenance.json` contained only the 136 records from
`data/catalogue.ts`. It omitted the original 20, five recent records and two
Surface tabletop records. It was not a complete inventory. The regenerated file
now contains all **231 records**, including both batches in this change. Run
`npm run catalogue:manifest` after changing source data. `/catalogue.json` exports
the same complete inventory with canonical URLs, and is discoverable from the
homepage directory, Dataset schema and `/llms.txt`.

### Already present, preserved rather than duplicated

Microsoft Mouse (1983), Surface RT, Surface Pro 3, Surface Pro X (SQ1), Surface
Duo, Surface Laptop Studio, Surface Book, original Xbox, Xbox 360, Xbox One,
Xbox Series X and Surface Headphones 2 were already present in the original
records. Their IDs and URLs remain intact. The SQ1 Pro X now has explicit SQ1
aliases, recorded specifications and the [official availability announcement](https://blogs.windows.com/devices/2019/11/05/surface-pro-x-available-today/).

The original mouse, Mouse 2.0, Serial Mouse and Bus Mouse share the distinct
**Original Microsoft mice** family. Surface Pen and Slim Pen models likewise
share **Surface pens**, rather than the generic Accessories family.

Six original records also receive primary Microsoft references in
`data/legacy-research.ts`: the first mouse, Surface RT, Pro 3, Book, Laptop
Studio and Duo. Confirmed regional launch dates and historical base prices are
recorded where the original announcements support them.

### Twenty further records (IDs 212–231)

- Serial Mouse and Bus Mouse: interface-family records, with original launch
  years unconfirmed; Microsoft-authored programmer documentation is preserved
  by Bitsavers. These do not imply every bus/serial revision was a new launch.
- EasyBall; SideWinder Standard, Game Pad Pro, Plug & Play Game Pad, Freestyle
  Pro and Dual Strike.
- Xbox 360 S and Xbox 360 E; Surface Pro X SQ2.
- Surface Pen (2017, no clip), first Surface Slim Pen and Surface Dock;
  Surface USB4 Dock; Surface Precision Mouse and Surface Mobile Mouse;
  first-generation Surface Mouse and Surface Keyboard.
- IntelliMouse Explorer 3.0 **2006 reissue**, explicitly distinguished from the
  2001 original generation and the 1999 Explorer. The primary 2006 announcement
  supports the relaunch and historical US estimated retail price.

Combined with the first batch, this adds **68 records**, bringing 163 to 231.
Family lists are represented by researched individual models; this does not claim
that every regional SKU or every product in each broad series is catalogued.

### Disputed names and dates

- **Surface Laptop Ultra:** retained after checking its [Microsoft Store listing](https://www.microsoft.com/en-us/d/surface-laptop-ultra/8wg5vqp0x4b8).
  The record includes the listed NVIDIA RTX Spark N1X CPU configurations and
  the review date. Exact original launch date remains unconfirmed.
- **Surface Keyboard (2nd Edition):** Microsoft Store and [Support](https://support.microsoft.com/en-us/surface/accessories/mouse-keyboard/use-surface-keyboard)
  verify the identity, but the original introduction year is still unconfirmed.
  A dated question mentioning a product is not proof of its launch date. `year`
  and `launchDate` remain null rather than acquiring an invented year.
- **Surface Pro 12-inch (1st Edition):** retained Microsoft's own edition naming
  and existing canonical URL; newer edition records remain distinct.
- **Surface Dock 3:** not added as a separate official model. Retail listings use
  this ambiguous alias for the existing Surface Thunderbolt 4 Dock and for
  Surface USB4 Dock. Both official model names are now represented.
- **Surface Earbuds 2 / Surface Precision Keyboard:** no official model could be
  verified in the sources checked. Not added as factual products. Existing
  Surface Earbuds, Surface Keyboard and Surface Precision Mouse stay separate.

### Structured metadata and evidence

Every inventory record exposes `category`, `subcategory` (product family),
`launchDate`, `msrp`, `partNumber`, `connectionType`, `operatingSystem`,
`predecessor`, `successor`, `manufacturer` and `gallery`. Unknown scalars are
**null**, absent media is `[]`, and aliases are a separate searchable list.
Manufacturer identifies the product company, not an independently verified
contract assembly factory; MSN Companion partner companies remain Compaq and
eMachines. MSRP is historical and includes currency, region, date and source,
not a live offer. A research/publication date is never substituted for a launch.

Only documented relationships are stored: Comfort Curve 3000 is explicitly
described as the successor of 2000 in Microsoft's Japanese announcement. The
existing chronological family navigation continues to explain that adjacent
records are not necessarily predecessors/successors. Known metadata is rendered
in specifications, quick view, comparison, Markdown and Product JSON-LD.

The inventory separates actual local `imageUrl` bytes from `imageSource` and
`source.url` webpages. The old ambiguous provenance `image` field was an image
**source page**, not the URL used by the application's `<img>`. The complete
manifest removes that ambiguity. Tests check local image signatures as well as
file existence, credits, gallery/source consistency, stable IDs and inventory
coverage.

### Image recovery and remaining gaps

Added **17 verified Microsoft illustrations**, including 11 of the previously
missing images named by the audit. They come from the official Hardware Timeline,
manufacturer quick-start/technical sheets, model-specific Broadband Networking
product sheets, Microsoft Store and Microsoft Support. Original packaging and
support diagrams are labelled as such. Existing larger Natural Keyboard and
Natural Ergonomic Keyboard photographs are preserved. See `data/audit-media.ts`
and `IMAGE_SOURCES.md` for attribution.

Eight of the audit's image requests remain explicitly uncatalogued:
IntelliMouse TrackBall, Wireless IntelliMouse Explorer, Explorer Mini Mouse,
SideWinder X6, MN-500, Kin ONE, Xbox Wireless Headset (2021), ActiMates Barney.
The X6 announcement's linked image returns 404; several legacy press downloads
and press-asset hosts return 403 to the research client. Retrieved Explorer Mini
and X6 technical sheets contain logos rather than usable product photographs.
The available timeline Wireless IntelliMouse picture is a different revision,
so it is not substituted for the 2001 record. No retailer picture with unknown
rights, unrelated model image or invented render is used to conceal these gaps.
All affected records remain accessible and display the honest missing-photo
state. This PR does not claim complete image coverage.
