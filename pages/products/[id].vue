<template>
  <div>
    <Head>
      <Title> Nuxt Dojo | {{ product.title }} </Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
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
