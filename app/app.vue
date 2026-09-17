<script setup lang="ts">
import AppFooter from "~/components/AppFooter.vue";
</script>
<template>
  <div class="v-app">
    <main class="v-app__main">
      <NuxtPage />
    </main>
    <div class="v-app__footer">
      <AppFooter/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-app__main {
  z-index: 0;
  position: relative;
  background: white;
  margin-bottom: 100dvh;
}

.v-app__footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
