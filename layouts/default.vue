<template>
  <header class="shadow-md bg-white">
    <nav
      class="container mx-auto p-8 block text-center lg:flex justify-between"
    >
      <NuxtLink class="text-3xl font-bold" to="/">Wemphy Stephian</NuxtLink>
      <ul class="mt-10 lg:mt-0 flex gap-6 items-center justify-center">
        <li>
          <NuxtLink class="font-semibold text-xl hover:text-neutral-600" to="/"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="font-semibold text-xl hover:text-neutral-600"
            to="/projects"
            >Projects</NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            class="font-semibold text-xl hover:text-neutral-600"
            to="/about"
            >About</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>

  <slot />

  <footer class="shadow-md bg-neutral-800">
    <nav
      class="container mx-auto p-8 block text-center lg:flex justify-between"
    >
      <NuxtLink class="text-3xl font-bold text-white" to="/"
        >Wemphy Stephian</NuxtLink
      >
      <ul class="mt-10 lg:mt-0 flex gap-6 items-center justify-center">
        <li>
          <NuxtLink
            class="font-semibold text-xl text-white hover:text-neutral-600"
            to="/"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="font-semibold text-xl text-white hover:text-neutral-600"
            to="/projects"
            >Projects</NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            class="font-semibold text-xl text-white hover:text-neutral-600"
            to="/about"
            >About</NuxtLink
          >
        </li>
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

<style></style>
