<script setup>
import { ref } from "vue";
const fontSize = ref(16);

function increaseFont() {
  fontSize.value = fontSize.value + 3;
}

function decreaseFont() {
  fontSize.value = fontSize.value - 3;
}
</script>

<template>
  <div
    class="mt-5 p-3 container border d-flex justify-content-center gap-3 flex-column"
  >
    <button @click="increaseFont" class="btn btn-primary">Increase Font</button>
    <button @click="decreaseFont" class="btn btn-danger">Decrease Font</button>

    <p class="text-center" :style="{ fontSize: fontSize + 'px' }">
      Hello World
    </p>
  </div>
</template>

<style scoped></style>
