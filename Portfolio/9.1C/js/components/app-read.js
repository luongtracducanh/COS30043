// app-readmysql component
const ReadData = {
  // define the template for the component
  template: `
  <v-row>
    <v-col cols="12" md="12 ">
      <v-card class="mx-auto" max-width="90%">
        <v-card-title>
          <h2>List of Units in Database</h2>
        </v-card-title>
        <v-card-text>
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
                  <td headers="descHeader">{{ unit.description }}</td>
                  <td headers="cpHeader">{{ unit.cp }}</td>
                  <td headers="typeHeader">{{ unit.type }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="12">
      <paginate
        :page-count="getPageCount"
        :page-range="4"
        :margin-pages="1"
        :click-handler="clickCallback"
        :prev-text=" 'Prev' "
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :active-class="'currentPage'"
      >
      </paginate>
    </v-col>
  </v-row>
  `,
  // variable initialization
  data: function () {
    return {
      perPage: 5,
      currentPage: 1,
      units: [],
    };
  },
  components: {
    paginate: VuejsPaginateNext,
  },
  computed: {
    // returns the data according to the page number
    getItems: function () {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.units.slice(start, current);
    },
    //returns total number of pages required according to the total rows of data
    getPageCount: function () {
      return Math.ceil(this.units.length / this.perPage);
    },
  },
  methods: {
    //sets the clicked page
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
  created() {
    var self = this;
    var readSQLApiURL = "resources/apis.php/"; //define url for api

    // GET request using fetch with error handling

    fetch(readSQLApiURL)
      .then((response) => {
        //turning the response into the usable data
        return response.json();
      })
      .then((data) => {
        //This is the data you wanted to get from url
        self.units = data;
      })
      .catch((error) => {
        self.errorMessage = error;
      });
  },
};
