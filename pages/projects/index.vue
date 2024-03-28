<template>
  <section class="px-8 md:px-[200px] xl:px-[300px]">
    <div class="text-4xl font-bold text-center py-10">My projects</div>
    <div class="mx-auto text-2xl font-medium text-center">
      These are some of the projects I've worked on before
    </div>
    <div class="flex flex-wrap items-center justify-center gap-8 py-10">
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </div>
  </section>
</template>

<script setup>
useHead({
  title: `Wemphy Stephian - Projects`,
});
</script>
