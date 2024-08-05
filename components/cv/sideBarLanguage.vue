<script lang="ts" setup>
const store = cvStore()

</script>

<template>
  <section id="sidebar-language">
    <h3>Languages</h3>
    <div  class="text-line" v-for="(d, k ) in store.personalInfo.language" :key="k">
      <p><b class="text-capitalize">{{ k }}</b> ({{ d }})</p>
    </div>
  </section>
</template>