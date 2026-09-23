<template>
    <section class="v-block-text_tile"
             :class="{
              'v-two-columns--remove-gap': removeGap,
              }"
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
  removeGap?: boolean
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

  @media (max-width: 700px) {
    gap: 1rem;
  }
}

.v-block-text_tile__index {
  position: absolute;
  top:    var(--v-gutter);
  right:  var(--v-gutter);
}

:global(.v-block-text_tile__bottom > [class*=v-block-] + [class*=v-block-]) {
    margin-top: 1rem;
}

</style>
<style lang="scss">
.v-block-text_tile {
  .v-block-text_tile__bottom {

    h4 {
      border-top: solid 1px;
      padding-top: var(--v-gutter);
    }

    &:not(:has(h4)) {
      .v-block-collumns {
        border-top: solid 1px;
        padding-top: var(--v-gutter);
      }
    }
  }
}
</style>
