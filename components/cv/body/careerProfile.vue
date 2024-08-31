<script lang="ts" setup>
const store = cvStore()

</script>

<template>
  <section class="main-body-section">
    <CvBodySectionTitle icon="person-bounding-box" text="Summery" />
    <p class="text-break-spaces vd-size-normal vd-size-regular" >
      {{ store.getBaseInfo(['sections', 'Summary'], true) }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
.main-body-section {
  margin-bottom: 60px!important;
} 
</style>