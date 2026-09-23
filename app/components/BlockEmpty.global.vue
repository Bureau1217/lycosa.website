<template>
    <section class="v-block-empty v-remove-last-and-first-child-margin"
             :class="{
              'v-two-columns--remove-gap': removeGap,
              }"
    >
      <slot/>
    </section>
</template>

<script lang="ts" setup>

defineProps<{
  removeGap?: boolean
}>()

</script>

<style lang="scss" scoped >
.v-block-empty {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: var(--v-content-block-gap);
  &.v-two-columns--remove-gap {
    margin-top: 0;
  }
}
</style>


Lycosa crée des montres suisses contemporaines où l’élégance rencontre l’utilitaire.

Pensées pour accompagner un mode de vie actif, nos pièces combinent un design travaillé, une architecture robuste et des matériaux techniques : acier inox 316L, silicone technique haute résistance, bracelets en polyester recyclé et inserts en carbone thermo-réparables.

Développée dans le canton de Vaud, chaque montre est conçue avec une exigence totale, du premier croquis à l’assemblage final. Lycosa incarne une horlogerie moderne, polyvalente et durable, pensée pour durer et s’adapter à tous les terrains.
