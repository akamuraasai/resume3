const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  ru: "Русский",
  ja: "日本語",
  zh: "中文",
  ko: "한국어",
};

export function LanguageSelector({
  currentLocale,
  availableLocales,
  version,
}: {
  currentLocale: string;
  availableLocales: string[];
  version: string;
}) {
  if (availableLocales.length <= 1) return null;

  const currentLabel = `${currentLocale.toUpperCase()} · ${LOCALE_NAMES[currentLocale] || currentLocale}`;

  return (
    <details className="fixed bottom-4 right-4 md:bottom-6 md:right-6 no-print group">
      <summary className="cursor-pointer list-none flex items-center gap-2 bg-surface-container-lowest shadow-lg border border-outline-variant/20 px-4 py-2.5 text-[10px] font-bold tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors select-none">
        {currentLabel}
        <span className="text-[8px] group-open:rotate-180 transition-transform">&#9660;</span>
      </summary>
      <div className="absolute bottom-full right-0 mb-1 bg-surface-container-lowest shadow-lg border border-outline-variant/20 min-w-[160px] max-h-[320px] overflow-y-auto">
        {availableLocales.map((locale) => {
          const isCurrent = locale === currentLocale;
          return (
            <a
              key={locale}
              href={`/${version}/${locale}`}
              className={`block px-4 py-2 text-[10px] font-bold tracking-widest uppercase transition-colors ${
                isCurrent
                  ? "bg-on-primary-fixed text-on-primary"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              }`}
            >
              {locale.toUpperCase()} · {LOCALE_NAMES[locale] || locale}
            </a>
          );
        })}
      </div>
    </details>
  );
}
