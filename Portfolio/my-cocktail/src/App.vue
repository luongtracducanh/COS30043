<template>
  <div id="app" class="container-fluid m-auto p-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <button
          type="button"
          class="navbar-brand btn rounded ms-2 py-1 px-3 d-flex buttonTitle"
          @click="$router.push({ name: 'Home' })"
        >
          <img
            src="@/assets/cocktail.png"
            alt=""
            style="height: 30px; width: 26px"
          />
          <span class="h3 m-auto ps-1" style="color: black">
            Your cocktail
          </span>
        </button>
        <button
          class="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/types" class="nav-link h4 m-auto"
                >Types</router-link
              >
            </li>

            <li class="nav-item">
              <router-link to="/categories" class="nav-link h4 m-auto"
                >Categories</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/ingredients" class="nav-link h4 m-auto"
                >Ingredients</router-link
              >
            </li>
          </ul>
          <form class="mx-4 flex-grow-1 flex-lg-grow-0">
            <div class="input-group">
              <input
                type="search"
                class="form-control"
                placeholder="Search cocktail"
                aria-label="Search cocktail"
                aria-describedby="basic-addon1"
                v-model="name"
              />
              <button
                type="submit"
                @click.stop.prevent="submit()"
                class="btn btn-secondary input-group-text"
              >
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
    <router-view style="min-height: 100vh" />
    <footer>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container d-flex justify-content-center">
          <router-link to="/about" class="nav-link navbar-text footer-link"
            >ABOUT US</router-link
          >
          <span class="navbar-text">Reboot_bootcamp@2021</span>
        </div>
      </nav>
    </footer>
  </div>
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
      if (this.name === "") {
        if (Object.keys(this.$route.query).includes("name")) {
          let newQuery = this.$route.query;
          delete newQuery.name;
          console.log(newQuery);
          this.$router.push({
            name: "SearchCocktail",
            query: { ...newQuery },
          });
        }
      } else if (this.name !== this.$route.query.name) {
        this.$router.push({
          name: "SearchCocktail",
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
}

html {
  background-color: #ffff;
}

body {
  background: transparent;
}

.headTitle {
  background: linear-gradient(45deg, rgb(206, 235, 126), rgb(236, 184, 71));
}
.section-header {
  background-color: hsla(45, 10%, 84%, 1);
}

.buttonTitle {
  background: linear-gradient(
    45deg,
    hsla(76, 73%, 71%, 1),
    hsla(41, 81%, 60%, 1)
  );
}

.buttonTitle:hover {
  background: linear-gradient(
    45deg,
    hsla(76, 73%, 82%, 1),
    hsla(41, 81%, 71%, 1)
  );
}
.footer-link:hover {
  color: hsla(360, 100%, 100%, 1)
}
</style>
