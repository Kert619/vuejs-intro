<script setup>
import Sidebar from "@/components/Sidebar.vue";
import NavBar from "@/components/Navbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="d-flex vh-100">
    <div class="sidebar bg-primary flex-shrink-0">
      <Sidebar />
    </div>

    <div class="flex-grow-1 d-flex flex-column overflow-auto">
      <NavBar class="shadow px-3 py-1" />
      <div class="overflow-auto">
        <RouterView />
      </div>
      <TheFooter class="mt-auto" />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
}
</style>
