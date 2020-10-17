<template>
    <Layout>
      <div class="w-100 bg-blogbg">
          <div class="container justify-center content-center grid grid-cols-1 py-10 px-auto markdown px-6 xl:px-12 w-full max-w-3xl mx-auto xl:w-4/4">
            <h1 class="text-2xl mb-2 text-center text-primary"> {{$page.post.title}} </h1>
            <p class="font-light text-sm text-center text-white mb-6"> Posted on {{$page.post.date}} </p>
            <div id="body" class="max-auto-sm text-left" v-html="body" />
            <div class="pt-20">
            </div>
          </div>
        </div>
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
    post: contentfulBlogPost (path: $path){
        id,
        title,
        body,
        date (format: "DD MMMMM, YYYY"),
        path
    }
}
</page-query>

<script>
    import MarkdownIt from "markdown-it";
    export default {
        computed: {
        body() {
            const md = new MarkdownIt();
            return md.render(this.$page.post.body);
            }
        }
    };
</script>

<style>
html {
  overflow-y: overlay;
}

#body {
  color: rgb(64, 255, 241);
}
#body h1 {
  font-size: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
}
#body hr {
  padding-bottom: 10px;
}
#body pre {
  background-color: #2d3748;
  color: rgb(64, 255, 241);
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
}
#body pre code {
  overflow: scroll;
  max-height: 400px;
}
#body ul li {
  list-style-position: inside;
  list-style-type: square;
}
#body ol {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  list-style-type: decimal;
  list-style-position: inside;
}

html::-webkit-scrollbar, *::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
html, * {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>