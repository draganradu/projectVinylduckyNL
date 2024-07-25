<script setup lang="ts">
// ------------- Init and Import
const localPath = useLocalePath()

// ------------- Data
const searchInput = ref("");

// ------------- Logic
const handleSearch = (e: MouseEvent) => {
  e.preventDefault()
  navigateTo(localPath(`/search/${searchInput.value}`))
}
</script>

<template>
  <nav class="">
    <div class="container-fluid">
      <div class="row p-2">
        <div class="col logo">
          <h2><router-link :to="localPath('/')" class="col">VinylDucky</router-link></h2>
        </div>
        <div class="col-auto">
          <form class=" d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
              v-model="searchInput">
            <button class="btn btn-outline-success" type="submit" @click="handleSearch">Search</button>
          </form>
        </div>
        <div class="col">
          <div class="sidebar-icons">
            <BootstrapIcon name="person-circle" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
$font-size: 2.2em;

.sidebar-icons {
  line-height: $font-size;
  text-align: right;
}

.logo h1 {
  line-height: 1;
  font-size: $font-size;
}

nav {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>