<template>
  <div>
    <h2>Hello</h2>
    <p>
      {{ $sayHello('Emrecan') }}
    </p>
  </div>
</template>

<script setup>
const { $sayHello } = useNuxtApp();
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
