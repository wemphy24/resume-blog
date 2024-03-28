<template>
  <NuxtLink to="/projects/haha" class="card">
    <div
      class="image-container rounded-xl border-primary hover:scale-105 hover:-translate-x-0 hover:duration-500"
    >
      <img src="/img/dummy.png" alt="" />
    </div>
    <div class="mt-5 text-center">
      <div class="text-2xl font-semibold hover:scale-110 hover:duration-500">
        Redesign Movie Streaming App
      </div>
    </div>
    <div class="mt-5 justify-center flex items-center gap-4">
      <div
        class="link bg-neutral-800 rounded-xl w-32 p-2 text-sm text-center text-white"
      >
        UI Designer
      </div>
      <div
        class="link bg-neutral-800 rounded-xl w-32 p-2 text-sm text-center text-white"
      >
        Web Design
      </div>
    </div>
  </NuxtLink>
</template>

<script></script>

<style>
.link {
  transition: 0.3s;
}
.link:hover {
  background-color: #525252;
  color: white;
}
</style>
