<template>
  <button 
    class="cz-button" 
    :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')"
  >
    <cz-icon v-if="loading" class="loading icon" name="loading"></cz-icon>
    <cz-icon v-if="!loading" :name="icon"></cz-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props:{
    icon:{},
    loading:{
      type:Boolean,
      default:false,
    },
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
@keyframes spin{
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
}
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
  .loading{
    animation:spin 2s infinite linear;
  }
}
</style>