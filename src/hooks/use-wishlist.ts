import { useEffect, useState, useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "tempus-aurum-wishlist";
const EVENT = "tempus-aurum-wishlist-change";

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function writeStorage(ids: string[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

// Cached snapshot to satisfy useSyncExternalStore (must return stable reference)
let cachedSnapshot: string[] = [];
let cachedSerialized = "";

function getSnapshot(): string[] {
  const fresh = readStorage();
  const serialized = JSON.stringify(fresh);
  if (serialized !== cachedSerialized) {
    cachedSnapshot = fresh;
    cachedSerialized = serialized;
  }
  return cachedSnapshot;
}

function getServerSnapshot(): string[] {
  return [];
}

export function useWishlist() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  const toggle = useCallback((id: string) => {
    const current = readStorage();
    const next = current.includes(id)
      ? current.filter((x) => x !== id)
      : [...current, id];
    writeStorage(next);
  }, []);

  const remove = useCallback((id: string) => {
    const current = readStorage();
    writeStorage(current.filter((x) => x !== id));
  }, []);

  const clear = useCallback(() => {
    writeStorage([]);
  }, []);

  return { ids, count: ids.length, has, toggle, remove, clear };
}

/** Hydration-safe count for SSR — returns 0 on server, real count after mount. */
export function useWishlistCount() {
  const { count } = useWishlist();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? count : 0;
}
