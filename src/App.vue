<template>
  <div class="main_body">
    <headercomponent name="name"/>
   <router-view ></router-view>
    <footercomponent/>
  </div>
</template>

<script>

import headercomponent from './components/Header.vue'
import footercomponent from './components/Footer.vue'
import headcomponent from './components/Head.vue'

export default {
  name: 'app',
  components: {
    headercomponent,
    footercomponent,
    headcomponent,
  },
  data() {
   return {
    name:"hello"
   }
 },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');
.main_body{
  font-family: 'Raleway', sans-serif;
  background-color: #ececec;
}
.link_target{
  margin-top: 1%;
}
.top_news{
  text-align: center;
  font-style: italic;
  margin-top: 2%;
}
.articles_cont{
  margin-right: 2%;
  text-align: justify;
}
.art_img{
  margin-top: 1%;
}
.router-link-active{
  color: #444;
}
.loader{
  margin: 15% auto;
}
</style>
