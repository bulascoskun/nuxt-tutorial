<template>
  <div>
    <header>
      <nav>
        <ul>
          <NuxtLink to="/"> Nuxt Dojo </NuxtLink>
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
      </nav>
    </header>

    <!-- page -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
