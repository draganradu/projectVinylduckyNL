<script lang="ts" setup>
const store = cvStore()

</script>

<template>
  <section>
    <CvBodySectionTitle icon="backspace-fill" text="Skills" />
    {{ store.getSkills.join(", ") }}
  </section>
</template>