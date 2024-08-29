<script lang="ts" setup>
const store = cvStore()

</script>

<template>
  <section id="sidebar-Education">
    <CvHelpSidebarTitle>Education</CvHelpSidebarTitle>
    <div class="line-education" v-for="(d, k ) in store.sections.Education" :key="k" v-show="store.showVerbose(d.verboseMin)" >
      <h4 class="vd-size-normal vd-size-medium">{{ d.what }} in {{ d.in }}</h4>
      <p class="vd-size-normal vd-size-light">{{ d.where }}</p>
      <p class="vd-size-small vd-size-light">{{ d.when[0] }}-{{ d.when[1] }}</p>
    </div>
  </section>
</template>