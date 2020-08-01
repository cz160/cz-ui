<template>
    <div class="warpper">
        <input 
          :type="type"
          :placeholder="placeholder"
          :value="value"
          :disabled="disabled"
          :readonly="readonly"
          @change="$emit('change',$event.target.value)"
          @input="$emit('input',$event.target.value)"
          @focus="$emit('focus',$event.target.value)"
          @blur="$emit('blur',$event.target.value)"
        >
    </div>
</template>
<script>
import Icon from './icon';
export default {
    name:'cz-input',
    components:{
        Icon,
    },
    props:{
        type:String,
        placeholder:String,
        value:String,
        disabled:{
            type:Boolean,
            default:false,
        },
        readonly:{
            type:Boolean,
            default:false,
        }
    }
}
</script>
<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $font-size:12px;
    $box-shadow-color:rgb(0,0,0,0.5);
    .warpper{
        font-size: $font-size;
        display: inline-block;
        >input{
            height: $height;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;
            outline: none;
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }
            &[disabled],&[readonly]{
                border-color: #e6e7eb;
                color: #e0e0e0;
                cursor: not-allowed;
            }
        }
    }
</style>