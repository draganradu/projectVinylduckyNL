<script setup lang="ts">
const store = cvStore()

const { data } = store.verbose

const base = "how verbouse"
let tite = base + ": " + data[0]
const hide = ref(false)
const toggle = () => {
  hide.value = !hide.value
}
const select = (k: number) => {
  toggle()
  tite = base + ": " + data[k]
  store.verbose.level = k
}

</script>

<template>
  <div class="dropdown no-print">
    <span class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
      data-bs-toggle="dropdown" aria-expanded="false" @click="toggle">
      {{ tite }}
    </span>

    <ul class="dropdown-menu" :style="{ display: hide ? 'block' : 'none' }" aria-labelledby="dropdownMenuLink">
      <li v-for="(i, k) in data">
        <span class="dropdown-item" @click="select(k)">{{ i }}</span>
      </li>
    </ul>
  </div>
</template>