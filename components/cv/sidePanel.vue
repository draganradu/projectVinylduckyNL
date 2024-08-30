<script setup lang="ts">
// ------------- Init and Import
const route = useRoute()
const store = cvStore()
const { buildQrData } = storeToRefs(store)

// ------------- Logic
</script>

<template>
  <div id="sidebar" :class="['col-4', route.params.cvParam === 'frontend' ? 'text-black' : 'text-white']" v-show="store.verbose.level !== 3">
    <div class="sidebar-color">
      <CvSideBarImage />
      <CvSideBarContact />
      <CvSideBarTopSkills />
      <CvSideBarEducation />
      <CvSideBarLanguage />
      <CvSideBarInterests />
    </div>
    <VdQr :text="buildQrData" :color="route.params.cvParam === 'frontend' ? '171-221-164' : '66-168-192'" />
  </div>
</template>
