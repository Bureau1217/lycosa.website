<template>
    <section class="v-block-collumns"
    >
      <div class="v-block-collumns__coll v-remove-last-and-first-child-margin"
           v-if="slots.first"
      >
        <slot name="first"/>
      </div>

      <div class="v-block-collumns__coll v-remove-last-and-first-child-margin"
           v-if="slots.second"
      >
        <slot name="second"/>
      </div>

      <div class="v-block-collumns__coll v-remove-last-and-first-child-margin"
           v-if="slots.three"
      >
        <slot name="three"/>
      </div>

      <div class="v-block-collumns__coll v-remove-last-and-first-child-margin"
           v-if="slots.four"
      >
        <slot name="four"/>
      </div>
    </section>
</template>

<script setup lang="ts">
const slots = useSlots();

defineProps<{
  removeGap?: boolean
}>()

const columnsCount = computed(() => {
  const slotNames = ['first', 'second', 'three', 'four']
  return slotNames.filter(name => !!slots[name]).length || 1
})

</script>


<style lang="scss" scoped >
.v-block-collumns {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  margin-top: var(--v-content-block-gap);
  &.v-two-columns--remove-gap {
    margin-top: 0;
  }
}

.v-block-collumns__coll {
  width: 100%;
}

</style>
