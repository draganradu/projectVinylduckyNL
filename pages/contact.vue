<script setup lang="ts">
useHead({
  title: "large Format print",
})

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
