<script setup>
import { onMounted } from "vue";

onMounted(function () {
  const input = document.querySelector("input");
  input.focus();
  console.log(input);
});
</script>

<template>
  <div class="m-5 p-5">
    <input type="text" class="form-control" placeholder="First Name" />
  </div>
</template>

<style scoped></style>
