<script lang="ts" setup>
// ------------- Hooks
const toolStore = useCounterStoreTools();

const input = ref(toolStore.boxes[toolStore.selectedBox.id[0]][toolStore.selectedBox.id[1]].in)

watch(() => toolStore.selectedBox.id, (newQuestion, oldQuestion) => {  
  if(newQuestion[0] !== oldQuestion[0] || newQuestion[1] !== oldQuestion[1]) {
    input.value = toolStore.boxes[toolStore.selectedBox.id[0]][toolStore.selectedBox.id[1]].in
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
