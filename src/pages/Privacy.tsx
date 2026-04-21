export default function Privacy() {
  return (
    <div className="min-h-screen py-16 px-6" style={{ background: "var(--med-cream)" }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-golos mb-8 hover:opacity-70 transition-opacity" style={{ color: "var(--med-teal)" }}>
          ← Вернуться на главную
        </a>

        <h1 className="font-cormorant text-4xl font-semibold mb-2" style={{ color: "var(--med-blue)" }}>
          Политика обработки персональных данных
        </h1>
        <p className="text-sm font-golos text-gray-400 mb-10">Последнее обновление: апрель 2026 г.</p>

        <div className="space-y-8 font-golos text-sm leading-relaxed text-gray-600">

          <section>
            <h2 className="font-semibold text-base mb-3" style={{ color: "var(--med-blue)" }}>1. Общие положения</h2>
            <p>
              Настоящая Политика обработки персональных данных (далее — Политика) разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и регулирует порядок обработки персональных данных пользователей сайта.
            </p>
            <p className="mt-3">
              Оператором персональных данных является врач-гинеколог Пьяных Андрей Витальевич, ведущий приём на базе медицинского учреждения MD Group — Клинический Госпиталь Мичуринский, расположенного по адресу: г. Москва, Мичуринский проспект, 31.
            </p>
            <p className="mt-3">
              По вопросам обработки персональных данных вы можете обратиться по email: <a href="mailto:avpyanykhdok@yandex.ru" className="underline" style={{ color: "var(--med-teal)" }}>avpyanykhdok@yandex.ru</a>.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-3" style={{ color: "var(--med-blue)" }}>2. Какие данные мы собираем</h2>
            <p>При заполнении формы записи на приём мы собираем следующие персональные данные:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Предпочтительная дата приёма</li>
              <li>Описание жалоб (при наличии)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-3" style={{ color: "var(--med-blue)" }}>3. Цели обработки персональных данных</h2>
            <p>Персональные данные обрабатываются исключительно в целях:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Организации и подтверждения записи на приём</li>
              <li>Связи с пациентом для уточнения деталей визита</li>
              <li>Оказания медицинской помощи</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-3" style={{ color: "var(--med-blue)" }}>4. Правовое основание</h2>
            <p>
              Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, выраженного при заполнении формы на сайте, а также в рамках исполнения договора об оказании медицинских услуг (ст. 6, ч. 1, п. 1 и п. 5 Федерального закона № 152-ФЗ).
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-3" style={{ color: "var(--med-blue)" }}>5. Передача данных третьим лицам</h2>
            <p>
              Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных действующим законодательством Российской Федерации. Данные не продаются, не обмениваются и не используются в рекламных целях.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-3" style={{ color: "var(--med-blue)" }}>6. Срок хранения данных</h2>
            <p>
              Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, а также в течение сроков, установленных законодательством в области хранения медицинской документации (не менее 25 лет для медицинских карт). После истечения указанного срока данные уничтожаются.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-3" style={{ color: "var(--med-blue)" }}>7. Права субъекта персональных данных</h2>
            <p>Вы вправе:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Получить информацию об обработке ваших персональных данных</li>
              <li>Потребовать уточнения, блокирования или уничтожения ваших данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия оператора в Роскомнадзор</li>
            </ul>
            <p className="mt-3">
              Для реализации прав направьте обращение на email: <a href="mailto:avpyanykhdok@yandex.ru" className="underline" style={{ color: "var(--med-teal)" }}>avpyanykhdok@yandex.ru</a>.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-3" style={{ color: "var(--med-blue)" }}>8. Защита персональных данных</h2>
            <p>
              Оператор принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, уничтожения, изменения, блокирования, копирования и распространения.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-3" style={{ color: "var(--med-blue)" }}>9. Изменения политики</h2>
            <p>
              Оператор вправе вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице. Продолжение использования сайта после внесения изменений означает согласие с новой редакцией Политики.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
