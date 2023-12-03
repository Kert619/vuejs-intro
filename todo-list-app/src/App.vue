<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

const todos = ref([]);

const todo = ref("");

function addTodo() {
  if (todo.value == "") return;

  const randomId = Math.random();

  const newTodo = {
    id: randomId,
    todo: todo.value,
    updatedTodo: todo.value,
    isCompleted: false,
    isEditMode: false,
  };
  todos.value.push(newTodo);

  todo.value = "";
}

function removeTodo(index) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      todos.value.splice(index, 1);
      Swal.fire({
        title: "Deleted!",
        text: "Your todo has been deleted.",
        icon: "success",
      });
    }
  });
}

function completeTodo(todo) {
  todo.isCompleted = !todo.isCompleted;
}

function setEditMode(todo) {
  todo.isEditMode = !todo.isEditMode;
}

function editTodo(todo) {
  if (todo.updatedTodo == "") return;
  todo.todo = todo.updatedTodo;
  todo.isEditMode = false;
}
</script>

<template>
  <div class="container mt-5 p-3 shadow">
    <h1 class="text-center mb-4">TODO LIST APP</h1>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control form-control-lg"
        placeholder="Enter Todo Here"
        v-model="todo"
        @keypress.enter="addTodo"
      />
      <button @click="addTodo" class="btn btn-lg btn-primary" type="button">
        Add Todo
      </button>
    </div>

    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(todo, index) in todos"
        :key="todo.id"
      >
        <div class="form-check" v-if="!todo.isEditMode">
          <input
            class="form-check-input"
            type="checkbox"
            :checked="todo.isCompleted"
            @change="completeTodo(todo)"
          />
          <label
            class="form-check-label"
            :class="{ 'text-decoration-line-through': todo.isCompleted }"
          >
            {{ todo.todo }}
          </label>
        </div>

        <div class="input-group w-auto" v-else>
          <input
            class="form-control"
            type="text"
            placeholder="Enter Todo Here"
            v-model="todo.updatedTodo"
            @keypress.enter="editTodo(todo)"
          />
          <button @click="editTodo(todo)" class="btn btn-primary" type="button">
            Update
          </button>
          <button
            @click="setEditMode(todo)"
            class="btn btn-outline-primary"
            type="button"
          >
            Cancel
          </button>
        </div>

        <div class="d-flex gap-2">
          <button
            class="btn btn-success"
            @click="setEditMode(todo)"
            :disabled="todo.isEditMode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
          <button
            @click="removeTodo(index)"
            class="btn btn-danger"
            :disabled="todo.isEditMode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-archive-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
