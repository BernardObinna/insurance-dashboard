<template>
  <div class>
    <div class="row">
      <!-- <p>{{bla}}</p> -->
      <div class="col mb-md-5 mt-4" v-for="(card,index) in cards" :key="index">
        <div class="card w-100 px-4 py-3" style="width: 18rem;">
          <img :src="icons[index]" class="card-img-top bg-white h-25 w-25" alt="...">
          <div class="card-body bg-white">
            <h5 class="card-title bg-white text-left">Card title</h5>
            <p
              class="card-text bg-white text-left"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {}
  },

  data() {
    return {
      // bla: "hdhgkrgnkngkngkjg"
      icons:
        // {
        [
          require("@/assets/Insurance-bought-icon.svg"),
          require("@/assets/total-amount-insurance-icon.svg"),
          require("@/assets/insurance-claim-icon.svg"),
          require("@/assets/amount-of-claims-icon.svg")
        ]
      // insuranceBoughtIcon: require("@/assets/Insurance-bought-icon.svg"),
      // totalAmountIcon: require("@/assets/total-amount-insurance-icon.svg"),
      // insuranceClaimIcon: require("@/assets/insurance-claim-icon.svg"),
      // amountClaimIcon: require("@/assets/amount-of-claims-icon.svg")
      // }
    };
  }
  // propName: {
  //   type: Number,
  //   default:
  // },
};
</script>

<style>
</style>
