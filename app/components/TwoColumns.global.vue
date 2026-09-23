<template>
    <section class="v-two-columns"
             :class="{
                'v-two-columns--scroll-effect': scrollEffect,
                'v-two-columns--remove-gap': removeGap,
             }"
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

defineProps<{
  scrollEffect?: boolean
  removeGap?: boolean
}>()

</script>

<style lang="scss" scoped >
/**
 * La section n’occupe pas plus de place qu’en flux normal : au moment où elle
 * sortirait par le haut du viewport, elle se translate de 100% de sa hauteur,
 * ce qui la fige visuellement et lui fait recouvrir l’élément qui la suit.
 */
@keyframes v-two-columns--cover {
  from { transform: translateY(0); }
  to   { transform: translateY(100%); }
}

.v-two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--v-gutter, 2rem);
  margin-top: var(--v-content-block-gap);

  position: relative;
  //background: var(--v-two-columns--background, #fff);

  &.v-two-columns--scroll-effect {
    animation: v-two-columns--cover linear both;
    animation-timeline: view(block 0 auto);
    height: 100dvh;

    // noinspection CssInvalidPropertyValue
    animation-range: exit 0% exit 100%;

    & + & {
      margin-top: 0;
    }

    @media (max-width: 700px) {
      animation: none;
    }
  }

  &.v-two-columns--remove-gap {
    margin-top: 0;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}

/**
 * Par défaut l’ordre du DOM fait peindre les éléments suivants par-dessus les
 * précédents : on inverse avec un z-index décroissant pour que chaque section
 * recouvre bien celle qui la suit.
 */
$max-blocks: 40;

@for $i from 1 through $max-blocks {
  .v-two-columns:nth-child(#{$i}) {
    z-index: $max-blocks + 1 - $i;
  }
}

@media (prefers-reduced-motion: reduce) {
  .v-two-columns {
    animation: none;
  }
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

  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }

}

:global(.v-two-columns__col:has(.v-block-text_tile):nth-child(2) .v-block-text_tile) {
  border-left: none;
}

</style>
