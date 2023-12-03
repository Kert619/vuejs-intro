<script setup>
import { ref, watch } from "vue";

const timer = ref(0);

setInterval(function () {
  timer.value++;
}, 1000);

watch(timer, function (newValue, oldValue) {
  console.log(newValue);
});
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center display-1">{{ timer }}</h1>
  </div>
</template>

<style scoped></style>
