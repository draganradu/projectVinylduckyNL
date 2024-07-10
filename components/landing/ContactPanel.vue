<script setup lang="ts">
const dl = {
  KVK: "88701778",
  VAT: "NL004641406B81",
  IBAN: "NL02KNAB0606447458",
};

const { setLocale, locale } = useI18n() as any;

const toggleLang = () => {
  setLocale(locale.value === "nl" ? "en" : "nl");
};
</script>
<template>
  <div class="col-12">
    <div class="vb-p-v-5 vb-p-b-1 vb-p-t-2" @click="toggleLang">
      {{ $t("switch_language") }}
    </div>
    <div class="vb-p-v-5 vb-p-b-2">
      <p
        v-html="
          $t('modal_landing_body', {
            email: 'yellow@vinylducky.nl',
            phone: '0648459980',
            b: '<b>',
            be: '</b>',
          })
        "
      ></p>
      <dl class="row">
        <span v-for="(key, value) in dl" :key="key" class="row">
          <dt class="col-sm-2">{{ value }}:</dt>
          <dd class="col-sm-9">{{ key }}</dd>
        </span>
      </dl>
      <SocialMedia />
      <div class="vb-p-h-1">
        <router-link class="btn btn-outline-primary" to="contact">
          Go to contact
        </router-link>
      </div>
    </div>
  </div>
</template>