<template>
  <pt-hero-block @openModal="console.log('sd'); isOpenModal = true"/>
  <pt-what-get id="advantages"/>
  <pt-bring-frend/>
  <pt-climb-career @openModal="isOpenModal = true"/>
  <pt-warehouse-areas/>
  <pt-faq id="faq"/>
  <pt-how-to-get/>
  <pt-about-us />
  <pt-contact-hr @openModal="isOpenModal = true" id="registration"/>
  <pt-modal-window :is-open="isOpenModal" @close="isOpenModal = false"/>
</template>

<script setup lang="ts">
const isOpenModal = ref<boolean>(false)

const route = useRoute()

watch(isOpenModal, (newV) => {
  console.log(newV)
})

onMounted(() => {

})
</script>

<style scoped lang="scss">

</style>