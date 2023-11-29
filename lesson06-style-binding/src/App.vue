<script setup>
import { ref } from "vue";
const fontSize = ref(16);

function increaseFont() {
  fontSize.value = fontSize.value + 3;
}
</script>

<template>
  <div class="m-5 p-5">
    <button @click="increaseFont" class="btn btn-primary">Increase Font</button>

    <p :style="{ fontSize: fontSize + 'px' }">Hello World</p>
  </div>
</template>

<style scoped></style>
