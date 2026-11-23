import { hardwareSearchText } from "../data/metadata";
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
const populatedLanes = (devices: Product[]) =>
  lanes.filter(({ name }) => devices.some((p) => deviceLane(p) === name));
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
  expandedLane,
  step,
  switchLane,
  activateCard,
}: {
  year: number | null;
  lane: Lane;
  focused: Product | undefined;
  expandedLane: Lane | null;
  step: (direction: number) => void;
  switchLane: (direction: number) => void;
  activateCard: (
    device: Product,
    grouped: boolean,
    trigger: HTMLButtonElement,
  ) => void;
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
      switchLane(event.key === "ArrowRight" ? 1 : -1);
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
        {rows.map((row, depth) => {
          const records = devicesAt(row);
          const available = populatedLanes(records);
          const visibleLane =
            available.find(({ name }) => name === lane) ?? available[0];
          if (!visibleLane) return null;

          return (
            <div
              key={row ?? "undated"}
              className="tc-depth-row"
              style={
                {
                  "--depth": depth,
                  zIndex: rows.length - depth,
                } as CSSProperties
              }
            >
              <span className="tc-year-marker" aria-hidden="true">
                {row ?? "Undated"}
              </span>
              {available.map(({ name }) => {
                const options = records.filter((p) => deviceLane(p) === name);
                const p =
                  options.find((device) => device.id === focused?.id) ??
                  options[0];
                const grouped = options.length > 1;
                const expanded = depth === 0 && expandedLane === name;
                return (
                  <div
                    className="tc-slot"
                    key={name}
                    data-current-lane={name === visibleLane.name}
                    style={laneStyle(name)}
                  >
                    <button
                      type="button"
                      className="tc-card"
                      aria-label={`${p.name}, ${row ?? "year unconfirmed"}, ${name}${grouped ? `, browse ${options.length} devices` : ""}`}
                      aria-current={p.id === focused?.id ? "true" : undefined}
                      aria-expanded={grouped ? expanded : p.id === focused?.id}
                      aria-controls={
                        expanded
                          ? "tc-lane-devices"
                          : p.id === focused?.id && !grouped
                            ? "tc-focus"
                            : undefined
                      }
                      onClick={(event) =>
                        activateCard(p, grouped, event.currentTarget)
                      }
                    >
                      <CorridorImage device={p} decorative />
                      <span className="tc-card-caption">
                        <small>
                          {name}
                          {grouped && (
                            <>
                              {" · "}
                              {options.length} devices{" "}
                              <span aria-hidden="true">
                                {expanded ? "▴" : "▾"}
                              </span>
                            </>
                          )}
                        </small>
                        <strong>{p.name}</strong>
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
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

function LaneDevices({
  lane,
  year,
  devices,
  focused,
  activateDevice,
  close,
}: {
  lane: Lane;
  year: number | null;
  devices: Product[];
  focused: Product | undefined;
  activateDevice: (device: Product, trigger: HTMLButtonElement) => void;
  close: () => void;
}) {
  const firstDevice = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    firstDevice.current?.focus({ preventScroll: true });
  }, [lane, year]);

  return (
    <section
      className="tc-lane-tray tc-interactive"
      id="tc-lane-devices"
      aria-label={
        year === null ? `Undated ${lane} devices` : `${lane} devices in ${year}`
      }
      style={laneStyle(lane)}
    >
      <div className="tc-overlay-heading">
        <h2>
          {lane} · {year ?? "Undated"} <small>{devices.length} devices</small>
        </h2>
        <button
          type="button"
          className="tc-dismiss"
          aria-label="Close device row"
          onClick={close}
        >
          ×
        </button>
      </div>
      <ul className="tc-lane-devices" key={`${year}-${lane}`}>
        {devices.map((device, index) => {
          const active = device.id === focused?.id;
          return (
            <li key={device.id}>
              <button
                ref={index === 0 ? firstDevice : undefined}
                type="button"
                className="tc-card"
                aria-expanded={active}
                aria-controls={active ? "tc-focus" : undefined}
                onClick={(event) => activateDevice(device, event.currentTarget)}
              >
                <CorridorImage device={device} decorative />
                <span>{device.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
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
  const [preferredLane, setLane] = useState<Lane>(deviceLane(openingDevice));
  const [expandedLane, setExpandedLane] = useState<Lane | null>(null);
  const [deviceId, setDeviceId] = useState<number | null>(null);
  const [mode, setMode] = useState<"corridor" | "family">("corridor");
  const [family, setFamily] = useState(productFamily(openingDevice));
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const focusPanel = useRef<HTMLElement>(null);
  const focusTrigger = useRef<HTMLElement | null>(null);
  const laneTrigger = useRef<HTMLButtonElement | null>(null);
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
  const available = populatedLanes(atYear);
  const lane =
    (available.find(({ name }) => name === preferredLane) ?? available[0])
      ?.name ?? preferredLane;
  const focused = atYear.find((p) => p.id === deviceId);
  const expandedDevices = atYear.filter((p) => deviceLane(p) === expandedLane);
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
        `${p.name} ${productFamily(p)} ${p.year ?? "unconfirmed"} ${p.aliases?.join(" ") ?? ""} ${hardwareSearchText(p)}`
          .toLowerCase()
          .includes(term),
      )
    : [];
  useEffect(() => {
    if (deviceId !== null && !flyIn) {
      focusPanel.current?.focus({ preventScroll: true });
    }
  }, [deviceId]); // Let the fly-in dialog restore focus when it closes.

  const selectDevice = (device: Product) => {
    if (year !== device.year || expandedLane !== deviceLane(device)) {
      setExpandedLane(null);
    }
    setYear(device.year);
    setLane(deviceLane(device));
    setDeviceId(device.id);
  };
  const closeFocus = () => {
    setDeviceId(null);
    const trigger = focusTrigger.current;
    if (trigger?.isConnected) {
      trigger.focus({ preventScroll: true });
    } else {
      document
        .querySelector<HTMLElement>(".tc-card[aria-current='true']")
        ?.focus({ preventScroll: true });
    }
  };
  const closeLane = () => {
    setExpandedLane(null);
    setDeviceId(null);
    laneTrigger.current?.focus({ preventScroll: true });
  };
  const activateDevice = (device: Product, trigger: HTMLButtonElement) => {
    focusTrigger.current = trigger;
    if (device.id === deviceId) {
      closeFocus();
    } else {
      selectDevice(device);
    }
  };
  const activateCard = (
    device: Product,
    grouped: boolean,
    trigger: HTMLButtonElement,
  ) => {
    if (!grouped) {
      activateDevice(device, trigger);
      return;
    }
    const nextLane = deviceLane(device);
    if (year === device.year && expandedLane === nextLane) {
      closeLane();
      return;
    }
    laneTrigger.current = trigger;
    setYear(device.year);
    setLane(nextLane);
    setExpandedLane(nextLane);
    setDeviceId(null);
  };
  const selectYear = (next: number | null) => {
    setYear(next);
    setExpandedLane(null);
    setDeviceId(null);
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
    setExpandedLane(null);
    setDeviceId(null);
  };
  const switchLane = (direction: number) => {
    if (available.length < 2) return;
    const index = available.findIndex(({ name }) => name === lane);
    changeLane(
      available[(index + direction + available.length) % available.length].name,
    );
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
      <main
        id="tc-content"
        className="tc-main"
        data-lane-expanded={mode === "corridor" && expandedLane !== null}
        onKeyDown={(event) => {
          if (
            event.key !== "Escape" ||
            about ||
            flyIn ||
            event.defaultPrevented
          )
            return;
          if (focused) closeFocus();
          else if (expandedLane) closeLane();
        }}
      >
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
                if (e.key === "Escape" && query) {
                  e.preventDefault();
                  setQuery("");
                }
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
                          focusTrigger.current = searchInput.current;
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
                const device =
                  focused ?? atYear.find((p) => deviceLane(p) === lane);
                if (device) setFamily(productFamily(device));
                setDeviceId(null);
                setExpandedLane(null);
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
            <div className="tc-year" aria-live="polite">
              <strong>{year ?? "Undated"}</strong>
              {!atYear.length ? (
                <p>No devices catalogued in {year}.</p>
              ) : (
                <small>
                  {decade
                    ? `${decade.year}s · ${decade.count} devices`
                    : `${undatedCount} unconfirmed years`}
                </small>
              )}
            </div>
            <Scene
              year={year}
              lane={lane}
              focused={focused}
              expandedLane={expandedLane}
              step={step}
              switchLane={switchLane}
              activateCard={activateCard}
            />
            {expandedLane && (
              <LaneDevices
                lane={expandedLane}
                year={year}
                devices={expandedDevices}
                focused={focused}
                activateDevice={activateDevice}
                close={closeLane}
              />
            )}
            {focused && (
              <aside
                className="tc-focus"
                id="tc-focus"
                ref={focusPanel}
                tabIndex={-1}
                aria-label="In-focus device"
              >
                <div className="tc-overlay-heading">
                  <p className="tc-kicker">
                    In focus <span>·</span> {lane}
                  </p>
                  <button
                    type="button"
                    className="tc-dismiss"
                    aria-label="Close In focus"
                    onClick={closeFocus}
                  >
                    ×
                  </button>
                </div>
                <p className="tc-focus-meta">
                  {focused.year ?? "Year unconfirmed"} ·{" "}
                  {productFamily(focused)}
                </p>
                <h2>{focused.name}</h2>
                <p>{focused.description}</p>
                <div className="tc-actions">
                  <button
                    type="button"
                    className="tc-primary"
                    onClick={() => setFlyIn(true)}
                  >
                    Fly in ↗
                  </button>
                  <a className="tc-button" href={productPath(focused)}>
                    Specs and history
                  </a>
                </div>
                {crossLane.length > 0 && (
                  <details key={focused.id} className="tc-peers">
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
              </aside>
            )}
            <div className="tc-controls tc-interactive">
              <div className="tc-lanes" aria-label="Device lanes">
                {available.map((item) => (
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
            <Timeline year={year} selectYear={selectYear} />
            <noscript>
              <style>
                {
                  ".tc-interactive,.tc-year{display:none!important}.tc[data-view]{height:auto;overflow:visible}.tc .tc-heading{position:relative;inset:auto;margin:1rem}.tc noscript{display:block;margin:1rem}"
                }
              </style>
              <p>
                The corridor controls require JavaScript. Browse the{" "}
                <a href="/catalogue/">complete catalogue</a> or choose a decade.
              </p>
              <p>
                {openingDevice.name} ({openingDevice.year}) ·{" "}
                <a href={productPath(openingDevice)}>Specs and history</a>
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
