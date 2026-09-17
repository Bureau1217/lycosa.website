<template>
    <section class="v-block-image"
    >
      <img class="v-block-image__image"
           v-if="image"
           :src="image"
           :alt="title" />

      <div class="v-block-image__text-content v-remove-last-and-first-child-margin">
        <h1 class="v-block-image__title"
            v-if="title || subtitle"
        >
          <template v-if="title"
          >{{title}}
          </template>

          <span class="v-block-image__subtitle"
             v-if="subtitle"
          >{{ subtitle }}</span>
        </h1>

        <div class="v-block-image__text-content__text v-remove-last-and-first-child-margin">
          <slot />
        </div>

      </div>



    </section>
</template>





<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  image?: string
}>()
</script>





<style lang="scss" scoped >
@use "~/assets/style/main";

.v-block-image__title {
  margin-bottom: 0;
}

.v-block-image {
  overflow: hidden;
  width: calc( 100% + var(--v-gutter--half) * 2 );
  height: 100dvh;
  color: var(--v-color-white);
  position: relative;
  padding: var(--v-gutter) var(--v-gutter--half);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: calc( var(--v-gutter--half) * -1 );
  margin-right: calc( var(--v-gutter--half) * -1 );
}

.v-block-image__text-content {
  position: relative;
}

.v-block-image__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.v-block-image__subtitle {
  font-size: .25em;
}

//:global(.v-block-image__text-content__text > p) {
//    @extend .v-font-small;
//}
</style>
