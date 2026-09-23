<template>
    <section class="v-block-newsletter"
             :class="{
               'v-two-columns--remove-gap': removeGap,
               'v-block-newsletter--justify-flex-end': justifyFlexEnd,
             }"
    >
      <div class="v-block-newsletter__content v-remove-last-and-first-child-margin">
        <h5 class="v-block-newsletter__title"
        >{{ title || 'Nous rejoindre' }}</h5>

        <form class="v-block-newsletter__form v-form"
              @submit.prevent="onSubmit"
        >
          <input class="v-block-newsletter__input v-form__input--font-small"
                 type="email"
                 v-model="email"
                 :placeholder="placeholder || 'Votre email'"
                 required
          />
          <button class="v-block-newsletter__submit"
                  type="submit"
                  aria-label="S'abonner"
          >
            &rarr;
          </button>
        </form>
      </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title?: string
  placeholder?: string
  removeGap?: boolean
  justifyFlexEnd?: boolean
}>()

const emit = defineEmits<{
  subscribe: [email: string]
}>()

const email = ref('')

function onSubmit() {
  emit('subscribe', email.value)
  email.value = ''
}
</script>

<style lang="scss" scoped >
.v-block-newsletter {
  width: 100%;
  display: flex;

  &.v-block-newsletter--justify-flex-end {
    justify-content: flex-end;
  }

  margin-top: var(--v-content-block-gap);
  &.v-two-columns--remove-gap {
    margin-top: 0;
  }

}
:global(.v-two-columns__col .v-block-newsletter) {
  position: sticky;
  top: calc(100dvh / 3);
}

.v-block-newsletter__content {
  padding-bottom: .5rem;
  border-bottom: solid 1px var(--v-color-black);
}


.v-block-newsletter__submit {
  color: var(--v-color-main);

  > img {
    display: block;
    height: var(--v-font--size--base);
  }
}
</style>
