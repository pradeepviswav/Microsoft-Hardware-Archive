import { useEffect, useRef, useState } from "react";
import { BrowseState, defaults, parseBrowse, browseHref } from "../data/browse";
export function useBrowseState(
  initial = defaults,
): [BrowseState, (patch: Partial<BrowseState>) => void] {
  const [state, setState] = useState(() =>
    typeof window === "undefined"
      ? initial
      : parseBrowse(window.location.search, window.location.pathname),
  );
  const current = useRef(state);
  const update = (patch: Partial<BrowseState>) => {
    const next = { ...current.current, page: 1, ...patch };
    current.current = next;
    const href = browseHref(next);
    if (
      window.location.pathname +
        window.location.search +
        window.location.hash !==
      href
    )
      window.history.pushState(null, "", href);
    setState(next);
  };
  useEffect(() => {
    const restore = () => {
      const next = parseBrowse(
        window.location.search,
        window.location.pathname,
      );
      current.current = next;
      setState(next);
    };
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);
  return [state, update];
}
