<template>
  <div class="v-block-list__items__item"
       @click="isOpen = !isOpen"
  >
    <div class="v-block-list__items__item__title v-remove-last-and-first-child-margin">
      {{ title }}
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
.v-block-list__items__item {
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
