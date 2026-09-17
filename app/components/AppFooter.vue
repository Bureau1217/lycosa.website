<script setup lang="ts">
</script>
<template>
  <footer class="v-app-footer">
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
              <br/><a target="_blank" href="https://www.instagram.com/lycosawatches/?hl=fr">Instagram</a>
              <br/><a target="_blank" href="https://www.facebook.com/profile.php?id=61591873541899">Facebook</a>
              <br/><a target="_blank" href="https://www.linkedin.com/company/lycosa-watches/home/">Linkedin</a>
            </div>
          </template>
        </block-collumns>
      </template>

    </TwoColumns>
  </footer>

</template>

<style lang="scss" scoped>
.v-app-footer {
  box-sizing: border-box;
  height: 100dvh;
  width: 100%;
  padding: var(--v-gutter) var(--v-gutter--half);
}
</style>
