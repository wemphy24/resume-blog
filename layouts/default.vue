<template>
  <header class="shadow-md bg-[#f5f5f5] max-w-screen-2xl mx-auto">
    <nav
      class="mx-auto p-8 block text-center lg:flex justify-between px-10 md:px-20"
    >
      <NuxtLink
        class="text-3xl font-bold animate__animated animate__lightSpeedInLeft"
        to="/"
        >Wemphy Stephian</NuxtLink
      >
      <div
        class="mt-10 lg:mt-0 flex gap-6 items-center justify-center animate__animated animate__lightSpeedInRight"
      >
          <NuxtLink
            class="font-medium text-xl text-neutral-500 hover:text-black"
            to="/"
            >Home</NuxtLink
          >
          <NuxtLink
            class="font-medium text-xl text-neutral-500 hover:text-black"
            to="/projects"
            >Projects</NuxtLink
          > 
          <NuxtLink
            class="font-medium text-xl text-neutral-500 hover:text-black"
            to="/about"
            >About</NuxtLink
          >
      </div>
    </nav>
  </header>

  <slot />

  <footer class="shadow-md bg-[#18181B] max-w-screen-2xl mx-auto">
    <nav
      class="mx-auto p-8 block text-center lg:flex justify-between px-10 md:px-20"
    >
      <NuxtLink class="text-3xl font-bold text-white footer-link" to="/"
        >Wemphy Stephian</NuxtLink
      >

      <ul class="mt-10 lg:mt-0 flex gap-6 items-center justify-center">
        <p class="text-white font-bold">⚡ 2026 ⚡</p>
      </ul>
      <div class="mt-10 lg:mt-0 flex gap-4 items-center justify-center">
        <a href="https://www.linkedin.com/in/wemphy-stephian/">
          <img src="/img/linkedin.png" alt="" />
        </a>
        <a href="https://www.instagram.com/_wemphy_/">
          <img src="/img/instagram.png" alt="" />
        </a>
        <a
          href="https://brassy-conifer-f9a.notion.site/Welcome-To-My-Portfolio-fe2648074241480e8096c9e28cdb86ae?pvs=4"
        >
          <img src="/img/notion.png" alt="" />
        </a>
        <a href="https://github.com/wemphy24">
          <img src="/img/github.png" alt="" />
        </a>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active {
  @apply text-black;
}

.footer-link {
  color: white !important;
}
</style>
