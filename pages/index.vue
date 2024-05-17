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
          <NuxtLink
            to="/projects"
            class="rounded-xl btn-primary text-lg w-48 text-center px-8 py-2 hover:scale-105 hover:-translate-x-0 hover:duration-500"
          >
            See Projects
          </NuxtLink>
        </div>

        <div class="mt-10 sm:mt-0 flex items-center gap-4 justify-center">
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
      </div>
    </div>
    <div class="flex justify-center mt-10 lg:flex lg:justify-end lg:mt-0">
      <img class="w-auto" src="/img/profile.png" alt="" />
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
  <section class="completed-project px-10 mt-10 sm:px-28">
    <div class="text-4xl font-bold text-center py-10">
      Best completed projects
    </div>
    <div class="mx-auto text-2xl font-medium text-center">
      Choose my work project
    </div>
    <div class="flex flex-wrap items-center justify-center gap-8 py-10">
      <CardProject
        linkProject="/projects/circlemoviez"
        imgPreview="/img/cmpreview.jpg"
        title="Redesign Movie Streaming App"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
      <CardProject
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
        title="Concept Influencer Market"
        stackTitleOne="UI Design"
        stackTitleTwo="Mobile App"
      />
    </div>
    <div class="flex items-center">
      <NuxtLink
        to="/projects"
        class="mx-auto rounded-xl btn-primary text-lg w-48 text-center px-8 py-2 hover:scale-105 hover:-translate-x-0 hover:duration-500 font-medium"
      >
        See More
      </NuxtLink>
    </div>
  </section>
  <section class="contact px-10 sm:px-24">
    <div class="text-4xl font-bold text-center py-10">
      That's all about me, feel free to say hi!
    </div>
    <div class="mx-auto text-2xl font-medium text-center">
      Pour your ideas into my email or can discuss with me. I am available 7am
      to 5pm. I'm very willing to work with you.
    </div>
    <div class="py-10 text-center">
      <a href="mailto:wemphysp@gmail.com">
        <button
          class="rounded-xl btn-primary text-lg text-center py-2 px-2 sm:px-8 hover:scale-105 hover:-translate-x-0 hover:duration-500"
        >
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
        </button>
      </a>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: `Wemphy Stephian - Home`,
});
</script>

<style></style>
