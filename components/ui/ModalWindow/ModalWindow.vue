<template>
  <client-only>
    <teleport to="body">
      <div
        class="modalWindow"
        :class="{
        'modalWindow--open': isOpen
      }"
        ref="modalEl"
      >
        <div class="modalWindow__wrapper" ref="modalWrapperEl">
          <button class="modalWindow__close" @click="emits('close')">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 11.7899H22" stroke="#000000" stroke-width="2"/>
              <path d="M11 0.789917V22.7899" stroke="#000000" stroke-width="2"/>
            </svg>
          </button>
          <h4 class="modalWindow__title">Регистрация на собеседование</h4>
          <form class="form modalWindow__form">
            <div class="form__field">
              <label for="name" class="field__label">Имя и Фамилия</label>
              <input type="text" id="name" class="field__input" v-model="formData.name">
            </div>
            <div class="form__field">
              <label for="phone" class="field__label">Телефон</label>
              <input type="tel" id="phone" class="field__input" v-model="formData.phone">
            </div>
            <pt-button :command="() => submitForm()">Зарегистрироваться</pt-button>
          </form>
        </div>
      </div>
    </teleport>
  </client-only>
</template>

<script setup lang='ts'>
const props = defineProps<{
  isOpen: boolean
}>()

const emits = defineEmits<{
  (e: 'close'): void
}>()

const formData = ref({
  name: "",
  phone: ""
})

const modalEl = ref<HTMLDivElement | null>(null)
const modalWrapperEl = ref<HTMLDivElement | null>(null)


const submitForm = () => {
  //обработчик отправки формы
}

</script>

<style scoped lang='scss'>
@import "assets/styles/functions.scss";

.modalWindow {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s all ease-in-out;

  &--open {
    opacity: 1;
    visibility: visible;
    transition: 0.3s all ease-in-out;
  }

  &__wrapper {
    position: relative;
    width: 500px;
    height: auto;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: vw(40) 0;
  }

  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    transform: rotate(45deg);
    cursor: pointer;
  }

  &__title {
    font-size: vw(30);
    font-weight: 700;
    margin-bottom: vw(40);
  }

  &__form {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    .form__field {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 8px;

      .field__label {
        font-family: var(--font-sans);
        font-size: 16px;
        letter-spacing: 0.8px;
      }

      .field__input {
        width: 100%;
        height: 35px;
        border: 1px solid;
        border-radius: 5px;
        padding-left: 10px;
      }
    }
  }

  @media screen and (max-width: 468px) {
    &__wrapper {
      width: vmin(300);
      height: auto;
    }
    &__close {
      right: 20px;
      top: 20px;
    }
  }
}
</style>