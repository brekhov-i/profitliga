<template>
  <div class="default-layout">
    <header class="default-layout__header container">
      <div class="default-layout__header-logo">
        <img src="/images/Logo.svg" alt="">
      </div>
      <div class="default-layout__header-nav">
        <pt-nav-bar/>
      </div>
    </header>
    <main class="default-layout__content">
      <RouterView/>
    </main>
  </div>
</template>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &__header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20.5px 40px;

    &-logo {
      width: auto;
      height: 39px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__content {
    width: 100%;
  }
  
  @media screen and (max-width: 468px) {
    &__header {
      padding: 20px 10px;
      &-logo {
        height: 30px;
      }
      &-nav {
        display: none;
      }
    }
  }
}
</style>