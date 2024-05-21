<template>
  <div
    class="py-10 image-container rounded-xl flex justify-center items-center"
  >
    <img class="rounded-xl" :src="imgProject" alt="" />
  </div>
  <div class="title-container text-center">
    <div class="text-4xl font-medium">{{ titleProject }}</div>
    <div class="font-medium text-xl my-2">{{ subTitleProject }}</div>
    <div class="flex items-center justify-center gap-4">
      <TechStack :title="titleStackOne" />
      <TechStack :title="titleStackTwo" />
    </div>
  </div>
  <div class="description-container">
    <div class="introduction my-10">
      <div class="text-2xl font-medium">Introduction</div>
      <div class="text-xl mt-2 text-justify">
        {{ introProject }}
      </div>
    </div>
    <div class="my-role my-10">
      <div class="text-2xl font-medium">My Role</div>
      <div class="text-xl mt-2 text-justify">
        {{ roleProject }}
      </div>
    </div>
    <div class="problem my-10">
      <div class="text-2xl font-medium">Problem</div>
      <div class="text-xl mt-2 text-justify">
        {{ problemProject }}
      </div>
    </div>
    <div class="final-design my-10">
      <div class="text-2xl font-medium">Final Design</div>
      <div class="text-xl mt-2">
        <div class="flex items-center flex-wrap gap-4 justify-center">
          <img class="rounded-xl" :src="imgOne" alt="" />
          <img class="rounded-xl" :src="imgTwo" alt="" />
          <img class="rounded-xl" :src="imgThree" alt="" />
          <img class="rounded-xl" :src="imgFour" alt="" />
        </div>
      </div>
    </div>
    <div class="prototype my-10">
      <div class="text-2xl font-medium">Prototype</div>
      <div class="text-xl mt-2">
        <div class="border-primary rounded-xl">
          <div class="block md:flex items-center justify-between gap-4 p-2.5">
            <img
              class="mx-auto mb-2 md:mx-0 md:mb-0"
              src="/img/figma.png"
              alt=""
            />
            <div>
              <div class="font-medium text-center">{{ titleProject }}</div>
              <div class="font-light text-sm text-center">www.figma.com</div>
            </div>
            <a :href="linkFigma" target="_blank">
              <button
                class="flex items-center gap-4 py-2 px-4 bg-neutral-800 rounded-xl mx-auto mt-2 md:mx-0 md:mt-0 hover:scale-105 hover:-translate-x-0 hover:duration-500"
              >
                <img src="/img/figma.png" alt="" />
                <p class="font-medium text-white">Open in Figma</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgProject: String,
  titleProject: String,
  subTitleProject: String,
  titleStackOne: String,
  titleStackTwo: String,
  introProject: String,
  roleProject: String,
  problemProject: String,
  imgOne: String,
  imgTwo: String,
  imgThree: String,
  imgFour: String,
  linkFigma: String,
});
</script>

<style>
.link {
  transition: 0.3s;
}
.link:hover {
  background-color: #525252;
  color: white;
}
</style>
