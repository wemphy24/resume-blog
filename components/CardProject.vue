<template>
  <NuxtLink
    :to="linkProject"
    class="card bg-white rounded-xl hover:scale-105 hover:-translate-x-0 hover:duration-500"
  >
    <div class="image-container">
      <img class="rounded-t-xl" :src="imgPreview" alt="" />
    </div>
    <div class="mt-5 text-center">
      <div class="text-xl font-medium hover:scale-110 hover:duration-500">
        {{ title }}
      </div>
    </div>
    <div class="my-5 justify-center flex items-center gap-4">
      <div
        class="link bg-[#18181B] rounded-xl w-32 p-2 text-sm text-center text-white"
      >
        {{ stackTitleOne }}
      </div>
      <div
        class="link bg-[#18181B] rounded-xl w-32 p-2 text-sm text-center text-white"
      >
        {{ stackTitleTwo }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  linkProject: String,
  imgPreview: String,
  title: String,
  stackTitleOne: String,
  stackTitleTwo: String,
});
</script>

<style>
.link {
  transition: 0.3s;
}
.link:hover {
  background-color: #525252;
  color: white;
}
</style>
