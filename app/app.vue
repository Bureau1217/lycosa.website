<script setup lang="ts">
import AppFooter from "~/components/AppFooter.vue";
</script>
<template>
  <div class="v-app">
    <main class="v-app__main">
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.v-app__main {
  z-index: 0;
  position: relative;
  background: white;
  padding: 0 var(--v-gutter--half);
}

.v-app__footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
