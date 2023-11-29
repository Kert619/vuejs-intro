<script setup>
import { ref } from "vue";

const counter = ref(0);

function increment() {
  counter.value = counter.value + 2;
}
function decrement() {
  counter.value = counter.value - 2;
}
</script>

<template>
  <div
    class="mt-5 p-3 container border d-flex justify-content-center gap-3 flex-column"
  >
    <h1 class="text-center">Counter App</h1>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-danger" @click="decrement">Decrement</button>
    <h1 class="text-center">Count: {{ counter }}</h1>
  </div>
</template>

<style scoped>
div {
  width: 400px;
}
</style>
