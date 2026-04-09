import { useState } from "react";
import Icon from "@/components/ui/icon";

const reviews: { name: string; stars: number; text: string; date: string }[] = [];

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

function ReviewForm() {
  const [form, setForm] = useState({ name: "", stars: 5, text: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="section-reveal bg-white rounded-3xl border border-[hsl(var(--border))] overflow-hidden shadow-sm">
      <div className="px-8 pt-8 pb-2">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(42,157,143,0.1)" }}>
            <Icon name="Star" size={18} style={{ color: "var(--med-teal)" }} />
          </div>
          <h3 className="font-cormorant text-2xl font-semibold" style={{ color: "var(--med-blue)" }}>Оставить отзыв</h3>
        </div>
        <p className="font-golos text-xs text-gray-400 mb-6 ml-12">Поделитесь своим опытом — это помогает другим пациентам</p>
      </div>

      {sent ? (
        <div className="px-8 pb-8 text-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(42,157,143,0.1)" }}>
            <Icon name="CheckCircle" size={24} style={{ color: "var(--med-teal)" }} />
          </div>
          <p className="font-golos font-medium text-sm" style={{ color: "var(--med-blue)" }}>Спасибо за отзыв!</p>
          <p className="font-golos text-xs text-gray-400 mt-1">Ваше мнение очень важно</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-golos font-medium mb-1.5 text-gray-500">Ваше имя *</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Имя или инициалы"
                className="w-full px-4 py-3 rounded-xl text-sm font-golos border outline-none focus:ring-2 transition-all"
                style={{ borderColor: "hsl(var(--border))", background: "var(--med-cream)" }}
              />
            </div>
            <div>
              <label className="block text-xs font-golos font-medium mb-1.5 text-gray-500">Оценка</label>
              <div className="flex gap-1 pt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm({ ...form, stars: s })}
                    className="text-2xl transition-transform hover:scale-110"
                    style={{ color: s <= form.stars ? "#f59e0b" : "#d1d5db" }}
                  >★</button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-golos font-medium mb-1.5 text-gray-500">Текст отзыва *</label>
            <textarea
              required
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              rows={4}
              placeholder="Расскажите о своём опыте посещения..."
              className="w-full px-4 py-3 rounded-xl text-sm font-golos border outline-none focus:ring-2 transition-all resize-none"
              style={{ borderColor: "hsl(var(--border))", background: "var(--med-cream)" }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-golos font-medium text-white text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
            style={{ background: "var(--med-blue)" }}
          >
            <Icon name="Send" size={15} />
            Отправить отзыв
          </button>
          <p className="text-center text-xs font-golos text-gray-400">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
        </form>
      )}
    </div>
  );
}

interface Props {
  openFaq: number | null;
  setOpenFaq: (i: number | null) => void;
}

export default function ReviewsSection({ openFaq, setOpenFaq }: Props) {
  const [question, setQuestion] = useState({ name: "", question: "" });
  const [questionSent, setQuestionSent] = useState(false);

  function handleQuestion(e: React.FormEvent) {
    e.preventDefault();
    setQuestionSent(true);
  }

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

          {/* Форма вопроса */}
          <div className="section-reveal mt-10 bg-white rounded-3xl border border-[hsl(var(--border))] overflow-hidden shadow-sm">
            <div className="px-8 pt-8 pb-2">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(42,157,143,0.1)" }}>
                  <Icon name="MessageCircleQuestion" size={18} style={{ color: "var(--med-teal)" }} />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold" style={{ color: "var(--med-blue)" }}>Задайте свой вопрос</h3>
              </div>
              <p className="font-golos text-xs text-gray-400 mb-6 ml-12">Не нашли ответ? Спросите напрямую — отвечу лично</p>
            </div>

            {questionSent ? (
              <div className="px-8 pb-8 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(42,157,143,0.1)" }}>
                  <Icon name="CheckCircle" size={24} style={{ color: "var(--med-teal)" }} />
                </div>
                <p className="font-golos font-medium text-sm" style={{ color: "var(--med-blue)" }}>Вопрос получен!</p>
                <p className="font-golos text-xs text-gray-400 mt-1">Постараюсь ответить в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleQuestion} className="px-8 pb-8 space-y-4">
                <div>
                  <label className="block text-xs font-golos font-medium mb-1.5 text-gray-500">Ваше имя</label>
                  <input
                    value={question.name}
                    onChange={(e) => setQuestion({ ...question, name: e.target.value })}
                    placeholder="Как к вам обращаться?"
                    className="w-full px-4 py-3 rounded-xl text-sm font-golos border outline-none focus:ring-2 transition-all"
                    style={{ borderColor: "hsl(var(--border))", background: "var(--med-cream)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-golos font-medium mb-1.5 text-gray-500">Ваш вопрос *</label>
                  <textarea
                    required
                    value={question.question}
                    onChange={(e) => setQuestion({ ...question, question: e.target.value })}
                    rows={3}
                    placeholder="Напишите вопрос, который вас интересует..."
                    className="w-full px-4 py-3 rounded-xl text-sm font-golos border outline-none focus:ring-2 transition-all resize-none"
                    style={{ borderColor: "hsl(var(--border))", background: "var(--med-cream)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-golos font-medium text-white text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: "var(--med-teal)" }}
                >
                  <Icon name="Send" size={15} />
                  Отправить вопрос
                </button>
                <p className="text-center text-xs font-golos text-gray-400">Ответ придёт лично — публично не публикуется</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-reveal text-center mb-14">
            <p className="text-sm font-golos font-medium mb-3" style={{ color: "var(--med-teal)" }}>Мнения пациентов</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "var(--med-blue)" }}>Отзывы</h2>
          </div>

          {reviews.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-10">
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
          )}

          {/* Форма отзыва */}
          <ReviewForm />
        </div>
      </section>
    </>
  );
}