<template>
    <section class="v-block-images-list"
             :class="{
              'v-two-columns--remove-gap': removeGap,
              }"
    >
      <h2 v-if="title" class="v-block-images-list__title"
      >{{ title }}</h2>

      <div class="v-block-images-list__items"
      >
        <img v-for="(item, index) in images"
             :key="index"
             :src="srcFor(item)"
             :alt="item.alt || title"
             class="v-block-images-list__items__image"
             loading="lazy"
        />
      </div>
    </section>
</template>





<script setup lang="ts">
import type { GlobalColorTheme } from '~/composables/useGlobalColorTheme'

type Item = { image?: string, alt?: string } & Partial<Record<GlobalColorTheme, string>>

defineProps<{
  title?: string
  images?: Item[]
  removeGap?: boolean
}>()

// Theme is randomised client-side: keep the default image until mounted to avoid a hydration mismatch
const { globalColorTheme } = useGlobalColorTheme()
const mounted = ref(false)
onMounted(() => { mounted.value = true })

function srcFor(item: Item) {
  return mounted.value ? themedImageSrc(item, globalColorTheme.value) : item.image
}
</script>





<style lang="scss" scoped >
.v-block-images-list {
  width: 100%;
  margin-top: var(--v-content-block-gap);
  &.v-two-columns--remove-gap {
    margin-top: 0;
  }
}

.v-block-images-list__items {
  display: flex;
  flex-direction: row;
  gap: var(--v-gutter);
  overflow: auto;
}

.v-block-images-list__items__image {
  display: block;
  width: 50dvw;
  height: auto;
  max-height: 45dvw;
  object-fit: contain;
  object-position: bottom;
}

// Small screens: every photo at the same height, width follows its format (the row scrolls)
@media (max-width: 800px) {
  .v-block-images-list__items__image {
    height: 75vw;
    width: auto;
    max-height: none;
    flex-shrink: 0;
  }
}
</style>
