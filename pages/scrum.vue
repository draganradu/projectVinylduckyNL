<script setup lang="ts">
// ------------- init
const appStore = useCounterStore();
const localPath = useLocalePath()

// ------------- Data
const page = appStore.pages["scrum"];

const data = ref([
  {
    q: "What is up with the stickers",
    a: "One of my clients needed to make compelling demo events. But they were building a physical product, and that came with a set of challenges because the iteration did not look like professional products, also no information descriptions were visible, etc. So we had the challenge of needing a way to brand the products in a permanent easy-to-remove way without damaging the product, so paint was out of the question. Plus our budget could not handle having an external brand company doing graphs every 2 weeks. When I went to University I worked in a place that did graphics for the National Museum of Arts so I shopped around for the equipment I needed, signed some contracts with suppliers to let us expand our capabilities to cut stickers and signs to a professional level.",
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

// ------------- SEO
useSeoMeta(
  seoService(
    {
      title: page.title + " - vinylducky.nl",
      description: "I am a Scrum Master with over 5 years of experience, holding PSM and SAFe 6.1 certifications. With a solid background in software development spanning more than 10 years, I transitioned into the Scrum Master role after earning my Master's in Business from the Polytechnic University of Bucharest. Colleagues often describe me as a builder of innovative digital solutions, an effective organizer, and someone who can develop MVPs, learn from them, and create plans for scaling. I understand the importance of delivering in increments and testing features with real users."
    }
  )
);
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
      <router-link class="btn btn-outline-light" :to="localPath('contact')">
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