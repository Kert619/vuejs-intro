<script setup>
import { ref, computed } from "vue";
const books = ref([
  "Vue 2 - Advanced Guide",
  "Vue 3 - Basic Guide",
  "Vue 4 - The Mystery",
]);

const hasBooks = computed(function () {
  return books.value.length > 0 ? "Yes" : "None";
});

const number = ref(10);
const timesTwo = computed(function () {
  return number.value * 2;
});
</script>

<template>
  <h1>Has books: {{ hasBooks }}</h1>
  <h1>Number: {{ timesTwo }}</h1>
</template>

<style scoped></style>
