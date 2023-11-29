<script setup>
import { ref } from "vue";

const counter = ref(0);

function increment() {
  counter.value = counter.value + 1;
}
</script>

<template>
  <div>
    <button @click="increment">Increment</button>
    <h1>Count: {{ counter }}</h1>
  </div>
</template>

<style scoped></style>
