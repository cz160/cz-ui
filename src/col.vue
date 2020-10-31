<template>
  <div
    :class="colClass"
    :style="colStyle"
  >
      <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.col {
  width: 50%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
<script>
export default {
  name: "cz-col",
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRigth: this.gutter / 2 + "px",
      };
    },
    colClass() {
      return [`col col-${this.span} offset && offset-${this.offset}`];
    },
  },
};
</script>