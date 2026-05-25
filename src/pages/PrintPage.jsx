import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { cases } from '../data/cases';
import {
  MARQUEE_ITEMS,
  SKILLS,
  TIMELINE,
  WORK_CATEGORIES,
  CATEGORY_LABELS,
  getCardHighlight,
} from '../data/siteMeta';
import '../styles/print.css';

function PrintToolbar() {
  const onPrint = () => window.print();

  return (
    <div className="print-toolbar no-print">
      <Link to="/" className="print-toolbar__back">
        ← Интерактивная версия
      </Link>
      <button type="button" className="print-toolbar__btn" onClick={onPrint}>
        Сохранить PDF
      </button>
    </div>
  );
}

function PrintCover() {
  return (
    <header className="print-cover">
      <div className="print-cover__main">
        <p className="print-cover__eyebrow">Портфолио · Москва · 2026</p>
        <h1 className="print-cover__name">
          Норкина <span>Валерия</span>
        </h1>
        <p className="print-cover__role">Digital-маркетолог</p>
        <p className="print-cover__desc">
          Настраиваю рекламу, привлекаю клиентов и считаю результат в цифрах.
          Работаю с B2C и B2B — от салонов красоты до IT и промышленности.
        </p>
        <ul className="print-cover__contacts">
          <li>
            <span className="print-label">Email</span>
            <a href="mailto:norkina05@icloud.com">norkina05@icloud.com</a>
          </li>
          <li>
            <span className="print-label">Телефон</span>
            <a href="tel:+79263350550">+7 (926) 335-05-50</a>
          </li>
          <li>
            <span className="print-label">Статус</span>
            Открыта к предложениям
          </li>
        </ul>
        <div className="print-cover__stats">
          <div className="print-stat">
            <strong>5 лет</strong>
            <span>опыт в маркетинге</span>
          </div>
          <div className="print-stat">
            <strong>14+</strong>
            <span>рекламных кампаний</span>
          </div>
          <div className="print-stat">
            <strong>7</strong>
            <span>проектов в портфолио</span>
          </div>
        </div>
      </div>
      <div className="print-cover__photo">
        <img
          src={`${import.meta.env.BASE_URL}assets/photo.png`}
          alt="Норкина Валерия"
          width="280"
          height="350"
        />
      </div>
    </header>
  );
}

function PrintTools() {
  return (
    <section className="print-block print-block--compact">
      <h2 className="print-block__title">Инструменты и направления</h2>
      <div className="print-tags">
        {MARQUEE_ITEMS.map((item) => (
          <span className="print-tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function PrintCasesOverview() {
  return (
    <section className="print-block print-page-break-before">
      <h2 className="print-block__title">Кейсы с цифрами</h2>
      <p className="print-block__lead">
        7 проектов: B2C и B2B. Ниже — краткий обзор; полные разборы на следующих страницах.
      </p>
      <div className="print-cases-grid">
        {cases.map((item, i) => {
          const cat = WORK_CATEGORIES[item.slug];
          return (
            <article className="print-case-card" key={item.slug}>
              <div className="print-case-card__head">
                <span className="print-case-card__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="print-case-card__cat">{CATEGORY_LABELS[cat]}</span>
              </div>
              <h3 className="print-case-card__name">{item.name}</h3>
              <p className="print-case-card__tag">{item.cardTag}</p>
              <p className="print-case-card__desc">{item.cardDesc}</p>
              <p className="print-case-card__metric">{getCardHighlight(item)}</p>
              {item.heroMetrics?.length > 0 && (
                <div className="print-case-card__metrics">
                  {item.heroMetrics.slice(0, 3).map((m) => (
                    <div className="print-mini-metric" key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PrintAbout() {
  return (
    <section className="print-block print-page-break-before">
      <h2 className="print-block__title">Обо мне</h2>
      <div className="print-two-col">
        <div>
          <p className="print-text">
            Около 5 лет в маркетинге. Начинала с SMM, сейчас занимаюсь полным циклом digital:
            реклама, стратегия, аналитика, работа с подрядчиками.
          </p>
          <p className="print-text">
            Работала и с B2B — IT, промышленность, HR-бренд — и с B2C: салоны, клиники, магазины.
            Мне важно выстраивать систему, которая приносит заявки, и понимать, сколько они стоят.
          </p>
          <div className="print-highlights">
            <div><strong>4+ года</strong><span>коммерческий опыт</span></div>
            <div><strong>500K ₽</strong><span>макс. бюджет / мес</span></div>
            <div><strong>7</strong><span>проектов</span></div>
            <div><strong>Москва</strong><span>удалёнка / гибрид</span></div>
          </div>
        </div>
        <div className="print-timeline">
          {TIMELINE.map((item) => (
            <div className="print-timeline__item" key={item.year}>
              <div className="print-timeline__year">{item.year}</div>
              <div>
                <div className="print-timeline__title">{item.title}</div>
                <p className="print-text print-text--sm">{item.text}</p>
                {item.tags && (
                  <div className="print-tags print-tags--sm">
                    {item.tags.map((tag) => (
                      <span className="print-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrintSkills() {
  return (
    <section className="print-block">
      <h2 className="print-block__title">Чем занимаюсь</h2>
      <div className="print-skills-grid">
        {SKILLS.map((skill, i) => (
          <div className="print-skill" key={skill.title}>
            <span className="print-skill__num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{skill.title}</h3>
            <div className="print-tags print-tags--sm">
              {skill.tags.map((tag) => (
                <span className="print-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PrintCaseStudy({ item, index }) {
  const sections = [
    { id: 'challenge', title: 'Какая была задача', items: item.challenge },
    { id: 'strategy', title: 'Что я предложила', items: item.strategy },
    { id: 'execution', title: 'Что делала на практике', items: item.execution },
  ];

  return (
    <section className="print-case-study print-page-break-before" id={`case-${item.slug}`}>
      <div className="print-case-study__head">
        <span className="print-case-study__index">Кейс {String(index + 1).padStart(2, '0')}</span>
        <p className="print-case-study__tag">{item.tag}</p>
        <h2 className="print-case-study__title">{item.name}</h2>
        <p className="print-case-study__meta">{item.meta}</p>
        <div className="print-case-study__hero-metrics">
          {item.heroMetrics.map((m) => (
            <div className="print-hero-metric" key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="print-text print-case-study__intro">{item.intro}</p>

      {sections.map((sec) => (
        <div className="print-story" key={sec.id}>
          <h3 className="print-story__title">{sec.title}</h3>
          <div className="print-story__body">
            {sec.items.map((p) => (
              <p className="print-text" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="print-story">
        <h3 className="print-story__title">Что получилось</h3>
        <div className="print-results">
          {item.results.map((r) => (
            <div className="print-result" key={r.label}>
              <strong>{r.value}</strong>
              <span>{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="print-story">
        <h3 className="print-story__title">Моя зона ответственности</h3>
        <ul className="print-role-list">
          {item.role.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PrintFooter() {
  return (
    <footer className="print-footer">
      <p className="print-footer__title">Давайте поработаем</p>
      <p className="print-footer__lead">
        Ищу позицию маркетолога. Москва, удалёнка или гибрид.
      </p>
      <p className="print-footer__contacts">
        norkina05@icloud.com · +7 (926) 335-05-50
      </p>
      <p className="print-footer__copy">Норкина Валерия · Digital-маркетолог · 2026</p>
    </footer>
  );
}

export default function PrintPage() {
  const [params] = useSearchParams();

  useEffect(() => {
    document.title = 'Норкина Валерия — портфолио (PDF)';
    document.documentElement.classList.add('print-mode');
    return () => document.documentElement.classList.remove('print-mode');
  }, []);

  useEffect(() => {
    if (params.get('autoprint') !== '1') return;
    const t = setTimeout(() => window.print(), 600);
    return () => clearTimeout(t);
  }, [params]);

  return (
    <div className="print-doc">
      <PrintToolbar />
      <PrintCover />
      <PrintTools />
      <PrintCasesOverview />
      <PrintAbout />
      <PrintSkills />
      {cases.map((item, i) => (
        <PrintCaseStudy key={item.slug} item={item} index={i} />
      ))}
      <PrintFooter />
    </div>
  );
}
