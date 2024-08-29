<script lang="ts" setup>
const route = useRoute()
const isActive = (link:string)=>{
  return link === route.path ?  'disabled btn-secondary' : 'btn-outline-secondary'
}
</script>

<template>
  <div>
    <div class="btn-group" role="group" aria-label="Large button group">
      <NuxtLink type="button" :class="['btn', isActive('/en/cv/frontend')]" to="/en/cv/frontend">Front</NuxtLink>
      <NuxtLink type="button" :class="['btn', isActive('/en/cv/scrum')]" to="/en/cv/scrum">Scrum</NuxtLink>
    </div>
  </div>
</template>