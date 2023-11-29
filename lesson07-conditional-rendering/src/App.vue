<script setup>
import { ref } from "vue";
const currentStep = ref(1);

function nextStep() {
  currentStep.value = currentStep.value + 1;
}

function previousStep() {
  currentStep.value = currentStep.value - 1;
}
</script>

<template>
  <div class="mt-5 m-0 row justify-content-center">
    <div class="col-6">
      <form>
        <fieldset v-if="currentStep == 1">
          <legend>Step 1 of 2</legend>
          <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" />
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" />
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <input type="number" class="form-control" id="age" />
          </div>
        </fieldset>

        <fieldset v-else-if="currentStep == 2">
          <legend>Step 2 of 2</legend>
          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number</label>
            <input type="text" class="form-control" id="phone" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" />
          </div>
        </fieldset>

        <button
          v-if="currentStep == 1"
          @click="nextStep"
          type="button"
          class="btn btn-primary"
        >
          Next
        </button>

        <button
          v-else-if="currentStep == 2"
          @click="previousStep"
          type="button"
          class="btn btn-primary"
        >
          Previous
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
