import Vue from 'vue';
import Button from './button';
import Icon from './icon';

Vue.component('cz-button', Button);
Vue.component('cz-icon', Icon);

new Vue({
    el: '#app'
})