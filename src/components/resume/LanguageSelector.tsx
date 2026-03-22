const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
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

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 no-print flex gap-1 bg-surface-container-lowest shadow-lg border border-outline-variant/20 p-1">
      {availableLocales.map((locale) => {
        const isCurrent = locale === currentLocale;
        const cls = isCurrent
          ? "bg-on-primary-fixed text-on-primary px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase"
          : "text-outline hover:text-on-surface px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors";
        return (
          <a key={locale} href={`/${version}/${locale}`} className={cls}>
            {LOCALE_LABELS[locale] || locale.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
