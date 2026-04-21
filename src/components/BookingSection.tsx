import Icon from "@/components/ui/icon";

interface BookingForm {
  name: string;
  phone: string;
  type: string;
  date: string;
  message: string;
}

interface Props {
  bookingForm: BookingForm;
  setBookingForm: (form: BookingForm) => void;
  submitted: boolean;
  handleBooking: (e: React.FormEvent) => void;
}

export default function BookingSection({ bookingForm, setBookingForm, submitted, handleBooking }: Props) {
  return (
    <>
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
              <p className="font-golos text-sm text-gray-500">Андрей Витальевич свяжется с вами в ближайшее время для подтверждения записи.</p>
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
                <p className="text-center text-xs font-golos text-gray-400">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity" style={{ color: "var(--med-teal)" }}>
                    политикой обработки персональных данных
                  </a>
                </p>
                <div className="flex items-start gap-2 p-3 rounded-xl mt-1" style={{ background: "#f5f5f0" }}>
                  <Icon name="AlertCircle" size={13} className="flex-shrink-0 mt-0.5 text-gray-400" />
                  <p className="text-xs font-golos leading-relaxed text-gray-400">Информация не заменяет очный приём и индивидуальную консультацию. Лечение назначается после личного осмотра и/или необходимых исследований.</p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="px-6 py-5" style={{ background: "#f5f5f0", borderTop: "1px solid #e0e0d8" }}>
        <div className="max-w-6xl mx-auto flex items-start gap-3">
          <Icon name="AlertCircle" size={16} className="flex-shrink-0 mt-0.5 text-gray-400" />
          <p className="text-xs font-golos leading-relaxed text-gray-500">
            <span className="font-medium text-gray-600">Важно:</span> Информация на сайте носит ознакомительный характер и не заменяет очный приём и индивидуальную консультацию специалиста. Лечение назначается только после личного осмотра и/или необходимых исследований. Сайт не содержит гарантий лечебного результата.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ background: "var(--med-blue)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(42,157,143,0.3)" }}>
                  <Icon name="Cross" size={14} className="text-white" />
                </div>
                <span className="font-cormorant font-semibold text-lg text-white">Доктор Пьяных</span>
              </div>
              <p className="text-xs font-golos leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>Гинеколог-хирург, детский гинеколог, врач УЗИ. Профессиональная медицинская помощь в Москве и онлайн.</p>
            </div>
            <div>
              <h4 className="font-golos font-medium text-sm text-white mb-4">Контакты</h4>
              <div className="space-y-2">
                {[
                  { icon: "Phone", text: "+7 (495) 123-45-67" },
                  { icon: "Mail", text: "avpyanykhdok@yandex.ru" },
                  { icon: "MapPin", text: "Москва, Мичуринский проспект, 31" },
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

        </div>
      </footer>
    </>
  );
}