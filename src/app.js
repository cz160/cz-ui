import Vue from 'vue';
import Button from './button';
import ButtonGroup from './button-group';
import Icon from './icon';
import Input from './input';
import Row from './row';
import Col from './col';

Vue.component('cz-button-group', ButtonGroup);
Vue.component('cz-button', Button);
Vue.component('cz-icon', Icon);
Vue.component('cz-input', Input);
Vue.component('cz-row', Row);
Vue.component('cz-col', Col);

new Vue({
    el: '#app',
    data:{
        loading1:false,
        inputValue:'',
    },
    methods:{
        inputChange(e){
            console.log('222',e);
        },
        upDataInputValue(){
            this.inputValue = '我被修改辣';
        }
    }
})