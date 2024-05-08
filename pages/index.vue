<template>
  <div>
    <!-- <Navbar /> -->
    <div class="container-fluid">
      <div class="row">
        <LandingPanel color="2" to="scrum">
          <template #title>Scrum master</template>
          <template #subtitle>Safe 6.1 Agile Team coach</template>
        </LandingPanel>

        <LandingPanel color="3" to="vinylShop">
          <template #title>Vinyl Shop</template>
          <template #subtitle>Signs and Stickers</template>
        </LandingPanel>

        <LandingPanel color="4" to="vinylShop/ServicesCutOnDemand">
          <template #title>Vinyl Cut</template>
          <template #subtitle>Cut on demand</template>
        </LandingPanel>

        <LandingPanel color="5" to="/vinylShop/ServicesPrintOnDemand">
          <template #title>Large Print</template>
          <template #subtitle>Large format Print on demand</template>
        </LandingPanel>

        <LandingContactPanel />
      </div>
    </div>
    <!-- Footer-->
  </div>
</template>

<script setup>
useHead({
  title: "Vinyl ducky signs stickers and a bit of scrum",
})

definePageMeta({ layout: "landing"})
</script>

<style scoped lang="scss">
@media screen and (max-width: 994px) {
  .vd-h-100 {
    height: inherit;
  }
}
</style>