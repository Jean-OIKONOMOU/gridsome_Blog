<template>
  <Layout>
    <div class="xs:py-12 py-7">
      <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--- left column --->
        <div class="flex flex-col w-full md:w-2/5 justify-center justify-between text-center md:text-left pr-1 pb-10 text-primary">
          <p class="uppercase tracking-loose">
            ToinToin Inc.
          </p>
          <h1 class="py-4 text-5xl font-bold leading-tight">Welcome to our company of dedicated web developers</h1>
          <p class="leading-normal text-2xl pb-8">Creating custom sites for you !</p>
          <!-- <button class="w-2/3 mr-auto xs:mx-auto transition-colors duration-500 ease-in-out bg-primary text-white font-bold hover:bg-darkgray rounded-full my-4 py-4 px-2 shadow-lg"> -->
            <g-link class="w-2/3 mr-auto xs:mx-auto text-center transition-colors duration-500 ease-in-out bg-primary text-white font-bold hover:bg-darkgray rounded-full py-4 px-2 shadow-lg text-2xl justify-center" to="/blog">Blog</g-link>
          <!-- </button>      -->
        </div>
        <!--- RIGHT COLUMN --->
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="pointer-events-none w-full md:w-5/5 z-50" src="../../static/images/undraw_dev_focus_b9xo.svg" alt="Dev Productivity">
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

