<script setup lang="ts">
// ------------- Init and Import
const route = useRoute()

// ------------- Logic
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
</script>

<template>
  <div id="cv">
    <div class="background pt-5">
      <div class="container ">
        <div class="row shadow-sm cv-color">
          <CvMainBody />
          <CvSidePanel />
        </div>
      </div>
    </div>
  </div>
</template>
