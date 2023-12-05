<script setup>
import { ref } from 'vue'

const form = ref({
  name: "",
  password: ""
})

const formError = ref({
  nameError: "",
  passwordError: ""
})

function submitForm() {
  if (form.value.name == "") {
    formError.value.nameError = "Name field is required!"
  }

  if (form.value.password.length < 6) {
    formError.value.passwordError = "Password field must be atleast 6 characters!"
  }
}
</script>

<template>
  <div class="m-5 p-5">
    <form>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" :class="{ 'border-danger': formError.nameError }" v-model="form.name">
        <div v-if="formError.nameError" class="form-text text-danger">{{ formError.nameError }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" :class="{ 'border-danger': formError.passwordError }"
          v-model="form.password">
        <div v-if="formError.passwordError" class="form-text text-danger">{{ formError.passwordError }}</div>
      </div>
      <button @click="submitForm" type="button" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style scoped></style>
