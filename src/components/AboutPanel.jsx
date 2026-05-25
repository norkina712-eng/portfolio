import { TIMELINE } from '../data/siteMeta';
import { useInView } from '../hooks/useInView';

export default function AboutPanel() {
  const [headRef, headVisible] = useInView();
  const [bodyRef, bodyVisible] = useInView();

  return (
    <section className="section" id="about">
      <div className="section__wrap">
        <div className={`reveal${headVisible ? ' reveal--visible' : ''}`} ref={headRef}>
          <p className="section__eyebrow">Обо мне</p>
          <h2 className="section__title">Маркетинг, который считается в цифрах</h2>
        </div>

        <div className={`about__grid reveal${bodyVisible ? ' reveal--visible' : ''}`} ref={bodyRef}>
          <div className="about__panel">
            <p className="about__text">
              Около 5 лет в маркетинге. Начинала с SMM, сейчас занимаюсь полным циклом digital:
              реклама, стратегия, аналитика, работа с подрядчиками.
            </p>
            <p className="about__text">
              Работала и с B2B — IT, промышленность, HR-бренд — и с B2C: салоны, клиники, магазины.
              Мне важно не просто «делать маркетинг ради отчёта», а выстраивать систему, которая
              приносит заявки — и понимать, сколько они стоят.
            </p>
            <div className="about__highlights">
              <div className="about__highlight">
                <strong>4+ года</strong>
                <span>коммерческий опыт</span>
              </div>
              <div className="about__highlight">
                <strong>500K ₽</strong>
                <span>макс. бюджет / мес</span>
              </div>
              <div className="about__highlight">
                <strong>7</strong>
                <span>проектов в портфолио</span>
              </div>
              <div className="about__highlight">
                <strong>Москва</strong>
                <span>удалёнка / гибрид</span>
              </div>
            </div>
          </div>

          <div className="about__timeline">
            {TIMELINE.map((item) => (
              <div className="timeline-item" key={item.year}>
                <div className="timeline-item__year">{item.year}</div>
                <div className="timeline-item__body">
                  <div className="timeline-item__title">{item.title}</div>
                  <p className="timeline-item__text">{item.text}</p>
                  {item.tags && (
                    <div className="timeline-item__tags">
                      {item.tags.map((tag) => (
                        <span className="timeline-item__tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
