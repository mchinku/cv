<template>
  <navbar @toggleSidebar="state.isSidebarOpen = !state.isSidebarOpen"/>
  <sidebar v-if="state.isSidebarOpen" @toggleSidebar="state.isSidebarOpen = !state.isSidebarOpen"/>
  <div class="content-container flex w-full flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
    <hero-section/>
    <highlights/>
  </div>
  <Me />
  <companies/>
  <work-experience/>
  <projects-section/>
  <get-in-touch />
  <Footer />
</template>

<script setup>
import Navbar from "@/shared/components/Navbars/Navbar.vue";
import Sidebar from "@/shared/components/Sidebars/Sidebar.vue";
import {reactive} from "vue";
import HeroSection from "@/modules/Portfolio/sections/HeroSection.vue";
import Highlights from "@/modules/Portfolio/sections/Highlights.vue";
import Companies from "@/modules/Portfolio/sections/Companies.vue";
import WorkExperience from "@/modules/Portfolio/sections/WorkExperience.vue";
import ProjectsSection from "@/modules/Portfolio/sections/ProjectsSection.vue";
import GetInTouch from "@/modules/Portfolio/sections/GetInTouch.vue";
import Footer from "@/modules/Portfolio/sections/Footer.vue";
import Me from "@/modules/Portfolio/sections/Me.vue";

const state = reactive({
  isSidebarOpen: false
})

</script>
