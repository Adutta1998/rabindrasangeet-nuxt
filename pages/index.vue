<template>
  <div>
    <h1 @click="getData">Hello World</h1>
    <p>{{ res }}</p>
  </div>
</template>

<script>
// import axios from "@nuxtjs/axios";
export default {
  data: () => ({
    res: ""
  }),
  methods: {
    async getData() {
      let res = await this.$axios.get("/api/");
      this.res = res;
      console.log(res);
    }
  }
};
</script>
