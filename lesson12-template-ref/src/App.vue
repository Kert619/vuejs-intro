<script setup>
import { onMounted, ref } from "vue";

const inputRef = ref(null);

onMounted(function () {
  console.log(inputRef.value);
  inputRef.value.focus();
});
</script>

<template>
  <div class="m-5 p-5">
    <input
      ref="inputRef"
      type="text"
      class="form-control"
      placeholder="First Name"
    />
  </div>
</template>

<style scoped></style>
