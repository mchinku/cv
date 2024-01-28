<template>
    <div class="fixed inset-0 w-screen h-screen bg-transparent z-50" @click="emits('toggleSidebar')">
        <div class="w-[80vw] h-screen fixed top-0 right-0 bg-light-navy  lg:hidden shadow-lg shadow-navy-shadow"
             @click.stop="">
            <svg
                    class="w-8 absolute top-8 text-green right-4 z-50"
                    fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                    @click="emits('toggleSidebar')">
                <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0
            1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>

            <div class="flex flex-col h-full justify-center mx-auto self-center w-1/2 gap-6 text-lightest-slate">
                <a
                        v-for="(item, index) in navItems"
                        :href="item.link"
                        class="sm text-center"
                        @click="emits('toggleSidebar')">

                    <p class="text-green">0{{ index + 1 }}. </p>
                    <p class="">{{ item.text }}</p>
                </a>
            </div>

        </div>
    </div>


</template>

<script setup>
import {navItems} from "@/shared/data/navItems.js";
import {useRouter} from "vue-router";

const emits = defineEmits(['toggleSidebar'])
const router = useRouter()

</script>