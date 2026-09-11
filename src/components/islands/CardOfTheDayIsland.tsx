import { getTodayCard } from '../../lib/cardOfTheDay';
import { translations } from '../../i18n/translations';
import type { Locale } from '../../data/clowCards';

interface CardOfTheDayIslandProps {
  locale?: Locale;
  mode?: 'text' | 'image' | 'image-label';
}

export default function CardOfTheDayIsland({ locale = 'es', mode = 'text' }: CardOfTheDayIslandProps) {
  const card = getTodayCard(locale);
  const t = translations[locale];

  if (mode === 'image') {
    return (
      <img
        id="daily-card-image"
        src={card.image}
        alt={`${card.name[locale]} — Carta Clow: ${card.meaning[locale].slice(0, 80)}`}
        width="240"
        height="420"
        loading="eager"
        decoding="async"
      />
    );
  }

  if (mode === 'image-label') {
    return (
      <div className="card-label">
        <svg className="label-star" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L9.5 6L16 5L10.5 8L16 11L9.5 10L8 16L6.5 10L0 11L5.5 8L0 5L6.5 6L8 0Z" fill="var(--color-gold)"/>
        </svg>
        <span className="card-name" id="daily-card-name">{card.name[locale]}</span>
        <svg className="label-star" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L9.5 6L16 5L10.5 8L16 11L9.5 10L8 16L6.5 10L0 11L5.5 8L0 5L6.5 6L8 0Z" fill="var(--color-gold)"/>
        </svg>
      </div>
    );
  }

  return (
    <>
      <div className="cotd-header">
        <svg className="cotd-star" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.5 9L20 8L14.5 12L20 16L13.5 15L12 22L10.5 15L4 16L9.5 12L4 8L10.5 9L12 2Z" fill="var(--color-gold)"/>
        </svg>
        <div className="date-display">
          <span className="date-day">{card.day}</span>
          <span className="date-month">{card.month}</span>
        </div>
      </div>
      <h2 className="cotd-title">{t.cardOfTheDay.title}</h2>
      <div className="card-details">
        <h3 className="card-name" id="card-name">{card.name[locale]}</h3>
        <p className="card-meaning" id="card-meaning">{card.meaning[locale]}</p>
      </div>
    </>
  );
}
