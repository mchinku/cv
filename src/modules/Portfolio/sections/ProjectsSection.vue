<template>
  <div id="projects" class="content-container flex flex-col gap-6  w-full ">
    <heading number="04" text="Featured Projects"/>
    <div class="flex flex-col w-full gap-24 lg:gap-44  py-12 lg:py-20 relative">

      <div
          v-for="(item, index) in projects"
          :key="item.link"
          class="flex flex-col relative w-full">
        <div
            :class="[index % 2 == 0 ? 'lg:left-1/3' : 'lg:left-0']"
            :style="{backgroundImage: 'url(' +item.image + ')' }"
            class="absolute h-[180px] md:h-[300px] w-[87%] md:w-[92%] -top-[20px] md:-top-[30px] -translate-x-1/2
            lg:-translate-x-0 lg:top-1/2 lg:-z-10 lg:w-8/12 lg:h-[450px] lg:-translate-y-[57%] left-1/2 bg-cover
             bg-center rounded-lg"
        />
        <div
            :class="[index % 2 == 0 ? '' : 'lg:self-end lg:items-end']"
            class="flex flex-col gap-4 text-lightest-slate bg-lightest-navy lg:bg-transparent w-full
             lg:max-w-[580px] 3xl:max-w-2xl px-4 lg:px-0 pb-8 pt-[55%] lg:pt-0 rounded-2xl">
          <a
              :href="item.link"
              class="h2 text-white hover:text-green cursor-pointer -mt-3"
              target="_blank">
            {{ item.name }}</a>
          <div
              :class="[index % 2 == 0? 'lg:pr-[10%]' : 'lg:text-right lg:pl-[10%]']"
              class="lg:bg-light-navy lg:px-8 lg:py-8 lg:rounded-lg paragraph leading-loose lg:h-60 flex flex-col lg:justify-center"
              v-html="item.desc"/>
          <div
              :class="[index % 2 == 0 ? 'lg:pr-[50%]' : 'lg:pl-[48%] lg:text-right lg:justify-end']"
              class="flex flex-wrap items-center gap-x-4 gap-y-1 my-2">
            <p
                v-for="(tech, index) in item.technologies"
                :key="index"
                class="small-text text-green font-thin cursor-pointer">{{ tech }}</p>
          </div>

          <a
              class="mt-4 lg:mt-0"
              :href="item.link"
              target="_blank">
            <svg
                class="h-6 w-6 cursor-pointer text-green"
                fill="#64ffda"
                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
            </svg>
          </a>

        </div>

      </div>


    </div>
  </div>
</template>

<script setup>
import Heading from "@/shared/components/Heading.vue";
import {projects} from "@/shared/data/projects.js";
</script>