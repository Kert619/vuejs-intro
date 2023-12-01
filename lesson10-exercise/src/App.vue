<script setup>
import { ref } from "vue";
const red = ref(0);
const green = ref(0)
const blue = ref(0)
const alpha = ref(1);


const degree = ref(0)
</script>

<template>
  <div class="container">
    <div class="mb-3">
      <label class="form-label">RED</label>
      <input type="range" class="form-range" min="0" max="255" step="1" v-model="red">
    </div>
    <div class="mb-3">
      <label class="form-label">GREEN</label>
      <input type="range" class="form-range" min="0" max="255" step="1" v-model="green">
    </div>
    <div class="mb-3">
      <label class="form-label">BLUE</label>
      <input type="range" class="form-range" min="0" max="255" step="1" v-model="blue">
    </div>
    <div class="mb-3">
      <label class="form-label">ALPHA</label>
      <input type="range" class="form-range" min="0" max="1" step="0.1" v-model="alpha">
    </div>

    <div class="mb-3">
      <label class="form-label">Rotate</label>
      <input type="range" class="form-range" min="-360" max="360" step="1" v-model="degree">
    </div>
  </div>

  <h1 class="text-center" :style="{ transform: `rotate(${degree}deg)` }">ROTATE ME</h1>
  <div class="p-5" :style="{ backgroundColor: `rgba(${red},${green},${blue},${alpha})` }"></div>
</template>

<style scoped></style>
