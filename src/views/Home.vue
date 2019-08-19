<template>
  <div class>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav/>
    <header class="text-left">
      <h4>Welcome, Lois!</h4>
      <h6 class="faded">Monday, july 22, 2019</h6>
    </header>
    <Cards :cards="cards"/>
    <button class="btn btn-secondary">jump</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "home",

  data() {
    return {
      cards: [
        {
          name: "ib",
          amount: 6
        },
        {
          name: "Ai",
          amount: 214000000
        },
        {
          name: "Ic",
          amount: 3
        },
        {
          name: "Ac",
          amount: 1400000
        }
      ]
    };
  },

  components: {
    // HelloWorld,
    Nav,
    Cards
  }
};
</script>
