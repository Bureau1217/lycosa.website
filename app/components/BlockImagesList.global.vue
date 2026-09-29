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
             :src="item.image"
             :alt="item.alt || title"
             class="v-block-images-list__items__image"
             loading="lazy"
        />
      </div>
    </section>
</template>





<script setup lang="ts">
defineProps<{
  title?: string
  images?: { image?: string, alt?: string }[]
  removeGap?: boolean
}>()
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
</style>
