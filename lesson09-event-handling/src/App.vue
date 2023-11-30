<script setup>
import { ref } from "vue";

const isNoPressed = ref(false);

const scale = ref(1);

const btnNoStyles = ref({
  top: "50%",
  left: "48%",
  transform: `scale(${scale.value})`,
});

function changeToRandomLocation() {
  scale.value = scale.value - 0.1;
  btnNoStyles.value.top = Math.floor(Math.random() * 100) + "%";
  btnNoStyles.value.left = Math.floor(Math.random() * 100) + "%";
  btnNoStyles.value.transform = `scale(${scale.value})`;
}
</script>

<template>
  <div class="m-5 p-5">
    <h1 class="bg-success p-3 text-white text-center">
      Will you be my girlfriend?
    </h1>
    <h2 v-if="isNoPressed" class="text-center text-danger">
      Sorry, you can only click yes.
    </h2>
    <button class="btn btn-primary btn-lg position-absolute btn-yes">
      Yes!
    </button>
    <button
      class="btn btn-danger btn-lg position-absolute btn-no"
      @mouseenter="changeToRandomLocation"
      @keypress.enter="isNoPressed = true"
      :style="btnNoStyles"
    >
      No!
    </button>
  </div>
</template>

<style scoped>
.btn-yes {
  top: 50%;
  left: 55%;
}
</style>
