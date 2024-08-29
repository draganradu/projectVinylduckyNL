<script lang="ts" setup>
const store = cvStore()
const route = useRoute()

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
    'jira':'kanban-fill'
  }
  if(replaceKeys[key]) {
    return replaceKeys[key]
  }

  // fallback
  return "envelope-heart-fill"
}

const showLogic  = (key: string) => {
  if("scrum" === route.params.cvParam) {
    return !["company", "npm"].includes(key)
  }
  
  if("frontend" === route.params.cvParam) {
    return !["jira"].includes(key)
  }

  return true
} 

</script>

<template>
  <section id="sidebar-contact">
    <CvHelpSidebarTitle>Contact</CvHelpSidebarTitle>
    <div class="vd-size-normal vd-size-light text-line" v-for="(d, k ) in store.personalInfo.contact" :key="k" v-show="showLogic(k as string)">
      <BootstrapIcon :name="icons(k as string)" class="me-2" />
      <span>{{ d }}</span>
    </div>
  </section>
</template>