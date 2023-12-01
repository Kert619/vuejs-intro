<script setup>
import { ref } from "vue";
const isPrimary = ref(false);

function changeToPrimaryButton() {
  isPrimary.value = true;
}
</script>

<template>
  <div class="m-5 p-5">
    <button @click="changeToPrimaryButton" class="btn" :class="{ 'btn-primary': isPrimary }">
      Change to Primary
    </button>
  </div>
</template>

<style scoped></style>
