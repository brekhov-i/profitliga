<template>
  <h2 class="section-title">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
@import "assets/styles/functions.scss";

.section-title {
  font-size: vw(38);
  font-style: normal;
  font-weight: 700;
  line-height: vw(54);
  @media screen and (max-width: 1500px) {
    font-size: vw(42);
    line-height: vw(60);
  }
  @media screen and (max-width: 468px) {
    font-size: vmin(23);
    line-height: vmin(29);
  }
}
</style>