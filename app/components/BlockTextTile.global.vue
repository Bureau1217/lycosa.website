<template>
    <section class="v-block-text_tile"
    >
      <div class="v-block-text_tile__top v-remove-last-and-first-child-margin">
        <slot name="top"/>
      </div>

      <div class="v-block-text_tile__bottom v-remove-last-and-first-child-margin">
        <slot name="bottom"/>
      </div>

      <div class="v-block-text_tile__index">
        {{index}}
      </div>
    </section>
</template>

<script lang="ts" setup>

defineProps<{
  index: number
}>()

</script>

<style lang="scss" scoped >
.v-block-text_tile {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px var(--v-color-black);
  gap: 10rem;
  padding: var(--v-gutter);
}

.v-block-text_tile__index {
  position: absolute;
  top:    var(--v-gutter);
  right:  var(--v-gutter);
}
</style>
