<template>
    <section class="v-block-gallery"
             :class="mainColor"
    >
      <h2 v-if="title" class="v-block-gallery__title"
      >{{ title }}</h2>

      <div class="v-block-gallery__viewport"
      >
        <img v-if="currentImage"
             :src="currentImage"
             :alt="title"
             class="v-block-gallery__viewport__image"
        />

        <div class="v-block-gallery__viewport__nav"
        >
          <div class="v-block-gallery__prev"
                  role="button"
                  @click="prev"
          >&larr; Previous<div class="v-block-gallery__prev__color" /></div>

          <div class="v-block-gallery__next"
                  type="button"
                  @click="next"
          ><div class="v-block-gallery__next__color" />Next &rarr;</div>
        </div>
      </div>

    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  title?: string
  images?: { image?: string }[]
}>()

const index = ref(0)

const currentImage = computed(() => props.images?.[index.value]?.image)

const mainColor = computed(() => {
  const mod = index.value % 3

  if(mod === 0) return 'v-gallery--main-color--blue'
  if(mod === 1) return 'v-gallery--main-color--orange'
  return 'v-gallery--main-color--green'
})

function prev() {
  if (!props.images?.length) return
  index.value = (index.value - 1 + props.images.length) % props.images.length
}

function next() {
  if (!props.images?.length) return
  index.value = (index.value + 1) % props.images.length
}
</script>

<style lang="scss" scoped >
@use '~/assets/style/main';

.v-block-gallery {
  position: relative;
  height: 50vh;
  width: 100%;
  padding: var(--v-gutter);
  display: flex;
  flex-direction: column;
}

.v-block-gallery__viewport {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.v-block-gallery__viewport__image {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.v-block-gallery__viewport__nav {
  user-select: none;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.v-block-gallery__prev,
.v-block-gallery__next {
  @extend .v-font-small;
  cursor: pointer;
  text-transform: uppercase;
  align-items: center;
  display: flex;
  gap: var(--v-gutter--half)
}

.v-block-gallery__prev__color {
  width: 1rem;
  height: 1rem;
  background: var(--v-color-ternary);
}
.v-block-gallery__next__color {
  width: 1rem;
  height: 1rem;
  background: var(--v-color-secondary);
}

.v-gallery--main-color--blue {
  .v-block-gallery__prev__color {background: var(--v-color-ternary);}
  // current var(--v-color-main)
  .v-block-gallery__next__color {background: var(--v-color-secondary);}
}
.v-gallery--main-color--orange {
  .v-block-gallery__prev__color {background: var(--v-color-secondary);}
  // current var(--v-color-ternary)
  .v-block-gallery__next__color {background: var(--v-color-main);}
}
.v-gallery--main-color--green {
  .v-block-gallery__prev__color {background: var(--v-color-main);}
  // current var(--v-color-secondary)
  .v-block-gallery__next__color {background: var(--v-color-ternary);}
}

</style>
