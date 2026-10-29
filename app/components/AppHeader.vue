<script setup lang="ts">
// Same layout as the shop header: logo on the left, "Boutique" on the right
import logo from '~/assets/ui/logo.svg'

const { shopUrl } = useRuntimeConfig().public

</script>

<template>
  <header class="v-header">
    <NuxtLink to="/" class="v-header__logo" aria-label="Lycosa — accueil">
      <img :src="logo" width="69" height="49" alt="Lycosa">
    </NuxtLink>

    <a :href="shopUrl" class="v-header__shop">Boutique</a>
  </header>
</template>

<style lang="scss" scoped>
@use '~/assets/style/main';

// Fixed over the page; only the logo and the link catch clicks
.v-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  pointer-events: none;

  > * { pointer-events: auto; }
}

.v-header__logo img {
  display: block;
  width: 69px;
  height: auto;
}

.v-header__shop {
  @extend .v-font-small;
  margin: 0;
  color: var(--v-color-black);
  text-transform: uppercase;
  text-decoration: none;
  opacity: 1;
}
</style>
