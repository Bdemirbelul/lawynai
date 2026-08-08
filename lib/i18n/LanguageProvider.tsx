"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  translations,
  type Locale,
  type Translations,
} from "@/lib/i18n/translations";

const STORAGE_KEY = "lawyn-ai-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "tr";
}

let memoryLocale: Locale = "tr";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getClientLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) {
    memoryLocale = stored;
  }
  return memoryLocale;
}

function getServerLocale(): Locale {
  return "tr";
}

function writeLocale(next: Locale) {
  memoryLocale = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  emit();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getClientLocale,
    getServerLocale,
  );

  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
