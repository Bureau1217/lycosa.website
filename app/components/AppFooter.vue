<script setup lang="ts">
</script>
<template>
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
            <div class="v-font-small">
              <a href="#">Vision</a>
              <br/><a href="#">Distinction</a>
              <br/><a href="#">Nos montres</a>
              <br/><a href="#">Engagements</a>
              <br/><a href="#">Presse</a>
            </div>
          </template>
          <template #second >
            <h5>Adresse</h5>
            <div class="v-font-small">
              Geneva, Switzerland
            </div>
          </template>
          <template #three >
            <h5>Social</h5>
            <div class="v-font-small">
              <a href="#">social</a>
              <br/><a href="#">Instagram</a>
              <br/><a href="#">Facebook</a>
              <br/><a href="#">Engagements</a>
              <br/><a href="#">Presse</a>
            </div>
          </template>
        </block-collumns>
      </template>

    </TwoColumns>
  </footer>

</template>
