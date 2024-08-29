<script lang="ts" setup>
const store = cvStore()

</script>

<template>
  <section>
    <CvBodySectionTitle icon="clipboard-plus" text="Skills" />
    <p class="vd-size-normal vd-size-regular" v-if="store.getSkills.length > 0">
      {{ store.getSkills.join(", ") }}
    </p>
    <div v-else>
      No Data
    </div>
  </section>
</template>