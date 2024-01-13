<template>
  <component
    class="button"
    :is="to ? 'NuxtLink' : 'Button'"
    @click="command"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string,
  command?: () => void,
}>(), {
  command: () => {}
})
</script>

<style scoped lang="scss">
@import "assets/styles/functions.scss";

.button {
  width: auto;
  height: auto;
  padding: vw(26) vw(80);
  background-color: var(--color-green);
  border-radius: vw(100);
  color: var(--color-white);
  font-size: vw(24);
  font-weight: 700;
  line-height: 120%;
  transition: 0.3s background-color ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #0c9304;
    transition: 0.3s background-color ease-in-out;
  }

  @media screen and (max-width: 468px) {
    padding: vmin(12) vmin(40);
    border-radius: vmin(100);
    font-size: vmin(14);
  }
}
</style>