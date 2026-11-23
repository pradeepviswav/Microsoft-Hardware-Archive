import { useEffect, useState, useRef } from "react";
import type { PointerEvent } from "react";
import { Product } from "../types";
import { productFamily } from "../data/families";
import { deviceLane, familyDevices } from "../data/corridor";
import { familyPath, productPath } from "../seo/urls";
import { Modal } from "./ArchiveUI";

export function CorridorImage({
  device,
  src = device.imageUrl,
  decorative = false,
}: {
  device: Product;
  src?: string;
  decorative?: boolean;
}) {
  const [failedUrl, setFailedUrl] = useState<string>();
  const failed = src !== undefined && src === failedUrl;
  if (src && !failed) {
    return (
      <img
        src={src}
        alt={decorative ? "" : device.name}
        width={800}
        height={650}
        draggable={false}
        onError={() => setFailedUrl(src)}
      />
    );
  }
  return (
    <div className="tc-type-image" aria-hidden={decorative || undefined}>
      <strong>{device.year ?? "—"}</strong>
      <small>
        {device.year === null ? "Year unconfirmed · " : ""}
        {failed ? "Image unavailable" : "Photo not yet catalogued"}
      </small>
    </div>
  );
}

const surfaceBookFeatures = [
  {
    title: "Dynamic fulcrum hinge",
    text: "The hinge connects the detachable display to the keyboard base and folds when the lid closes.",
  },
  {
    title: "Optional graphics in the base",
    text: "Some configurations included a discrete GPU in the keyboard base. The display also works detached as a tablet.",
  },
];

function Orbit({ device }: { device: Product }) {
  const media = device.gallery?.length ? device.gallery : [];
  const [index, setIndex] = useState(0);
  const item = media[index];
  const [angle, setAngle] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [feature, setFeature] = useState<number | null>(null);
  const pointers = useRef(new Map<number, number>());
  const hasImage = Boolean(item?.url || device.imageUrl);
  const diagram = (item?.kind ?? device.imageKind) === "diagram";
  const start = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasImage || event.button !== 0) return;
    pointers.current.set(event.pointerId, event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    const previous = pointers.current.get(event.pointerId);
    if (previous === undefined) return;
    const x = event.clientX;
    if (pointers.current.size === 2) {
      const other = Array.from(pointers.current.entries()).find(
        ([id]) => id !== event.pointerId,
      )![1];
      const delta = Math.abs(x - other) - Math.abs(previous - other);
      setZoom((value) => Math.max(1, Math.min(1.45, value + delta / 300)));
    } else {
      setAngle((value) =>
        Math.max(-28, Math.min(28, value + (x - previous) / 5)),
      );
    }
    pointers.current.set(event.pointerId, x);
  };
  const release = (event: PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
  };
  return (
    <div className="tc-orbit">
      <div className="tc-orbit-label">
        <p className="tc-kicker">
          {diagram
            ? "Support diagram"
            : hasImage
              ? "Archive photograph"
              : "Archive record"}
        </p>
        {hasImage && <small>Drag to tilt · Pinch to zoom</small>}
      </div>
      <div
        className="tc-orbit-stage"
        data-interactive={hasImage}
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={release}
        onPointerCancel={release}
        onLostPointerCapture={release}
      >
        <div
          className="tc-orbit-image"
          style={{ transform: `rotateY(${angle}deg) scale(${zoom})` }}
        >
          <CorridorImage device={device} src={item?.url} />
        </div>
      </div>
      {hasImage && (
        <div className="tc-orbit-controls">
          {media.length > 1 && (
            <select
              aria-label="Device media"
              value={index}
              onChange={(e) => {
                setIndex(Number(e.target.value));
                setAngle(0);
                setZoom(1);
              }}
            >
              {media.map((entry, i) => (
                <option key={entry.url} value={i}>
                  {entry.kind === "diagram" ? "Support diagram" : "Photograph"}{" "}
                  {i + 1}
                </option>
              ))}
            </select>
          )}
          <label>
            Angle{" "}
            <input
              aria-label="Photo angle"
              type="range"
              min={-28}
              max={28}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
            />
          </label>
          <label>
            Zoom{" "}
            <input
              aria-label="Photo zoom"
              type="range"
              min={1}
              max={1.45}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
            />
          </label>
          <button
            type="button"
            onClick={() => {
              setAngle(0);
              setZoom(1);
            }}
          >
            Reset
          </button>
        </div>
      )}
      {(item?.source || device.imageSource) && (
        <a className="tc-credit" href={item?.source || device.imageSource}>
          {item?.credit || device.imageCredit || "Image source"}
        </a>
      )}
      {device.id === 12 && (
        <div className="tc-feature-list">
          {surfaceBookFeatures.map(({ title }, i) => (
            <button
              key={title}
              type="button"
              aria-expanded={feature === i}
              aria-controls="tc-feature-note"
              onClick={() => setFeature(feature === i ? null : i)}
            >
              {title}
            </button>
          ))}
          <p id="tc-feature-note" hidden={feature === null}>
            {feature !== null && surfaceBookFeatures[feature].text}
          </p>
        </div>
      )}
    </div>
  );
}

export function FlyIn({
  device,
  peers,
  saved,
  onSave,
  onSelect,
  onClose,
}: {
  device: Product;
  peers: Product[];
  saved: boolean;
  onSave: () => void;
  onSelect: (device: Product) => void;
  onClose: () => void;
}) {
  const heading = useRef<HTMLHeadingElement>(null);
  const previousDevice = useRef(device.id);
  useEffect(() => {
    if (previousDevice.current !== device.id) heading.current?.focus();
    previousDevice.current = device.id;
  }, [device.id]);
  const family = productFamily(device);
  const thread = familyDevices(family);
  return (
    <Modal title={`Fly in · ${device.name}`} wide onClose={onClose}>
      <div className="tc-fly-content">
        <div className="tc-fly-layout">
          <div className="tc-orbit-wrap" key={device.id}>
            <Orbit device={device} />
          </div>
          <div>
            <p className="tc-kicker">
              {deviceLane(device)} / {device.year ?? "Year unconfirmed"} /{" "}
              {family}
            </p>
            <h2 ref={heading} tabIndex={-1}>
              {device.name}
            </h2>
            <p>{device.description}</p>
            <div className="tc-actions">
              <a className="tc-button tc-primary" href={productPath(device)}>
                Specs and history ↗
              </a>
              <button type="button" aria-pressed={saved} onClick={onSave}>
                {saved ? "Saved" : "Save device"}
              </button>
            </div>
            <h3>Family thread</h3>
            <ol className="tc-thread">
              {thread.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    aria-current={p.id === device.id ? "true" : undefined}
                    onClick={() => onSelect(p)}
                  >
                    <small>{p.year ?? "Unconfirmed"}</small> {p.name}
                  </button>
                </li>
              ))}
            </ol>
            <a className="tc-credit" href={familyPath(family)}>
              View {family} records ↗
            </a>
          </div>
        </div>
        {peers.length > 0 && (
          <section className="tc-fly-peers">
            <h3>Also in {device.year}</h3>
            <ul>
              {peers.map((p) => (
                <li key={p.id}>
                  <button type="button" onClick={() => onSelect(p)}>
                    <CorridorImage device={p} decorative />
                    <span>{p.name}</span>
                    <small>{deviceLane(p)}</small>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </Modal>
  );
}
