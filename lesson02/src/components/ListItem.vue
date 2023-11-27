<template>
  <div>
    {{ todo }}
  </div>
</template>

<script setup>
defineProps({
  todo: {
    type: String,
    required: true,
  },
});
</script>
