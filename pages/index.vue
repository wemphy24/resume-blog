<template>
  <!-- Meet Intro -->
  <section
    class="intro bg-[#18181B] px-4 sm:px-14 py-10 grid grid-cols-1 lg:grid-cols-2"
  >
    <div
      class="my-auto flex flex-col gap-12 animate__animated animate__fadeInDown"
    >
      <div class="text-white font-medium text-4xl text-center lg:text-start">
        <div>Hello I'm</div>
        <div>Wemphy Stephian</div>
      </div>
      <div class="text-white text-xl text-center lg:text-start">
        <p>
          Passionate about web development and UI/UX design — I turn ideas into
          stunning, functional websites that help businesses grow. Let's build
          something great together!
        </p>
      </div>
      <div
        class="block sm:flex gap-8 items-center justify-center lg:justify-start"
      >
        <div class="flex justify-center items-center">
          <NuxtLink
            to="/projects"
            class="btn-primary font-medium rounded-xl text-lg w-48 text-center px-8 py-2 hover:scale-105 hover:-translate-x-0 hover:duration-500"
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
    <div
      class="flex justify-center mt-10 lg:flex lg:justify-end lg:mt-0 animate__animated animate__fadeInRight"
    >
      <img class="w-auto" src="/img/new_emoji.png" alt="" />
    </div>
  </section>
  <!--  -->

  <!-- Promotion Social -->
  <section
    class="relative flex overflow-x-hidden bg-slate-200 animate__animated animate__flipInX"
  >
    <div class="py-10 animate-marquee whitespace-nowrap">
      <span class="mx-24 text-3xl font-bold">Behance</span>
      <span class="mx-24 text-3xl font-bold">Fiverr</span>
      <span class="mx-24 text-3xl font-bold">Dribble</span>
      <span class="mx-24 text-3xl font-bold">Upwork</span>
      <span class="mx-24 text-3xl font-bold">Linked In</span>
    </div>

    <div class="absolute top-0 py-10 animate-marquee2 whitespace-nowrap">
      <span class="mx-24 text-3xl font-bold">Behance</span>
      <span class="mx-24 text-3xl font-bold">Fiverr</span>
      <span class="mx-24 text-3xl font-bold">Dribble</span>
      <span class="mx-24 text-3xl font-bold">Upwork</span>
      <span class="mx-24 text-3xl font-bold">Linked In</span>
    </div>
  </section>
  <!--  -->

  <!-- Completed Projects -->
  <section class="completed-project px-4 sm:px-14 lg:px-28">
    <div class="text-4xl font-medium text-center py-10">
      Best completed projects
    </div>
    <div class="mx-auto text-2xl text-center">Choose my work project</div>
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
      <CardProject
        linkProject="/projects/gamerz"
        imgPreview="/img/gpreview.jpg"
        title="Redesign Gaming Platform App"
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
    </div>
    <div class="flex items-center">
      <NuxtLink
        to="/projects"
        class="btn-primary font-medium mx-auto rounded-xl text-lg w-48 text-center px-8 py-2 hover:scale-105 hover:-translate-x-0 hover:duration-500"
      >
        See More
      </NuxtLink>
    </div>
  </section>
  <!--  -->

  <!-- Say Hi  -->
  <section class="contact px-4 sm:px-14">
    <div class="text-4xl font-medium text-center py-10">
      That's a little about me, feel free to say hi anytime!
    </div>
    <div class="mx-auto text-2xl text-center">
      Got a project in mind? I'd love to hear about it! Let's discuss your ideas
      and create something impactful. I'm ready to work with you.
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
  <!--  -->
</template>

<script setup>
useHead({
  title: `Wemphy Stephian - Home`,
});
</script>

<style></style>
