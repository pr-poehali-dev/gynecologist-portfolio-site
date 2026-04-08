import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const DOCTOR_IMAGE = "https://cdn.poehali.dev/projects/6f258bde-571d-44af-a64c-a663f716c3bf/files/4d738b38-6062-4e2d-9f02-b24f3b9baf25.jpg";

const schedule = [
  { day: "Понедельник", time: "09:00 – 14:00", available: true },
  { day: "Вторник", time: "14:00 – 19:00", available: true },
  { day: "Среда", time: "09:00 – 14:00", available: true },
  { day: "Четверг", time: "Выходной", available: false },
  { day: "Пятница", time: "09:00 – 17:00", available: true },
  { day: "Суббота", time: "10:00 – 14:00", available: true },
  { day: "Воскресенье", time: "Выходной", available: false },
];

const services = [
  { icon: "Stethoscope", title: "Первичный приём", desc: "Комплексная диагностика, сбор анамнеза, назначение обследований", price: "от 2 500 ₽" },
  { icon: "Activity", title: "Повторный приём", desc: "Оценка динамики лечения, коррекция терапии", price: "от 1 800 ₽" },
  { icon: "Microscope", title: "Расшифровка анализов", desc: "Детальная интерпретация лабораторных и инструментальных данных", price: "от 1 200 ₽" },
  { icon: "Heart", title: "Профилактический осмотр", desc: "Чекап здоровья, оценка рисков, рекомендации по образу жизни", price: "от 3 500 ₽" },
  { icon: "Video", title: "Онлайн-консультация", desc: "Видеозвонок с врачом из любой точки мира", price: "от 2 000 ₽" },
  { icon: "FileText", title: "Справки и документы", desc: "Оформление медицинских справок, выписок, направлений", price: "от 500 ₽" },
];

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

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Index() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", type: "office", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--med-cream)" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--med-blue)" }}>
              <Icon name="Cross" size={14} className="text-white" />
            </div>
            <span className="font-cormorant font-semibold text-lg" style={{ color: "var(--med-blue)" }}>Доктор Иванова</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm font-golos" style={{ color: "var(--med-blue)" }}>
            <a href="#services" className="hover:opacity-70 transition-opacity">Услуги</a>
            <a href="#schedule" className="hover:opacity-70 transition-opacity">Расписание</a>
            <a href="#online" className="hover:opacity-70 transition-opacity">Онлайн</a>
            <a href="#faq" className="hover:opacity-70 transition-opacity">Вопросы</a>
            <a href="#reviews" className="hover:opacity-70 transition-opacity">Отзывы</a>
          </div>
          <a
            href="#booking"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-golos font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--med-blue)" }}
          >
            <Icon name="Calendar" size={15} />
            Записаться
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex items-center" style={{ background: "linear-gradient(135deg, #1a3a5c 0%, #1a5276 60%, #1a6b7c 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-golos font-medium mb-6" style={{ background: "rgba(42,157,143,0.2)", color: "#7fe5d8" }}>
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "#2a9d8f" }}></span>
              Ведёт приём · Записи доступны
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-white leading-tight mb-4">
              Мария Сергеевна<br />
              <span style={{ color: "#7fe5d8" }}>Иванова</span>
            </h1>
            <p className="text-lg mb-2 font-golos" style={{ color: "rgba(255,255,255,0.75)" }}>Терапевт высшей категории</p>
            <p className="text-sm mb-8 font-golos" style={{ color: "rgba(255,255,255,0.55)" }}>Стаж 18 лет · КМН · Московский ГМУ</p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Кардиология", "Гастроэнтерология", "Эндокринология"].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full text-xs font-golos" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.15)" }}>{s}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium text-white transition-all hover:scale-105" style={{ background: "var(--med-teal)" }}>
                <Icon name="CalendarPlus" size={18} />
                Записаться на приём
              </a>
              <a href="#online" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium transition-all hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "white" }}>
                <Icon name="Video" size={18} />
                Онлайн-консультация
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[["18+", "лет опыта"], ["2 400+", "пациентов"], ["4.9", "рейтинг"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-3xl font-semibold text-white">{num}</div>
                  <div className="text-xs font-golos" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl" style={{ background: "rgba(42,157,143,0.2)", transform: "rotate(3deg)" }}></div>
              <img
                src={DOCTOR_IMAGE}
                alt="Доктор Иванова"
                className="relative rounded-3xl object-cover"
                style={{ width: 380, height: 480, objectPosition: "top" }}
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--med-light)" }}>
                    <Icon name="Award" size={18} style={{ color: "var(--med-teal)" }} />
                  </div>
                  <div>
                    <div className="text-xs font-golos font-medium" style={{ color: "var(--med-blue)" }}>Кандидат медицинских наук</div>
                    <div className="text-xs font-golos text-gray-400">Высшая категория</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl">
                <div className="text-center">
                  <div className="flex justify-center gap-0.5 mb-1">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-sm">★</span>)}
                  </div>
                  <div className="text-xs font-golos text-gray-500">4.9 / 5.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-reveal text-center mb-14">
            <p className="text-sm font-golos font-medium mb-3" style={{ color: "var(--med-teal)" }}>Что я предлагаю</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "var(--med-blue)" }}>Услуги и направления</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="section-reveal med-card p-7">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--med-light)" }}>
                  <Icon name={s.icon} size={22} style={{ color: "var(--med-teal)" }} />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-2" style={{ color: "var(--med-blue)" }}>{s.title}</h3>
                <p className="text-sm font-golos leading-relaxed mb-4 text-gray-500">{s.desc}</p>
                <div className="font-golos font-semibold text-sm" style={{ color: "var(--med-teal)" }}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-20 px-6" style={{ background: "var(--med-light)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="section-reveal text-center mb-14">
            <p className="text-sm font-golos font-medium mb-3" style={{ color: "var(--med-teal)" }}>График работы</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "var(--med-blue)" }}>Расписание приёмов</h2>
          </div>
          <div className="section-reveal bg-white rounded-3xl overflow-hidden shadow-sm border border-[hsl(var(--border))]">
            {schedule.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-8 py-5 ${i !== schedule.length - 1 ? "border-b border-[hsl(var(--border))]" : ""} ${!item.available ? "opacity-50" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${item.available ? "pulse-dot" : "bg-gray-300"}`} style={item.available ? { background: "var(--med-teal)" } : {}}></div>
                  <span className="font-golos font-medium" style={{ color: "var(--med-blue)" }}>{item.day}</span>
                </div>
                <span className="font-golos text-sm" style={{ color: item.available ? "var(--med-blue)" : "gray" }}>{item.time}</span>
                {item.available && (
                  <a href="#booking" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-golos font-medium text-white" style={{ background: "var(--med-teal)" }}>
                    <Icon name="Plus" size={12} />
                    Записаться
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="section-reveal mt-6 p-4 rounded-2xl flex items-start gap-3" style={{ background: "rgba(42,157,143,0.08)", border: "1px solid rgba(42,157,143,0.2)" }}>
            <Icon name="Info" size={16} style={{ color: "var(--med-teal)", marginTop: 2 }} />
            <p className="text-sm font-golos text-gray-600">Адрес клиники: г. Москва, ул. Тверская, 24, офис 302. Парковка для пациентов — бесплатно.</p>
          </div>
        </div>
      </section>

      {/* ONLINE CONSULTATION */}
      <section id="online" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-reveal rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1a3a5c 0%, #1a6b7c 100%)" }}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 md:p-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-golos font-medium mb-6" style={{ background: "rgba(42,157,143,0.2)", color: "#7fe5d8" }}>
                  <Icon name="Wifi" size={12} />
                  Онлайн · из любой точки мира
                </div>
                <h2 className="font-cormorant text-4xl font-semibold text-white mb-4">Онлайн-консультация</h2>
                <p className="font-golos text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Получите профессиональную консультацию врача в видеоформате. Удобно, быстро, конфиденциально. Вышлю рекомендации и план лечения в письменном виде после звонка.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: "Clock", text: "30–45 минут" },
                    { icon: "Shield", text: "Конфиденциально" },
                    { icon: "FileText", text: "Письменные рекомендации" },
                    { icon: "Globe", text: "Любая страна" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon name={item.icon} size={14} style={{ color: "#7fe5d8" }} />
                      <span className="text-xs font-golos" style={{ color: "rgba(255,255,255,0.7)" }}>{item.text}</span>
                    </div>
                  ))}
                </div>
                <a href="#booking" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium text-white transition-all hover:scale-105" style={{ background: "var(--med-teal)" }}>
                  <Icon name="Video" size={16} />
                  Записаться онлайн
                </a>
              </div>
              <div className="p-12 md:p-16 flex flex-col justify-center" style={{ background: "rgba(255,255,255,0.04)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="font-cormorant text-2xl font-semibold text-white mb-6">Как это работает?</h3>
                <div className="space-y-6">
                  {[
                    { num: "01", title: "Запись", desc: "Выбираете удобное время через форму на сайте" },
                    { num: "02", title: "Подготовка", desc: "Получаете напоминание и ссылку на видеозвонок" },
                    { num: "03", title: "Консультация", desc: "Общаетесь с врачом в удобном формате" },
                    { num: "04", title: "Рекомендации", desc: "Получаете письменный план лечения на почту" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="font-cormorant text-2xl font-semibold flex-shrink-0" style={{ color: "rgba(127,229,216,0.4)" }}>{step.num}</div>
                      <div>
                        <div className="font-golos font-medium text-sm text-white mb-0.5">{step.title}</div>
                        <div className="font-golos text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* BOOKING */}
      <section id="booking" className="py-20 px-6" style={{ background: "var(--med-light)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="section-reveal text-center mb-10">
            <p className="text-sm font-golos font-medium mb-3" style={{ color: "var(--med-teal)" }}>Удобно и быстро</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "var(--med-blue)" }}>Запись на приём</h2>
            <p className="mt-3 text-sm font-golos text-gray-500">Заполните форму — я свяжусь с вами в течение 1 часа</p>
          </div>

          {submitted ? (
            <div className="section-reveal bg-white rounded-3xl p-12 text-center border border-[hsl(var(--border))]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "var(--med-light)" }}>
                <Icon name="CheckCircle" size={32} style={{ color: "var(--med-teal)" }} />
              </div>
              <h3 className="font-cormorant text-2xl font-semibold mb-2" style={{ color: "var(--med-blue)" }}>Заявка принята!</h3>
              <p className="font-golos text-sm text-gray-500">Мы свяжемся с вами в ближайшее время для подтверждения записи.</p>
            </div>
          ) : (
            <div className="section-reveal bg-white rounded-3xl p-8 md:p-10 border border-[hsl(var(--border))] shadow-sm">
              <div className="grid grid-cols-2 gap-2 mb-7 p-1 rounded-2xl" style={{ background: "var(--med-light)" }}>
                {[{ id: "office", label: "В клинике", icon: "Building2" }, { id: "online", label: "Онлайн", icon: "Video" }].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setBookingForm({ ...bookingForm, type: t.id })}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-golos font-medium transition-all ${bookingForm.type === t.id ? "bg-white shadow-sm" : ""}`}
                    style={{ color: bookingForm.type === t.id ? "var(--med-blue)" : "gray" }}
                  >
                    <Icon name={t.icon} size={16} />
                    {t.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-golos font-medium mb-1.5 text-gray-500">Ваше имя *</label>
                    <input
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="Имя Фамилия"
                      className="w-full px-4 py-3 rounded-xl text-sm font-golos border outline-none focus:ring-2 transition-all"
                      style={{ borderColor: "hsl(var(--border))", background: "var(--med-cream)" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-golos font-medium mb-1.5 text-gray-500">Телефон *</label>
                    <input
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 rounded-xl text-sm font-golos border outline-none focus:ring-2 transition-all"
                      style={{ borderColor: "hsl(var(--border))", background: "var(--med-cream)" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-golos font-medium mb-1.5 text-gray-500">Удобная дата</label>
                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm font-golos border outline-none focus:ring-2 transition-all"
                    style={{ borderColor: "hsl(var(--border))", background: "var(--med-cream)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-golos font-medium mb-1.5 text-gray-500">Опишите жалобы (необязательно)</label>
                  <textarea
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                    rows={3}
                    placeholder="Опишите кратко причину обращения..."
                    className="w-full px-4 py-3 rounded-xl text-sm font-golos border outline-none focus:ring-2 transition-all resize-none"
                    style={{ borderColor: "hsl(var(--border))", background: "var(--med-cream)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-golos font-medium text-white text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: "var(--med-blue)" }}
                >
                  <Icon name="Send" size={16} />
                  Отправить заявку
                </button>
                <p className="text-center text-xs font-golos text-gray-400">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ background: "var(--med-blue)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(42,157,143,0.3)" }}>
                  <Icon name="Cross" size={14} className="text-white" />
                </div>
                <span className="font-cormorant font-semibold text-lg text-white">Доктор Иванова</span>
              </div>
              <p className="text-xs font-golos leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>Терапевт высшей категории. Профессиональная медицинская помощь в Москве и онлайн.</p>
            </div>
            <div>
              <h4 className="font-golos font-medium text-sm text-white mb-4">Контакты</h4>
              <div className="space-y-2">
                {[
                  { icon: "Phone", text: "+7 (495) 123-45-67" },
                  { icon: "Mail", text: "ivanova@clinic.ru" },
                  { icon: "MapPin", text: "Москва, ул. Тверская, 24" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-2">
                    <Icon name={c.icon} size={14} style={{ color: "rgba(127,229,216,0.7)" }} />
                    <span className="text-xs font-golos" style={{ color: "rgba(255,255,255,0.6)" }}>{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-golos font-medium text-sm text-white mb-4">Режим работы</h4>
              <div className="space-y-1">
                {["Пн, Ср: 09:00 – 14:00", "Вт: 14:00 – 19:00", "Пт: 09:00 – 17:00", "Сб: 10:00 – 14:00"].map((t) => (
                  <div key={t} className="text-xs font-golos" style={{ color: "rgba(255,255,255,0.6)" }}>{t}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-6 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="text-xs font-golos" style={{ color: "rgba(255,255,255,0.3)" }}>© 2026 Доктор Иванова. Все права защищены.</p>
            <p className="text-xs font-golos" style={{ color: "rgba(255,255,255,0.3)" }}>Лицензия МЗ РФ № ЛО-77-01-018594</p>
          </div>
        </div>
      </footer>
    </div>
  );
}