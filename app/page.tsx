export default function HomePage() {
  return (
    <>
      {/*внутри return один общий элемент поэтому все оборачивается в <></>*/}
      <header className="bg-white py-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <p className="text-xl font-bold text-[#1a2a52]">BOXPACK</p>
          <nav className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#services">Услуги</a>
            <a href="#steps">Как это работает</a>
            <a href="#video">Видеофиксация</a>
            <a href="#calc">Калькулятор</a>
            <a href="#cases">Кейсы</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </header>

      {/*готовые короткие класси, вместо отдельного файла я пишу прямо в className*/}
      <section className="bg-[#1a2a52] py-16 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          {/* Левая часть: текст */}
          <div>
            <p className="text-xs">Автоматизированный фулфилмент</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Фулфилмент, который держит сроки и репутацию
            </h1>
            <p className="mt-4 text-sm">
              Автоматизированная упаковка, видеоконтроль каждого заказа и
              отправка в день поступления. Мы берем на себя хранение, сборку,
              маркировку и логистику.
            </p>

            {/*Ссылка внутри страницы ведет к элементу id */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <a href="#calc" className="text-sm font-bold">
                Рассчитать стоимость →
              </a>
              <button className="rounded border border-white px-4 py-2 text-xs">
                Получить консультацию
              </button>
            </div>

            {/* Карточки */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="w-[95px] rounded bg-[#2d3f6b] p-3">
                <p className="text-sm font-bold">5000+</p>
                <p className="text-[10px]">заказов в день</p>
              </div>
              <div className="w-[95px] rounded bg-[#2d3f6b] p-3">
                <p className="text-sm font-bold">99.8%</p>
                <p className="text-[10px]">точность сборки</p>
              </div>
              <div className="w-[95px] rounded bg-[#2d3f6b] p-3">
                <p className="text-sm font-bold">FBO/FBS</p>
                <p className="text-[10px]">все маркетплейсы</p>
              </div>
            </div>
          </div>

          {/* видео */}
          <div
            id="video"
            className="flex h-[150px] items-center justify-center rounded-lg bg-[#d0d3da] text-[10px] text-[#1a2a52] md:h-[220px]"
          >
            Видео автоматической упаковочной линии
          </div>
        </div>
      </section>

      {/*Как начать работать с нами */}
      <section id="steps" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-xl font-bold">
            Как начать работать с нами
          </h2>
          <p className="mt-2 text-center text-xs">
            Подключение занимает всего несколько дней. Все процессы максимально
            автоматизированы.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 1</p>
              <h3 className="mt-2 text-xs">Оставляете заявку</h3>
              <p className="mt-2 text-[10px] text-gray-400">Через сайт или Telegram</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 2</p>
              <h3 className="mt-2 text-xs">Получаете расчет</h3>
              <p className="mt-2 text-[10px] text-gray-400">Под ваш объем и формат работы</p>
            </div>
            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 3</p>
              <h3 className="mt-2 text-xs">Подписываем договор</h3>
              <p className="mt-2 text-[10px] text-gray-400">Через ЭДО</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 4</p>
              <h3 className="mt-2 text-xs">Принимаем товар</h3>
              <p className="mt-2 text-[10px] text-gray-400">От поставщика или транспортной компании</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 5</p>
              <h3 className="mt-2 text-xs">Автоматизированная упаковка</h3>
              <p className="mt-2 text-[10px] text-gray-400">С видеоконтролем каждого этапа</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 6</p>
              <h3 className="mt-2 text-xs">Отправляем</h3>
              <p className="mt-2 text-[10px] text-gray-400">На маркетплейсы по всей России</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 7</p>
              <h3 className="mt-2 text-xs">Получаете результат</h3>
              <p className="mt-2 text-[10px] text-gray-400">Отчеты и прозрачную статистику</p>
            </div>
          </div>
        </div>
      </section>

      {/* услуги фулфимента 7 карточек*/}
      <section id="services" className="bg-[#f8f8f8] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-xl font-bold">Услуги фулфилмента</h2>
          <p className="mt-2 text-center text-xs">
            Полный цикл обработки товара от приемки до доставки.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[10px] border-t-4 border-[#5aa9b8] bg-white p-5">
              <h3 className="text-xs font-bold">Приемка и сортировка</h3>
              <p className="mt-2 text-[10px] text-gray-400">Принимаем поставки любого объема и размещаем товар на адресное хранение.</p>
            </div>

            <div className="rounded-[10px] border-t-4 border-[#5aa9b8] bg-white p-5">
              <h3 className="text-xs font-bold">Проверка на брак</h3>
              <p className="mt-2 text-[10px] text-gray-400">Контроль качества перед отправкой покупателю.</p>
            </div>

            <div className="rounded-[10px] border-t-4 border-[#5aa9b8] bg-white p-5">
              <h3 className="text-xs font-bold">Автоматизированная упаковка</h3>
              <p className="mt-2 text-[10px] text-gray-400">Автоматические линии и видеоконтроль каждого заказа.</p>
            </div>

            <div className="rounded-[10px] border-t-4 border-[#5aa9b8] bg-white p-5">
              <h3 className="text-xs font-bold">Сборка заказов</h3>
              <p className="mt-2 text-[10px] text-gray-400">Быстрая комплектация заказов по данным маркетплейсов.</p>
            </div>

            <div className="rounded-[10px] border-t-4 border-[#5aa9b8] bg-white p-5">
              <h3 className="text-xs font-bold">Отправка на маркетплейсы</h3>
              <p className="mt-2` text-[10px] text-gray-400">FBO и FBS для всех крупных площадок.</p>
            </div>

            <div className="rounded-[10px] border-t-4 border-[#5aa9b8] bg-white p-5">
              <h3 className="text-xs font-bold">Хранение товаров</h3>
              <p className="mt-2 text-[10px] text-gray-400">Безопасное адресное хранение продукции.</p>
            </div>

            <div className="rounded-[10px] border-t-4 border-[#5aa9b8] bg-white p-5">
              <h3 className="text-xs font-bold">Интеграции</h3>
              <p className="mt-2 text-[10px] text-gray-400">Синхронизация с маркетплейсами и CRM.</p>
            </div>
          </div>
        </div>
      </section>

      {/*Почему выбирают Boxpack*/}
      <section id="contacts" className="bg-[#1a2a52] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-xl font-bold">
            Почему выбирают BOXPACK
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[10px] bg-[#2d3f6b] p-5">
              <h3 className="text-xs font-bold">Скорость</h3>
              <p className="mt-2 text-[10px]">До 20 000 товаров за смену и отправка день в день.</p>
            </div>

            <div className="rounded-[10px] bg-[#2d3f6b] p-5">
              <h3 className="text-xs font-bold">Точность</h3>
              <p className="mt-2 text-[10px]">99.8% точность сборки благодаря автоматизации.</p>
            </div>

            <div className="rounded-[10px] bg-[#2d3f6b] p-5">
              <h3 className="text-xs font-bold">Надежность</h3>
              <p className="mt-2 text-[10px]">Страхование товара и круглосуточный контроль.</p>
            </div>

            <div className="rounded-[10px] bg-[#2d3f6b] p-5">
              <h3 className="text-xs font-bold">Поддержка</h3>
              <p className="mt-2 text-[10px]">Персональный менеджер и оперативная помощь.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
