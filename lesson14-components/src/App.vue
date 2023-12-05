<script setup>
import Sidebar from "@/components/Sidebar.vue";
import NavBar from "@/components/Navbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="d-flex vh-100 text-white">
    <Sidebar class="bg-primary p-3 w-25" />

    <div class="flex-grow-1 d-flex flex-column">
      <NavBar class="bg-success p-3" />
      <TheFooter class="bg-danger p-3 mt-auto" />
    </div>
  </div>
</template>

<style scoped></style>
