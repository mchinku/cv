<template>
  <div class="w-full flex items-baseline gap-2 whitespace-nowrap ">
    <p class="text-green subtitle">{{number}}.</p>
    <p class="text-lightest-slate h3 md:h1">{{text}}</p>
    <div class="w-full h-[0.5px] self-center bg-lightest-slate opacity-20"/>
  </div>
</template>

<script setup>
const props = defineProps(['number', "text"])
</script>
