<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/categories">Categories</router-link> |
    <router-link to="/ingredients">Ingredients</router-link> |
    <router-link to="/alcoholics">Alcoholic Options</router-link> |
    <router-link to="/glasses">Glasses</router-link> |
    <router-link to="/about">About</router-link>
    <form>
      <input type="text" placeholder="Search cocktails" v-model="name" />
      <button type="submit" @click.stop.prevent="submit()">Search</button>
    </form>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    submit() {
      if (this.name === "" && Object.keys(this.$route.query).includes("name")) {
        let newQuery = this.$route.query;
        delete newQuery.name;
        console.log(newQuery);
        this.$router.push({
          name: "SearchView",
          query: { ...newQuery },
        });
      } else if (this.name !== this.$route.query.name) {
        this.$router.push({
          name: "SearchView",
          query: { name: this.name },
        });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
