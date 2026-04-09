import Icon from "@/components/ui/icon";

const DOCTOR_IMAGE = "https://cdn.poehali.dev/projects/6f258bde-571d-44af-a64c-a663f716c3bf/bucket/4f0647a4-24db-4ff3-988f-91a982cfd3b1.png";

export default function HeroSection() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="font-golos text-[10px] font-medium tracking-widest uppercase" style={{ color: "var(--med-teal)" }}>Women's Doc</span>
              <span className="font-cormorant font-semibold text-lg" style={{ color: "var(--med-blue)" }}>Пьяных Андрей</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm font-golos" style={{ color: "var(--med-blue)" }}>
            <a href="#about" className="hover:opacity-70 transition-opacity">Обо мне</a>
            <a href="#services" className="hover:opacity-70 transition-opacity">Услуги</a>
            <a href="#schedule" className="hover:opacity-70 transition-opacity">Расписание</a>
            <a href="#online" className="hover:opacity-70 transition-opacity">Онлайн</a>
            <a href="#faq" className="hover:opacity-70 transition-opacity">Вопросы</a>
            <a href="#reviews" className="hover:opacity-70 transition-opacity">Отзывы</a>
          </div>
          <a
            href="https://prodoctorov.ru/moskva/vrach/720896-pyanyh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-golos font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: "#dc2626" }}
          >
            <Icon name="Calendar" size={15} />
            Записаться
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex items-center" style={{ background: "linear-gradient(135deg, #0d5f63 0%, #0d7377 60%, #14a8a3 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-golos font-medium mb-6" style={{ background: "rgba(42,157,143,0.2)", color: "#7fe5d8" }}>
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "#2a9d8f" }}></span>
              Ведёт приём · Записи доступны
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-white leading-tight mb-4 inline-block px-5 py-2 rounded-xl" style={{ border: "2px solid #000", background: "rgba(0,0,0,0.15)" }}>
              Андрей Витальевич<br />
              <span style={{ color: "#7fe5d8" }}>Пьяных</span>
            </h1>
            <p className="text-lg mb-2 font-golos" style={{ color: "rgba(255,255,255,0.75)" }}>Оперирующий гинеколог</p>
            <p className="text-sm mb-8 font-golos" style={{ color: "rgba(255,255,255,0.55)" }}>Стаж более 10 лет · 1-я квалификационная категория</p>

            <div className="flex flex-wrap gap-4">
              <a href="https://prodoctorov.ru/moskva/vrach/720896-pyanyh/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium text-white transition-all hover:scale-105" style={{ background: "#dc2626" }}>
                <Icon name="CalendarPlus" size={18} />
                Записаться на приём
              </a>
              <a href="#online" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium transition-all hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "white" }}>
                <Icon name="Video" size={18} />
                Онлайн-консультация
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[["10+", "лет опыта"], ["2 400+", "пациентов"], ["5.0", "рейтинг"]].map(([num, label]) => (
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
                alt="Доктор Пьяных"
                className="relative rounded-3xl object-cover"
                style={{ width: 380, height: 480, objectPosition: "top" }}
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--med-light)" }}>
                    <Icon name="Award" size={18} style={{ color: "var(--med-teal)" }} />
                  </div>
                  <div>
                    <div className="text-xs font-golos font-medium" style={{ color: "var(--med-blue)" }}>Гинеколог-хирург · Детский гинеколог · Врач УЗИ</div>
                    <div className="text-xs font-golos text-gray-400">1-я квалификационная категория</div>
                  </div>
                </div>
              </div>
              <a href="https://prodoctorov.ru/moskva/vrach/720896-pyanyh/" target="_blank" rel="noopener noreferrer" className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="flex justify-center gap-0.5 mb-1">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-sm">★</span>)}
                  </div>
                  <div className="text-xs font-golos text-gray-500">5.0 · ПроДокторов</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}