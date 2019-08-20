<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white px-5 py-3">
    <router-link class="nav-link" to="/">
      <img class="bg-white" src="@/assets/Icon-color.svg" alt>
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse bg-white" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item bg-white">
          <!-- <a class="nav-link" href="#">
            Dashboard
            <span class="sr-only">(current)</span>
          </a>-->
          <router-link class="nav-link" to="/">Dashboard</router-link>
        </li>
        <li class="nav-item bg-white">
          <a class="nav-link" href="#">Buy Insurance</a>
        </li>
        <li class="nav-item bg-white">
          <!-- <a class="nav-link" href="#">Account Settings</a> -->
          <router-link class="nav-link" to="/account">Account Settings</router-link>
        </li>
      </ul>

      <!-- <div class="container"> -->
      <!-- <div class="btn-group" role="group" aria-label="Basic example"> -->
      <div class="clippyBack">
        <!-- <button type="button" class="btn btn-success clippy">LD</button> -->
        <!-- <button type="button" class="clippy">LD</button> -->
        <div class="btn btn-success clippy">LD</div>
      </div>
      <div class="dropdown bg-white">
        <!-- <button class="btn btn-light dropdown"> -->
        <a
          class="dropdown-toggle text-dark"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >Dropdown</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
        <!-- </div> -->
        <!-- </button> -->
        <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>-->
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
