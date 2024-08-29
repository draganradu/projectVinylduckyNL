<script lang="ts" setup>
const store = cvStore()
const verboseShow = (k: number) => {
    if (store.verbose.level > 1) { return true }
    else if (store.verbose.level === 1) { return k < 4 }
    else  { return k < 3} 
}
</script>

<template>
  <section id="sidebar-interests" v-if="store.verbose.level > 0">
    <CvHelpSidebarTitle>Interests</CvHelpSidebarTitle>
    <div class="line vd-size-normal vd-size-light" v-for="(d, k ) in store.getBaseInfo(['interests'])" :key="k" v-show="verboseShow(k)" >
    {{ d }}
    </div>
  </section>
</template>