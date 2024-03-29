<template>
  <div
    class="link bg-neutral-800 rounded-xl w-32 p-2 text-sm text-center text-white"
  >
    {{ title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>
