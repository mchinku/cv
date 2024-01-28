<template>
  <div class="content-container text-lightest-slate gap-6 flex flex-col" id="companies">
    <heading number="02" text="Organizations"/>
    <div
        class="flex flex-col md:flex-row shadow-lg w-full rounded-lg bg-light-navy  p-4 lg:px-12 md:py-16 gap-3
        md:gap-12 md:justify-between md:items-center">
      <div class="flex flex-col gap-6 max-w-sm">
        <p class="text-green h2">
          Organizations I have worked with.
        </p>
        <p class="hidden md:flex paragraph md:my-4">
          I have worked with these brands and companies to bring amazing software solutions to life.
        </p>
        <a
            :href="links.email"
            class="cta  py-[0.75rem] w-full md:w-44 flex items-center justify-center my-4 md:my-0"
            @click="hireMe">
          Hire Me
        </a>
      </div>

      <div class="grid grid-cols-2 gap-x-1 gap-y-1 w-full lg:w-[45.5%] h-full">
        <a
            v-for="(item, index) in companies"
            :key="item.url"
            :class="item.containerStyles"
            :href="item.url"
            class="w-full h-24 md:h-28 lg:h-28 bg-lightest-navy flex justify-center items-center"
            target="_blank"
        >
          <img
              :key="index"
              :class="item.styles"
              :src="item.logo" alt="icon">
        </a>

      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import Heading from "@/shared/components/Heading.vue";

const links = reactive({
  email: import.meta.env.VITE_EMAIL
})

const hireMe = () => {
  gtag("event", "hire_me", {
    'section': 'companies',
  })
}
</script>

