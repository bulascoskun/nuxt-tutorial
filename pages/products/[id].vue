<template>
  <ProductDetails :product="product" />
</template>

<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

definePageMeta({
  layout: 'products',
});

const { data: product } = await useFetch(uri);
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  });
}
</script>

<style lang="scss" scoped></style>
