<template>
    <section class="v-block-list"
             :class="{
              'v-two-columns--remove-gap': removeGap,
              }"
    >
      <div class="v-block-list__items"
      >

        <template v-for="(item) in items">
          <div class="v-block-list__items__line" />
          <BlockListItem
            :title="item.title"
            :text="item.text"
          />
        </template>

      </div>
    </section>
</template>





<script setup lang="ts">

import BlockListItem from "~/components/BlockListItem.vue";

defineProps<{
  items: {
    title?: string
    text?: string
  }[]
  removeGap?: boolean
}>()
</script>





<style lang="scss" scoped >
.v-block-list__items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: var(--v-content-block-gap);
  &.v-two-columns--remove-gap {
    margin-top: 0;
  }
}

.v-block-list__items__line {
  width: 100%;
  height: 1px;
  background-color: var(--v-color-main);
}
</style>
