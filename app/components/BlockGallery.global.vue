<template>
    <section class="v-block-gallery"
    >
      <h2 v-if="title" class="v-block-gallery__title"
      >{{ title }}</h2>

      <div class="v-block-gallery__viewport"
      >
        <img v-if="currentImage"
             :src="currentImage"
             :alt="title"
             class="v-block-gallery__image"
        />
      </div>

      <div class="v-block-gallery__nav"
      >
        <button class="v-block-gallery__prev"
                type="button"
                @click="prev"
        >&larr; Previous</button>

        <button class="v-block-gallery__next"
                type="button"
                @click="next"
        >Next &rarr;</button>
      </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  title?: string
  images?: NuxtPicture[]
}>()

const index = ref(0)

const currentImage = computed(() => props.images?.[index.value])

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
.v-block-gallery {
  position: relative;
  height: 50vh;
  width: 100%;
  padding: var(--v-gutter);
  display: flex;
  flex-direction: column;
}

.v-block-gallery__title {
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 var(--v-gutter);
}

.v-block-gallery__viewport {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-block-gallery__image {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.v-block-gallery__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v-block-gallery__prev,
.v-block-gallery__next {
  border: none;
  background: none;
  cursor: pointer;
  color: inherit;
  font-size: var(--v-font--size--base);
  text-transform: uppercase;
}
</style>
