<template>
  <div>
    <Nav/>
    <div class="container mt-3 mb-5">
      <header class="text-left">
        <h4>ACCOUNT SETTINGS</h4>
      </header>

      <div class="card shadow my-5">
        <div class="card-body">
          <div class="row">
            <img class="pl-3" src="@/assets/Svg.svg" alt>
            <h5 class="card-title pl-3 pt-3 text-left">PERSONAL INFORMATION</h5>
          </div>
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
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  required
                >
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-4">
                <label for="inputEmail4">FULL NAME</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="amarachuku@gmail.com"
                >
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">USER NAME</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Olatunji Joseph"
                >
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">BIRTH DATE</label>
                <input type="date" class="form-control" id="inputEmail4" value="1990-07-15">
              </div>
            </div>
            <button type="submit" class="btn btn-warning my-3 orange">Save Changes</button>
          </form>

          <form class="text-left">
            <div class="form-row">
              <div class="form-group col-4">
                <label for="inputEmail4">CURRENT PASSWORD</label>
                <input type="password" class="form-control" id="inputEmail4" placeholder="password">
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">NEW PASSWORD</label>
                <input type="password" class="form-control" id="inputEmail4">
              </div>
              <div class="form-group col-4">
                <label for="inputEmail4">CONFIRM PASSWORD</label>
                <input type="password" class="form-control" id="inputEmail4">
              </div>
            </div>
            <button type="submit" class="btn btn-warning my-3 orange">Save Changes</button>
          </form>
        </div>
      </div>

      <div class="card shadow">
        <div class="card-body">
          <h5 class="card-title text-left">CHANGE STATE OF RESIDENCE</h5>
          <p class="card-text text-left">a Bit of lorem ipsum</p>

          <form class="text-left">
            <div class="form-row">
              <div class="form-group col-6">
                <label for="inputEmail4">CURRENT STATE</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Niger">
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
                <input type="text" class="form-control" id="inputEmail4">
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
            <button type="submit" class="btn btn-warning my-3 orange">Save Changes</button>
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

