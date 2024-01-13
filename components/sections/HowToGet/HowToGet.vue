<template>
  <div class="howToGet">
    <div class="howToGet__wrapper container">
      <pt-section-title class="howToGet__title">Как попасть на Online-собеседование?</pt-section-title>
      <p class="howToGet__text">Первый этап собеседования проходит он-лайн, после регистрации в кабинете соискателя.</p>
      <pt-steps class="howToGet__steps" :data="steps" />
    </div>
  </div>
</template>

<script setup lang='ts'>


import type { TStepItem } from '~/components/ui/Steps/StepsTypes'

const steps = ref<TStepItem[]>([
  {
    title: 'Регистрация в портале',
    text: 'Ваше путешествие к успеху начинается с малого – регистрации на нашем сайте. Этот этап – ваш первый шаг к новой карьере в Профит-Лиге. Заполните простую форму, представьте себя, и откройте дверь к миру уникальных возможностей.'
  },
  {
    title: 'Онлайн-встреча',
    text: 'У вас будет уникальная возможность лично общаться с нашими профессионалами через Яндес.Телемост. Это наш способ узнать вас получше и понять, как мы можем вместе вносить вклад в наш общий успех. Этот этап дает вам возможность показать ваше мышление, навыки и амбиции.'
  },
  {
    title: 'Стажировка',
    text: 'После успешного собеседования вы приступаете к наиболее волнующему этапу – стажировке. Это ваш шанс раскрыть весь свой потенциал, применить навыки на практике и усовершенствовать их под руководством наших опытных специалистов. Это время для обучения, роста и, конечно же, для демонстрации вашей решимости и целеустремленности.'
  },
])
</script>

<style scoped lang='scss'>
@import "assets/styles/functions.scss";

.howToGet {
  padding: 80px 0;

  &__text {
    font-family: var(--font-sans);
    font-size: vw(24);
    font-style: normal;
    font-weight: 400;
    line-height: vw(36);
    color: #555;
  }
  &__steps {
    margin-top: vw(40);
  }

  @media screen and (max-width: 1500px) {
    &__text {
      font-family: var(--font-sans);
      font-size: vw(30);
      line-height: vw(36);
      letter-spacing: 0.7px;
      color: #555;
      margin-top: 10px;
    }
    &__steps {
      margin-top: vw(40);
    }
  }
  @media screen and (max-width: 468px) {
    padding: vmin(40) 0;
    &__text {
      font-family: var(--font-sans);
      font-size: vmin(12);
      line-height: vmin(16);
      letter-spacing: 0.7px;
      color: #555;
      margin-top: 10px;
    }
    &__steps {
      margin-top: vmin(30);
    }
  }
}
</style>