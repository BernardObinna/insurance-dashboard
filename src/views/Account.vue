<template>
  <div>
    <Nav/>
    <div class="container">
      <header class="text-left">
        <h4>ACCOUNT SETTINGS</h4>
      </header>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-left">PERSONAL INFORMATION</h5>
          <p
            class="card-text text-left"
          >Use this page to update your contact information and change your passsword</p>

          <div class="d-flex flex-row text-left">
            <img src="@/assets/Avatar.png" alt>
            <div class="d-block m-3">
              <a href="#" class="link">Upload a new profile image</a>
              <p>Maximun size allowed is 600kb of PNG, JPEG, JPG</p>
            </div>
          </div>
          <form class="text-left">
            <div class="form-row">
              <div class="form-group col-6">
                <label for="inputEmail4">Email Address</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-4">
                <label for="inputEmail4">FULL NAME</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="fullname">
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">USER NAME</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Username">
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">FULL NAME</label>
                <input type="date" class="form-control" id="inputEmail4" placeholder="Email">
              </div>
            </div>
            <button type="submit" class="btn btn-warning">Save Changes</button>
          </form>

          <form class="text-left">
            <div class="form-row">
              <div class="form-group col-4">
                <label for="inputEmail4">CURRENT PASSWORD</label>
                <input type="password" class="form-control" id="inputEmail4" placeholder="password">
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">NEW PASSWORD</label>
                <input type="password" class="form-control" id="inputEmail4" placeholder="Username">
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">CONFIRM PASSWORD</label>
                <input type="password" class="form-control" id="inputEmail4" placeholder="Email">
              </div>
            </div>
            <button type="submit" class="btn btn-warning">Save Changes</button>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-left">CHANGE STATE OF RESIDENCE</h5>
          <p class="card-text text-left">a Bit of lorem ipsum</p>

          <form class="text-left">
            <div class="form-row">
              <div class="form-group col-6">
                <label for="inputEmail4">CURRENT STATE</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="State">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-4">
                <label for="inputEmail4">New STATE OF RESIDENCE</label>
                <input type="text" class="form-control" id="inputEmail4">
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">WHAT LGA DO YOU LIVE IN</label>
                <input type="text" class="form-control" id="inputEmail4">
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">FEDERAL CONSTITUENCIES</label>
                <input type="date" class="form-control" id="inputEmail4" placeholder="Email">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-4">
                <label for="inputEmail4">SENETORIAL DISTRICT</label>
                <input type="text" class="form-control" id="inputEmail4">
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">STATE CONSTITUENCIES</label>
                <input type="text" class="form-control" id="inputEmail4">
              </div>
            </div>
            <button type="submit" class="btn btn-warning">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav
  }
};
</script>

<style>
</style>

