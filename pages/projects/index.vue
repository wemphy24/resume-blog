<template>
  <section class="px-8 md:px-[200px] xl:px-[300px]">
    <div class="text-4xl font-bold text-center py-10">My projects</div>
    <div class="mx-auto text-2xl font-medium text-center">
      These are some of the projects I've worked on before
    </div>
    <div class="flex flex-wrap items-center justify-center gap-8 py-10">
      <CardProject
        linkProject="/projects/circlemoviez"
        imgPreview="/img/cmpreview.jpg"
        title="Redesign Movie Streaming App"
        stackTitleOne="UI Designer"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/racingparts"
        imgPreview="/img/rppreview.jpg"
        title="Racing Parts Landing Page"
        stackTitleOne="UI Designer"
        stackTitleTwo="Web Design"
      />
      <CardProject
        linkProject="/projects/simgroup"
        imgPreview="/img/sgpreview.jpg"
        title="Manufacturing Information System"
        stackTitleOne="Web App"
        stackTitleTwo="Laravel"
      />
      <CardProject
        linkProject="/projects/influencer"
        imgPreview="/img/impreview.jpg"
        title="Concept Influencer Market"
        stackTitleOne="UI Designer"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/gamerz"
        imgPreview="/img/gpreview.jpg"
        title="Redesign Gaming Platform App"
        stackTitleOne="UI Designer"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/konnaku"
        imgPreview="/img/kpreview.jpg"
        title="Coffeeshop Landing Page"
        stackTitleOne="UI Designer"
        stackTitleTwo="Web Design"
      />
    </div>
  </section>
</template>

<script setup>
useHead({
  title: `Wemphy Stephian - Projects`,
});
</script>
