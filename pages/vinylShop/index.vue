<template>
  <NuxtLayout name="page" color="3" text="2">
    <template #title>{{ page.title }}</template>
    <template #subtitle>{{ page.subtitle }}</template>
    <div class="row">
      <div class="col-6">
        <p
          class="col scrum-main"
          v-html="$t(page.content, { br: '<br/><br/>' })"
        ></p>
      </div>
      <div class="col-6">
        <form class="form-vinyl-shop vb-p-l-1">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Name</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Question</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <button type="submit" class="btn btn-outline-dark">Submit</button>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// ------------- init
const appStore = useCounterStore();

// ------------- Data
const page = appStore.pages["vinylShop"];

useHead({
  title: "Vinyl Shop",
});
</script>

<style lang="scss" scoped>
.form-vinyl-shop {
border-left: 1px solid rgba($color: #000000, $alpha: .3);
}
</style>   