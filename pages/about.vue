<template>
  <section class="px-8 md:px-[200px] xl:px-[400px]">
    <div class="image-container flex items-center justify-center py-10">
      <img src="/img/me.png" alt="" />
    </div>
    <div class="introduction">
      <div class="text-2xl font-semibold">About Me</div>
      <div class="font-medium text-lg mt-2 text-justify">
        Hello, let me introduce myself. My name is Wemphy Stephian Philipe, but
        people usually call me Wemphy. I am a fresh graduate who just graduated
        in August 2023. Currently, I work as a freelance UI/UX designer and also
        as a web developer on an online work platform. I have a keen interest
        and skills in web development, UI/UX design, and data analysis to
        address business process needs in solving problems.
      </div>
      <div class="py-10 text-center">
        <button
          class="btn-primary px-8 text-lg py-2 rounded-xl text-center hover:scale-105 hover:-translate-x-0 hover:duration-500 font-medium"
        >
          See My Resume
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: `Wemphy Stephian - About`,
});
</script>
