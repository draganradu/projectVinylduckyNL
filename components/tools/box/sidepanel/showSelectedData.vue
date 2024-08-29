<script lang="ts" setup>
// ------------- Hooks
const store = useStoreTools();

const input = ref(store.boxes[store.selectedBox.id[0]][store.selectedBox.id[1]].in)

watch(() => store.selectedBox.id, (newQuestion, oldQuestion) => {  
  if(newQuestion[0] !== oldQuestion[0] || newQuestion[1] !== oldQuestion[1]) {
    input.value = store.boxes[store.selectedBox.id[0]][store.selectedBox.id[1]].in
  }
});

</script>

<template>
  <div>
    <div class="mb-3" v-for="(i, k) in input" key="i">
      <input type="text" class="form-control" id="exampleInputPassword1" v-model="input[k].content"  />
    </div>
    <button type="button" class="btn btn-success">Submit</button>
  </div>
</template>
