<template>
  <div class="whatGet">
    <div class="whatGet__content container">
      <pt-section-title>Что вы получите работая в Профит-Лиге?</pt-section-title>
      <div class="whatGet__carts">
        <div class="cart" v-for="cart in carts" :key="cart.image">
          <div class="cart__title" v-html="cart.title"></div>
          <div class="cart__text">{{ cart.text }}</div>
          <div class="cart__image">
            <img :src="cart.image" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>


const carts = ref([
  {
    title: 'Конкурентная заработная плата',
    text: 'Мы оцениваем ваши усилия и навыки и стремимся предоставить вам зарплату, которая соответствует вашему вкладу в компанию.',
    image: 'images/whatGet/image1.png'
  },
  {
    title: 'Комфортные условия труда',
    text: 'Мы стремимся создать здоровую и безопасную рабочую среду. У нас регулярно проводятся проверки и оценки условий труда с целью совершенствования нашего рабочего пространства.',
    image: 'images/whatGet/image2.png'
  },
  {
    title: 'Интересные задачи',
    text: 'Ваша работа вносит реальный вклад в успех нашей компании. У вас будет возможность видеть непосредственное влияние своей работы и быть частью чего-то большого',
    image: 'images/whatGet/image3.png'
  },
  {
    title: 'Возможность работать в <br> команде <br> профессионалов',
    text: 'Работая с опытными коллегами, вы получите возможность развиваться как профессионал и расширять свои навыки и знания в специализированной сфере.',
    image: 'images/whatGet/image4.png'
  },
  {
    title: 'Насыщенная <br> корпоративная жизнь',
    text: 'Мы регулярно проводим различны мероприятия, такие как семинары тренинги, тематические вечеринки, праздничные мероприятия и командны выезды.',
    image: 'images/whatGet/image5.png'
  },
  {
    title: 'Корпоративная скидка на все продаваемые бренды',
    text: 'Мы предоставляем персональные скидки для наших сотрудников, которые позволяют вам пользоваться нашими товарами и услугами на более выгодных условиях.',
    image:  'images/whatGet/image6.png'
  }
])
</script>

<style scoped lang='scss'>
@import "assets/styles/functions.scss";

.whatGet {
  padding: 80px 0;
  background-color: var(--color-grey);

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
  }

  &__carts {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    .cart {
      position: relative;
      width: 100%;
      height: auto;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: var(--color-white);
      padding: 24px;
      gap: 16px;
      overflow: hidden;

      &__title {
        font-size: vw(22);
        font-style: normal;
        font-weight: 700;
        line-height: vw(32);
        z-index: 2;
      }

      &__text {
        font-family: var(--font-sans);
        font-size: vw(18);
        font-style: normal;
        font-weight: 400;
        line-height: vw(24);
        align-self: stretch;
        z-index: 2;
        color: var(--color-grey-dark);
      }

      &__image {
        position: absolute;
        right: 0;
        bottom: 0;
        width: vw(180);
        height: vw(180);
        z-index: 1;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &:nth-child(1) {
        grid-column: span 3;
        padding-right: 120px;

        .cart__image {
          right: -35px;
          bottom: -35px;
        }
      }

      &:nth-child(2) {
        grid-column: span 3;
        padding-right: 120px;

        .cart__image {
          right: -26px;
          bottom: -15px;
        }
      }

      &:nth-child(3) {
        grid-column: span 2;
        padding-right: 80px;

        .cart__text {
          max-width: 283px;
        }

        .cart__image {
          right: -41px;
          bottom: -37px;
        }
      }

      &:nth-child(4) {
        grid-column: span 2;
        padding-right: 80px;

        .cart__text {
          max-width: 267px;
        }

        .cart__image {
          right: -46px;
          bottom: -41px;
        }
      }

      &:nth-child(5) {
        grid-column: span 2;
        padding-right: 80px;

        .cart__text {
          max-width: 267px;
        }

        .cart__image {
          right: -41px;
          bottom: -26px;
        }
      }

      &:nth-child(6) {
        grid-column: span 6;
        padding-right: 120px;

        .cart__image {
          right: -41px;
          bottom: -41px;
        }
      }
    }
  }

  @media screen and (max-width: 1500px) {
    &__content {
      gap: 40px;
    }

    &__carts {
      gap: 20px;

      .cart {
        border-radius: 16px;
        padding: 24px;
        gap: 10px;
        overflow: hidden;

        &__title {
          font-size: vw(26);
          line-height: vw(34);
        }

        &__text {
          font-size: vw(22);
          line-height: vw(26);
          letter-spacing: 0.8px;
        }

        &__image {
          width: 130px;
          height: 130px;
        }
      }
    }
  }
  
  @media screen and (max-width: 1000px) {
    &__carts {
      .cart {
        &:nth-child(1) {
          grid-column: span 3;
        }

        &:nth-child(2) {
          grid-column: span 3;
        }

        &:nth-child(3) {
          grid-column: span 3;
        }

        &:nth-child(4) {
          grid-column: span 3;
        }

        &:nth-child(5) {
          grid-column: span 3;
        }

        &:nth-child(6) {
          grid-column: span 3;
        }
      }
    }
  }


  @media screen and (max-width: 468px) {
    padding: vmin(40) 0;
    &__carts {
      grid-template-columns: repeat(1, 1fr);
      gap: vmin(10);

      .cart {
        border-radius: 16px;
        padding: vmin(12);
        gap: vmin(8);

        &__title {
          font-size: vmin(14);
          line-height: vmin(18);
        }

        &__text {
          font-size: vmin(12);
          line-height: vmin(12);
        }

        &__image {
          width: vmin(120);
          height: vmin(120);
        }

        &:nth-child(1) {
          grid-column: span 1;
          padding-right: vmin(90);
        }

        &:nth-child(2) {
          grid-column: span 1;
          padding-right: vmin(90);
        }

        &:nth-child(3) {
          grid-column: span 1;
          padding-right: vmin(70);
        }

        &:nth-child(4) {
          grid-column: span 1;
          padding-right: vmin(80);
        }

        &:nth-child(5) {
          grid-column: span 1;
          padding-right: vmin(40);
        }

        &:nth-child(6) {
          grid-column: span 1;
          padding-right: vmin(80);
        }
      }
    }
  }
}
</style>