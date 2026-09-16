<template>
    <section class="v-two-columns"
    >
      <div class="v-two-columns__col">
        <slot name="left" />
      </div>
      <div class="v-two-columns__col">
        <slot name="right" />
      </div>
    </section>
</template>

<script setup lang="ts">
defineSlots<{
  left?: () => any
  right?: () => any
}>()
</script>

<style lang="scss" scoped >
.v-two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--v-gutter, 2rem);
}

.v-two-columns__col {
  min-width: 0;
}
</style>
