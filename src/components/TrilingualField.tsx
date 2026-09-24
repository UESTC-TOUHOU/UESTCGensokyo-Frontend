import { useState } from 'react';

const LANGS = ['zh', 'en', 'ja'] as const;
type Lang = typeof LANGS[number];

const LANG_LABELS: Record<Lang, string> = { zh: '中文', en: 'EN', ja: '日本語' };

interface TrilingualFieldProps {
  label: string;
  values: { zh: string; en: string; ja: string };
  onChange: (lang: Lang, value: string) => void;
  multiline?: boolean;
}

export default function TrilingualField({ label, values, onChange, multiline = false }: TrilingualFieldProps) {
  const [activeLang, setActiveLang] = useState<Lang>('zh');

  return (
    <div className="admin-trilingual">
      <div className="admin-trilingual-header">
        <span className="admin-trilingual-field-label">{label}</span>
        <div className="admin-lang-tabs">
          {LANGS.map(lang => (
            <button
              key={lang}
              type="button"
              className={`admin-lang-tab${activeLang === lang ? ' active' : ''}`}
              onClick={() => setActiveLang(lang)}
            >
              {LANG_LABELS[lang]}
            </button>
          ))}
        </div>
      </div>
      {multiline ? (
        <textarea
          className="admin-trilingual-input"
          rows={3}
          value={values[activeLang] || ''}
          onChange={(e) => onChange(activeLang, e.target.value)}
        />
      ) : (
        <input
          type="text"
          className="admin-trilingual-input"
          value={values[activeLang] || ''}
          onChange={(e) => onChange(activeLang, e.target.value)}
        />
      )}
    </div>
  );
}
