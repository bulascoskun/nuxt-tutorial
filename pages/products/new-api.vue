<template>
  <div>
    {{ productsList }}
  </div>
</template>

<script setup>
const { $api } = useNuxtApp();

const {
  data: productsList,
  pending,
  error,
} = await $api.products.getProducts();
</script>

<style lang="scss" scoped></style>
