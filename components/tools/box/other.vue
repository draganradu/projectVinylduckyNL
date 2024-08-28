<script lang="ts" setup>
const store = useCounterStoreTools()
</script>

<template>
  <div class="box-other">
    <div v-for="(box, k) in store.otherBoxes" :key="box.id">
      <div :class="['card', store.searchResultOther.includes(k) ? 'bg-success' : '']">
        <div class="card-body">

          <h5 class="card-title">{{ box.title || box.id }}</h5>
          <h6 class="card-subtitle mb-2 text-muted" v-if="box.title">ID: {{ box.id }}</h6>

          <p class="card-text">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(i, k) in box.contains" :key="k">{{ i }}</li>
          </ul>
          </p>
          <!-- <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a> -->
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped lang="scss">
.box-other {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

}
</style>