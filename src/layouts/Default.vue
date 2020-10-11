<template>
  <div>
    <header class="md:flex md:items-centers 
    md:justify-around p-4 shadow-lg md:pb-4 bg-darkgray">
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
              py-2 hover:text-darkgray md:border-none md:p-0"
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
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
