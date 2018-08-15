<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">News App</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item router-link to="/" exact>{{link1}}</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
  </div>
  <!-- navbar-1.vue -->
</template>

<script>
export default {
  name: "header-component",
  data() {
    return {
      link1: "Headlines"
    };
  },
  props: ["name"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
