<template>
  <div
    class="row"
    :class="rowClass"
    :style="rowStyle"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.justify-start{
    justify-content: flex-start;
  }
   &.justify-end{
    justify-content: flex-end;
  }
   &.justify-center{
    justify-content: center;
  }
}
</style>
<script>
export default {
  name: "cz-row",
  data(){
    return {
      justifyValue: ['start','end','center']
    }
  },
  props: {
    gutter: {
      type: [Number, String],
    },
    justify:{
      type:String,
      validator(value){
        return ['start','end','center'].includes(value)
      }
    }
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
    rowClass() {
      const { justify } = this;
      return [ justify && `justify-${justify}` ]
    },
  },
};
</script>