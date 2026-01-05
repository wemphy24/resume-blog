<template>
  <section class="max-w-screen-2xl mx-auto px-10 md:px-20">
    <div
      class="text-2xl sm:text-4xl font-medium text-center py-10 animate__animated animate__fadeInLeft"
    >
      My Projects
    </div>
    <div
      class="text-xl sm:text-2xl text-center animate__animated animate__fadeInRight"
    >
      These are some of the projects I've worked on before
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center py-10">
      <CardProject
        class="animate__animated animate__fadeInLeft"
        linkProject="/projects/circlemoviez"
        imgPreview="/img/circlemoviezproject.jpg"
        title="Movie Streaming App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        class="animate__animated animate__fadeInDown"
        linkProject="/projects/racingparts"
        imgPreview="/img/racingpartsproject.jpg"
        title="Racing Parts Landing Page"
        stackTitleOne="UI Design"
        stackTitleTwo="Web Design"
      />
      <CardProject
      class="animate__animated animate__fadeInRight"
        linkProject="/projects/simgroup"
        imgPreview="/img/simproject.jpg"
        title="Manufacturing Information System"
        stackTitleOne="Web App"
        stackTitleTwo="Laravel"
      />
      <CardProject
        linkProject="/projects/influencer"
        imgPreview="/img/influencerproject.jpg"
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
        imgPreview="/img/konnakuproject.jpg"
        title="Coffeeshop Landing Page"
        stackTitleOne="UI Design"
        stackTitleTwo="Web Design"
      />
      <CardProject
        linkProject="/projects/gabsi"
        imgPreview="/img/gabsiproject.jpg"
        title="GABSI Jatim Information System Website"
        stackTitleOne="Web App"
        stackTitleTwo="Laravel"
      />
      <CardProject
        linkProject="/projects/kencan"
        imgPreview="/img/datingproject.jpg"
        title="Dating Platform App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/propertiku"
        imgPreview="/img/propertyestateproject.jpg"
        title="Property Estate App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/konsuldok"
        imgPreview="/img/konsuldocproject.jpg"
        title="Doctor Consultation App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/cryptowallet"
        imgPreview="/img/cryptoproject.jpg"
        title="Crypto Wallet App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
        linkProject="/projects/infusion"
        imgPreview="/img/infusionproject.jpg"
        title="IV Theraphy Service App"
        stackTitleOne="UI Design"
        stackTitleTwo="Web App"
      />
    </div>
  </section>
</template>

<script setup>
useHead({
  title: `Wemphy Stephian - Projects`,
});
</script>
