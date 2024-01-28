<template>
  <div id="contact" class="content-container flex flex-col gap-6 justify-center text-center">
    <p class="h1 text-lightest-slate">Get In Touch</p>
    <p class="subtitle text-lightest-slate ">
      Got a question or have a proposal ? Let's chat. 😁
    </p>

    <a
        @click="hireMe"
        :href="links.email"
        class="cta mt-6  py-[0.75rem] w-44 flex items-center justify-center self-center">Hire Me</a>
  </div>
</template>

<script setup>


import {reactive} from "vue";

const links = reactive({
  email: import.meta.env.VITE_EMAIL
})

const hireMe = () => {
  gtag("event", "hire_me", {
    'section': 'footer',
  })
}
</script>