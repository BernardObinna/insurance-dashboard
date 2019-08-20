<template>
  <div class>
    <div class="row">
      <div class="col mb-md-5 mt-4" v-for="card in cards" :key="card.name">
        <div class="card w-100 px-4 py-3" style="width: 18rem;">
          <img
            src="@/assets/Insurance-bought-icon.svg"
            class="card-img-top bg-white h-25 w-25"
            alt="..."
          >
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
    // propName: {
    //   type: Number,
    //   default:
    // },
  }
};
</script>

<style>
</style>
