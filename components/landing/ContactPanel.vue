<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Hooks / methods
const localPath = useLocalePath()
const { setLocale, locale } = useI18n();
const store = useCounterStore();

// ------------- Logic
const toggleLang = () => {
  setLocale(locale.value === compLanguage.NL ? compLanguage.EN : compLanguage.NL);
};

</script>
<template>
  <div class="col-12">
    <div v-if="store.isProduction" class="vb-p-v-5 vb-p-b-1 vb-p-t-2" @click="toggleLang">
      {{ $t("switch_language") }}
    </div>
    <div class="vb-p-v-5 vb-p-b-2">
      <p v-html="$t('modal_landing_body', {
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
      <SocialMedia />
      <div class="vb-p-h-1 vb-p-b-4">
        <router-link class="btn btn-outline-primary" :to="localPath('contact')">
          Go to contact
        </router-link>
      </div>
      <FooterCopyright />
    </div>
  </div>
</template>