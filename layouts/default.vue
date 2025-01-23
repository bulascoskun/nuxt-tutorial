<template>
  <div>
    <NuxtLoadingIndicator :throttle="0" />
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold"> Nuxt Dojo </NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about"> About </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hello"> Hello </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/data-fetching"> Data Fetching </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn"> Products </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- page -->
    <div class="container mx-auto p-4">
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
