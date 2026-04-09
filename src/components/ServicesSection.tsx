import Icon from "@/components/ui/icon";

const schedule = [
  { day: "Понедельник", time: "Уточнять в расписании", available: true },
  { day: "Вторник", time: "Уточнять в расписании", available: true },
  { day: "Среда", time: "Уточнять в расписании", available: true },
  { day: "Четверг", time: "Уточнять в расписании", available: true },
  { day: "Пятница", time: "Уточнять в расписании", available: true },
  { day: "Суббота", time: "Уточнять в расписании", available: true },
  { day: "Воскресенье", time: "Уточнять в расписании", available: true },
];

const services = [
  {
    num: "01", title: "Консультация гинеколога (первичная)",
    short: "Комплексная первичная консультация для установления диагноза, составления плана обследования и лечения.",
    details: [
      { label: "Что входит", text: "Сбор анамнеза, осмотр на гинекологическом кресле, бимануальное исследование, оценка результатов имеющихся анализов, рекомендации по дополнительным обследованиям." },
      { label: "Подготовка", text: "При менструации — по согласованию. Приносите имеющиеся анализы и медицинские документы." },
      { label: "Время", text: "30–45 минут." },
      { label: "Результат", text: "Предварительный диагноз, план обследования или лечение, направление при необходимости." },
    ]
  },
  {
    num: "02", title: "Повторная / контрольная консультация",
    short: "Оценка динамики, обсуждение результатов обследований и корректировка терапии.",
    details: [
      { label: "Что входит", text: "Анализ результатов, контроль симптомов, коррекция схемы лечения, выдача справок при необходимости." },
      { label: "Подготовка", text: "Принести новые исследования, список принимаемых препаратов." },
      { label: "Время", text: "15–30 минут." },
      { label: "Результат", text: "Скорректированный план ведения и/или решение о необходимости вмешательства." },
    ]
  },
  {
    num: "03", title: "Консервативное лечение гинекологических заболеваний",
    short: "Комплексная медикаментозная терапия при воспалительных и гормональных заболеваниях.",
    details: [
      { label: "Что входит", text: "Подбор схемы лечения, контроль побочных эффектов, рекомендации по диете и физиотерапии, координация с эндокринологом/репродуктологом при необходимости." },
      { label: "Подготовка", text: "Результаты анализов: мазки, гормоны, УЗИ." },
      { label: "Время", text: "Приём + динамический контроль (в зависимости от схемы)." },
      { label: "Результат", text: "Уменьшение симптомов, стабилизация цикла, улучшение качества жизни." },
    ]
  },
  {
    num: "04", title: "Хирургическая гинекология (лапароскопия и гистероскопия)",
    short: "Минимально инвазивные операции для лечения заболеваний матки и придатков.",
    details: [
      { label: "Что входит", text: "Предоперационная оценка, подготовка, операция под наркозом/спинальной анестезией, послеоперационное наблюдение и реабилитация." },
      { label: "Подготовка", text: "Стандартный предоперационный комплекс: анализы крови, ЭКГ, коагулограмма, УЗИ." },
      { label: "Время", text: "Лапароскопические вмешательства — обычно однодневное или краткосрочное пребывание." },
      { label: "Результат", text: "Лечение причины (удаление очагов/образований), сокращение симптомов, быстрая реабилитация." },
    ]
  },
  {
    num: "05", title: "Онкогинекологическая диагностика и сопровождение",
    short: "Раннее выявление и ведение предраковых и злокачественных заболеваний репродуктивной системы.",
    details: [
      { label: "Что входит", text: "Скрининг (ПАП-тест, HPV-тест), кольпоскопия, биопсия, план лечения в мультидисциплинарной комиссии, наблюдение после лечения." },
      { label: "Подготовка", text: "Приносите все предыдущие обследования и выписки." },
      { label: "Результат", text: "Своевременная диагностика и направление на оптимальную лечебную тактику." },
    ]
  },
  {
    num: "06", title: "Эндоскопическая и реконструктивная гинекология",
    short: "Хирургические методики для восстановления анатомии и функции половых органов.",
    details: [
      { label: "Что входит", text: "Предоперационная диагностика, малоинвазивные техники (лапароскопия/гистероскопия), послеоперационная реабилитация." },
      { label: "Подготовка", text: "Полный набор предоперационных анализов и обследований." },
      { label: "Результат", text: "Улучшение функциональных возможностей, снижение симптоматики пролапса или обструкции." },
    ]
  },
  {
    num: "07", title: "Контрацепция и планирование семьи",
    short: "Подбор современных методов контрацепции и планирование репродуктивного здоровья.",
    details: [
      { label: "Что входит", text: "Оценка рисков, подбор гормональной/внутриматочной/барьерной контрацепции, установка/удаление ВМС, рекомендации по планированию беременности." },
      { label: "Подготовка", text: "История менструального цикла, предыдущие методы контрацепции." },
      { label: "Время", text: "20–40 минут (установка ВМС — отдельно)." },
      { label: "Результат", text: "Безопасный и удобный метод контрацепции, план действий для планирования беременности." },
    ]
  },
  {
    num: "08", title: "Менопаузальная медицина и гормональная терапия",
    short: "Комплексная помощь женщинам в пременопаузе и менопаузе: симптоматическая и заместительная терапия.",
    details: [
      { label: "Что входит", text: "Гормональная оценка, подбор МГТ при показаниях, рекомендации по образу жизни и профилактическим обследованиям." },
      { label: "Подготовка", text: "Анализы на гормоны, сопутствующая история болезней." },
      { label: "Время", text: "30–45 минут." },
      { label: "Результат", text: "Уменьшение симптомов менопаузы, улучшение качества жизни, снижение рисков." },
    ]
  },
  {
    num: "09", title: "Урогинекология (недержание мочи, пролапс органов таза)",
    short: "Диагностика и консервативное или хирургическое лечение урогинекологических нарушений.",
    details: [
      { label: "Что входит", text: "Оценка тяжести, тесты на функцию мочевого пузыря, подбор консервативных методов, малоинвазивные операции при показаниях." },
      { label: "Подготовка", text: "Клиническая история, дневник мочеиспусканий (если есть)." },
      { label: "Время", text: "30–60 минут." },
      { label: "Результат", text: "Уменьшение симптомов, восстановление функции тазового дна." },
    ]
  },
  {
    num: "10", title: "Скрининги и профилактические обследования",
    short: "Профилактические осмотры: ПАП-тест, ВПЧ-тест, УЗИ малого таза, консультации по вакцинации.",
    details: [
      { label: "Что входит", text: "Взятие мазков, УЗИ, интерпретация результатов, рекомендации по дальнейшим шагам." },
      { label: "Подготовка", text: "Специальной подготовки нет, желательно иметь медицинскую карту." },
      { label: "Время", text: "15–30 минут." },
      { label: "Результат", text: "Раннее выявление рисковых состояний, план дальнейшего наблюдения." },
    ]
  },
  {
    num: "11", title: "Экстренные гинекологические состояния",
    short: "Быстрая оценка жалоб, требующих неотложной помощи: кровотечения, острая боль, внезапные нарушения.",
    details: [
      { label: "Что входит", text: "Экстренная оценка, неотложная визуализация (если доступно), координация с экстренной службой или госпитализация при необходимости." },
      { label: "Подготовка", text: "При экстренных состояниях — немедленно обращаться в соответствующее учреждение." },
      { label: "Результат", text: "Быстрая оценка риска и направление на безопасную тактику." },
    ]
  },
  {
    num: "12", title: "Онлайн-консультации",
    short: "Консультации по результатам анализов и обсуждению жалоб в дистанционном формате.",
    details: [
      { label: "Что входит", text: "Анализ присланных результатов, видео/телефонная консультация, выписка рекомендаций, направление на очный приём при необходимости." },
      { label: "Подготовка", text: "Отправьте результаты анализов и краткое описание жалоб перед приёмом." },
      { label: "Время", text: "20–40 минут." },
      { label: "Результат", text: "Оперативные рекомендации, экономия времени для пациента." },
    ]
  },
];

interface Props {
  openService: number | null;
  setOpenService: (i: number | null) => void;
  onBookOnline?: () => void;
}

export default function ServicesSection({ openService, setOpenService, onBookOnline }: Props) {
  return (
    <>
      {/* SERVICES */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-reveal text-center mb-14">
            <p className="text-sm font-golos font-medium mb-3" style={{ color: "var(--med-teal)" }}>Что я предлагаю</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "var(--med-blue)" }}>Услуги и направления</h2>
          </div>
          <div className="space-y-3">
            {services.map((s, i) => (
              <div key={i} className="section-reveal bg-white rounded-2xl overflow-hidden border border-[hsl(var(--border))] transition-all">
                <button
                  className="w-full flex items-center gap-5 px-7 py-5 text-left"
                  onClick={() => setOpenService(openService === i ? null : i)}
                >
                  <span className="font-cormorant text-2xl font-semibold flex-shrink-0 w-10" style={{ color: "var(--med-teal)" }}>{s.num}</span>
                  <span className="font-golos font-medium text-sm flex-1 pr-4" style={{ color: "var(--med-blue)" }}>{s.title}</span>
                  <Icon
                    name={openService === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    style={{ color: "var(--med-teal)", flexShrink: 0 }}
                  />
                </button>
                {openService === i && (
                  <div className="px-7 pb-6 animate-fade-in">
                    <div className="w-full h-px mb-4" style={{ background: "hsl(var(--border))" }}></div>
                    <p className="font-golos text-sm leading-relaxed mb-4 text-gray-600">{s.short}</p>
                    <div className="space-y-2 mb-5">
                      {s.details.map((d, di) => (
                        <div key={di} className="flex gap-2">
                          <span className="font-golos text-xs font-semibold flex-shrink-0 mt-0.5" style={{ color: "var(--med-teal)", minWidth: 100 }}>{d.label}:</span>
                          <span className="font-golos text-xs text-gray-500 leading-relaxed">{d.text}</span>
                        </div>
                      ))}
                    </div>
                    <a href="https://prodoctorov.ru/moskva/vrach/720896-pyanyh/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-golos font-medium text-white" style={{ background: "#dc2626" }}>
                      <Icon name="CalendarPlus" size={13} />
                      Записаться
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-2xl flex items-start gap-3" style={{ background: "rgba(42,157,143,0.08)", border: "1px solid rgba(42,157,143,0.2)" }}>
            <Icon name="Lock" size={15} style={{ color: "var(--med-teal)", marginTop: 2 }} />
            <p className="text-xs font-golos text-gray-500">Все данные и результаты обследований сохраняются в строгой конфиденциальности.</p>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-20 px-6" style={{ background: "var(--med-light)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-reveal text-center mb-14">
            <p className="text-sm font-golos font-medium mb-3" style={{ color: "var(--med-teal)" }}>График работы</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "var(--med-blue)" }}>Расписание приёмов</h2>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full font-golos text-sm font-medium text-white" style={{ background: "var(--med-teal)" }}>
              <Icon name="Clock" size={15} />
              Режим работы 24/7 — приёмы уточняйте в расписании
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Яндекс карта */}
            <div className="section-reveal flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden border border-[hsl(var(--border))] shadow-sm" style={{ height: 380 }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.497836%2C55.696078&z=16&pt=37.497836%2C55.696078%2Cpm2rdm&rtext=~55.696078%2C37.497836&rtt=auto&lang=ru_RU"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Клинический госпиталь Мать и дитя Мичуринский"
                  style={{ border: "none" }}
                />
              </div>
              <a
                href="https://yandex.ru/maps/?rtext=~55.696078,37.497836&rtt=auto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl font-golos font-medium text-sm transition-opacity hover:opacity-80"
                style={{ background: "rgba(42,157,143,0.1)", color: "var(--med-teal)", border: "1px solid rgba(42,157,143,0.25)" }}
              >
                <Icon name="Navigation" size={15} />
                Построить маршрут
              </a>
              <div className="p-4 rounded-2xl flex items-start gap-3" style={{ background: "rgba(42,157,143,0.08)", border: "1px solid rgba(42,157,143,0.2)" }}>
                <Icon name="MapPin" size={16} style={{ color: "var(--med-teal)", marginTop: 2 }} />
                <div>
                  <p className="text-sm font-golos font-medium mb-0.5" style={{ color: "var(--med-blue)" }}>Клинический госпиталь «Мать и дитя»</p>
                  <p className="text-xs font-golos text-gray-500">Мичуринский проспект, 31, Москва</p>
                </div>
              </div>
            </div>

            {/* ПроДокторов + запись */}
            <div className="section-reveal flex flex-col gap-5">
              {/* Виджет ПроДокторов */}
              <a
                href="https://prodoctorov.ru/moskva/vrach/720896-pyanyh/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-3xl p-7 border border-[hsl(var(--border))] shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="font-golos text-xs text-gray-400 mb-1">Рейтинг на платформе</div>
                    <div className="font-cormorant text-3xl font-semibold" style={{ color: "var(--med-blue)" }}>5.0</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "var(--med-light)" }}>
                    <Icon name="Star" size={22} style={{ color: "var(--med-teal)" }} />
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-lg">★</span>)}
                </div>
                <div className="font-golos text-xs text-gray-500 mb-5">Отзывы пациентов · ПроДокторов.ру</div>
                <div
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-golos font-medium text-sm text-white transition-opacity group-hover:opacity-90"
                  style={{ background: "var(--med-blue)" }}
                >
                  <Icon name="ExternalLink" size={15} />
                  Записаться на ПроДокторов
                </div>
              </a>

              {/* Запись через ПроДокторов */}
              <a
                href="https://prodoctorov.ru/moskva/vrach/720896-pyanyh/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-3xl p-7 border border-[hsl(var(--border))] shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "#fef2f2" }}>
                    <Icon name="CalendarPlus" size={22} style={{ color: "#dc2626" }} />
                  </div>
                  <div>
                    <div className="font-golos font-semibold text-sm" style={{ color: "var(--med-blue)" }}>Запись через ПроДокторов</div>
                    <div className="font-golos text-xs text-gray-400">Онлайн · быстро и удобно</div>
                  </div>
                </div>
                <div
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-golos font-medium text-sm text-white transition-opacity group-hover:opacity-90"
                  style={{ background: "#dc2626" }}
                >
                  <Icon name="Calendar" size={15} />
                  Записаться на приём
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE CONSULTATION */}
      <section id="online" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-reveal rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0d5f63 0%, #14a8a3 100%)" }}>
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
                <button onClick={onBookOnline} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium text-white transition-all hover:scale-105" style={{ background: "#dc2626" }}>
                  <Icon name="Video" size={16} />
                  Записаться онлайн
                </button>
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
    </>
  );
}