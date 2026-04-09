import Icon from "@/components/ui/icon";

const timeline = [
  { year: "2014", text: "Окончил Новосибирский государственный медицинский университет" },
  { year: "2014–2016", text: "Ординатура по специальности «акушерство и гинекология»" },
  { year: "2016–2019", text: "Стажировки в ведущих клиниках Москвы и Санкт-Петербурга — современные методики диагностики и лечения" },
  { year: "2020", text: "Специализация по ультразвуковой диагностике: трансвагинальное и абдоминальное УЗИ" },
  { year: "2023", text: "Повышение квалификации по детской гинекологии" },
  { year: "2024", text: "Практические лапароскопические курсы на базе KARL STORZ под руководством проф. Arnaud Wattiez" },
  { year: "2025", text: "Присвоена I квалификационная категория" },
];

const principles = [
  { icon: "Microscope", title: "Доказательная медицина", desc: "Только методы с доказанной эффективностью — никаких лишних назначений" },
  { icon: "Users", title: "Мультидисциплинарный подход", desc: "Координация со смежными специалистами при сложных клинических случаях" },
  { icon: "Minimize2", title: "Минимально инвазивная хирургия", desc: "Лапароскопия и гистероскопия — меньше травмы, быстрее восстановление" },
  { icon: "ClipboardList", title: "Информированное согласие", desc: "Пациент понимает свой диагноз и участвует в выборе тактики лечения" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6" style={{ background: "var(--med-light)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal text-center mb-14">
          <p className="text-sm font-golos font-medium mb-3" style={{ color: "var(--med-teal)" }}>Биография и подход</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "var(--med-blue)" }}>Обо мне</h2>
        </div>

        {/* Фото */}
        <div className="section-reveal flex justify-center mb-12">
          <div className="relative">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white" style={{ boxShadow: "0 20px 60px rgba(13,95,99,0.18)" }}>
              <img
                src="https://cdn.poehali.dev/projects/6f258bde-571d-44af-a64c-a663f716c3bf/files/5277a953-773c-4481-844c-7ffb68b22637.jpg"
                alt="Доктор Пьяных Андрей Витальевич"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-md border border-[hsl(var(--border))]">
              <div className="font-golos text-xs font-semibold" style={{ color: "var(--med-blue)" }}>Андрей Витальевич</div>
              <div className="font-golos text-xs text-gray-400">Гинеколог · I категория</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="section-reveal">
            <h3 className="font-cormorant text-2xl font-semibold mb-8" style={{ color: "var(--med-blue)" }}>Образование и опыт</h3>
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: "rgba(42,157,143,0.2)" }}></div>
              <div className="space-y-7">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-5 relative">
                    <div className="w-3.5 h-3.5 rounded-full flex-shrink-0 mt-1 z-10 border-2 border-white" style={{ background: "var(--med-teal)" }}></div>
                    <div>
                      <div className="font-golos text-xs font-semibold mb-1" style={{ color: "var(--med-teal)" }}>{item.year}</div>
                      <div className="font-golos text-sm text-gray-600 leading-relaxed">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl flex items-start gap-4" style={{ background: "rgba(42,157,143,0.08)", border: "1px solid rgba(42,157,143,0.2)" }}>
              <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "var(--med-teal)" }}>
                <Icon name="Scissors" size={16} className="text-white" />
              </div>
              <div>
                <div className="font-golos font-semibold text-sm mb-1" style={{ color: "var(--med-blue)" }}>Более 300 операций в год</div>
                <div className="font-golos text-xs text-gray-500 leading-relaxed">Высокий операционный поток — результат профессионального увлечения хирургической гинекологией</div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="section-reveal">
            <h3 className="font-cormorant text-2xl font-semibold mb-8" style={{ color: "var(--med-blue)" }}>Мой подход</h3>
            <p className="font-golos text-sm leading-relaxed text-gray-500 mb-8">
              Комплексная диагностика, индивидуальные лечебные планы и минимально инвазивная хирургия — три кита, на которых строится каждый клинический случай. Пациент для меня — партнёр, а не просто история болезни.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {principles.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-[hsl(var(--border))]">
                  <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "var(--med-light)" }}>
                    <Icon name={p.icon} size={18} style={{ color: "var(--med-teal)" }} />
                  </div>
                  <div>
                    <div className="font-golos font-semibold text-sm mb-1" style={{ color: "var(--med-blue)" }}>{p.title}</div>
                    <div className="font-golos text-xs text-gray-500 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}