import Vue from 'vue';
import Button from './button';
import ButtonGroup from './button-group';
import Icon from './icon';

Vue.component('cz-button-group', ButtonGroup);
Vue.component('cz-button', Button);
Vue.component('cz-icon', Icon);

new Vue({
    el: '#app',
    data:{
        loading1:false,
    }
})