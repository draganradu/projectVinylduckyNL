<script lang="ts" setup>
const store = cvStore()
</script>

<template>
  <section class="main-body-section">
    <CvBodySectionTitle icon="person-bounding-box" text="Summery" />
    <p class="text-break-spaces">
      {{ store.getBaseInfo(['sections', 'Summary'], true) }}
    </p>
  </section>
</template>