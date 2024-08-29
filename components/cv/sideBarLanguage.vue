<script lang="ts" setup>
const store = cvStore()

</script>

<template>
  <section id="sidebar-language">
    <CvHelpSidebarTitle>Languages</CvHelpSidebarTitle>
    <div  class="text-line vd-size-normal vd-size-light" v-for="(d, k ) in store.personalInfo.language" :key="k">
      <p><b class="text-capitalize vd-size-medium">{{ k }}</b> ({{ d }})</p>
    </div>
  </section>
</template>