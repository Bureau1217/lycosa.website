<script setup lang="ts">
</script>
<template>
  <div>
    <NuxtPage />
  </div>
  <footer>
    <TwoColumns
    >
      <template #left >
        <h2>REJOINDRE L’AVENTURE ?</h2>
        <BlockNewsletter/>
      </template>

      <template #right >
        <block-collumns>
          <template #first >
            <h5>Navigation</h5>
            <div class="v-font-h5">
              <a href="#">Vision</a>
              <br/><a href="#">Distinction</a>
              <br/><a href="#">Nos montres</a>
              <br/><a href="#">Engagements</a>
              <br/><a href="#">Presse</a>
            </div>
          </template>
          <template #second >
            <h4>Navigation</h4>
            <a href="#">Distinction</a>
            <br/><a href="#">Distinction</a>
            <br/><a href="#">Nos montres</a>
            <br/><a href="#">Engagements</a>
            <br/><a href="#">Presse</a>
          </template>
          <template #three >
            <h4>Navigation</h4>
            <a href="#">Distinction</a>
            <br/><a href="#">Distinction</a>
            <br/><a href="#">Nos montres</a>
            <br/><a href="#">Engagements</a>
            <br/><a href="#">Presse</a>
          </template>
        </block-collumns>
      </template>

    </TwoColumns>
  </footer>
</template>
