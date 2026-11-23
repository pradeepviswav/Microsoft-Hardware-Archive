import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import { Product } from "../types";
import { products } from "../data/products";
import { productFamily } from "../data/families";
import {
  decades,
  deviceLane,
  earliest,
  families,
  familyDevices,
  Lane,
  lanes,
  latest,
  openingDevice,
  undatedCount,
  years,
} from "../data/corridor";
import { eraPath, familyPath, productPath } from "../seo/urls";
import { CorridorImage, FlyIn } from "./CorridorMedia";
import ArchiveHeader, { ArchiveAbout } from "./ArchiveHeader";
import "./corridor.css";

const devicesAt = (year: number | null) =>
  products.filter((p) => p.year === year);
const laneStyle = (lane: Lane) =>
  ({ "--lane": lanes.find((l) => l.name === lane)!.color }) as CSSProperties;

function Timeline({
  year,
  selectYear,
}: {
  year: number | null;
  selectYear: (year: number | null) => void;
}) {
  const span = Math.max(1, latest - earliest);
  const maxCount = Math.max(1, ...decades.map((item) => item.count));
  return (
    <section
      className="tc-timeline tc-interactive"
      aria-label="Timeline and decade density"
    >
      <h2>Timeline</h2>
      <div className="tc-scrubber">
        <input
          type="range"
          aria-label="Timeline year"
          aria-orientation="vertical"
          aria-valuetext={year === null ? "Unconfirmed years" : String(year)}
          min={earliest}
          max={latest}
          value={year ?? latest}
          onChange={(e) => selectYear(Number(e.target.value))}
        />
        {decades
          .slice()
          .reverse()
          .map((item) => (
            <button
              className="tc-decade-tick"
              type="button"
              key={item.year}
              style={
                {
                  "--tick-ratio":
                    (latest - Math.max(earliest, item.year)) / span,
                  "--density": `${4 + (14 * item.count) / maxCount}px`,
                } as CSSProperties
              }
              aria-label={`${item.year}s, ${item.count} devices`}
              title={`${item.count} devices`}
              aria-pressed={
                year !== null && Math.floor(year / 10) * 10 === item.year
              }
              onClick={() =>
                selectYear(
                  years.find((y) => y >= item.year && y < item.year + 10) ??
                    item.year,
                )
              }
            >
              {item.year}s
            </button>
          ))}
      </div>
      {undatedCount > 0 && (
        <button
          className="tc-undated"
          type="button"
          aria-label="Unconfirmed years"
          aria-pressed={year === null}
          onClick={() => selectYear(null)}
        >
          Undated <span>{undatedCount}</span>
        </button>
      )}
    </section>
  );
}

function Scene({
  year,
  lane,
  focused,
  step,
  switchLane,
  selectDevice,
}: {
  year: number | null;
  lane: Lane;
  focused: Product | undefined;
  step: (direction: number) => void;
  switchLane: (lane: Lane) => void;
  selectDevice: (device: Product) => void;
}) {
  const scene = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    id: number;
    y: number;
    x: number;
    moved: boolean;
  } | null>(null);
  const swallowClick = useRef(false);
  const wheel = useRef({ distance: 0, last: 0 });
  const stepRef = useRef(step);
  stepRef.current = step;
  useEffect(() => {
    const node = scene.current!;
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.deltaY === 0) return;
      event.preventDefault();
      if (event.timeStamp - wheel.current.last < 160) return;
      wheel.current.distance += event.deltaY * (event.deltaMode === 0 ? 1 : 24);
      if (Math.abs(wheel.current.distance) < 25) return;
      stepRef.current(Math.sign(wheel.current.distance));
      wheel.current = { distance: 0, last: event.timeStamp };
    };
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
    )
      return;
    event.preventDefault();
    scene.current?.focus({ preventScroll: true });
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      const next =
        (lanes.findIndex((item) => item.name === lane) +
          (event.key === "ArrowRight" ? 1 : lanes.length - 1)) %
        lanes.length;
      switchLane(lanes[next].name);
    } else {
      step(event.key === "ArrowUp" ? 1 : -1);
    }
  };
  const start = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return;
    swallowClick.current = false;
    drag.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      moved: false,
    };
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    const active = drag.current;
    if (!active || active.id !== event.pointerId) return;
    const delta = active.y - event.clientY;
    if (
      Math.abs(delta) < 42 ||
      (!active.moved && Math.abs(event.clientX - active.x) > Math.abs(delta))
    )
      return;
    active.y = event.clientY;
    active.moved = true;
    swallowClick.current = true;
    if (!event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.setPointerCapture(event.pointerId);
    step(Math.sign(delta));
  };
  const finish = () => {
    drag.current = null;
  };
  const rows =
    year === null
      ? [null]
      : [year, ...years.filter((y) => y < year).slice(0, 3)];

  return (
    <div
      className="tc-scene tc-interactive"
      ref={scene}
      role="region"
      aria-label="Time corridor stage"
      aria-describedby="tc-gesture-help"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={start}
      onPointerMove={move}
      onPointerUp={finish}
      onPointerCancel={finish}
      onLostPointerCapture={finish}
      onPointerLeave={() => {
        if (!drag.current?.moved) finish();
      }}
      onClickCapture={(event) => {
        if (swallowClick.current && event.detail !== 0) {
          event.preventDefault();
          event.stopPropagation();
          swallowClick.current = false;
        }
      }}
    >
      <div className="tc-floor" aria-hidden="true" />
      <div className="tc-depth">
        {rows.map((row, depth) => (
          <div
            key={row ?? "undated"}
            className="tc-depth-row"
            style={
              { "--depth": depth, zIndex: rows.length - depth } as CSSProperties
            }
          >
            <span className="tc-year-marker" aria-hidden="true">
              {row ?? "Undated"}
            </span>
            {lanes.map(({ name }) => {
              const options = devicesAt(row).filter(
                (p) => deviceLane(p) === name,
              );
              const p =
                options.find((device) => device.id === focused?.id) ??
                options[0];
              return (
                <div
                  className="tc-slot"
                  key={name}
                  data-current-lane={name === lane}
                  style={laneStyle(name)}
                >
                  {p ? (
                    <button
                      type="button"
                      className="tc-card"
                      aria-label={`${p.name}, ${row ?? "year unconfirmed"}, ${name}`}
                      aria-current={p.id === focused?.id ? "true" : undefined}
                      onClick={() => selectDevice(p)}
                    >
                      <CorridorImage device={p} decorative />
                      <span className="tc-card-caption">
                        <small>
                          {name}
                          {options.length > 1
                            ? ` · ${options.length} devices`
                            : ""}
                        </small>
                        <strong>{p.name}</strong>
                      </span>
                    </button>
                  ) : depth === 0 ? (
                    <div className="tc-empty-slot">
                      {name}
                      <small>No records</small>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <p id="tc-gesture-help">
        <span className="tc-desktop-help">
          Scroll or drag to travel · ↑ ↓ years · ← → lanes
        </span>
        <span className="tc-mobile-help">Swipe up to go back in time</span>
      </p>
    </div>
  );
}

function FamilyTree({
  family,
  onFamily,
  selectDevice,
}: {
  family: string;
  onFamily: (family: string) => void;
  selectDevice: (device: Product) => void;
}) {
  return (
    <section className="tc-family-view" aria-label="Family tree">
      <h2>Family tree</h2>
      <label>
        Product family{" "}
        <select value={family} onChange={(e) => onFamily(e.target.value)}>
          {families.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </label>
      <ol className="tc-family-tree">
        {familyDevices(family).map((p) => (
          <li key={p.id}>
            <span>{p.year ?? "Unconfirmed"}</span>
            <div>
              <button type="button" onClick={() => selectDevice(p)}>
                {p.name}
              </button>
              <a href={productPath(p)}>Specs and history ↗</a>
            </div>
          </li>
        ))}
      </ol>
      <a className="tc-credit" href={familyPath(family)}>
        View {family} archive page ↗
      </a>
    </section>
  );
}

export default function TimeCorridor() {
  const [year, setYear] = useState<number | null>(openingDevice.year);
  const [lane, setLane] = useState<Lane>(deviceLane(openingDevice));
  const [deviceId, setDeviceId] = useState(openingDevice.id);
  const [mode, setMode] = useState<"corridor" | "family">("corridor");
  const [family, setFamily] = useState(productFamily(openingDevice));
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const focusPanel = useRef<HTMLElement>(null);
  const [about, setAbout] = useState(false);
  const [flyIn, setFlyIn] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);
  useEffect(() => {
    try {
      const value: unknown = JSON.parse(
        localStorage.getItem("archive-saved") ?? "[]",
      );
      if (Array.isArray(value))
        setSaved(value.filter((id): id is number => typeof id === "number"));
    } catch {}
  }, []);

  const atYear = devicesAt(year);
  const inLane = atYear.filter((p) => deviceLane(p) === lane);
  const focused = inLane.find((p) => p.id === deviceId) ?? inLane[0];
  const peers =
    focused && year !== null ? atYear.filter((p) => p.id !== focused.id) : [];
  const crossLane = lanes.flatMap(({ name }) =>
    name === lane
      ? []
      : peers.filter((p) => deviceLane(p) === name).slice(0, 1),
  );
  const decade = decades.find(
    (item) => year !== null && year >= item.year && year < item.year + 10,
  );
  const term = query.trim().toLowerCase();
  const matches = term
    ? products.filter((p) =>
        `${p.name} ${productFamily(p)} ${p.year ?? "unconfirmed"} ${p.aliases?.join(" ") ?? ""}`
          .toLowerCase()
          .includes(term),
      )
    : [];
  const selectDevice = (device: Product) => {
    setYear(device.year);
    setLane(deviceLane(device));
    setDeviceId(device.id);
  };
  const selectYear = (next: number | null) => {
    setYear(next);
    setDeviceId(-1);
  };
  const step = (direction: number) => {
    const next =
      year === null
        ? direction < 0
          ? latest
          : undefined
        : direction > 0
          ? years.find((y) => y < year)
          : [...years].reverse().find((y) => y > year);
    if (next !== undefined) selectYear(next);
  };
  const changeLane = (next: Lane) => {
    if (next === lane) return;
    setLane(next);
    setDeviceId(-1);
  };
  const saveDevice = () => {
    if (!focused) return;
    const next = saved.includes(focused.id)
      ? saved.filter((id) => id !== focused.id)
      : [...saved, focused.id];
    setSaved(next);
    try {
      localStorage.setItem("archive-saved", JSON.stringify(next));
    } catch {}
  };
  const openFromFamily = (device: Product) => {
    selectDevice(device);
    setFlyIn(true);
  };

  return (
    <div className="tc" data-view={mode} style={laneStyle(lane)}>
      <a className="skip-link" href="#tc-content">
        Skip to Time Corridor
      </a>
      <ArchiveHeader
        active="corridor"
        savedCount={saved.length}
        onAbout={() => setAbout(true)}
      />
      <main id="tc-content" className="tc-main">
        <div className="tc-heading">
          <h1>Time Corridor</h1>
          <p>
            {earliest}–{latest} <span>·</span> {products.length} devices
          </p>
        </div>
        <div className="tc-tools tc-interactive">
          <div className="tc-search tc-interactive">
            <label className="tc-sr-only" htmlFor="tc-search">
              Search corridor devices
            </label>
            <input
              ref={searchInput}
              id="tc-search"
              type="search"
              value={query}
              placeholder="Search devices"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape" && query) setQuery("");
              }}
              aria-controls={term ? "tc-results" : undefined}
            />
            {term && (
              <div className="tc-results" id="tc-results">
                <p role="status">
                  {matches.length
                    ? `${matches.length} matching devices`
                    : "No matching devices"}
                </p>
                <ul>
                  {matches.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => {
                          selectDevice(p);
                          setMode("corridor");
                          setQuery("");
                          searchInput.current?.focus();
                        }}
                      >
                        <span>{p.name}</span>
                        <small>
                          {p.year ?? "Unconfirmed"} · {deviceLane(p)}
                        </small>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {mode === "family" ? (
            <button
              type="button"
              className="tc-button"
              onClick={() => setMode("corridor")}
            >
              Back to corridor
            </button>
          ) : (
            <button
              type="button"
              className="tc-button"
              onClick={() => {
                if (focused) setFamily(productFamily(focused));
                setMode("family");
              }}
            >
              Family tree
            </button>
          )}
        </div>
        {mode === "family" ? (
          <FamilyTree
            family={family}
            onFamily={setFamily}
            selectDevice={openFromFamily}
          />
        ) : (
          <>
            <aside
              className="tc-focus"
              ref={focusPanel}
              tabIndex={-1}
              aria-label="In-focus device"
            >
              <p className="tc-kicker">
                In focus <span>·</span> {lane}
              </p>
              {focused ? (
                <>
                  <p className="tc-focus-meta">
                    {focused.year ?? "Year unconfirmed"} ·{" "}
                    {productFamily(focused)}
                  </p>
                  <h2>{focused.name}</h2>
                  <p>{focused.description}</p>
                  <div className="tc-actions">
                    <button
                      type="button"
                      className="tc-primary tc-interactive"
                      onClick={() => setFlyIn(true)}
                    >
                      Fly in ↗
                    </button>
                    <a className="tc-button" href={productPath(focused)}>
                      Specs and history
                    </a>
                  </div>
                  {inLane.length > 1 && (
                    <label className="tc-picker tc-interactive">
                      Devices in this lane
                      <select
                        value={focused.id}
                        onChange={(e) => setDeviceId(Number(e.target.value))}
                      >
                        {inLane.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                  {crossLane.length > 0 && (
                    <details className="tc-peers">
                      <summary>Elsewhere in {year}</summary>
                      <ul>
                        {crossLane.map((p) => (
                          <li key={p.id}>
                            <a
                              href={productPath(p)}
                              onClick={(e) => {
                                if (
                                  e.ctrlKey ||
                                  e.metaKey ||
                                  e.shiftKey ||
                                  e.altKey
                                )
                                  return;
                                e.preventDefault();
                                selectDevice(p);
                                focusPanel.current?.focus();
                              }}
                            >
                              <span style={laneStyle(deviceLane(p))}>
                                {deviceLane(p)}
                              </span>
                              {p.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </>
              ) : (
                <>
                  <h2>
                    {year === null
                      ? "No undated records"
                      : `No ${lane.toLowerCase()} records in ${year}`}
                  </h2>
                  <p>
                    {atYear.length
                      ? "Choose another lane to see records for this year."
                      : "Try an earlier or later year, or choose a decade on the timeline."}
                  </p>
                </>
              )}
            </aside>
            <div className="tc-year" aria-live="polite">
              <strong>{year ?? "Undated"}</strong>
              <small>
                {decade
                  ? `${decade.year}s · ${decade.count} devices`
                  : `${undatedCount} unconfirmed years`}
              </small>
            </div>
            <div className="tc-controls tc-interactive">
              <div className="tc-lanes" aria-label="Device lanes">
                {lanes.map((item) => (
                  <button
                    type="button"
                    key={item.name}
                    style={laneStyle(item.name)}
                    title={item.examples}
                    aria-pressed={lane === item.name}
                    onClick={() => changeLane(item.name)}
                  >
                    <span aria-hidden="true" />
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="tc-year-controls">
                <button
                  type="button"
                  aria-label="Go to an earlier year"
                  disabled={year === null || year <= earliest}
                  onClick={() => step(1)}
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Go to a later year"
                  disabled={year === latest}
                  onClick={() => step(-1)}
                >
                  →
                </button>
              </div>
            </div>
            <Scene
              year={year}
              lane={lane}
              focused={focused}
              step={step}
              switchLane={changeLane}
              selectDevice={selectDevice}
            />
            <Timeline year={year} selectYear={selectYear} />
            <noscript>
              <style>
                {
                  ".tc-interactive,.tc-year{display:none!important}.tc[data-view]{height:auto;overflow:visible}.tc .tc-heading,.tc .tc-focus{position:relative;inset:auto;width:auto;max-height:none;margin:1rem}.tc noscript{display:block;margin:1rem}"
                }
              </style>
              <p>
                The corridor controls require JavaScript. Browse the{" "}
                <a href="/catalogue/">complete catalogue</a> or choose a decade.
              </p>
              <ul>
                {decades.map((item) => (
                  <li key={item.year}>
                    <a href={eraPath(item.year)}>
                      {item.year}s · {item.count} devices
                    </a>
                  </li>
                ))}
              </ul>
            </noscript>
          </>
        )}
      </main>

      {about && <ArchiveAbout onClose={() => setAbout(false)} />}
      {flyIn && focused && (
        <FlyIn
          device={focused}
          peers={peers}
          saved={saved.includes(focused.id)}
          onSave={saveDevice}
          onSelect={selectDevice}
          onClose={() => setFlyIn(false)}
        />
      )}
    </div>
  );
}
