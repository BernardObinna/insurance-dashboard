<template>
  <div class="card w-100" style="width: 18rem;">
    <div class="card-header text-left">Insurance Applications</div>
    <div class="d-none d-lg-flex row">
      <p class="col-lg-1 pl-4 text-left">S.N</p>
      <p class="col-lg-2">Insurance Type</p>
      <p class="col-lg-2">Amount</p>
      <p class="col-lg-2">Date</p>
      <p class="col-lg-2 pr-5">Status</p>
      <p class="col-lg-3">Action</p>
    </div>
    <ul class="list-group list-group-flush">
      <li
        v-for="(application , index) in applications"
        :key="index"
        class="list-group-item applications"
      >
        <div class="row">
          <p class="col-lg-1 text-lg-left">{{index+1}}</p>
          <p class="col-lg-2 text-lg-center pr-5">{{application.insuranceType}}</p>
          <p class="col-lg-2 pr-4">N{{application.amount}}</p>
          <p class="col-lg-2 pr-5">{{application.createdDate}}</p>
          <p v-if="application.complete " class="col-lg-2 text-success pr-5">
            <a class="btn btn-sm completed">Completed</a>
          </p>
          <p v-else class="col-lg-2 bg-danger-faded text-danger pr-5">
            <a class="btn btn-sm incomplete">Inomplete</a>
          </p>

          <div class="col-lg-3 row">
            <div class="col">
              <button class="btn btn-warning orange">make a claim</button>
            </div>
            <div class="col">
              <!-- <a class="link">More Actions</a> -->
              <div class="btn-group dropdown">
                <a
                  class="nav-link dropdown-toggle myDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-offset="60,0"
                >More Actions</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Make a claim</a>
                  <a class="dropdown-item" href="#">View Policy</a>
                  <!-- Dropdown menu links -->
                </div>
              </div>
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
