import ButtonComponent from './button.vue';

let zfButton = {
    install(Vue){
        Vue.component('zf-button',ButtonComponent);
    }
}
export default zfButton;