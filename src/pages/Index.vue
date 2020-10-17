<template class="example">
  <Layout>
    <div class="w-100 bg-blogbg"> <!--applies the bakground color-->
    <div class="xs:py-12 py-7">
      <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--- left column --->
        <div class="flex flex-col w-full md:w-2/5 justify-center justify-between text-center md:text-left pr-1 pb-10 text-primary">
          <p class="uppercase tracking-loose">
            ToinToin Inc.
          </p>
          <h1 class="py-4 text-5xl font-bold leading-tight">Welcome to my RPGLE blog where I write about my experiences</h1>
          <p class="leading-normal text-2xl pb-8">Created by a lowly web dev</p>
          <!-- <button class="w-2/3 mr-auto xs:mx-auto transition-colors duration-500 ease-in-out bg-primary text-white font-bold hover:bg-darkgray rounded-full my-4 py-4 px-2 shadow-lg"> -->
            <g-link class="text-blogbg w-2/3 mr-auto xs:mx-auto text-center transition-colors duration-500 ease-in-out bg-primary font-bold hover:bg-darkgray hover:text-white rounded-full py-4 px-2 shadow-lg text-2xl justify-center" to="/blog">Blog</g-link>
          <!-- </button>      -->
        </div>
        <!--- RIGHT COLUMN --->
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="pointer-events-none w-full md:w-5/5 z-50" src="../../static/images/undraw_dev_focus_b9xo.svg" alt="Dev Productivity">
        </div>
      </div>
    </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

.example {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

