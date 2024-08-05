<script lang="ts" setup>
const store = cvStore()

</script>

<template>
  <section id="sidebar-Education">
    <h3>Education</h3>
    <div class="line-education" v-for="(d, k ) in store.sections.Education" :key="k" v-show="store.showVerbose(d.verboseMin)" >
      <h4>{{ d.what }} in {{ d.in }}</h4>
      <p>{{ d.where }}</p>
      <p>{{ d.when[0] }}-{{ d.when[1] }}</p>
    </div>
  </section>
</template>