<template>
  <div class="card w-100" style="width: 18rem;">
    <div class="card-header text-left">Insurance Applications</div>
    <div class="row">
      <p class="col-1 pl-4 text-left">S.N</p>
      <p class="col-2">Insurance Type</p>
      <p class="col-2">Amount</p>
      <p class="col-2">Date</p>
      <p class="col-2">Status</p>
      <p class="col-3">Action</p>
    </div>
    <ul class="list-group list-group-flush">
      <li
        v-for="(application , index) in applications"
        :key="index"
        class="list-group-item applications"
      >
        <div class="row">
          <p class="col-1 text-left">{{index+1}}</p>
          <p class="col-2">{{application.type}}</p>
          <p class="col-2">{{application.amount}}</p>
          <p class="col-2">{{application.date}}</p>
          <p class="col-2">{{application.status}}</p>
          <div class="col-3 row">
            <div class="col">
              <button class="btn btn-warning">make a claim</button>
            </div>
            <div class="col">
              <button class="btn btn-warning">make a claim</button>
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
