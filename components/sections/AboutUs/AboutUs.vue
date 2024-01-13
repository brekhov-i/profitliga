<template>
  <div class="aboutUs">
    <div class="container">
      <div class="aboutUs__wrapper">
        <pt-section-title class="aboutUs__title">Надежность. Качество. Рост.</pt-section-title>
        <div class="aboutUs__textBlock">
          <p><strong>Профит-Лига</strong> — это много больше, чем просто компания. Мы — гигант в мире автомобильных
            запасных частей,
            объединяющий более 250 брендов и насчитывающий свыше 180 000 позиций на своих складах. Наш успех основан на
            прямых контрактах с ведущими заводами-производителями, что обеспечивает непрерывное обновление ассортимента.
          </p>
          <p>Сеть наших складов, которые являются крупнейшими в <strong>ЮФО и СКФО</strong>, охватывает общую площадь
            свыше <strong>40 000 кв.м.</strong> Мы
            не просто занимаемся распределением автозапчастей, мы обеспечиваем их доступность в крупных городах, включая
            <strong>Ростов-на-Дону, Краснодар, Ставрополь, Волгоград, Пятигорск, Астрахань, Воронеж, Кропоткин,
              Симферополь, Новороссийск, Сочи, Владикавказ, Майкоп, Махачкала и Москву.</strong>
          </p>
          <p>Современные методы работы службы логистики гарантируют высокое качество обслуживания наших клиентов. Но в
            сердце
            <strong>Профит-Лиги</strong> — это наши сотрудники, более 1000 профессионалов, которые приходят на работу
            каждый день со
            счастливыми лицами, чтобы вносить свой вклад в успех компании.</p>
          <p><strong>Профит-Лига — это не только бизнес, это команда, объединенная общими целями и стремлением к
            развитию.</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='scss'>
@import "assets/styles/functions.scss";

.aboutUs {
  width: 100%;
  height: auto;
  padding: vw(181) 0;
  background-image: url("/images/about.png");
  background-size: cover;
  background-position: center center;

  &__wrapper {
    width: 100%;
    height: auto;
    border-radius: 24px;
    background-color: var(--color-white);
    padding: vw(60);
  }

  &__title {
    margin-bottom: vw(38);
  }

  &__textBlock {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 31px;

    p {
      font-family: var(--font-sans);
      font-size: vw(20);
      font-style: normal;
      font-weight: 400;
      line-height: vw(31);
      color: var(----color-grey-dark);

      strong {
        font-family: var(--font-serif);
        font-size: vw(20);
        font-style: normal;
        line-height: vw(31);
        font-weight: 700;
      }
    }
  }

  @media screen and (max-width: 1500px) {

    &__textBlock {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 31px;

      p {
        font-size: vw(24);
        line-height: vw(34);
        letter-spacing: 0.8px;

        strong {
          font-size: vw(24);
          line-height: vw(34);
          letter-spacing: 0.8px;
        }
      }
    }
  }

  @media screen and (max-width: 468px) {
    padding: vmin(40) 0;

    &__wrapper {
      padding: vmin(15);
    }

    &__textBlock {
      gap: vmin(14);

      p {
        font-size: vmin(12);
        line-height: vmin(16);
        letter-spacing: 0.8px;

        strong {
          font-size: vmin(12);
          line-height: vmin(16);
          letter-spacing: 0.8px;
        }
      }
    }
  }
}
</style>