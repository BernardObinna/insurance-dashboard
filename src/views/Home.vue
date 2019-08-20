<template>
  <div class="body">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav/>
    <div class="m-5">
      <header class="text-left">
        <h4>Welcome, Lois!</h4>
        <h6 class="faded">Monday, july 22, 2019</h6>
      </header>
      <Cards :statistics="statistics"/>
      <Ibody :applications="applications"/>
      <button class="btn btn-secondary">jump</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav.vue";
import Cards from "@/components/Cards.vue";
import Ibody from "@/components/InsuranceBody.vue";

export default {
  name: "home",

  created() {
    this.getData();
  },
  mounted() {
    // this.fixData();
    // this.statisticsData = this.$store.state.statistics;
    // console.log(this.statisticsData);
  },

  methods: {
    getData() {
      this.$store.dispatch("fetchData");
    }
  },

  computed: {
    statistics() {
      const stat = this.$store.state.statistics;
      let statistics = this.statisticsData;
      if (stat) {
        const statArray = Object.values(stat);

        // statistics = this.statisticsData.map((data, index) => {
        //   data.amount = statArray[index];
        // });
        // console.log(statistics);

        this.statisticsData[0].amount = statArray[0];
        this.statisticsData[1].amount = statArray[1];
        this.statisticsData[2].amount = statArray[2];
        this.statisticsData[3].amount = statArray[3];
      }
      return statistics;
      // console.log(this.statisticsData);
    },
    applications() {
      const stat = this.$store.state.applications;
      let statistics = this.applicationsData;
      // if (stat) {
      //   const statArray = Object.values(stat);

      //   // statistics = this.statisticsData.map((data, index) => {
      //   //   data.amount = statArray[index];
      //   // });
      //   // console.log(statistics);

      //   this.statisticsData[0].amount = statArray[0];
      //   this.statisticsData[1].amount = statArray[1];
      //   this.statisticsData[2].amount = statArray[2];
      //   this.statisticsData[3].amount = statArray[3];
      // }
      this.applicationsData = stat;
      // return statistics;
      return this.applicationsData;
      console.log(this.applicationsData);
    }
  },

  data() {
    return {
      statisticsData: [
        {
          name: "Total Insurance Bought",
          amount: 8
        },
        {
          name: "Total Amount of Insurance",
          amount: 214000000
        },
        {
          name: "Total Insurance Claims",
          amount: 3
        },
        {
          name: "Total Amount of Claims",
          amount: 1400000
        }
      ],
      applicationsData: [
        {
          type: "Insurance type",
          amount: 21000000,
          date: "24 october 2019",
          status: false
        },
        {
          type: "Life Insurance",
          amount: 21000000,
          date: "24 october 2019",
          status: false
        },
        {
          type: "Insurance type",
          amount: 21000000,
          date: "24 october 2019",
          status: false
        },
        {
          type: "Insurance type",
          amount: 21000000,
          date: "24 october 2019",
          status: false
        }
      ]
    };
  },

  components: {
    // HelloWorld,
    Nav,
    Cards,
    Ibody
  }
};
</script>
