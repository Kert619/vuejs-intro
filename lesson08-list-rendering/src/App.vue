<script setup>
import { ref } from "vue";

const numbers = ref([5, 3, 4, 9, 7, 1]);

function sortNumbers() {
  numbers.value = numbers.value.sort();
}
</script>

<template>
  <div class="m-5 p-5">
    <button @click="sortNumbers" class="btn btn-primary me-3">
      Sort Numbers
    </button>
    <ul class="mt-3">
      <li v-for="number in numbers" :key="number">
        {{ number }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
