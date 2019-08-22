<template>
  <div class>
    <div class="row">
      <!-- <p>{{bla}}</p> -->
      <div class="col mb-md-5 mt-4" v-for="(card,index) in getStats" :key="index">
        <div class="card w-100 px-4 py-3" style="width: 18rem;">
          <img :src="icons[index]" class="card-img-top bg-white h-25 w-25" alt="...">
          <div class="card-body bg-white">
            <p class="card-text bg-white active-xl text-left">
              <span v-if="index % 2">N</span>
              {{card.amount}}
            </p>
            <h5 class="card-title bg-white active text-left">{{card.name}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statistics: {}
  },

  computed: {
    getStats() {
      const stats = this.statistics;
      // return this.data
      return stats;
    }
  },

  created() {
    // console.log(this.statistics);
    // console.log(this.stat);
  },
  mounted() {
    this.fix();
  },
  methods: {
    fix() {
      // console.log(this.stat);
    }
  },
  data() {
    return {
      // bla: "hdhgkrgnkngkngkjg"
      stat: this.statistics,
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
