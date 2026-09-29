<template>
    <section class="v-block-links"
             :class="{
              'v-two-columns--remove-gap': removeGap,
              }"
    >
      <div class="v-block-links__items"
      >

        <template v-for="(item) in items">
          <div class="v-block-links__items__line" />
          <BlockLinksItem
            :title="item.title"
            :link="item.link"
          />
        </template>

      </div>
    </section>
</template>





<script setup lang="ts">
import BlockLinksItem from "~/components/BlockLinksItem.vue";

defineProps<{
  items: {
    title?: string
    link?: string
  }[]
  removeGap?: boolean
}>()
</script>





<style lang="scss" scoped >
.v-block-links {
  margin-top: var(--v-content-block-gap);
  &.v-two-columns--remove-gap {
    margin-top: 0;
  }
}

.v-block-links__items {
  display: flex;
  flex-direction: column;
}

.v-block-links__items__line {
  width: 100%;
  height: 1px;
  background-color: var(--v-color-main);
}
</style>
