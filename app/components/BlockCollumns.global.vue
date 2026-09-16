<template>
    <section class="v-block-collumns"
    >
      <div class="v-block-collumns__top v-remove-last-and-first-child-margin">
        <slot name="first"/>
      </div>

      <div class="v-block-collumns__bottom v-remove-last-and-first-child-margin">
        <slot name="second"/>
      </div>

      <div class="v-block-collumns__bottom v-remove-last-and-first-child-margin">
        <slot name="three"/>
      </div>

      <div class="v-block-collumns__bottom v-remove-last-and-first-child-margin">
        <slot name="four"/>
      </div>
    </section>
</template>

<script setup lang="ts">
const slots = useSlots();

const columnsCount = computed(() => {
  const slotNames = ['first', 'second', 'three', 'four']
  return slotNames.filter(name => !!slots[name]).length || 1
})

</script>


<style lang="scss" scoped >
.v-block-collumns {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(v-bind(columnsCount), 1fr);
}

.v-block-collumns__index {
  position: absolute;
  top:    var(--v-gutter);
  right:  var(--v-gutter);
}
</style>
