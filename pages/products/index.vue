<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
});
useHead({
  title: `Nuxt Dojo | Merch`,
  meta: [{ name: 'description', content: 'Nuxt Dojo Merch' }],
});

const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
