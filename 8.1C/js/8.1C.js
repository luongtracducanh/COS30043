const app = Vue.createApp({});
app.component("app-retrieve-data", {
  components: {
    paginate: VuejsPaginateNext,
  },
  data() {
    return {
      err: "none",
      perPage: 5,
      currentPage: 1,
      fUnit: {
        code: "",
        desc: "",
        cp: "",
        type: "",
      },
      units: [],
    };
  },
  template: `
  <div class="row">
    <div class="col-md-12">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" id="codeHeader">Code</th>
              <th scope="col" id="descHeader">Description</th>
              <th scope="col" id="cpHeader">cp</th>
              <th scope="col" id="typeHeader">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="unit in getItems" :key="unit.code">
              <td headers="codeHeader">{{ unit.code }}</td>
              <td headers="descHeader">{{ unit.desc }}</td>
              <td headers="cpHeader">{{ unit.cp }}</td>
              <td headers="typeHeader">{{ unit.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <p><b>Error:</b> {{ err }}</p>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <paginate
        :page-count="getPageCount"
        :page-range="5"
        :margin-pages="1"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      ></paginate>
    </div>
  </div>
  `,
  mounted() {
    var self = this;
    var url = "units-1.json";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        self.units = data;
      })
      .catch((error) => {
        self.err = error;
      });
  },
  computed: {
    // function that filters the units according to the search fields
    filteredUnits: function () {
      return this.units.filter(
        (unit) =>
          unit.code.toLowerCase().match(this.fUnit.code.toLowerCase()) &&
          unit.desc.toLowerCase().match(this.fUnit.desc.toLowerCase()) &&
          unit.type.match(this.fUnit.type.trim())
      );
    },
    // returns the data according to the page number
    getItems: function () {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.filteredUnits.slice(start, current);
    },
    //returns total number of pages required according to the total rows of data
    getPageCount: function () {
      return Math.ceil(this.filteredUnits.length / this.perPage);
    },
  },
  methods: {
    //sets the clicked page
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
});
app.mount("#app");
