<template>
  <button class="cz-button" :class="{[`icon-${iconPosition}`]:true}">
    <cz-icon :name="icon"></cz-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props:{
    icon:{},
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        const valueList = ['left','right'];
        return valueList.includes(value);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.cz-button {
  font: inherit;
  padding: 0 .7em;
  height: var(--button-height);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-hover-color);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  >.content{
    order: 2;
  }
  >.icon{
    order: 1;
    margin-right: .1em;
  }
  &.icon-right{
    >.content{
      order: 1;
    }
    >.icon{
      order: 2;
      margin-left: .1em;
      margin-right: 0;
    }
  }
}
</style>