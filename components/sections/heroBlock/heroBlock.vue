<template>
  <div class="heroBlock">
    <div class="heroBlock__content container">
      <h1 class="heroBlock__title">Вы приглашены на онлайн-собеседование.</h1>
      <div class="heroBlock__text">Просим Вас пройти регистрацию. До встречи!</div>
      <pt-button class="heroBlock__button" :command="() => emits('openModal', false)">
        Пройти регистрацию
      </pt-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import ArrowButton from '~/components/icons/ArrowButton.vue'

const arrowButton = shallowRef(ArrowButton)
const emits = defineEmits<{
  (e: 'openModal', value: boolean): void
}>()
</script>

<style scoped lang='scss'>
@import "assets/styles/functions.scss";

.heroBlock {
  --arrow-button: v-bind(arrowButton);
  width: 100%;
  height: auto;
  background-image: url('/images/heroImage.png');
  background-size: cover;
  background-position: center center;
  padding: 130px 0;

  &__title {
    max-width: 646px;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: 72px;
    color: var(--color-white);
    margin-bottom: 32px;
  }

  &__text {
    font-family: var(--font-sans);
    max-width: 308px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    color: var(--color-white);
    margin-bottom: 52px;
  }

  &__button {
    position: relative;

    &:after {
      position: absolute;
      left: -65px;
      top: 40%;
      transform: translateY(-50%);
      content: url("data:image/svg+xml,%3Csvg width='45' height='103' viewBox='0 0 45 103' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30.4313 61.6297C30.15 61.6297 29.925 61.5172 29.7563 61.2922C29.475 60.8984 29.5875 60.3922 29.9813 60.1109C30.825 59.5484 35.325 57.0172 38.1938 55.4422C28.4063 55.1609 20.5875 51.3359 14.9625 44.1922C5.56877 32.2109 5.34377 14.4922 7.98752 2.96094C8.10002 2.51094 8.55002 2.22969 9.00002 2.34219C9.45002 2.45469 9.73127 2.90469 9.61877 3.35469C7.03127 14.5484 7.25627 31.6484 16.2563 43.1797C21.6 50.0422 29.1938 53.6422 38.7 53.8109H38.8688L37.0688 51.5609C36.2813 50.6047 35.55 49.7047 34.7625 48.6922C34.3688 48.1859 33.9188 47.6234 33.4688 47.0609C33.1875 46.7234 33.2438 46.1609 33.5813 45.8797C33.9188 45.5984 34.4813 45.6547 34.7625 45.9922C34.7625 45.9922 34.7625 46.0484 34.8188 46.0484L38.4188 50.4922C38.7 50.8297 38.925 51.1109 39.2063 51.4484C40.05 52.4609 40.95 53.4734 41.625 54.5422C41.625 54.5984 41.6813 54.5984 41.6813 54.6547C41.7375 54.7672 41.7375 54.8234 41.7938 54.9359V55.1047C41.7938 55.2172 41.7938 55.2734 41.7375 55.3859C41.7375 55.4422 41.6813 55.4422 41.6813 55.4984C41.625 55.6109 41.5688 55.6672 41.5125 55.7234C41.4563 55.7797 41.4 55.7797 41.3438 55.8359C41.3438 55.8359 41.2875 55.8359 41.2313 55.8922C40.725 56.1172 32.2313 60.7297 30.9938 61.5734C30.7688 61.5734 30.6 61.6297 30.4313 61.6297Z' fill='%230EBC05'/%3E%3C/svg%3E%0A");
    }
  }

  @media screen and (max-width: 1500px) {
    &__title {
      max-width: vw(646);
      font-size: vw(54);
      font-style: normal;
      font-weight: 700;
      line-height: vw(72);
      color: var(--color-white);
      margin-bottom: vw(32);
    }
    &__text {
      max-width: vw(380);
      font-size: vw(28);
      line-height: vw(36);
      margin-bottom: vw(52);
    }
  }

  @media screen and (max-width: 468px) {
    background-position: left center;
    padding: vmin(50) 0;
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__title {
      max-width: none;
      font-size: vmin(25);
      line-height: vmin(30);
      margin-bottom: vmin(16);
      text-align: center;
    }
    &__text {
      max-width: vmin(230);
      font-size: vmin(16);
      line-height: vmin(22);
      margin-bottom: vmin(60);
      letter-spacing: 0.7px;
      text-align: center;
    }
    &__button {
      position: relative;
      margin-left: 20px;

      &:after {
        position: absolute;
        left: -60px;
        top: 40%;
        transform: translateY(-50%);
        content: url("data:image/svg+xml,%3Csvg width='45' height='103' viewBox='0 0 45 103' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30.4313 61.6297C30.15 61.6297 29.925 61.5172 29.7563 61.2922C29.475 60.8984 29.5875 60.3922 29.9813 60.1109C30.825 59.5484 35.325 57.0172 38.1938 55.4422C28.4063 55.1609 20.5875 51.3359 14.9625 44.1922C5.56877 32.2109 5.34377 14.4922 7.98752 2.96094C8.10002 2.51094 8.55002 2.22969 9.00002 2.34219C9.45002 2.45469 9.73127 2.90469 9.61877 3.35469C7.03127 14.5484 7.25627 31.6484 16.2563 43.1797C21.6 50.0422 29.1938 53.6422 38.7 53.8109H38.8688L37.0688 51.5609C36.2813 50.6047 35.55 49.7047 34.7625 48.6922C34.3688 48.1859 33.9188 47.6234 33.4688 47.0609C33.1875 46.7234 33.2438 46.1609 33.5813 45.8797C33.9188 45.5984 34.4813 45.6547 34.7625 45.9922C34.7625 45.9922 34.7625 46.0484 34.8188 46.0484L38.4188 50.4922C38.7 50.8297 38.925 51.1109 39.2063 51.4484C40.05 52.4609 40.95 53.4734 41.625 54.5422C41.625 54.5984 41.6813 54.5984 41.6813 54.6547C41.7375 54.7672 41.7375 54.8234 41.7938 54.9359V55.1047C41.7938 55.2172 41.7938 55.2734 41.7375 55.3859C41.7375 55.4422 41.6813 55.4422 41.6813 55.4984C41.625 55.6109 41.5688 55.6672 41.5125 55.7234C41.4563 55.7797 41.4 55.7797 41.3438 55.8359C41.3438 55.8359 41.2875 55.8359 41.2313 55.8922C40.725 56.1172 32.2313 60.7297 30.9938 61.5734C30.7688 61.5734 30.6 61.6297 30.4313 61.6297Z' fill='%230EBC05'/%3E%3C/svg%3E%0A");
      }
    }
  }
}
</style>