<template>
  <div class="container">
    <section class="part-one">
      <PartOne />
    </section>

    <section class="part-two margin-top-ten">
      <PartTwo />
    </section>

    <section class="part-three margin-top-twenty">
      <PartThree />
    </section>

    <section class="part-four margin-top-ten">
      <PartFour />
    </section>
  </div>
</template>

<script>
import PartOne from './components/PartOne.vue'
import PartTwo from './components/PartTwo.vue'
import PartThree from './components/PartThree.vue'
import PartFour from './components/PartFour.vue'

export default {
  components: {
    PartOne,
    PartTwo,
    PartThree,
    PartFour
  }
}
</script>

<style lang="less" scoped>
.container {
  font-size: 1.5rem;
  // border: 1px solid red;
}

.part-one, .part-two, .part-three, .part-four {
  // border: 1px solid blue;
}
</style>
