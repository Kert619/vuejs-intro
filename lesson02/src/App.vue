<script setup>
import { ref } from "vue";
import ListItem from "./components/ListItem.vue";
const todos = ref(["Learn Vue", "Practice", "Build Project"]);
</script>

<template>
  <div class="container text-center d-flex justify-content-center">
    <div class="row mt-5 p-5 shadow">
      <h1 class="mb-4" :style="colorStyle">Todo List App</h1>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your todo here"
        />
        <button class="btn btn-primary" type="button" id="button-addon2">
          Add Todo
        </button>
      </div>

      <div class="d-flex flex-column gap-1">
        <ListItem v-for="todo in todos" :key="todo" :todo="todo" />
      </div>
    </div>
  </div>
</template>
