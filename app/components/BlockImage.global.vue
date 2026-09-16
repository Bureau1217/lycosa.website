<template>
    <section class="v-block-image"
    >
      <img class="v-block-image__image"
           v-if="image"
           :src="image"
           :alt="title" />

      <h1 class="v-block-image__title"
          v-if="title"
      >{{title}}</h1>

      <p class="v-block-image__text"
         v-if="text">{{text}}</p>

    </section>
</template>





<script setup lang="ts">

defineProps<{
  title?: string
  text?: string
  image?: string
}>()
</script>





<style lang="scss" scoped >
.v-block-image {
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: var(--v-color-white);
  position: relative;
  padding: var(--v-gutter--half);
}

.v-block-image__title {
  position: relative;
}
.v-block-image__text {
  position: relative;
}

.v-block-image__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
