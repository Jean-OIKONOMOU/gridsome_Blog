<template class="example">
  <div class="flex flex-col h-screen justify-between bg-blogbg">
    <header class="md:flex md:items-centers 
    md:justify-around p-4 shadow-lg md:pb-4 border-b border-primary bg-blogbg">
      <nav class="flex flex-wrap item-center justify-around text-primary">
        <div>
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4 nav_li">
              <g-link active-class exact-active-class="isActive" class="transition-colors duration-500 ease-in-out nav__link block 
              py-2 md:p-0"
              to="/">Home</g-link>
            </li>
            <li class="md:ml-4 nav_li">
              <g-link active-class exact-active-class="isActive" class="transition-colors duration-500 ease-in-out nav__link block 
              py-2 md:p-0"
              to="/about">About</g-link>
            </li>
            <li class="md:ml-4">

            </li>
            <li class="md:ml-4">

            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!--- END NAVIGATION --->
    <slot/> <!--- THIS ALLOWS FOR THE OTHER PAGES TO SLOT INTO THIS PLACE --->

    <footer class="font-light text-primary w-full text-center p-4 text-primary bg-blogbg">
      <p class="text-2xl">
        Copyright JAO / 2020
      </p>
      <div>
        <p class="text-small font-light">
          Developed using Gridsome, Tailwind, and Contentful
        </p>
      </div>
    </footer>
  </div>
  <!-- <static-query>
query {
  metadata {
    siteName
  }
}
</static-query> -->
</template>

<style>
.nav_li {
  position: relative;
}
.nav_li a:after {
  content: '';
  display: block;
  border-bottom: 3px solid rgb(64, 255, 241);
  width: 0;
  position: absolute;
  left: 0;
  -webkit-transition: 100ms ease;
  transition: 100ms ease;
}

.nav_li a:hover:after { 
  width: 100%; 
}

.isActive:after {
  content: '';
  display: block;
  border-bottom: 3px solid rgb(64, 255, 241);
  width: 0;
  position: absolute;
  left: 0;
  width:100%;
}

.example::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

.example {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>


