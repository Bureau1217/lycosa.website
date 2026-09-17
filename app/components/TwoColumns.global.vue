<template>
    <section class="v-two-columns"
    >
      <div class="v-two-columns__col v-remove-last-and-first-child-margin">
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

  &:has(.v-block-text_tile) {
    margin-left: calc( var(--v-gutter--half) * -1 );
    margin-right: calc( var(--v-gutter--half) * -1 );

    &:nth-child(2) {
      background: #86BBEE;
    }
  }

}

:global(.v-two-columns__col:has(.v-block-text_tile):nth-child(2) .v-block-text_tile) {
  border-left: none;
}

</style>
