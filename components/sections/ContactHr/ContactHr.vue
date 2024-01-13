<template>
  <div class="contactHr">
    <div class="contactHr__wrapper container">
      <pt-section-title class="contactHr__title">Свяжитесь с нашими HR-специалистами</pt-section-title>
      <div class="contactHr__textBlock">
        <div class="col">
          <p class="contactHr__text">
            Свяжитесь с нашими HR-специалистами и получите
            квалифицированную помощь в области управления
            персоналом. <br>
            Наша команда экспертов по кадровым вопросам
            готова оказать вам поддержку и решить любые
            вопросы, связанные с наймом, увольнением, обучением
            и развитием сотрудников.
          </p>
          <pt-button @click="emits('openModal')">Пройти регистрацию</pt-button>
        </div>
        <div class="col">
          <picture class="contactHr__image">
            <img src="/images/hr@1x.png" alt="">
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const emits = defineEmits<{
  (e: 'openModal'): void
}>()
</script>

<style scoped lang='scss'>
@import "assets/styles/functions.scss";

.contactHr {
  width: 100%;
  height: auto;
  padding: vw(80) 0;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: vw(40);
  }

  &__textBlock {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr vw(584);
    gap: 93px;

    .col {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  &__text {
    font-family: var(--font-sans);
    font-size: vw(24);
    font-style: normal;
    font-weight: 400;
    line-height: vw(36);
    color: var(--color-grey-dark);
    margin-bottom: auto;
  }

  &__image {
    img {
      width: 100%;
      height: auto;
      border-radius: vw(24);
      overflow: hidden;
    }
  }
  
  @media screen and (max-width: 1500px) {
    &__textBlock {
      grid-template-columns: 1fr vw(700);

    }
    &__text {
      font-size: vw(28);
      line-height: vw(42);
      letter-spacing: 0.7px;
    }
  }

  @media screen and (max-width: 468px) {
    padding: vmin(40) 0;
    &__textBlock {
      grid-template-columns: 1fr;
      gap: vmin(30);
      margin-top: vmin(20);
    }
    &__text {
      font-size: vmin(12);
      line-height: vmin(14);
      letter-spacing: 0.7px;
      margin-bottom: vmin(20);
    }
  }
}
</style>