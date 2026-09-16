<template>
  <div class="v-block-list__items__item"
       @click="isOpen = !isOpen"
  >
    <div class="v-block-list__items__item__title">
      {{ title }}
    </div>

    <div class="v-block-list__items__item__text v-font-small"
         v-if="isOpen"
    >
      {{ text }}
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
