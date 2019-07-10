import ButtonComponent from './input.vue';

let zfButton = {
    install(Vue){
        Vue.component('zf-input',ButtonComponent);
    }
}
export default zfButton;