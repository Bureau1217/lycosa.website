<template>
  <div class="v-block-list__items__item"
       @click="isOpen = !isOpen"
  >
    <div class="v-block-list__items__item__title v-remove-last-and-first-child-margin"
         role="button"
    >
      <h3>
        {{ title }}
      </h3>

      <div
        v-if="!isOpen" class="v-block-list__items__item__title__arrow"
      >
        ↓
      </div>
      <div
        v-else class="v-block-list__items__item__title__arrow"
      >
        ↑
      </div>

    </div>

    <div class="v-block-list__items__item__text v-remove-last-and-first-child-margin"
         v-if="isOpen"
    >
      <div class="v-font-small">
        {{ text }}
      </div>
    </div>
  </div>
</template>





<script setup lang="ts">

defineProps<{
    title?: string
    text?: string
}>()

const isOpen = ref(false)

</script>





<style lang="scss" scoped >
@use '~/assets/style/css-var';

.v-block-list__items__item__title {
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

.v-block-list__items__item__title__arrow {
  flex-shrink: 0;
  color: var(--v-color-main);
}

.v-block-list__items__item__text {
  margin-top:    calc( var(--v-font--lineheight--base) * 1 );
}

</style>
