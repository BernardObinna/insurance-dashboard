<template>
  <div class>
    <div class="row m-auto">
      <div class="col" v-for="card in cards" :key="card.name">
        <div class="card px-4 py-3" style="width: 18rem;">
          <img src="@/assets/Insurance-bought-icon.svg" class="card-img-top h-25 w-25" alt="...">
          <div class="card-body">
            <h5 class="card-title text-left">Card title</h5>
            <p
              class="card-text text-left"
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
