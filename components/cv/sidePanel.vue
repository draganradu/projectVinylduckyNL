<script setup lang="ts">
// ------------- Init and Import
const store = cvStore()
const { buildQrData } = storeToRefs(store)
// ------------- Logic
</script>

<template>
    <div id="sidebar" class="col-4 sidebar-color text-white">
      <CvSideBarImage />
      <CvSideBarContact />
      <CvSideBarTopSkills />
      <CvSideBarEducation />
      <CvSideBarLanguage />
      <CvSideBarInterests />
      <VdQr :text="buildQrData" />
    </div>
</template>
