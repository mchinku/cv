<template>
  <div class="flex flex-col content-container text-center justify-center gap-4 small-text font-bold mt-12">
    <div class="flex md:hidden w-full justify-center gap-20">
      <a
          v-for="item in icons"
          :id="item.link"
          :href="item.link"
          class="flex flex-shrink-0 w-6 cursor-pointer"
          target="_blank"
          v-html="item.icon"/>
    </div>
    <a class="hover:text-green" href="https://www.instagram.com/bchiang7" target="_blank">Inspired by <span
        class="underline font-bold">Brittany Chiang</span> </a>
    <p class="hover:text-green">Built by yours truly. ❤✌️</p>
    <div class="flex items-center gap-2 small-text font-bold w-full text-center justify-center">
      <p class="">Vue JS 👑👑👑</p>
      <p class="">Tailwind CSS 🦋🦋🦋</p>
    </div>
  </div>


  <div class="hidden md:flex flex-col gap-8 items-center justify-end fixed w-24 bottom-0 z-10">
    <a
        v-for="item in icons"
        :id="item.link"
        :href="item.link"
        class="flex flex-shrink-0 w-5 cursor-pointer"
        target="_blank"
        v-html="item.icon"/>
    <div class="w-0 h-24 border-[1px] border-slate"/>
  </div>

  <div class="hidden md:flex flex-col gap-5 items-center justify-end fixed z-10 bottom-0 right-0 w-24">
    <a
        :href="links.email"
        class="rotate-90 absolute left-1/2 -translate-x-1/2 hover:text-green transition-colors delay-75 ease-in-out
           duration-150 -top-[150%] text-[15px] font-semibold tracking-widest cursor-pointer">
      {{ links.email.split(":")[1] }}
    </a>
    <div class="w-0 h-24 border-[1px] border-slate"/>
  </div>


</template>

<script setup>
import {reactive} from "vue";

const links = reactive({
  twitter: import.meta.env.VITE_TWITTER,
  github: import.meta.env.VITE_GITHUB,
  linkedIn: import.meta.env.VITE_LINKEDIN,
  email: import.meta.env.VITE_EMAIL
})

const icons = [
  {
    icon: `
    <svg
    class="hover:text-green transition-colors ease-in-out delay-75 duration-300"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
    <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>
    </svg>
    `,
    link: links.github
  },
  {
    icon: `
    <svg
    class="hover:text-green transition-colors ease-in-out delay-75 duration-300"
    fill="currentColor"
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
    </svg>
    `,
    link: links.linkedIn
  },
  {
    icon: `
    <svg
    class="hover:text-green transition-colors ease-in-out delay-75 duration-300"
    fill="currentColor"
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
    </svg>
    `,
    link: links.twitter
  }
]
</script>
