import { clowCards, type Locale } from '../data/clowCards';

const monthNames = {
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

export function getTodayCard(locale: Locale = 'es') {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const cardIndex = dayOfYear % clowCards.length;

  return {
    ...clowCards[cardIndex],
    day: today.getDate().toString(),
    month: monthNames[locale][today.getMonth()]
  };
}
