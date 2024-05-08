<template>
  <div>
    <!-- <Navbar /> -->
    <div class="container-fluid">
      <div class="row">
        <LandingScrumPanel />
        <LandingVinylShopPanel />
        <LandingServiceCut />
        <LandingPrintService />
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
</script>

<style scoped lang="scss">
@media screen and (max-width: 994px) {
  .vd-h-100 {
    height: inherit;
  }
}
</style>