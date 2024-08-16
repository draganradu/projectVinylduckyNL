<script setup lang="ts">
// ------------- SEO
useSeoMeta(
  seoService(
    {
      title: "Contact - vinylducky.nl",
      description: "We started the vinyl shop to respond to the needs of one of our clients who needed to make compelling demo events. But they were building a physical product, and that came with a set of challenges because the iteration did not look like professional products, and there were no lettering descriptions, etc. So we bought all the equipment and started cutting vinyl for different companies."
    }
  )
);
</script>

<template>
  <NuxtLayout name="page" text="2">
    <template #title>Contact Page</template>
    <template #subtitle>We are happy to see you</template>
    <p class="vb-p-t-1" v-html="$t('modal_landing_body', {
      email: compVdContact.email,
      phone: compVdContact.phone,
      b: '<b>',
      be: '</b>',
    })
      "></p>

    <dl class="row">
      <span v-for="(key, value) in compVdData" :key="key" class="row">
        <dt class="col-sm-2">{{ value }}:</dt>
        <dd class="col-sm-9">{{ key }}</dd>
      </span>
    </dl>
  </NuxtLayout>
</template>
