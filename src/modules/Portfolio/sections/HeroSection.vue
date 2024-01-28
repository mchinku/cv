<template>
  <div class=" flex flex-col pt-32 md:pt-0 gap-2 w-full min-h-full">
    <p class="text-lightest-slate name font-semibold leading-[1.1]">
      <span class="text-green">Hello, </span>I am Collins 
      Kiplangat</p>
    <p class="text-lightest-slate h2 my-6 w-full"> Junior web developer.</p>
    <p class="text-lightest-slate paragraph  mt-3 lg:w-10/12">
      A solution-focused  developer. I specialize in building scalable and maintainable software.
    </p>

    <p class="text-lightest-slate paragraph  mt-3 lg:w-10/12">Striving to make the web a beautiful place one line of
      code at a time !</p>
    <a
        :href="links.email"
        class="cta mt-12 lg:mt-auto justify-self-end py-[0.75rem] w-44 flex items-center justify-center"
        @click="hireMe">
      Hire Me
    </a>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const links = reactive({
  email: import.meta.env.VITE_EMAIL
})

const hireMe = () => {
  gtag("event", "hire_me", {
    'section': 'hero',
  })
}

</script>

<style>
.name {
  font-size: clamp(40px, 8vw, 80px);
}

</style>
