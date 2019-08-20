<template>
  <div class="card w-100" style="width: 18rem;">
    <div class="card-header text-left">Insurance Applications</div>
    <div class="row">
      <p class="col-1 pl-4 text-left">S.N</p>
      <p class="col-2">Insurance Type</p>
      <p class="col-2">Amount</p>
      <p class="col-2">Date</p>
      <p class="col-2 pr-5">Status</p>
      <p class="col-3">Action</p>
    </div>
    <ul class="list-group list-group-flush">
      <li
        v-for="(application , index) in applications"
        :key="index"
        class="list-group-item applications"
      >
        <div class="row">
          <p class="col-lg-1 text-lg-left">{{index+1}}</p>
          <p class="col-lg-2 pr-5">{{application.insuranceType}}</p>
          <p class="col-lg-2 pr-4">{{application.amount}}</p>
          <p class="col-lg-2 pr-5">{{application.createdDate}}</p>
          <p
            v-if="application.complete "
            class="col-lg-2 bg-gradient-success text-success pr-5"
          >Completed</p>
          <p v-else class="col-lg-2 bg-danger-faded text-danger pr-5">Incomplete</p>

          <div class="col-lg-3 row">
            <div class="col">
              <button class="btn btn-warning">make a claim</button>
            </div>
            <div class="col">
              <a class="link">More Actions</a>
            </div>
            <!-- <div class="row"> -->

            <!-- </div> -->
          </div>
        </div>
      </li>

      <!-- <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>-->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    applications: {}
    // propName: {
    //     type: Number,
    //     default:
    // },
  }
};
</script>

<style>
</style>
