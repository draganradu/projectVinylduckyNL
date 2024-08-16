<script lang="ts" setup>
// ------------- Props
const props = defineProps({
  text: { type: String, default: "Example" },
  color: { type: String, default: "66-168-192" },
});

const logic = {
  apiUrl: "https://api.qrserver.com/v1/create-qr-code/",
  data: {
    data: props.text,
    format: "svg",
    color: props.color
  },
  buildUrl() {
    const searchParam = Object.keys(this.data).reduce((acc: string[], key: string) => {
      return [...acc, `${key}=${this.data[key]}`]
    }, [])
    return this.apiUrl + "?" + searchParam.join("&");
  }
}

// https://goqr.me/api/doc/create-qr-code/

//data=${text}&format=svg&color=${color}

</script>

<template>
  <div class="qr">
    <img :src="logic.buildUrl()" />
  </div>
</template>

<style lang="scss" scoped>
.qr {
  img {
    width: 100%;
  }

  background-color: white;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>