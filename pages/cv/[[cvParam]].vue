<script setup lang="ts">
// ------------- Init and Import
const route = useRoute()
const appStore = cvStore();

// ------------- Logic
onBeforeMount(() => {
  appStore.currentQuery = route.params.cvParam as string
})

definePageMeta({
  middleware: [
    function (to, from) {
      // router guard
      const options = ['scrum', 'frontend']
      const path = to.fullPath.split('/')
      if (!to.params.cvParam || !options.includes(to?.params?.cvParam as string)) {
        return navigateTo(['', path[1], path[2], options[0]].join('/'))
      }
    },
  ],
});


// ------------- SEO
useSeoMeta(
  seoService(
    {
      title: "CV - vinylducky.nl",
      description: "We started the vinyl shop to respond to the needs of one of our clients who needed to make compelling demo events. But they were building a physical product, and that came with a set of challenges because the iteration did not look like professional products, and there were no lettering descriptions, etc. So we bought all the equipment and started cutting vinyl for different companies."
    }
  )
);

</script>

<template>
  <div id="cv" :class="route.params.cvParam" v-show="appStore.currentQuery">
    <div class="background pt-5">
      <CvHeader />
      <div class="container ">
        <div class="row shadow-sm cv-color">
          <CvMainBody />
          <CvSidePanel />
        </div>
      </div>
    </div>
  </div>
  <div id="loading" class="no-print">Loading ...</div>
</template>
