<template>
    <section class="v-block-gallery"
             :class="[
                 {
                'v-two-columns--remove-gap': removeGap,
                },
                mainColor,
              ]"
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
                  role="button"
                  @click="next"
          ><div class="v-block-gallery__next__color" />Next &rarr;</div>
        </div>
      </div>

      <a v-if="shopLink"
         :href="shopLink"
         class="v-block-gallery__cta"
      >{{ cta || 'Acheter' }} &rarr;</a>

    </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { GlobalColorTheme } from '~/composables/useGlobalColorTheme'

const props = defineProps<{
  title?: string
  images?: { image?: string, shop?: string, color?: GlobalColorTheme }[]
  removeGap?: boolean
  cta?: string
}>()

const { shopUrl } = useRuntimeConfig().public

// Each image can point to its page in the shop (e.g. shop: /montres/bleu)
const shopLink = computed(() => {
  const path = props.images?.[index.value]?.shop
  return path ? `${shopUrl}${path}` : null
})

const index = ref(0)

// Start on the watch matching the site colour theme (randomised on load)
const { globalColorTheme } = useGlobalColorTheme()
watch(globalColorTheme, (theme) => {
  const i = props.images?.findIndex(item => item.color === theme) ?? -1
  if (i >= 0) index.value = i
}, { immediate: true })

const currentImage = computed(() => props.images?.[index.value]?.image)

const mainColor = computed(() => {
  const mod = index.value % 3

  if(mod === 0) return 'v-gallery--main-color--blue'
  if(mod === 1) return 'v-gallery--main-color--orange'
  return 'v-gallery--main-color--green'
})

// Browsing the watches switches the site colour theme (and every themed image with it)
function goTo(i: number) {
  index.value = i
  const color = props.images?.[i]?.color
  if (color) globalColorTheme.value = color
}

function prev() {
  if (!props.images?.length) return
  goTo((index.value - 1 + props.images.length) % props.images.length)
}

function next() {
  if (!props.images?.length) return
  goTo((index.value + 1) % props.images.length)
}
</script>

<style lang="scss" scoped >
@use '~/assets/style/main';

.v-block-gallery__cta {
  @extend .v-font-small;
  align-self: center;
  margin-top: var(--v-gutter);
  margin-bottom: 0;
  color: var(--v-color-black);
  text-transform: uppercase;
  text-decoration: none;
  opacity: 1;
}

.v-block-gallery {
  position: relative;
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: var(--v-content-block-gap);
  &.v-two-columns--remove-gap {
    margin-top: 0;
  }
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

// Small screens: the watch takes the full width, so Previous / Next go below it
@media (max-width: 800px) {
  .v-block-gallery__viewport {
    flex-direction: column;
  }

  .v-block-gallery__viewport__image {
    flex: 1;
    min-height: 0;
  }

  .v-block-gallery__viewport__nav {
    position: static;
    height: auto;
    margin-top: var(--v-gutter);
  }
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
  background: var(--v-color-green);
}
.v-block-gallery__next__color {
  width: 1rem;
  height: 1rem;
  background: var(--v-color-orange);
}

.v-gallery--main-color--blue {
  .v-block-gallery__prev__color {background: var(--v-color-green);}
  // current var(--v-color-main)
  .v-block-gallery__next__color {background: var(--v-color-orange);}
}
.v-gallery--main-color--orange {
  .v-block-gallery__prev__color {background: var(--v-color-main);}
  // current var(--v-color-secondary)
  .v-block-gallery__next__color {background: var(--v-color-green);}
}
.v-gallery--main-color--green {
  .v-block-gallery__prev__color {background: var(--v-color-orange);}
  // current var(--v-color-ternary)
  .v-block-gallery__next__color {background: var(--v-color-main);}
}

</style>
