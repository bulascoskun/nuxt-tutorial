<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid qui
      blanditiis quam aliquam! Blanditiis sapiente totam assumenda soluta optio
      sint?
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: 'products',
});
</script>

<style lang="scss" scoped></style>
