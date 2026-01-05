<template>
  <NuxtLink
    :to="linkProject"
    class="bg-white rounded-xl w-full hover:scale-105 hover:-translate-x-0 hover:duration-500"
  >
  <div class="flex flex-col gap-4 pb-4">
    <img class="rounded-t-xl w-full h-72 object-cover" :src="imgPreview" alt={{ title }} /> 
    <div class="text-center text-xl font-medium hover:scale-110 hover:duration-500">
      {{ title }}
    </div>
    <div class="flex items-center justify-center gap-4">
      <div
        class="link bg-[#18181B] rounded-xl w-fit px-4 py-2 text-sm text-center text-white"
      >
        {{ stackTitleOne }}
      </div>
      <div
        class="link bg-[#18181B] rounded-xl w-fit px-4 py-2 text-sm text-center text-white"
      >
        {{ stackTitleTwo }}
      </div>
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
