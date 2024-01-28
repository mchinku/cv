<script setup>

import Heading from "@/shared/components/Heading.vue";
import {intro, technologies} from "@/shared/data/intro.js";
</script>

<template>
  <div class="content-container flex flex-col gap-6" id="about">
    <heading number="01" text="About me"/>
    <div class="flex flex-col lg:flex-row lg:justify-between gap-4 px-[20px] py-[34px] text-lightest-slate tracking-wide bg-light-navy rounded-md">
      <div class="flex flex-col gap-4 max-w-2xl">
        <!--    Intro paragraphs-->
        <div class="" v-html="intro"/>
        <div class="mt-6">Here are a few technologies I've been working with recently:</div>
        <div class="grid grid-cols-2 gap-2 pb-6">
          <div v-for="item in technologies" :key="item" class="flex items-center gap-2">
            <img alt="" class="w-4 h-4" src="/imgs/lightbulb-solid.svg">
            <p class="text-sm font-light">{{ item }}</p>
          </div>
        </div>
      </div>

      <div class="flex p-8 group cursor-pointer max-w-md">
        <div
            class="flex rounded-md border-2 border-green  mx-auto bg-center relative
            group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 delay-75 ease-in-out">
          <img alt=""
               class="rounded-md object-top object-cover -translate-x-3 -translate-y-3 z-10 grayscale
               group-hover:grayscale-0 group-hover:saturate-150 group-hover:-translate-y-6 group-hover:-translate-x-6
               transition-all duration-300 delay-75 ease-in-out"
               src="">
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.profile {

}
</style>