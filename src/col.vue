<template>
  <div :class="['col',colClass]" :style="colStyle">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.col {
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
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 577px){
    // 平板
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px){
    // 窄pc
    $class-prefix: col-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px){
    // pc
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    // 宽pc
    $class-prefix: col-widePc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-widePc-;
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
    console.error(`${name}属性只支持sapn offset属性`)
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
  methods:{
    createClasses(value,name=""){
      let array = [];
      if(!value) return [];
      if(value.span){ array.push(`col-${name}${value.span}`) }
      if(value.offset){ array.push(`offset-${name}-${value.offset}`) }  
      return array;
    }
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
      const createClasses = this.createClasses;
      return [
        ...createClasses({ span,offset }),
        ...createClasses(phone,'phone-'),
        ...createClasses(ipad,'ipad-'),
        ...createClasses(narrowPc,'narrowPc-'),
        ...createClasses(pc,'pc-'),
        ...createClasses(widePc,'widePc-'),
      ];
    },
  },
};
</script>