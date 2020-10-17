<template>
  <Layout>
    <div class="w-100 bg-blogbg"> <!--applies the bakground color-->
    <div class="container justify-center content-center gird grid-cols-1 py-10 px-auto markdown px-6 xl:px-12 w-full max-w-3xl mx-auto xl:w-4/4">
          <h1 class="text-2xl mb-2 text-center text-primary"> This page needs more content, obviously.</h1>
          <p class="text-white font-light text-sm text-center text-gray mb-6"> 
            In the future I think I will populate this page with more content.
            I don't yet see what exactly I could write here. Maybe something about myself ?
          </p>
          
          <div class="pt-20 flex">
            <g-link class="w-2/3 hover:bg-darkgray hover:text-white mx-auto text-center transition-colors duration-500 ease-in-out bg-primary font-bold hover:bg-darkgray rounded-full py-4 px-2 shadow-lg text-2xl justify-center" to="/blog">Blog</g-link>
          </div>
  </div>
  </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style>
html::-webkit-scrollbar, *::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
html, * {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>