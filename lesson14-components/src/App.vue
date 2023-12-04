<script setup>
import SideBar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="d-flex vh-100 text-white">
    <div class="bg-primary">
      <SideBar />
    </div>
    <div class="flex-grow-1 d-flex flex-column">
      <div class="bg-success">
        <Navbar />
      </div>
      <div class="bg-warning h-100">
        <h1>PAGE CONTENT</h1>
      </div>
      <div class="bg-danger mt-auto">
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
