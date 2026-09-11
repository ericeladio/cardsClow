import type { Locale } from '../data/clowCards';
import { translations, type TranslationKey } from './translations';

export function getLocaleFromPath(path: string): Locale {
  if (path.startsWith('/en')) return 'en';
  return 'es';
}

export function getStoredLocale(): Locale {
  if (typeof localStorage !== 'undefined') {
    return (localStorage.getItem('locale') as Locale) || 'es';
  }
  return 'es';
}

export function setStoredLocale(locale: Locale): void {
  localStorage.setItem('locale', locale);
}

export function getLocalePath(locale: Locale, currentPath: string): string {
  const pathWithoutLang = currentPath.replace(/^\/(es|en)/, '') || '/';
  return `/${locale}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
}

export function t(locale: Locale): TranslationKey {
  return translations[locale];
}
