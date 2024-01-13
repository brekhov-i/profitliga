<template>
  <div class="steps">
    <div class="steps__line"></div>
    <div class="steps__item" v-for="item in data" :key="item.title" >
      <div class="item__title">{{ item.title }}</div>
      <div class="item__text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { TStepItem } from '~/components/ui/Steps/StepsTypes'

const props = defineProps<{
  data: TStepItem[]
}>()
</script>

<style scoped lang='scss'>
@import "assets/styles/functions.scss";

.steps {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: vw(40);
  padding-left: vw(64);

  &__line {
    position: absolute;
    left: 11px;
    top: vw(65);
    width: 2px;
    height: vw(370);
    background-color: #E0E0E0;
    z-index: 2;
  }

  &__item {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: vw(24) vw(40);
    background-color: #F1F4F5;
    border-radius: vw(24);
    gap: 8px;

    &::after {
      position: absolute;
      left: vw(-64);
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background-color: var(--color-green);
      content: "";
      z-index: 3;
    }

    .item__title {
      font-size: vw(22);
      font-style: normal;
      font-weight: 700;
      line-height: vw(32);
    }

    .item__text {
      font-family: var(--font-sans);
      font-size: vw(18);
      font-style: normal;
      font-weight: 400;
      line-height: vw(24);
      color: #555555;
    }
  }

  @media screen and (max-width: 1500px) {
    &__line {
      position: absolute;
      left: 10px;
      height: vw(420);
    }
    &__item {
      padding: vw(30) vw(40);
      border-radius: vw(24);
      gap: 8px;

      &::after {
        left: vw(-64);
        width: 22px;
        height: 22px;
      }

      .item__title {
        font-size: vw(26);
        line-height: vw(34);
      }

      .item__text {
        font-family: var(--font-sans);
        font-size: vw(22);
        line-height: vw(28);
        letter-spacing: 0.5px;
      }
    }
  }
  @media screen and (max-width: 468px) {
    padding-left: vmin(32);
    &__line {
      position: absolute;
      left: 10px;
      top: vmin(60);
      height: vmin(320);
    }
    &__item {
      padding: vmin(15) vmin(15);
      border-radius: vw(24);
      gap: 10px;

      &::after {
        left: vmin(-32);
        width: 22px;
        height: 22px;
      }

      .item__title {
        font-size: vmin(14);
        line-height: vmin(16);
      }

      .item__text {
        font-family: var(--font-sans);
        font-size: vmin(10);
        line-height: vmin(16);
        letter-spacing: 0.5px;
      }
    }
  }
}
</style>