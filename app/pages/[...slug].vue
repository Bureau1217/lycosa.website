<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const { data: page } = await useAsyncData(`page-${route.path}`, () =>
  queryCollection('content').path(`/${slug}`).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div>
    <h1>{{ page!.title }}</h1>
    <ContentRenderer :value="page!" />
  </div>
</template>
