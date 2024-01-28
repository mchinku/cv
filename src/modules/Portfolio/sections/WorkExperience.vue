<template>
  <div id="experience" class="content-container flex flex-col gap-6 ">
    <heading number="03" text="Work Experience"/>

    <div class="flex flex-col md:flex-row gap-2 w-full mt-7 maxxl">
      <div
          class="flex md:flex-col items-center md:items-start h-20 md:h-full md:w-full relative transition overflow-x-scroll
           md:overflow-x-clip md:gap-5 lg:border-l-[1px] border-lightest-navy tab-container"
          role="tablist"
      >
        <div class="absolute w-32 md:w-1 indicator h-[2px] md:h-[32px] z-10 my-auto top-[90%] md:top-0
         left-0 md:-left-[2.5px] rounded-full bg-green shadow-md"/>
        <button
            v-for="place in places"
            :id="place.id"
            :key="place.id"
            :aria-controls="place.name"
            :class="[state.selectedWorkplaceID === place.id ? 'bg-light-navy border-0 md:border-green-tint':
             ' border-light-navy']"
            class="relative block h-10 px-4 md:px-0 md:w-full md:ml-3 text-left tab  whitespace-nowrap transition
            duration-[400ms] md:lg "
            role="tab"
            @click="state.selectedWorkplaceID = place.id">
          <span class="text-lightest-slate cursor-pointer text-sm font-semibold md:font-normal md:subtitle">{{ place.name }}</span>
        </button>
      </div>
      <div class="flex flex-col text-lightest-slate px-6 w-full overflow-x-scroll gap-2">
        <p class="text-base md:h3">
          {{ selectedPlaceDetails.position }}
          <a :href="selectedPlaceDetails.link" class="text-green " target="_blank">@ {{
              selectedPlaceDetails.name
            }}</a>
        </p>
        <p class="paragraph text-light-slate">{{ selectedPlaceDetails.duration }}</p>
        <div class="flex flex-col gap-4 w-full py-4">
          <div
              :key="index"
              v-for="(role, index) in selectedPlaceDetails.roles"
              class="flex w-full gap-2 flex-shrink-0 items-start paragraph">
            <svg
                class="text-green w-3 h-7"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
              <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
            <p class="w-full">{{ role }}</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import Heading from "@/shared/components/Heading.vue";
import {computed, onMounted, reactive} from "vue";
import {places} from "@/shared/data/placesWorked.js";


const state = reactive({
  selectedWorkplaceID: places[0].id,
  indicator: "",
  tabs: "",
  panels: ""
})


const selectedPlaceDetails = computed(() =>
    places.find(item => item.id === state.selectedWorkplaceID)
)


const initIndicator = (innerWidth) => {
  if (innerWidth < 768) {
    state.indicator.style.height = '2px'
    state.indicator.style.width = state.tabs[0].getBoundingClientRect().width + 'px'
    state.indicator.style.left = state.tabs[0].getBoundingClientRect().left - state.tabs[0].parentElement.getBoundingClientRect().left + 'px'
  } else {
    state.indicator.style.width = '4px'

    state.indicator.style.height = state.tabs[0].getBoundingClientRect().height + 'px'
    state.indicator.style.top = state.tabs[0].getBoundingClientRect().top - state.tabs[0].parentElement.getBoundingClientRect().top + 'px'

  }
}

const resizeHandler = (innerWidth) => {
  state.selectedWorkplaceID = places[0].id

  if (innerWidth < 768) {
    state.indicator.style.height = '2px'
    state.indicator.style.top = '90%'
    state.indicator.style.width = state.tabs[0].getBoundingClientRect().width + 'px'
    state.indicator.style.left = state.tabs[0].getBoundingClientRect().left - state.tabs[0].parentElement.getBoundingClientRect().left + 'px'
  }
  else{
    state.indicator.style.width = '4px'
    state.indicator.style.height = state.tabs[0].getBoundingClientRect().height + 'px'
    state.indicator.style.top = state.tabs[0].getBoundingClientRect().top - state.tabs[0].parentElement.getBoundingClientRect().top + 'px'

  }
}


onMounted(() => {
  state.tabs = document.querySelectorAll(".tab")
  state.indicator = document.querySelector(".indicator")
  state.panels = document.querySelectorAll(".tab-panel")


  window.addEventListener('resize', () => {
    resizeHandler(window.innerWidth)
  })

  initIndicator(window.innerWidth)

  state.tabs.forEach(tab => {

    tab.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        state.indicator.style.height = '2px'
        state.indicator.style.width = tab.getBoundingClientRect().width + 'px'
        state.indicator.style.left = tab.offsetLeft + 'px'
        document.getElementById(state.selectedWorkplaceID).scrollIntoView({behavior: 'smooth', block: "nearest"})
      } else {
        state.indicator.style.width = '4px'

        state.indicator.style.height = tab.getBoundingClientRect().height + 'px'
        state.indicator.style.top = tab.offsetTop + 'px'

      }


      let tabTarget = tab.getAttribute("aria-controls")

      state.panels.forEach(panel => {
        let panelId = panel.getAttribute("id")

        if (tabTarget === panelId) {
          panel.classList.remove("invisible", "opacity-0")
          panel.classList.add("visible", 'opacity-100')
        } else {
          panel.classList.add("invisible", 'opacity-0')
        }

      })
    })
  })
})


</script>


<style scoped>
.indicator {
  transition: top .4s, left .4s;
}
</style>

