<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav/>
    <button class="btn btn-secondary">jump</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "home",
  components: {
    // HelloWorld,
    Nav
  }
};
</script>
