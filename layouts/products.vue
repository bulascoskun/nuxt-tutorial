<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products"> Nuxt Dojo Merch </NuxtLink>
      </nav>
    </header>

    <!-- page -->
    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li>
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about"> About </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products"> Products </NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
