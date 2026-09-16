<template>
    <section class="v-block-newsletter"
    >
      <div class="v-block-newsletter__content">
        <h5 class="v-block-newsletter__title"
        >{{ title || 'Vous voulez être au courant de la suite ?' }}</h5>

        <form class="v-block-newsletter__form v-form"
              @submit.prevent="onSubmit"
        >
          <input class="v-block-newsletter__input"
                 type="email"
                 v-model="email"
                 :placeholder="placeholder || 'Votre email'"
                 required
          />
          <button class="v-block-newsletter__submit"
                  type="submit"
                  aria-label="S'abonner"
          >&rarr;</button>
        </form>
      </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title?: string
  placeholder?: string
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
  align-items: flex-end;
  justify-content: flex-end;
}

.v-block-newsletter__content {
  text-align: right;
  background: lightgray;
}
</style>
