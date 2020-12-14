<template>
  <div class="container">
    <section class="part-one">
      <PartOne />
    </section>

    <section class="part-two margin-top-ten">
      <PartTwo />
    </section>
  </div>
</template>

<script>
import PartOne from './components/PartOne.vue'
import PartTwo from './components/PartTwo.vue'

export default {
  components: {
    PartOne,
    PartTwo
  }
}
</script>

<style lang="less" scoped>
.container {
  font-size: 1.5rem;
  border: 1px solid red;
}

.part-one {
  // border: 1px solid blue;
}

.part-two {
  // border: 1px solid blue;
}
</style>
