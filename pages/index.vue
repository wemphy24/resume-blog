<template>
  <section
    class="intro bg-neutral-800 px-10 sm:px-32 py-10 grid grid-cols-1 lg:grid-cols-2"
  >
    <div class="my-auto flex flex-col gap-12">
      <div class="text-white font-bold text-4xl text-center lg:text-start">
        <div>Meet</div>
        <div>Wemphy Stephian</div>
      </div>
      <div class="text-white font-medium text-xl text-center lg:text-start">
        <p>
          To be a front end developer is such honour for me. I can help everyone
          build their business. It such happiness for me. So, let me to help
          you!
        </p>
      </div>
      <div
        class="font-medium block sm:flex gap-8 items-center justify-center lg:justify-start"
      >
        <div class="flex justify-center items-center">
          <button
            class="rounded-xl btn-primary text-lg w-48 text-center px-8 py-2"
          >
            See Projects
          </button>
        </div>

        <div class="mt-10 sm:mt-0 flex items-center gap-4 justify-center">
          <a href="">
            <img src="/img/linkedin.png" alt="" />
          </a>
          <a href="">
            <img src="/img/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="/img/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/img/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10 lg:flex-row-reverse lg:mt-0">
      <img class="w-auto" src="/img/menu.png" alt="" />
    </div>
  </section>
  <div
    class="flex flex-wrap items-center justify-around gap-8 p-10 bg-slate-200"
  >
    <p class="text-3xl font-bold">Behance</p>
    <p class="text-3xl font-bold">Fiverr</p>
    <p class="text-3xl font-bold">Dribbble</p>
    <p class="text-3xl font-bold">Upwork</p>
  </div>
  <section class="completed-project px-10 sm:px-28">
    <div class="text-4xl font-bold text-center py-10">
      Best completed project
    </div>
    <div class="mx-auto text-2xl font-medium text-center">
      Choose my work projects
    </div>
    <div class="flex flex-wrap items-center justify-center gap-8 py-10">
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </div>
  </section>
  <section class="contact px-10 sm:px-24">
    <div class="text-4xl font-bold text-center py-10">
      That's all about me, feel free to say hi!
    </div>
    <div class="mx-auto text-2xl font-medium text-center">
      Pour your ideas into my email or can discuss with me. I am available 7pm
      to 5pm. I'm very willing to work with you.
    </div>
    <div class="py-10 text-center">
      <!-- <button class="rounded-xl btn-primary text-lg text-center px-8 py-2">
        <div class="flex gap-4 items-center font-medium text-xl">
          <p>wemphysp@gmail.com</p>
          <svg
            class="w-10 stroke-[2px]"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            ></path>
          </svg>
        </div>
      </button> -->
    </div>
  </section>
</template>

<script setup></script>

<style></style>
