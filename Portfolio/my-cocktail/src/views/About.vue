<template>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="offset-1 offset-lg-2 offset-xl-3 col-10 col-lg-8 col-xl-6">
        <div class="continer fluid">
          <div
            class="
              row
              pt-2
              pb-2
              rounded-top
              border-end border-start border-top border-3 border-dark
              headTitle
            "
          >
            <div class="col">
              <span class="h3">About us</span>
            </div>
          </div>
          <div
            class="
              row
              pt-2
              pb-2
              border-end border-start border-top border-3 border-dark
              section-header
            "
          >
            <div class="col">
              <span class="fs-4">Our objective</span>
            </div>
          </div>
          <div
            class="
              row
              pt-2
              pb-2
              border-end border-start border-top border-3 border-dark
              text-start
            "
          >
            <div class="col">
              <span class="fs-5" style="white-space: pre-line"
                >In simple words, we want to help everyone to find their
                favorite cocktail. In order to do that, we have developed this
                web site to give them a way to search information about drinks
                based on their features. In an easy, simple and intuitive
                way.</span
              >
            </div>
          </div>
          <div
            class="
              row
              pt-2
              pb-2
              border-end border-start border-top border-3 border-dark
              section-header
            "
          >
            <div class="col">
              <span class="fs-4">How we started?</span>
            </div>
          </div>
          <div
            class="
              row
              pt-2
              pb-2
              border-end border-start border-top border-3 border-dark
              text-start
            "
          >
            <div class="col">
              <span class="fs-5" style="white-space: pre-line"
                >This website initially was a result of an exercise of Reboot
                Academy bootcamp but we keep working on it, giving it more
                functionalities and making it better because we loved the idea
                and we used it to test the skills that we learned. So we want to
                thank our instructors for their support and their patience.
                Thank you guys, you are the best!.</span
              >
            </div>
          </div>
          <div
            class="
              row
              pt-2
              pb-2
              border-end border-start border-top border-3 border-dark
              section-header
            "
          >
            <div class="col">
              <span class="fs-4">Special thanks</span>
            </div>
          </div>
          <div
            class="
              row
              pt-2
              pb-2
              border-end border-start border-top border-3 border-dark
              text-start
            "
          >
            <div class="col-12">
              <span class="fs-5" style="white-space: pre-line"
                >We use TheCocktailDB's API as a source of information for this
                web site. Thanks to them, we are able to offer information about
                different cocktails and search based on their features.
              </span>
            </div>
            <div class="text-center">
              <a href="https://www.thecocktaildb.com/api.php">
                <span class="fs-5">https://www.thecocktaildb.com/api.php</span>
              </a>
            </div>
          </div>
          <div
            class="
              row
              pt-2
              pb-2
              border-end border-start border-top border-3 border-dark
              section-header
            "
          >
            <div class="col">
              <span class="fs-4">Autors</span>
            </div>
          </div>
          <div
            class="
              row
              pt-2
              pb-2
              border-end
              border-start
              border-top
              border-bottom
              border-3
              border-dark
              rounded-bottom
              text-start
            "
          >
            <div class="col-lg-6">
              <div class="container-fluid my-2">
                <div
                  class="
                    row
                    border-end border-start border-top border-1 border-dark
                  "
                >
                  <div class="col fs-4 text-center headTitle">
                    Daniel Saavedra
                  </div>
                </div>
                <div
                  class="
                    row
                    border-end border-start border-top border-1 border-dark
                  "
                >
                  <div class="col fs-5 my-1">
                    Full-Stack Web Developer, 5 years in International Relations
                    and Intercultural technician
                  </div>
                </div>
                <div
                  class="
                    row
                    border-end
                    border-start
                    border-top
                    border-bottom
                    border-1
                    border-dark
                  "
                >
                  <div class="col d-grid gap-2">
                    <a
                      href="https://www.linkedin.com/in/danielsavgem/"
                      class="d-grid gap-2 mt-2"
                    >
                      <button class="btn btn-primary mb-2" type="button">
                        <span class="fs-5">Profile in LinkedIn</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="container-fluid my-2">
                <div
                  class="
                    row
                    border-end border-start border-top border-1 border-dark
                  "
                >
                  <div class="col fs-4 text-center headTitle">
                    Jeremy Camacho
                  </div>
                </div>
                <div
                  class="
                    row
                    border-end border-start border-top border-1 border-dark
                  "
                >
                  <div class="col fs-5 my-1">
                    Full-Stack Web Developer. 2 years as web developers in ONGs,
                    autodidact and passionate of new tech
                  </div>
                </div>
                <div
                  class="
                    row
                    border-end
                    border-start
                    border-top
                    border-bottom
                    border-1
                    border-dark
                  "
                >
                  <div class="col d-grid gap-2">
                    <a
                      href="https://www.linkedin.com/in/jeremycamacholugo/"
                      class="d-grid gap-2 mt-2"
                    >
                      <button class="btn btn-primary mb-2" type="button">
                        <span class="fs-5">Profile in LinkedIn</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
