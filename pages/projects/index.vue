<template>
  <section class="px-10 sm:px-14 lg:px-28">
    <div
      class="text-4xl font-bold text-center py-10 animate__animated animate__fadeInLeft"
    >
      My projects
    </div>
    <div
      class="mx-auto text-2xl text-center animate__animated animate__fadeInRight"
    >
      These are some of the projects I've worked on before
    </div>
    <div class="flex flex-wrap items-center justify-center gap-8 py-10">
      <CardProject
        class="animate__animated animate__fadeInLeft"
        linkProject="/projects/circlemoviez"
        imgPreview="/img/cmpreview.jpg"
        title="Movie Streaming App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        class="animate__animated animate__fadeInRight"
        linkProject="/projects/racingparts"
        imgPreview="/img/rppreview.jpg"
        title="Racing Parts Landing Page"
        stackTitleOne="UI Design"
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
        title="Influencer Marketplace App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/gamerz"
        imgPreview="/img/gpreview.jpg"
        title="Gaming Platform App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/konnaku"
        imgPreview="/img/kpreview.jpg"
        title="Coffeeshop Landing Page"
        stackTitleOne="UI Design"
        stackTitleTwo="Web Design"
      />
      <CardProject
        linkProject="/projects/gabsi"
        imgPreview="/img/gjpreview.jpg"
        title="GABSI Jatim Information System Website"
        stackTitleOne="Web App"
        stackTitleTwo="Laravel"
      />
      <CardProject
        linkProject="/projects/kencan"
        imgPreview="/img/dapreview.jpg"
        title="Dating Platform App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/propertiku"
        imgPreview="/img/ppreview.jpg"
        title="Property Estate App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/konsuldok"
        imgPreview="/img/kdpreview.jpg"
        title="Doctor Consultation App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/cryptowallet"
        imgPreview="/img/cwpreview.jpg"
        title="Crypto Wallet App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
    </div>
  </section>
</template>

<script setup>
useHead({
  title: `Wemphy Stephian - Projects`,
});
</script>
