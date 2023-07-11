<template>
  <h2>Tasks</h2>
  <p>
    <b>Status:</b>&nbsp;<input v-model="strStatus" />&nbsp;
    <button v-on:click="add(strStatus)">Post</button>
  </p>
  <p v-for="(status, index) in statPosts" :key="index">
    {{ status }}
    <button v-on:click="remove(index)">Del</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      strStatus: "",
      statPosts: [],
    };
  },
  methods: {
    add(status) {
      this.statPosts.push(status);
      this.strStatus = "";
    },
    remove(index) {
      this.statPosts.splice(index, 1);
    },
  },
};
</script>
