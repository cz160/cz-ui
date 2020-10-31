<template>
  <div
    class="row"
    :style="rowStyle"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
<script>
export default {
  name: "cz-row",
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRigth: -this.gutter / 2 + "px",
      };
    },
  },
};
</script>