<script lang="ts" setup>


const outputdata = ref('')
const inputData = ref('');
const sendMessage = async () => {
  outputdata.value = inputData.value

  const req = await fetch('/api/sitemap', {
    body: JSON.stringify({
      message: inputData.value
    }),
    method: 'POST',
  })

  if (req.status === 200) {
    console.log(await req.json() )
  } else {
    console.log(await req.text())
  }

}

const data = ref('');

</script>

<template>
  <div class="superx">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Build sitemap</h5>
        <p class="card-text">build sitemmap based on router</p>
        <span @click="sendMessage" class="btn btn-primary">Run siteboy</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.superx {
  padding: 20vh;
}
</style>