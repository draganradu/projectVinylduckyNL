<script lang="ts" setup>
const store = cvStore()
const verboseShow = (k: number) => {
    if (store.verbose.level > 1) { return true }
    else if (store.verbose.level === 1) { return k < 4 }
    else  { return k < 3} 
}
</script>

<template>
  <section id="sidebar-skills">
    <CvHelpSidebarTitle>Top skills</CvHelpSidebarTitle>
    <div class="line vd-size-normal vd-size-light" v-for="(d, k ) in store.getBaseInfo(['topSkills'])" :key="k" v-show="verboseShow(k)" >
    {{ d }}
    </div>
  </section>
</template>