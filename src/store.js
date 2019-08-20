import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    applications: {},
    statistics: {}
  },
  mutations: {
    populateApplicationData: (state, payload) => {
      // console.log(payload.applications);
      state.applications = payload.applications;
      // console.log(state.applications);
    },
    populateStatisticsData: (state, payload) => {
      // console.log(payload);
      state.statistics = payload.statistics;
      console.log(state.statistics);
    }
  },
  actions: {
    fetchData: ({ commit }) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg";

      // let application = null;
      // let statistics = null;
      axios
        .get("http://test.natterbase.com:5050/api/interview/get-applications", {
          headers: { token: token }
        })
        .then(res => {
          // console.log(res);
          commit("populateApplicationData", res.data);
        });
      axios
        .get("http://test.natterbase.com:5050/api/interview/get-statistics", {
          headers: { token: token }
        })
        .then(res => {
          commit("populateStatisticsData", res.data);
          // const data = res.data;
          // return data;
        });

      // const insuranceData = {
      //   application,
      //   statistics
      // };
      // commit("populateData", application);
    }
  }
});
