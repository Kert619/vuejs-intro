<script setup>
import { ref } from "vue";

const form = ref({
  email: '',
  password: ''
})

</script>

<template>
  <div class="m-5 p-5">
    <form>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input v-model="form.email" type="email" class="form-control">
        <div class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input v-model="form.password" type="password" class="form-control">
      </div>
      <button @click="console.log(form)" type="button" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style scoped></style>
