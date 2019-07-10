import inputDateComponent from './inputDate.vue';
let zfDatePicker = {
    install(Vue){
        Vue.component('zf-picker',inputDateComponent);
    }
}
export default zfDatePicker;