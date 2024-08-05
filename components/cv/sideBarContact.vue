<script lang="ts" setup>
const store = cvStore()

const icons = (key: string) => {
  // direct key
  const icons: string[] = ['git', 'linkedin', 'mail', 'phone', ]
  if (icons.includes(key)) {
    return key
  }

  // replace key
  const replaceKeys: { [key: string]: string } = {
    'company': 'browser-chrome',
    'npm': 'filetype-js',
  }
  if(replaceKeys[key]) {
    return replaceKeys[key]
  }

  // fallback
  return "envelope-heart-fill"
}
</script>

<template>
  <section id="sidebar-contact">
    <h3>Contact</h3>
    <div class="text-line" v-for="(d, k ) in store.personalInfo.contact" :key="k">
      <BootstrapIcon :name="icons(k as string)" class="me-2" />
      <span>{{ d }}</span>
    </div>
  </section>
</template>