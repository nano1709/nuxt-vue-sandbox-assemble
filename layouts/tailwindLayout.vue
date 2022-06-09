<style scoped src="@/assets/css/tailwind.css">
</style>

<template>
  <main>

    <!-- NAVIGATION -->
    <nav class="flex justify-between px-12 h-96 pt-12 mx-auto bg-purple-800 text-white">
      <div class="mr-8 w-44 break-words text-left">
        <h3 class="text-2xl font-medium">ASSEMBLE'S TEST PAGE</h3>
      </div>
      <div class="hidden space-x-1.5 md:flex">
        <a href="">About</a> <div class="px-6">|</div>
        <a href="">Our Work</a> <div class="px-6">|</div>
        <a href="">Our Services</a> <div class="px-6">|</div>
        <a href="">Contact Us</a>
      </div>
      <div class="flex md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
    <!-- NAVIGATION -->


    <!-- MAIN CONTENT -->
    <div class="p-8 md:px-12 md:pb-2 md:pt-20">
      <Nuxt />
    </div>
    <!-- MAIN CONTENT -->


    <!-- FOOTER -->
    <footer class="flex flex-wrap px-12 py-8 bg-gray-700 text-white text-center md:px-12">
      <div class="my-2 px-2 w-full overflow-hidden xl:my-2 xl:px-2 xl:text-left">
        <div class="mr-8 break-word mx-4 md:mx-0 md:w-44">
          <h3 class="text-2xl font-medium text-white">ASSEMBLE'S TEST PAGE</h3>
        </div>
      </div>
      <div class="my-2 px-2 w-full overflow-hidden xl:my-2 xl:px-2">
        <div class="flex flex-wrap overflow-hidden xl:-ml-4">

          <div class="w-full my-4 overflow-hidden xl:my-4 xl:px-4 xl:w-1/4 xl:text-left">
            <h4>Philadelphia, Pensylvania</h4>
            <h4>+1 (000) 000 000</h4>
            <h4>contact@assemblestudio.com</h4>
          </div>

          <div class="w-full my-4 overflow-hidden xl:my-4 xl:pl-24 xl:w-3/4 xl:text-right">
            <div class="space-x-1.5 justify-between md:flex xl:pb-4 md:ml-[600px]">
              <h4><a href="">Terms of Use</a></h4><div class="hidden px-6 md:block">|</div>
              <h4><a href="">Privacy Policy</a></h4><div class="hidden px-6 md:block">|</div>
              <h4><a href="">Cookies</a></h4>
            </div>
            <div class="hidden md:inline-block">
              Assemble & Partners, LLC, A Digital Production Studio 2022 Copyright. All Rights Reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
    <!-- FOOTER -->


  </main>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'tailwindLayout'
})

</script>