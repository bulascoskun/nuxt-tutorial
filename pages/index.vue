<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde
      animi dolorem perferendis minima nostrum praesentium repellendus, eos ab
      enim?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime hic
      cumque ipsum reprehenderit eligendi magni voluptates? Debitis optio error
      quia?
    </p>
  </div>
</template>

<script setup>
const { sayHello } = useUtils('');
sayHello();
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
