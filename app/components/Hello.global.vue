<template>
    <section class="v-hello" :style="{ color: props.color }"
    >
      <p>{{ props.message }}</p>
      <p>{{ props.color }}</p>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  message?: string,
  color?: string,
}>()
</script>

<style lang="scss" scoped >
.v-hello {
}
</style>
