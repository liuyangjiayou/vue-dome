import MenuList from './menuList.vue';

let zfMenu = {
    install(Vue){
        Vue.component('zf-menu',MenuList);
    }
}
export default zfMenu;