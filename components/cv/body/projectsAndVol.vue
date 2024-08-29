<script lang="ts" setup>
const store = cvStore()

const outputData = store.getBaseInfo(['sections', 'Projects'])
</script>

<template>
  <section>
    <CvBodySectionTitle icon="cpu" text="Projects" />
    <p v-if="outputData.length > 0">
      Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free
      resume/CV template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.
    </p>
    <p v-else>
      No Data
    </p>
  </section>
</template>