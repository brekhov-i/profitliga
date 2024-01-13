<template>
  <div class="navbar">
    <div class="navbar__item" v-for="item in items" :key="item.to">
      <nuxt-link class="navbar__item-link" :to="item.to">{{
          item.title
        }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { TNavBarItem } from '~/components/NavBar/NavBarTypes'

const items = ref<TNavBarItem[]>([
  {
    title: 'Преимущества',
    to: '#advantages'
  },
  {
    title: 'Вопросы',
    to: '#faq'
  },
  {
    title: 'Регистрация',
    to: '#registration'
  }
])
</script>

<style scoped lang='scss'>
.navbar {
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  &__item {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    &-link {
      font-size: 14.375px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: var(--color-black-700);
      text-decoration: none;
    }
  }
}
</style>