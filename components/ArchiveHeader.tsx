import { useEffect, useState } from "react";
import { Theme } from "../types";
import { corridorPath } from "../seo/urls";
import { Arrow, Modal } from "./ArchiveUI";

export default function ArchiveHeader({
  active,
  savedCount,
  onCollection,
  onSaved,
  onAbout,
}: {
  active: "collection" | "corridor";
  savedCount: number;
  onCollection?: () => void;
  onSaved?: () => void;
  onAbout: () => void;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return JSON.parse(localStorage.getItem("archive-theme") ?? "null") ===
        "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("archive-theme", JSON.stringify(theme));
    } catch {}
  }, [theme]);

  const collection = active === "collection";
  const prefix = collection ? "" : "/";
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Hardware Archive home">
        <span className="brand-mark" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span>
          Microsoft
          <br />
          <strong>Hardware Archive</strong>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a
          href={prefix + "#collection"}
          className={collection ? "nav-active" : undefined}
          onClick={onCollection}
        >
          Collection
        </a>
        {onSaved ? (
          <button type="button" onClick={onSaved}>
            Saved <span>{savedCount}</span>
          </button>
        ) : (
          <a href="/?saved=1#collection">
            Saved <span>{savedCount}</span>
          </a>
        )}
        <a
          href={corridorPath}
          className={collection ? undefined : "nav-active"}
          aria-current={collection ? undefined : "page"}
        >
          Time Corridor
        </a>
        <a href={prefix + "#categories"}>Categories</a>
        <a href={prefix + "#families"}>Families</a>
        <a href={prefix + "#decades"}>Decades</a>
        <button type="button" onClick={onAbout}>
          About the archive
        </button>
      </nav>
      <button
        className="icon-button theme-toggle"
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "◐" : "◑"}
      </button>
    </header>
  );
}

export function ArchiveAbout({ onClose }: { onClose: () => void }) {
  return (
    <Modal title="About the archive" onClose={onClose}>
      <div className="detail-content">
        <h2>Hardware worth remembering.</h2>
        <p>
          This independent collection follows Microsoft hardware from early
          peripherals to modern Surface devices. It also includes partner
          hardware from the Windows Phone ecosystem.
        </p>
        <h3>How we keep it useful</h3>
        <p>
          Records link to Microsoft specifications, archived announcements, or
          Wikipedia. Years refer to release or introduction; an unconfirmed year
          is labelled explicitly. This is a curated selection, not a complete
          product catalog.
        </p>
        <p>
          New entries were researched on 9 November 2026. Historical entries are
          identified separately where their details have not been reverified.
          Announcement details and availability can vary by market; visit the
          linked source for context.
        </p>
        <h3>Your collection stays with you</h3>
        <p>
          Saved devices and your theme preference are stored in this browser
          when storage is available. There is no account or public review
          service.
        </p>
        <p>
          Product names and images belong to their respective owners.
          Photographs and support diagrams include attribution and original
          source links. A record without a confirmed image is marked “Photo not
          yet catalogued.”
        </p>
        <a
          className="secondary"
          href="https://github.com/pradeepviswav/Microsoft-Hardware-Archive"
          target="_blank"
          rel="noreferrer"
        >
          Visit the project on GitHub <Arrow />
        </a>
      </div>
    </Modal>
  );
}
