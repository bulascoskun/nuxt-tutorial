<template>
  <section class="flex flex-col gap-4">
    <div class="card p-8 text-center">
      <div class="text-center font-bold text-xl">useFetch</div>
      <hr class="my-4" />
      <div>
        {{ fetchData.data }}
      </div>
    </div>

    <div class="card p-8 text-center">
      <div class="text-center font-bold text-xl">$fetch</div>
      <hr class="my-4" />
      <div>
        {{ dollarData }}
      </div>
    </div>

    <div class="card p-8 text-center">
      <div class="text-center font-bold text-xl">useAsyncData</div>
      <hr class="my-4" />
      <div>
        {{ asyncData.data }}
      </div>
    </div>
  </section>
</template>

<script setup>
// useFetch, $fetch, useAsyncData
// Best to use: useFetch
const fetchData = await useFetch(
  `https://jsonplaceholder.typicode.com/todos/1`
);
const dollarData = await $fetch(`https://jsonplaceholder.typicode.com/todos/2`);
const asyncData = await useAsyncData('key', () =>
  $fetch(`https://jsonplaceholder.typicode.com/todos/3`)
);
</script>

<style lang="scss" scoped></style>
