<template>
  <div class="flex flex-col h-screen justify-between">
    <header class="md:flex md:items-centers 
    md:justify-around p-4 shadow-lg md:pb-4 bg-white">
      <nav class="flex flex-wrap item-center justify-around text-primary">
        <div>
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
              <g-link class="nav__link block no-underline 
              py-2 hover:text-darkgray md:border-none md:p-0"
              to="/">Home</g-link>
            </li>
            <li class="md:ml-4">
              <g-link class="nav__link block no-underline 
              py-2 hover:text-darkgray text-grey-darkest md:border-none md:p-0"
              to="/about/">About</g-link>
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

    <footer class="mt-20 font-light text-gray w-full text-center p-4 text-primary">
      <p class="text-2xl">
        Copyright YOUR NAME 2020
      </p>
      <div>
        <p class="text-small font-light">
          Developed using Gridsome, Tailwind, and Contentful !
        </p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
