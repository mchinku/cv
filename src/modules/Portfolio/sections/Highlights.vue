<template>
  <div class="flex flex-col gap-2 pt-10 md:pt-0 w-full">
    <p class="text-green h1 mb-3">Highlights</p>
    <div class="flex flex-col md:flex-row lg:flex-col gap-6 lg:gap-5">
      <div
          v-for="(item, index) in highlights"
          :key="index"
           class="flex flex-col w-full shadow-lg px-[20px] py-[34px] rounded-md justify-center
           text-lightest-slate bg-light-navy gap-4 ">
        <img :src="item.image" alt="" class="w-6 h-6 lg:w-10 lg:h-10 text-green">
        <p class="h2 text-green">{{item.title}}</p>
        <div v-html="item.description" class="paragraph tracking-wide " />
      </div>
    </div>
  </div>
</template>

<script setup>

const highlights = [
  {
    title: "Front End Developer",
    image: "/imgs/code-solid.svg",
    description: `<p>
                    I build intuitive and elegant interfaces.<br />I am a very visual person and there's nothing I
                    admire more than a refined interface.
                    </p>`
  },
  {
    title: "Back End Developer",
    image: "/imgs/gear-solid.svg",
    description:`<p>
                    I build APIs and organize models to persist  data for applications.<br />
                     Maintainability is very important to me, therefore I try to keep my logic simple and modular.
                    </p>`
  },
]
</script>
