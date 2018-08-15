<template>
  <div>
    <div class="">
      <div class="container-fluid">
        <h2 class="top_news">Latest Headlines</h2>
        <div class="loader" v-show="loader"></div>
        <ul class="list-unstyled">
          <li class="media articles card-body " v-for="(x,key) in news" v-if="x.urlToImage || x.description" v-bind:key="key">
            <div class="row">
              <div class="col-md-2 col-sm-3">
                <img class="mr-3 img-thumbnail" v-bind:src="x.urlToImage" alt="x.title" />
              </div>
              <div class="media-body articles_cont col-md-10 col-sm-9">
                <h5 class="mt-0 mb-1">{{x.title}}</h5>
                <span class="card-text">{{x.description}}</span>
              </div>
              <div class="col-md-2 col-sm-2 text-center">
                <a :href="x.url" class="btn btn-primary link_target" target="_blank">Read More</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- navbar-1.vue -->
</template>
<script>
var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e';

export default {
  name: 'head-component',
  data() {
    return {
      news: [],
      loader: true

    }
  },
  methods: {

  },
  created() {

    this.$http.get(url).then(function(data) {
      this.loader = false;
      this.news = data.body.articles;
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #17a2b8;
  border-bottom: 16px solid #17a2b8;
  width: 120px;
  height: 120px;
  margin: 15% auto;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.articles {
  margin: 10px 0;
}

.img_width {
  width: 70px;
}
</style>
