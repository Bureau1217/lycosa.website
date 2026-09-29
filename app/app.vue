<script setup lang="ts">
import AppFooter from "~/components/AppFooter.vue";

const { randomizeGlobalColorTheme, globalColorTheme } = useGlobalColorTheme()

onMounted(randomizeGlobalColorTheme)
</script>
<template>
  <div class="v-app" :class="globalColorTheme">
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
  padding: 0 var(--v-gutter--half);
}

:global(.v-app.green) {
  --v-color-main: var(--v-color-green)
}

:global(.v-app.orange) {
  --v-color-main: var(--v-color-orange)
}

:global(.v-app.blue) {
  --v-color-main: var(--v-color-blue)
}

.v-app__footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
