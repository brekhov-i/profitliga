<template>
  <div class="warehouseAreas container">
    <pt-section-title class="warehouseAreas__title">Зоны работы на складе</pt-section-title>
    <div class="warehouseAreas__description">Информацию об открытых позициях вам расскажет менеджер в процессе
      собеседования.
    </div>
    <div class="warehouseAreas__carts">
      <div class="cart warehouseAreas__cart" v-for="cart in carts" :key="cart.title">
        <picture class="cart__image">
          <img :src="cart.images['1440']" alt="">
        </picture>
        <div class="cart__content">
          <div class="cart__title">{{ cart.title }}</div>
          <ul class="cart__list" v-if="cart.listItems.length > 0">
            <li class="list__item" v-for="item in cart.listItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

const carts = ref([
  {
    images: {
      1440: 'images/warehouseAreasCarts/cart1-1440.png'
    },
    title: 'Участок приёмки',
    listItems: [
      'Штрихкодирование товаров и внесение данных в информационную систему',
      'Перемещение принятого товара к местам группировки перед размещением',
      'Составление документов при выявлении пересортицы, излишков, недостачи'
    ]
  },
  {
    images: {
      1440: 'images/warehouseAreasCarts/cart2-1440.png'
    },
    title: 'Участок размещения',
    listItems: [
      'Перемещение товара от мест группировки с участка приема',
      'Размещение товара с использованием ручного терминала',
      'Работа на мезонине'
    ]
  },
  {
    images: {
      1440: 'images/warehouseAreasCarts/cart3-1440.png'
    },
    title: 'Участок отбора',
    listItems: [
      'Комплектация заказов с использованием ручного терминала',
      'Работа на мезонине',
      'Отбраковка товара при подборе'
    ]
  },
  {
    images: {
      1440: 'images/warehouseAreasCarts/cart4-1440.png'
    },
    title: 'Участок контроля',
    listItems: [
      'Проверка корректности комплектации заказов',
      'Упаковка и тарификация отсортированного товара'
    ]
  }
])
</script>

<style scoped lang='scss'>
@import "assets/styles/functions.scss";

.warehouseAreas {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: vw(80) 20px;

  &__description {
    font-family: var(--font-sans);
    font-size: vw(24);
    font-style: normal;
    font-weight: 400;
    line-height: vw(36);
    margin-bottom: vw(40);
  }

  &__carts {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: vw(40) vw(24);

    .cart {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: vw(201) 1fr;
      gap: vw(40);
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);
      border-radius: vw(24);
      padding: vw(16);

      &__image {
        border-radius: vw(8);
        overflow: hidden;
        height: 100%;
        width: auto;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &__content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
      &__title {
        font-size: vw(24);
        font-style: normal;
        font-weight: 700;
        line-height: vw(32);
        margin-bottom: vw(24);
      }
      &__list {
        max-width: 299px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 8px;
        list-style: disc outside;
        padding-left: 14px;

        .list__item {
          font-family: var(--font-sans);
          font-size: vw(18);
          font-style: normal;
          font-weight: 400;
          line-height: vw(24);
          color: var(--color-grey-dark);
        }
      }
    }
  }

  @media screen and (max-width: 1500px) {
    &__carts {
      .cart {
        &__list {
          max-width: none;
          .list__item {
            font-size: vw(20);
            line-height: vw(28);
          }
        }
      }
    }
  }

  @media screen and (max-width: 468px) {
    padding: vmin(40) 10px;
    &__title {
      margin-bottom: vmin(8);
    }
    &__description {
      font-size: vmin(12);
      line-height: vmin(16);
    }
    &__carts {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: vmin(10);

      .cart {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: vmin(80) 1fr;
        gap: vmin(10);
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);
        border-radius: vw(24);
        padding: vmin(8);

        &__image {
          border-radius: vmin(4);
          overflow: hidden;
          height: auto;
          width: auto;

          img {
            width: 100%;
            height: 100%;
          }
        }

        &__content {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
        &__title {
          font-size: vmin(12);
          font-style: normal;
          font-weight: 700;
          line-height: vmin(16);
          margin-bottom: vw(24);
        }
        &__list {
          max-width: none;
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 8px;
          list-style: disc outside;
          padding-left: 14px;

          .list__item {
            font-family: var(--font-sans);
            font-size: vmin(10);
            font-style: normal;
            font-weight: 400;
            line-height: vmin(12);
            color: var(--color-grey-dark);
          }
        }
      }
    }
  }
}
</style>