<script lang="ts" setup>
const store = cvStore()

</script>

<template>
  <section>
    <CvBodySectionTitle icon="clipboard-plus" text="Skills" />
    <div v-if="store.getSkills.length > 0">
      {{ store.getSkills.join(", ") }}
    </div>
    <div v-else>
      No Data
    </div>
  </section>
</template>