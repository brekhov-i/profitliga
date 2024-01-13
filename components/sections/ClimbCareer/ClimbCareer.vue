<template>
  <div class="climbCareer container">
    <div class="climbCareer__wrapper">
      <div class="climbCareer__content">
        <h2 class="climbCareer__title">Не упустите шанс подняться по карьерной лестнице!</h2>
        <hr class="climbCareer__hr">
        <p class="climbCareer__text">Зарегистрируйтесь и позвольте нашим менеджерам предложить вам самые подходящие
          вакансии.</p>
        <pt-button class="climbCareer__btn" @click="emits('openModal')">Пройти регистрацию</pt-button>
      </div>
      <div class="climbCareer__image">
        <picture>
          <img src="/images/climbCareer.png" alt="">
        </picture>
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

.climbCareer {
  background-color: var(--color-white);
  padding: vw(80) 20px;

  &__wrapper {
    width: 100%;
    height: auto;
    border-radius: vw(24);
    overflow: hidden;
    background-color: #F1F4F5;
    display: flex;
    justify-content: flex-start;
    align-items: center;

  }

  &__content {
    width: calc(50% - 48px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 60px 80px 60px 60px;
    margin-right: vw(48);
  }

  &__title {
    max-width: vw(399);
    font-size: vw(38);
    font-style: normal;
    font-weight: 700;
    line-height: vw(54);
    margin-bottom: vw(10);
  }

  &__hr {
    width: 50px;
    height: 3px;
    background-color: var(--color-green);
    margin-bottom: 27px;
    border: none;
  }

  &__text {
    max-width: vw(382);
    font-family: var(--font-sans);
    font-size: vw(20);
    font-style: normal;
    font-weight: 400;
    line-height: vw(31);
    color: var(--color-grey-dark);
    margin-bottom: vw(60);
  }

  &__image {
    width: 50%;
    height: 100%;
    margin-left: auto;

    picture {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    &__title {
      max-width: vw(500);
      font-size: vw(45);
      line-height: vw(54);
      margin-bottom: vw(30);
    }
    &__hr {
      width: 80px;
      margin-bottom: vw(30);
    }
    &__text {
      max-width: none;
      font-size: vw(24);
      line-height: vw(35);
      letter-spacing: 0.5px;
      margin-bottom: vw(60);
    }
  }

  @media screen and (max-width: 468px) {
    &__wrapper {
      flex-direction: column;
      padding: 0;
    }
    &__content {
      width: 100%;
      padding: vmin(20) vmin(20) vmin(40) vmin(20);
    }
    &__image {
      width: 100%;
    }
    &__title {
      max-width: none;
      font-size: vmin(22);
      line-height: vmin(24);
      margin-bottom: vmin(18);
    }
    &__hr {
      width: 80px;
      height: 2px;
      margin-bottom: vmin(18);
    }
    &__text {
      max-width: none;
      font-size: vmin(14);
      line-height: vmin(20);
      letter-spacing: 0.5px;
      margin-bottom: vmin(40);
    }
    &__btn {
      width: 100%;
    }
  }
}
</style>