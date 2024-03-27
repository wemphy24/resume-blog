<template>
  <header class="shadow-md bg-white">
    <nav class="container mx-auto p-8 flex justify-between">
      <NuxtLink class="text-3xl font-bold" to="/">Wemphy Stephian</NuxtLink>
      <ul class="flex gap-6 items-center">
        <li>
          <NuxtLink class="font-semibold text-xl" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="font-semibold text-xl" to="/">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink class="font-semibold text-xl" to="/">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink class="font-semibold text-xl" to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <slot />

  <footer class="shadow-md bg-neutral-800">
    <nav class="container mx-auto p-8 flex justify-around">
      <NuxtLink class="text-3xl font-bold text-white" to="/"
        >Wemphy Stephian</NuxtLink
      >
      <ul class="flex gap-6 items-center">
        <li>
          <NuxtLink class="font-semibold text-xl text-white" to="/"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="font-semibold text-xl text-white" to="/"
            >Projects</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="font-semibold text-xl text-white" to="/"
            >Contact</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="font-semibold text-xl text-white" to="/about"
            >About</NuxtLink
          >
        </li>
      </ul>
      <div class="flex items-center gap-4">
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
    </nav>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
