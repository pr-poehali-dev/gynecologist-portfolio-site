import Icon from "@/components/ui/icon";

const reviews = [
  { name: "Анна К.", stars: 5, text: "Очень внимательный врач. Доктор Иванова нашла причину моей хронической усталости, когда другие специалисты разводили руками. Рекомендую!", date: "Март 2026" },
  { name: "Сергей П.", stars: 5, text: "Записался на онлайн-консультацию — всё прошло чётко и профессионально. Получил чёткий план лечения без лишних назначений.", date: "Февраль 2026" },
  { name: "Елена М.", stars: 5, text: "Хожу к Марии Сергеевне уже 3 года. Всегда внимательна, объясняет всё понятным языком. Лучший терапевт!", date: "Январь 2026" },
];

const faq = [
  { q: "Как записаться на приём?", a: "Вы можете записаться через форму на сайте, по телефону или через мессенджер. Подтверждение придёт в течение 1 часа в рабочее время." },
  { q: "Как проходит онлайн-консультация?", a: "После записи вы получите ссылку для видеозвонка. Консультация длится 30–45 минут. Перед звонком подготовьте результаты анализов, если они есть." },
  { q: "Принимаете ли вы ДМС?", a: "Да, мы работаем с большинством страховых компаний. Уточните список принимаемых полисов у администратора при записи." },
  { q: "Можно ли получить рецепт онлайн?", a: "Некоторые виды рецептов могут быть оформлены после онлайн-консультации. Обсудите этот вопрос с врачом во время приёма." },
  { q: "Сколько длится первичный приём?", a: "Первичный приём занимает от 45 до 60 минут. Пожалуйста, приходите за 10 минут до начала для оформления документов." },
  { q: "Как подготовиться к консультации?", a: "Возьмите с собой паспорт, полис ОМС или ДМС, результаты прошлых анализов и обследований. Заранее запишите жалобы и вопросы к врачу." },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

interface Props {
  openFaq: number | null;
  setOpenFaq: (i: number | null) => void;
}

export default function ReviewsSection({ openFaq, setOpenFaq }: Props) {
  return (
    <>
      {/* FAQ */}
      <section id="faq" className="py-20 px-6" style={{ background: "var(--med-light)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="section-reveal text-center mb-14">
            <p className="text-sm font-golos font-medium mb-3" style={{ color: "var(--med-teal)" }}>Часто спрашивают</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "var(--med-blue)" }}>Вопрос — Ответ</h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="section-reveal bg-white rounded-2xl overflow-hidden border border-[hsl(var(--border))] transition-all">
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-golos font-medium text-sm pr-4" style={{ color: "var(--med-blue)" }}>{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    style={{ color: "var(--med-teal)", flexShrink: 0 }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 animate-fade-in">
                    <div className="w-full h-px mb-4" style={{ background: "hsl(var(--border))" }}></div>
                    <p className="font-golos text-sm leading-relaxed text-gray-500">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-reveal text-center mb-14">
            <p className="text-sm font-golos font-medium mb-3" style={{ color: "var(--med-teal)" }}>Мнения пациентов</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "var(--med-blue)" }}>Отзывы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="section-reveal med-card p-7">
                <StarRating count={r.stars} />
                <p className="font-golos text-sm leading-relaxed my-4 text-gray-600">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-golos font-medium text-sm text-white" style={{ background: "var(--med-blue)" }}>
                      {r.name[0]}
                    </div>
                    <span className="font-golos font-medium text-sm" style={{ color: "var(--med-blue)" }}>{r.name}</span>
                  </div>
                  <span className="text-xs font-golos text-gray-400">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
