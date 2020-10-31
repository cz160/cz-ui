<template>
  <div :class="colClass" :style="colStyle">
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

  @media (max-width: 576px) {
    // 手机
    $class-prefix: phone-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: phone-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    // 平板
    $class-prefix: ipad-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: ipad-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    // 窄pc
    $class-prefix: narrowPc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: narrowPc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    // pc
    $class-prefix: pc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    // 宽pc
    $class-prefix: widePc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: widePc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
<script>
const validator = (value,name) => {
  let isPass =  Object.keys(value).every(key=>{
    return ['span','offset'].includes(key);
  })
  if(!isPass){
    
  }
  return isPass;
}
export default {
  name: "cz-col",
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
    phone:{
      type: Object,
      validator:(value)=>validator(value,'phone'),
    },
    ipad:{
      type: Object,
      validator:(value)=>validator(value,'ipad'),
    },
    narrowPc:{
      type: Object,
      validator:(value)=>validator(value,'narrowPc'),
    },
    pc:{
      type: Object,
      validator:(value)=>validator(value,'pc'),
    },
    widePc:{
      type: Object,
      validator:(value)=>validator(value,'widePc'),
    }
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
      const { span,offset,phone,ipad,narrowPc,pc,widePc } = this;
      return [
        `col col-${span}`,
        offset && `offset-${offset}`,
        phone.span && `phone-col-${phone.span}`, 
        phone.offset && `phone-col-${phone.offset}`, 
        ipad.span && `ipad-col-${ipad.span}`, 
        ipad.offset && `ipad-col-${ipad.offset}`, 
        narrowPc.span && `narrowPc-col-${narrowPc.span}`, 
        narrowPc.offset && `narrowPc-col-${narrowPc.offset}`, 
        pc.span && `pc-col-${pc.span}`, 
        pc.offset && `pc-col-${pc.offset}`, 
        widePc.span && `widePc-col-${widePc.span}`, 
        widePc.offset && `widePc-col-${widePc.offset}`, 
      ];
    },
  },
};
</script>