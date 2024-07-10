<script setup>
// ------------- init
const appStore = useCounterStore();

// ------------- Data
const page = appStore.pages["scrum"];

// ------------- SEO
useHead({
  title: page.title + " - vinylducky.nl",
});

const data = ref([
  {
    q: "What is up with the stickers",
    a: "One of my clients needed to make compaling demo events. But they where building a physical product, and that comes with a set of challanges because the iteration look do not look like profesional products, also no lettering descriptions, etc. So we had the chalange o needing a way to brand the products in a permanent looking easy to remove way without damaging the product, so paint was out of the question. Plus our buget could not handle a having a external brand company doing graphis every 2 weeks. when i went to university i worked in a place that did graphics for the national museum of arts so i shoped around for the equitment i needed and the suppliers and we expanded our capabilities to cut stickers and signs to a professional level. ",
    show: false,
  },
  {
    q: "Can we get some design work",
    a: "Yes, the way a user interacts with a product is the way i got into development in the first place. Having all the skills requierments in a team removes most of the impediments that can come up when developing a itteration.",
    show: false,
  },
  {
    q: "Ca we get some development work",
    a: "Yes, i am a seaoned frontend developer. I have worked most of my career in tech and having a extra set of hands when code reviewing, building components for MVPs and prototyping, never comes in not handy.My strenghts are typescript, Vue, Node, Firebase and AWS. But I have been working in a profesional capacity with most of the major frameworks in the last 10 years. Devops is a main a bit part of the lean methodology, havin a way to continous deploy parts of your itteration is vital. So i see tehnical having hard skills as a integeal part of my scrum master skill set.",
    show: false,
  },
]);
</script>

<template>
  <NuxtLayout name="page" :color="page.color" text="1">
    <template #title>{{ page.title }}</template>
    <template #subtitle>{{ page.subtitle }}</template>
    <div class="row">
      <p
        class="col scrum-main"
        v-html="$t(page.content, { br: '<br/><br/>' })"
      ></p>
      <div class="col-3 scrum-side">
        <h4>FAQ</h4>
        <div v-for="(d, i) in data" :key="i">
          <p @click="data[i].show = !data[i].show">{{ d.q }} ?</p>
          <p v-show="d.show" class="indent">{{ d.a }}</p>
        </div>
      </div>
    </div>
    <div class="vb-p-t-2">
      <router-link class="btn btn-outline-light" to="contact">
        Go to contact
      </router-link>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.indent {
  padding-left: 20px;
  border-left: 1px solid white;
}

.hidden {
  display: none;
}
</style>