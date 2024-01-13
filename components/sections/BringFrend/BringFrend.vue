<template>
  <div class="bringFrend">
    <div class="bringFrend__content container">
      <h1 class="bringFrend__title">ПРИВЕДИ ДРУГА!</h1>
      <div class="bringFrend__text">Мы будем рады, если ты будешь рекомендовать работу в нашей компании своим
        друзьям/коллегам/родственникам. Если твоего друга или знакомого берут к нам на склад, и он успешно проходит
        испытательный срок, то ты получаешь премию за хорошую рекомендацию
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
@import "assets/styles/functions.scss";

.bringFrend {
  width: 100%;
  height: auto;
  padding: vw(310) 0;
  background-image: url('/images/bringFriend.png');
  background-size: cover;
  background-position: center center;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: vw(36);
  }

  &__title {
    font-size: vw(67);
    font-style: normal;
    font-weight: 700;
    line-height: vw(84);
    letter-spacing: 0.5px;
    color: var(--color-white);
  }

  &__text {
    max-width: vw(639);
    font-size: vw(24);
    font-style: normal;
    font-weight: 400;
    line-height: vw(36);
    color: var(--color-white);
    text-align: center;
    font-family: var(--font-sans);
  }
  
  @media screen and (max-width: 468px) {
    padding: vmin(100) 0;
    &__title {
      font-size: vmin(32);
      line-height: vmin(40);
    }

    &__text {
      max-width: vmin(270);
      font-size: vmin(12);
      font-style: normal;
      font-weight: 400;
      line-height: vmin(20);
      color: var(--color-white);
      text-align: center;
      font-family: var(--font-sans);
    }
  }
}
</style>