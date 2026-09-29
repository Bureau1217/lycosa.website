<template>
  <a class="v-block-links__items__item"
       :href="link"
       target="_blank"
  >
    <div class="v-block-links__items__item__title v-remove-last-and-first-child-margin"
         role="button"
    >
      <h3>
        {{ title }}
      </h3>

      <div
        class="v-block-links__items__item__title__arrow"
      >
        ↗
      </div>

    </div>
  </a>
</template>





<script setup lang="ts">

const props = defineProps<{
    title?: string
    link?: string
}>()
</script>





<style lang="scss" scoped >
@use '~/assets/style/css-var';

.v-block-links__items__item {
  text-decoration: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.v-block-links__items__item__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: nowrap;
    user-select: none;
    cursor: pointer;

    h3 {
      margin-bottom: 0;
    }
}

.v-block-links__items__item__title__arrow {
  flex-shrink: 0;
  color: var(--v-color-main);
}

.v-block-links__items__item__text {
  margin-top:    calc( var(--v-font--lineheight--base) * 1 );
}

</style>
