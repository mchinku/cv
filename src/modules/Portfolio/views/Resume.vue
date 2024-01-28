<template>
    <iframe
        class="w-screen h-screen"
        id="resume"
        :src="resume"
        title="RESUME"
    >
    </iframe>
</template>

<script setup>

import {ref} from "vue";

const resume = ref(import.meta.env.VITE_GITHUB_RESUME)
</script>
