<script setup>
const { data } = await useFetch('api/todos/1', { server: false });
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>

<style lang="scss" scoped></style>
