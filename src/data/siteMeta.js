export const WORK_CATEGORIES = {
  'anna-key': 'b2c',
  double: 'b2b',
  kokoshi: 'b2c',
  xella: 'b2c',
  fredomtag: 'b2b',
  'gazpromneft-hr': 'b2b',
  'iru-b2b': 'b2b',
};

export const CATEGORY_LABELS = {
  all: 'Все',
  b2c: 'B2C',
  b2b: 'B2B',
};

export const MARQUEE_ITEMS = [
  'Яндекс.Директ',
  'VK Реклама',
  'Метрика',
  'Таргет',
  'Стратегия',
  'A/B-тесты',
  'Медиаплан',
  'CRM',
  'SEO',
  'Контент',
  'Аналитика',
  'Запуск проектов',
];

export const SKILLS = [
  { title: 'Реклама', tags: ['Яндекс.Директ', 'VK', 'Таргет', 'Ретаргет', 'Медиаплан'] },
  { title: 'Стратегия', tags: ['Позиционирование', 'Офферы', 'Запуск', 'Упаковка'] },
  { title: 'Аналитика', tags: ['Метрика', 'Отчёты', 'CPL / CPA', 'A/B-тесты'] },
  { title: 'Организация', tags: ['Подрядчики', 'Блогеры', 'CRM', 'SEO'] },
];

export const HERO_FLOATS = [
  { text: 'Яндекс · VK · Метрика', position: 'hero__float--1' },
  { text: 'B2B и B2C · 7 проектов', position: 'hero__float--2', accent: true },
];

export const TIMELINE = [
  {
    year: '2025–26',
    title: 'ANNA KEY — маркетолог сети',
    text: 'Реклама в Яндекс и VK, запуск новых студий, аналитика записей. Бюджет до 450 000 ₽/мес.',
    tags: ['Яндекс.Директ', 'VK', 'Аналитика'],
  },
  {
    year: '2024–26',
    title: 'Double — маркетолог проектов',
    text: '4 клиента параллельно: IT, промышленность, услуги. Стратегии, медиапланы, отчёты по KPI.',
    tags: ['B2B', 'Стратегия', '4 клиента'],
  },
  {
    year: '2021–24',
    title: 'Путь в digital-маркетинг',
    text: 'От SMM к полноценному маркетингу: таргет, контекст, стратегия, связка с продажами.',
    tags: ['Digital', 'Реклама'],
  },
];

export const CARD_HIGHLIGHT = {
  double: 'Стоимость лида −22% у IT-клиента',
  'iru-b2b': 'Продажи +10%',
};

export function getCardHighlight(item) {
  if (CARD_HIGHLIGHT[item.slug]) return CARD_HIGHLIGHT[item.slug];
  return item.cardMetric.split('·')[0]?.trim() ?? item.cardMetric;
}
