<script setup>
import { ref } from "vue";

const counter = ref(0);

function increment() {
  counter.value++;
}
</script>

<template>
  <div class="container">
    <h1 class="title">My Counter App</h1>
    <button @click="increment">Click Me</button>
    <p>Current count is: {{ counter }}</p>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.title {
  margin-bottom: 1rem;
}

button {
  width: 100%;
  padding: 0.5rem 1rem;
  background: rgb(54, 212, 10);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

p {
  margin-top: 1rem;
  text-align: center;
}
</style>
